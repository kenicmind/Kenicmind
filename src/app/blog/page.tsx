'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/mock-data';

export default function BlogPage() {
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
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Design Insights</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on brand strategy, African creativity, design trends, and what makes
              intentional design matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`}>
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-accent/50"
                >
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.readTime}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Guide */}
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
              <h2 className="text-4xl font-bold tracking-tight">What We Write About</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our blog covers brand strategy, design trends, African creativity, and insights
                from our work with amazing clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  topic: 'Brand Strategy',
                  description: 'How strategic thinking drives better design decisions and business results.',
                  count: '12 articles',
                },
                {
                  topic: 'Design Trends',
                  description: 'Emerging trends in African and global design, and what they mean for your brand.',
                  count: '8 articles',
                },
                {
                  topic: 'Creative Excellence',
                  description: 'Insights on what makes design work, cultural authenticity, and intentional creativity.',
                  count: '15 articles',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border/40 bg-background p-8 space-y-3"
                >
                  <h3 className="text-xl font-semibold">{item.topic}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  <p className="text-xs text-accent font-medium pt-4">{item.count}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-b border-border/40 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">Stay Updated</h2>
              <p className="text-lg text-muted-foreground">
                Get design insights and brand strategy tips delivered to your inbox. We share ideas
                worth thinking about.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none"
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
