'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/mock-data';

export default function TestimonialsPage() {
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
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground">
              Words from the ambitious brands and leaders we've had the privilege to work with.
              Their success is our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border/40 bg-card p-8 space-y-6 flex flex-col"
              >
                {/* Quote */}
                <blockquote className="space-y-4 flex-1">
                  <p className="text-lg italic text-foreground">"{testimonial.content}"</p>
                </blockquote>

                {/* Author Info */}
                <div className="flex gap-4 items-start border-t border-border/40 pt-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold leading-tight">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Our Impact</h2>
              <p className="text-lg text-muted-foreground">
                Numbers that reflect our commitment to client success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                { stat: '50+', label: 'Projects Delivered' },
                { stat: '40+', label: 'Happy Clients' },
                { stat: '15', label: 'Years Combined Experience' },
                { stat: '100%', label: 'Client Satisfaction' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2 rounded-lg border border-accent/30 bg-accent/10 p-8"
                >
                  <p className="text-4xl font-bold text-accent">{item.stat}</p>
                  <p className="text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
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
              <h2 className="text-4xl font-bold tracking-tight">Why Clients Choose Kenicmind</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                It's not just about pretty designs. It's about strategic thinking, cultural
                authenticity, and real results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Strategic Expertise',
                  description: 'We understand brand strategy, market positioning, and how design drives business results.',
                },
                {
                  title: 'African Excellence',
                  description: 'We celebrate African creativity while meeting global standards. Authentic, never appropriative.',
                },
                {
                  title: 'Partnership Approach',
                  description: 'We work collaboratively with our clients, treating your success as our success.',
                },
                {
                  title: 'Comprehensive Systems',
                  description: 'We deliver complete brand systems, not just designs. Guidelines that empower your team.',
                },
                {
                  title: 'Proven Results',
                  description: 'Our clients see measurable impact: increased brand recognition, business growth, market leadership.',
                },
                {
                  title: 'Ongoing Support',
                  description: 'We don\'t just hand over work. We support your launch and remain available for guidance.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/40 bg-card p-8 space-y-3"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border/40 bg-accent/10 py-20 md:py-32">
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
                Ready to Become Our Next Success Story?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's start a conversation about your brand and explore how we can create similar
                impact for your business.
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
