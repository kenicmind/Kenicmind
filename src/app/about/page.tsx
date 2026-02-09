'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/mock-data';

export default function AboutPage() {
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
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                About Kenicmind Concept
              </p>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                We Design With Intention and Strategy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Kenicmind Concept is a premium brand design studio creating strategic, culturally-rooted
              creative work for African businesses and international brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Kenicmind Concept was founded on a simple belief: that creativity in Africa doesn't
                  need to follow Western templates. African brands have powerful, authentic stories to
                  tell, and they deserve design that honors their heritage while meeting global
                  standards.
                </p>
                <p>
                  We started because we saw talented African companies being underserved by design
                  studios that treated African aesthetics as exotic decoration rather than strategic
                  assets. We wanted to change that.
                </p>
                <p>
                  Today, we work with ambitious African businesses and international brands seeking
                  authentic African creative talent. Every project is guided by strategic thinking,
                  cultural authenticity, and a commitment to creating real business value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Kenicmind Concept Studio"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                These principles guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Strategic Thinking',
                  description:
                    "Design isn't decoration. We approach every project strategically—understanding your market, your challenges, your competitive landscape. The visual work flows from strategic insights.",
                },
                {
                  title: 'Cultural Authenticity',
                  description:
                    'We honor African heritage and context. Our work celebrates African creativity without appropriation, creating designs that feel genuinely rooted while remaining contemporary.',
                },
                {
                  title: 'Global Standards',
                  description:
                    'While rooted in African creativity, our work meets international quality expectations. African excellence means excellence anywhere in the world.',
                },
                {
                  title: 'Intentionality',
                  description:
                    'Every design choice has a reason. Color, typography, spacing, imagery—all are purposeful. This intentionality is what makes our work memorable and effective.',
                },
                {
                  title: 'Collaboration',
                  description:
                    'The best results come from deep collaboration. We listen, ask questions, and work closely with our clients to ensure our creative vision aligns with theirs.',
                },
                {
                  title: 'Continuous Growth',
                  description:
                    "The creative landscape evolves constantly. We stay curious, keep learning, and help our clients stay ahead of trends while maintaining timeless design principles.",
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
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We follow a strategic, collaborative process designed to uncover insights and create
                meaningful design work.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Discovery & Strategy',
                  description:
                    'We begin by understanding your brand story, market context, business objectives, and audience. Through workshops and research, we uncover the insights that shape everything that follows.',
                },
                {
                  step: 2,
                  title: 'Concept & Direction',
                  description:
                    'Based on our findings, we develop strategic design directions. We create mood boards, visual languages, and preliminary concepts that address your challenges while honoring your unique value.',
                },
                {
                  step: 3,
                  title: 'Design & Refinement',
                  description:
                    'We bring concepts to life through meticulous design work. Every element is crafted with intention, refined through iteration, tested with your feedback, and optimized for effectiveness.',
                },
                {
                  step: 4,
                  title: 'System & Documentation',
                  description:
                    'We deliver more than just designs. A comprehensive brand system and guidelines ensure consistency across all touchpoints and empower your team to grow the brand confidently.',
                },
                {
                  step: 5,
                  title: 'Launch & Support',
                  description:
                    'We support your launch and remain available for guidance as your brand enters the world. This is where strategy meets execution, and we ensure a successful transition.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 rounded-lg border border-border/40 bg-card p-8"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                    {item.step}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Words from the brands and leaders we've had the privilege to work with.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/40 bg-background p-8 space-y-4"
                >
                  <p className="text-lg italic text-foreground">"{testimonial.content}"</p>
                  <div className="flex gap-4 items-start pt-4 border-t border-border/40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
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
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to Partner With Us?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's explore how strategic, intentional design can transform your brand and grow your
                business.
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
