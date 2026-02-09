'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/mock-data';

export default function TeamPage() {
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
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Meet the Team</h1>
            <p className="text-xl text-muted-foreground">
              A collective of strategists, designers, and creative thinkers united by a mission: to
              build brand systems that communicate clearly, resonate authentically, and grow businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid gap-12 items-center ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:direction-rtl'}`}
              >
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium uppercase tracking-widest text-accent">
                      Team Member
                    </p>
                    <h2 className="text-4xl font-bold">{member.name}</h2>
                    <p className="text-xl text-secondary font-semibold">{member.role}</p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{member.bio}</p>
                  {/* Specialties */}
                  <div className="space-y-3 pt-4">
                    <p className="font-medium text-sm">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="aspect-square overflow-hidden rounded-lg bg-muted"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
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
              <h2 className="text-4xl font-bold tracking-tight">What Makes Our Team Special</h2>
              <p className="text-lg text-muted-foreground">
                More than just individual talents, we're united by shared values and a commitment to excellence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Diverse Perspectives',
                  description:
                    'Our team brings varied backgrounds and experiences, which makes our creative work richer and more thoughtful.',
                },
                {
                  title: 'Continuous Learning',
                  description:
                    'We stay curious, attend workshops, follow design trends, and constantly refine our craft.',
                },
                {
                  title: 'Client-Centric',
                  description:
                    "We genuinely care about our clients' success. Your growth is our success.",
                },
                {
                  title: 'Collaborative Spirit',
                  description:
                    'Great design comes from collaboration. We work together and with our clients to achieve the best results.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/40 bg-background p-8 space-y-3"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6 rounded-lg border border-accent/30 bg-accent/10 p-12"
          >
            <h3 className="text-3xl font-bold">Interested in Joining Us?</h3>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented designers, strategists, and creative thinkers who are
              passionate about African excellence. If you'd like to explore opportunities, get in touch.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">Send us your portfolio</Link>
            </Button>
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
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to Work With Our Team?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Let's collaborate and create something extraordinary for your brand.
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
