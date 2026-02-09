'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

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
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Let's Talk</h1>
            <p className="text-xl text-muted-foreground">
              Ready to build something great? We'd love to hear about your project, vision, and goals.
              Share your story, and let's explore how we can help bring your brand to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-border/40 bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="space-y-6 rounded-lg border border-accent/30 bg-accent/10 p-8 text-center">
                  <div className="text-4xl">✨</div>
                  <h3 className="text-2xl font-semibold">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and we'll get back to you within 24-48 hours.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Kofi Mensah"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="kofi@example.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Share your vision, challenges, goals, or anything else we should know..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We respond to all inquiries within 24-48 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a quick question or a comprehensive brief, we're here to listen and
                  help. There's no project too big or too small.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:hello@kenicmind.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      hello@kenicmind.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Accra, Ghana <br />
                      We work with clients globally
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="rounded-lg border border-border/40 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Expected Response Time:</span> We aim to
                  respond within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
