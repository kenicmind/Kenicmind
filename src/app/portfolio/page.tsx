'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { projects, type Project } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';

const categories: (Project['category'] | 'All')[] = [
  'All',
  'Branding',
  'Logo',
  'Print',
  'Digital',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Project['category'] | 'All'>('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Our Portfolio</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A curated collection of strategic brand design work across branding, identity, print, and
              digital platforms. Each project represents our commitment to intentional, purposeful
              creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border/40 bg-background py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border/40 text-foreground hover:border-accent/50 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <Link href={`/portfolio/${project.id}`}>
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-accent/50 hover:shadow-lg"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-muted-foreground">No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Have a Project in Mind?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Whether you're a startup looking for brand identity or an established business
                needing a refresh, let's talk about your vision.
              </p>
            </div>
            <Button asChild size="lg" className="group mx-auto bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Start a Conversation
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
