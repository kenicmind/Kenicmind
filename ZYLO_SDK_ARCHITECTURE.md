# Zylo SDK Architecture

> Documentation for the Zylo SDK system used across frontend and backend templates.

---

## Table of Contents

1. [Overview](#overview)
2. [SDK Packages](#sdk-packages)
3. [Frontend SDK (@zylo/sdk-react)](#frontend-sdk-zylosdk-react)
4. [Backend SDK (@zylo/sdk)](#backend-sdk-zylosdk)
5. [Authentication Flow](#authentication-flow)
6. [Frontend ↔ Backend Contract](#frontend--backend-contract)
7. [Security Model](#security-model)
8. [Building Auth UI](#building-auth-ui)

---

## Overview

The Zylo SDK provides a minimal, focused interface for multi-tenant authentication across frontend and backend applications. It uses Supabase Auth with HMAC-signed requests for secure JWT minting.

### Key Principles

- **Minimal surface area** - Auth operations only, no unnecessary abstractions
- **Direct control** - Build your own UI components using SDK functions
- **Protocol enforcement** - HMAC signing ensures secure JWT minting
- **Multi-tenant** - Project isolation via `project_id` in JWT claims

---

## SDK Packages

```
@zylo/sdk-react          # Frontend SDK (authService, ZyloProvider)
@zylo/sdk-react-native   # React Native SDK (authService, ZyloProvider)
@zylo/sdk                # Backend SDK (authServer, verifyAuth, requireAuth)
@zylo/sdk-shared         # Shared types and endpoint constants
```

---

## Frontend SDK (@zylo/sdk-react)

### Package Structure

```
@zylo/sdk-react/
├── services/
│   └── auth/
│       └── authService.ts    # signIn, signUp, signOut, etc.
├── providers/
│   ├── ZyloProvider.tsx      # Root provider with config
│   └── AuthContext.tsx       # Auth state context (optional)
└── index.ts                  # Main exports
```

### Exports

```typescript
// Services
export { authService, configureAuth, AuthServiceError } from '@zylo/sdk-react';

// Providers (optional - for reactive state)
export { ZyloProvider, useAuthContext } from '@zylo/sdk-react';

// Types (re-exported from @zylo/sdk-shared)
export type { ZyloAppUser, ZyloAuthSession } from '@zylo/sdk-react';
```

### Usage: Direct Service (Simple)

```typescript
import { authService, configureAuth } from '@zylo/sdk-react';

// Optional: configure API URL (defaults to relative URLs)
configureAuth({ apiUrl: 'https://api.myapp.com' });

// Sign in
const session = await authService.signIn(email, password);

// Sign up
const session = await authService.signUp(email, password, { displayName: 'John' });

// Sign out
await authService.signOut();

// Check auth state (sync, from localStorage)
const isLoggedIn = authService.isAuthenticated();
const token = authService.getAccessToken();

// Get session (async, with auto-refresh)
const session = await authService.getSession();
```

### Usage: React Context (Reactive State)

```tsx
// app/layout.tsx
import { ZyloProvider } from '@zylo/sdk-react';

const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  environment: 'development',
  features: { auth: { enabled: true } }
};

export default function RootLayout({ children }) {
  return (
    <ZyloProvider config={config}>
      {children}
    </ZyloProvider>
  );
}

// In components:
import { useAuthContext } from '@zylo/sdk-react';

function Profile() {
  const { user, isLoading, signOut } = useAuthContext();

  if (isLoading) return <Spinner />;
  if (!user) return <Redirect to="/login" />;

  return (
    <div>
      <p>Hello {user.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

---

## Backend SDK (@zylo/sdk)

### Package Structure

```
@zylo/sdk/
├── auth/
│   ├── authServer.ts        # signUp, signIn, verifyToken, etc.
│   └── verifyAuth.ts        # JWT verification + project check
├── rateLimit/
│   └── index.ts             # authRateLimit, apiRateLimit, strictRateLimit
└── index.ts                 # Main exports
```

### Exports

```typescript
// Auth operations (HMAC-signed calls to Edge Function)
export { authServer } from '@zylo/sdk';

// JWT verification (local, no network call)
export { verifyAuth } from '@zylo/sdk';

// Rate limiting
export { authRateLimit, apiRateLimit, strictRateLimit, rateLimit } from '@zylo/sdk';
```

### Usage: Auth Operations

```typescript
import { authServer } from '@zylo/sdk';

// In auth controller
export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await authServer.signIn({ email, password });
  res.json(result);
}

export async function signUp(req: Request, res: Response) {
  const { email, password, displayName } = req.body;
  const result = await authServer.signUp({ email, password, displayName });
  res.json(result);
}
```

### Usage: Protecting Routes

```typescript
import { requireAuth } from '../middleware/requireAuth.js';
import { apiRateLimit } from '@zylo/sdk';

router.get('/api/items', apiRateLimit, requireAuth, async (req, res) => {
  const { zyloUser, supabase } = req.auth!;

  // supabase client is RLS-authenticated
  const { data } = await supabase.from('items').select('*');

  res.json({ success: true, data });
});
```

### Auth Context (req.auth)

```typescript
interface AuthContext {
  user: User;               // Supabase User object
  zyloUser: ZyloAppUser;    // Formatted user with projectId
  projectId: string;        // Verified project ID
  supabase: SupabaseClient; // RLS-authenticated client
}
```

---

## Authentication Flow

### Sign Up / Sign In Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│  Frontend   │────▶│   Backend   │────▶│ Edge Func   │
│             │     │ authService │     │  authServer │     │ (Supabase)  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                    │                   │                   │
      │ 1. Submit form     │                   │                   │
      │───────────────────▶│                   │                   │
      │                    │ 2. POST /api/auth │                   │
      │                    │───────────────────▶                   │
      │                    │                   │ 3. HMAC sign      │
      │                    │                   │───────────────────▶
      │                    │                   │                   │
      │                    │                   │ 4. Verify HMAC,   │
      │                    │                   │    create user,   │
      │                    │                   │    return JWT     │
      │                    │                   │◀───────────────────
      │                    │ 5. Return JWT     │                   │
      │                    │◀───────────────────                   │
      │ 6. Store in        │                   │                   │
      │    localStorage    │                   │                   │
      │◀───────────────────│                   │                   │
```

### Protected API Call Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Browser   │────▶│  Frontend   │────▶│   Backend   │
│             │     │             │     │ requireAuth │
└─────────────┘     └─────────────┘     └─────────────┘
      │                    │                   │
      │ 1. API call with   │                   │
      │    Bearer token    │                   │
      │───────────────────▶│                   │
      │                    │ 2. Forward to API │
      │                    │───────────────────▶
      │                    │                   │
      │                    │ 3. requireAuth:   │
      │                    │   - Verify JWT    │
      │                    │   - Check project │
      │                    │   - Call handler  │
      │                    │                   │
      │                    │ 4. Return data    │
      │                    │◀───────────────────
      │ 5. Display data    │                   │
      │◀───────────────────│                   │
```

Key points:
- Frontend calls backend API (not Edge Function directly)
- Edge Function only used for JWT minting (signup/signin)
- Protected routes use LOCAL JWT verification (no network call)
- `project_id` in JWT `app_metadata` prevents cross-project access

---

## Frontend ↔ Backend Contract

### Auth Endpoints

| Frontend Service | Backend Endpoint | Description |
|-----------------|------------------|-------------|
| `authService.signIn(email, password)` | `POST /api/v1/auth/signin` | User login |
| `authService.signUp(email, password)` | `POST /api/v1/auth/signup` | User registration |
| `authService.signOut()` | `POST /api/v1/auth/signout` | User logout |
| `authService.getSession()` | `GET /api/v1/auth/session` | Verify session |
| `authService.refreshSession()` | `POST /api/v1/auth/refresh` | Refresh JWT |
| `authService.sendPasswordResetEmail()` | `POST /api/v1/auth/reset-password` | Password reset |

### Response Format

All SDK endpoints return a consistent response format:

```typescript
// Success
{
  success: true,
  session?: ZyloAuthSession,
  user?: ZyloAppUser,
  message?: string
}

// Error
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: any
  }
}
```

---

## Security Model

### HMAC Signing

1. Backend has `ZYLO_PROJECT_SECRET` (from Firestore)
2. All auth requests to Edge Function are HMAC-SHA256 signed
3. Edge Function verifies signature before minting JWT
4. JWTs contain `project_id` in `app_metadata`

### JWT Verification

```typescript
// In requireAuth middleware:
1. Extract JWT from Authorization header
2. Verify signature via supabase.auth.getUser(token)
3. Extract project_id from app_metadata
4. Compare to ZYLO_PROJECT_ID env var
5. Reject if mismatch (prevents cross-project access)
```

### Environment Variables

**Backend (.env)**
```
ZYLO_PROJECT_ID=<project-id>
ZYLO_PROJECT_SECRET=<from-firestore-secrets>
SUPABASE_URL=<supabase-project-url>
SUPABASE_ANON_KEY=<supabase-anon-key>
```

**Frontend (.env.local)**
```
NEXT_PUBLIC_API_URL=<backend-api-url>
NEXT_PUBLIC_PROJECT_ID=<project-id>
```

---

## Building Auth UI

The SDK provides auth functions - you build the UI. Here's a typical login form:

```tsx
'use client';
import { useState } from 'react';
import { authService } from '@zylo/sdk-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.signIn(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
```

### Session Storage

The SDK automatically handles session storage:

- Session stored in `localStorage` under `zylo_session`
- Access token stored under `zylo_access_token`
- Refresh token stored under `zylo_refresh_token`
- Auto-refresh occurs when session is within 5 minutes of expiry

### Making Authenticated API Calls

```typescript
import { authService } from '@zylo/sdk-react';

async function fetchProtectedData() {
  const response = await fetch('/api/items', {
    headers: {
      Authorization: `Bearer ${authService.getAccessToken()}`,
    },
  });
  return response.json();
}
```

---

## Rate Limiting

Built-in rate limiters:

| Preset | Window | Max | Use Case |
|--------|--------|-----|----------|
| `authRateLimit` | 15 min | 10 | Login, signup, password reset |
| `apiRateLimit` | 1 min | 100 | General API endpoints |
| `strictRateLimit` | 1 min | 5 | Sensitive operations |

Response when rate limited (HTTP 429):

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later.",
    "retryAfter": 45
  }
}
```
