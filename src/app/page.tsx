'use client';

/**
 * Root Page
 *
 * Landing page for the application.
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Zap, Shield, Code } from 'lucide-react';

export default function RootPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Next.js Boilerplate
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Production-ready starter with TypeScript, Tailwind CSS, and Radix UI
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Fast Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Clone and start building in minutes with everything pre-configured
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Next.js 15, TypeScript, Tailwind CSS, and the latest tools
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Error boundaries, loading states, and production patterns included
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">Developer Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Custom hooks, utilities, and components to accelerate development
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
