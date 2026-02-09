'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navItems = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Team', href: '/team' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="relative h-8 w-8 md:h-10 md:w-10">
            <Image
              src="/images/mockups/projectlogo.png"
              alt="Kenicmind Concept"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-xl font-semibold tracking-tight text-foreground sm:inline">
            Kenicmind
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/contact">Let's Talk</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border/40 bg-card md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="mt-2 w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
