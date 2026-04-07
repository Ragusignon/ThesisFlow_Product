import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Sparkles, Calendar } from 'lucide-react';

export default function Updates({ onNavigate }: any) {
  const updates = [
    {
      date: 'January 10, 2026',
      version: 'v1.0.0',
      title: 'Official Launch - Production Ready',
      description: 'ThesisFlow is now officially launched and production-ready for institutions worldwide.',
    },
    {
      date: 'December 15, 2025',
      version: 'v0.9.5',
      title: 'Final Beta Improvements',
      description: 'Final polish before production launch with enhanced security and performance optimizations.',
    },
    {
      date: 'November 1, 2025',
      version: 'v0.9.0',
      title: 'Enhanced Collaboration Features',
      description: 'New real-time collaboration tools, improved commenting system, and enhanced notification preferences.',
    },
    {
      date: 'October 15, 2025',
      version: 'v0.8.5',
      title: 'Performance Improvements',
      description: 'Major performance optimizations, faster load times, and improved search functionality.',
    },
    {
      date: 'October 1, 2025',
      version: 'v0.8.0',
      title: 'Beta Launch',
      description: 'Initial beta release with core thesis management features and AI-powered search.',
    },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="updates">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Product Updates</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-6">
              What's <span className="bg-gradient-to-r from-[var(--text-brand)] to-[var(--text-brand)] bg-clip-text text-transparent">New</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)]">
              Latest features, improvements, and bug fixes.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {updates.map((update, index) => (
              <motion.div
                key={update.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
                  <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-secondary)]">{update.date}</span>
                  <span style={{ fontSize: 'var(--text-sm)' }} className="px-3 py-1 bg-[var(--text-brand)]/10 text-[var(--text-brand)] rounded-full">{update.version}</span>
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">{update.title}</h3>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]">{update.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}