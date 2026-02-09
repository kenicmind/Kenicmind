'use client';

/**
 * Layout Protection wrapper
 *
 * Placeholder - auth protection will be injected at runtime.
 */

interface LayoutProtectionProps {
  children: React.ReactNode;
}

export function LayoutProtection({ children }: LayoutProtectionProps) {
  // TODO: Auth protection will be injected at runtime
  return <>{children}</>;
}
