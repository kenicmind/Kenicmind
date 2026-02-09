'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { projects } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/portfolio" className="hover:text-foreground">
                Portfolio
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{project.category}</span>
            </div>

            {/* Project Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                {project.category}
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">{project.client}</p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium">{project.year}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border/40 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto overflow-hidden rounded-lg px-4 py-12 md:py-20"
        >
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Case Study Content */}
      <section className="border-b border-border/40 bg-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl space-y-16">
            {/* Challenge Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Challenge</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight">The Problem We Solved</h2>
              </div>
              <p className="text-lg leading-relaxed text-foreground">{project.challenge}</p>
            </motion.div>

            <Separator className="bg-border/40" />

            {/* Solution Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Solution</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight">Our Strategic Approach</h2>
              </div>
              <p className="text-lg leading-relaxed text-foreground">{project.solution}</p>
            </motion.div>

            <Separator className="bg-border/40" />

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Results</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight">The Impact</h2>
              </div>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 text-lg text-foreground"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-medium text-accent">
                      {index + 1}
                    </span>
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery.length > 0 && (
        <section className="border-b border-border/40 bg-card py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold tracking-tight">Project Gallery</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-b border-border/40 bg-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-bold tracking-tight">Related Projects</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedProjects.map((relatedProject, index) => (
                  <Link href={`/portfolio/${relatedProject.id}`}>
                    <motion.div
                      key={relatedProject.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-accent/50"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3">
                          {relatedProject.category}
                        </span>
                        <h3 className="font-semibold group-hover:text-accent transition-colors">
                          {relatedProject.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
                Inspired by What You See?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's create something equally powerful for your brand. Start a conversation today.
              </p>
            </div>
            <Button asChild size="lg" className="group mx-auto bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Let's Work Together
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
