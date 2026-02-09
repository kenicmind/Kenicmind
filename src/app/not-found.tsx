'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-2xl mx-auto"
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <p className="text-9xl font-bold text-accent/20">404</p>
              <p className="absolute inset-0 flex items-center justify-center text-6xl font-bold">
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔍
                </motion.span>
              </p>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Page Not Found</h1>
              <p className="text-xl text-muted-foreground">
                The page you're looking for seems to have wandered off. It might have been moved or
                deleted. Let's get you back on track.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </motion.div>

            {/* Suggestions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-12 border-t border-border/40 space-y-6"
            >
              <p className="text-sm text-muted-foreground">Popular pages</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}