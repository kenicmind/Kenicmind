'use client';

import Link from 'next/link';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  'Work': [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Process', href: '/process' },
  ],
  'About': [
    { label: 'Our Story', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
  'Resources': [
    { label: 'Blog', href: '/blog' },
    { label: 'Design Insights', href: '/blog' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@kenicmind.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand Info */}
          <div className="md:col-span-4 lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">Kenicmind Concept</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Strategic brand design for African businesses and international clients seeking authentic, culturally-rooted creative excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-colors hover:bg-accent/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-accent" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Get in Touch</h4>
            <Link
              href="/contact"
              className="inline-block text-sm text-accent transition-colors hover:text-accent/80"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-12 bg-border/40" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Kenicmind Concept. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
