'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { blogPosts } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <section className="border-b border-border/40 bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{post.category}</span>
            </div>

            {/* Title and Meta */}
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                {post.category}
              </span>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{post.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b border-border/40 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto overflow-hidden rounded-lg px-4 py-12 md:py-20"
        >
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="border-b border-border/40 bg-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert max-w-3xl mx-auto space-y-6 dark"
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed prose-headings:text-foreground prose-headings:font-bold prose-a:text-accent prose-strong:text-foreground prose-code:text-accent">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/#/g)!.length;
                  const text = paragraph.replace(/^#+\s/, '');
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {level === 1 || level === 2 ? (
                        <h2 className="text-3xl font-bold mt-8 mb-4">{text}</h2>
                      ) : level === 3 ? (
                        <h3 className="text-2xl font-bold mt-6 mb-3">{text}</h3>
                      ) : (
                        <h4 className="text-xl font-bold mt-4 mb-2">{text}</h4>
                      )}
                    </motion.div>
                  );
                }
                if (paragraph.startsWith('-') || paragraph.startsWith('•')) {
                  const items = paragraph.split('\n').filter((item) => item.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">
                          {item.replace(/^[-•]\s/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="border-b border-border/40 bg-card py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg border border-border/40 bg-background p-8 space-y-4"
          >
            <p className="font-semibold text-lg">About the author</p>
            <p className="text-muted-foreground">
              {post.author} is a strategic thinker and creative director at Kenicmind Concept,
              passionate about building brands that communicate clearly and create real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-b border-border/40 bg-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-bold tracking-tight">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {relatedPosts.map((relatedPost, index) => (
                  <Link href={`/blog/${relatedPost.id}`}>
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-card transition-all hover:border-accent/50"
                    >
                      <div className="aspect-video overflow-hidden bg-muted">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={600}
                          height={340}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{relatedPost.date}</p>
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
                Ready to Apply These Ideas to Your Brand?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Strategic thinking + intentional design = real results. Let's talk about your project.
              </p>
            </div>
            <Button asChild size="lg" className="group mx-auto bg-accent hover:bg-accent/90">
              <Link href="/contact">
                Let's Collaborate
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
