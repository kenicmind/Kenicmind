'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { projects } from '@/lib/mock-data';
import Image from 'next/image';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-card/30 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          <motion.div
            className="space-y-8 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.div variants={itemVariants} className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                ✨ African Creative Excellence
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                Creativity Here Is
                <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                  Intentional
                </span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl md:max-w-2xl md:text-xl">
                Every design tells a story and adds real value to your brand. We build brand systems that communicate clearly, resonate authentically, and grow businesses.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="group bg-accent hover:bg-accent/90">
                <Link href="/portfolio">
                  View Our Work
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-3xl" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 md:space-y-16"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Featured Work</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A selection of recent projects where strategy met creativity. Each one tells a story of intentional design creating real business impact.
              </p>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Link href={`/portfolio/${project.id}`}>
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-accent/50 hover:shadow-lg"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={400}
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
                      <h3 className="mb-2 text-lg font-semibold group-hover:text-accent">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* View All CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/portfolio">
                  View Complete Portfolio
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Kenicmind Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Why Kenicmind Concept</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                We're not just designers—we're strategic brand builders who understand African markets and global standards.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Strategic Thinking',
                  description: 'We don\'t just design visuals. We build brand systems that solve real business challenges and create competitive advantage.',
                },
                {
                  title: 'Cultural Authenticity',
                  description: 'We honor African heritage and context in everything we create. Design that feels genuine, never appropriative.',
                },
                {
                  title: 'Global Standards',
                  description: 'While rooted in African creativity, our work meets international quality expectations and works seamlessly across markets.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4 rounded-lg border border-border/40 bg-background p-8"
                >
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border/40 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ready to Build Something Great?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's start a conversation about your brand. We'll explore your vision, understand your market, and create something truly exceptional.
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
