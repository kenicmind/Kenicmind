'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { processSteps } from '@/lib/mock-data';

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Our Design Process</h1>
            <p className="text-xl text-muted-foreground">
              Strategic, collaborative, and intentional. Here's how we approach every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid gap-8 md:grid-cols-[120px_1fr] items-start">
                  {/* Step Number and Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-4xl">
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-accent">Step {step.number}</p>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="pt-2 space-y-4">
                    <h3 className="text-3xl font-bold">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-32 h-16 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Process */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Why This Process?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our process is designed to ensure strategic alignment, creative excellence, and
                meaningful results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Strategic Foundation',
                  description:
                    'By investing time in discovery and strategy, we ensure all design decisions are rooted in business objectives and market insights.',
                },
                {
                  title: 'Collaboration',
                  description:
                    "We work closely with you throughout the process. Your feedback shapes our direction, ensuring the final design aligns perfectly with your vision.",
                },
                {
                  title: 'Comprehensive Delivery',
                  description:
                    "We don't just hand over designs. We create systems, guidelines, and documentation that empower your team to grow the brand confidently.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/40 bg-background p-8 space-y-4"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Project Timeline</h2>
              <p className="text-lg text-muted-foreground">
                Our typical project runs 6-12 weeks depending on scope and complexity.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { phase: 'Discovery & Strategy', duration: 'Weeks 1-2', details: 'Workshops, research, strategy development' },
                { phase: 'Design & Refinement', duration: 'Weeks 3-8', details: 'Concepts, iterations, client feedback' },
                { phase: 'Systems & Launch', duration: 'Weeks 9-12', details: 'Final deliverables, documentation, handoff' },
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-accent/30 bg-accent/10 p-6 space-y-3 text-center"
                >
                  <p className="text-sm font-medium text-accent">{item.duration}</p>
                  <h4 className="text-lg font-semibold">{item.phase}</h4>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's walk through this process together. Contact us to discuss your project and timeline.
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
