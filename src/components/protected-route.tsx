'use client';

/**
 * Protected Route Component
 *
 * Placeholder - auth protection will be injected at runtime.
 */

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: Auth protection will be injected at runtime
  return <>{children}</>;
}
