import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { HelpCircle, Search, Book, MessageCircle, FileQuestion, Zap, Users, Shield, Settings, GraduationCap, FileCheck, ArrowRight } from 'lucide-react';

export default function HelpCenter({ onNavigate }: any) {
  const categories = [
    { 
      icon: GraduationCap, 
      title: 'Getting Started', 
      articles: 12,
      description: 'Learn the basics and set up your account',
      topics: ['Account Setup', 'First Steps', 'Quick Start Guide']
    },
    { 
      icon: Zap, 
      title: 'Core Features', 
      articles: 24,
      description: 'Master the essential tools and workflows',
      topics: ['Thesis Submission', 'Version Control', 'Templates']
    },
    { 
      icon: MessageCircle, 
      title: 'Collaboration', 
      articles: 18,
      description: 'Work effectively with advisors and reviewers',
      topics: ['Sharing', 'Feedback', 'Comments']
    },
    { 
      icon: Users, 
      title: 'User Roles', 
      articles: 15,
      description: 'Understanding permissions and responsibilities',
      topics: ['Students', 'Advisors', 'Administrators']
    },
    { 
      icon: FileCheck, 
      title: 'Review & Approval', 
      articles: 20,
      description: 'Navigate the examination and approval process',
      topics: ['Submissions', 'Reviews', 'Approvals']
    },
    { 
      icon: Settings, 
      title: 'Administration', 
      articles: 16,
      description: 'Institutional setup and management',
      topics: ['Settings', 'Workflows', 'Integration']
    },
    { 
      icon: Shield, 
      title: 'Security & Privacy', 
      articles: 10,
      description: 'Data protection and compliance guidelines',
      topics: ['GDPR', 'Access Control', 'Encryption']
    },
    { 
      icon: FileQuestion, 
      title: 'Troubleshooting', 
      articles: 22,
      description: 'Solutions to common issues and errors',
      topics: ['Common Issues', 'Error Messages', 'Best Practices']
    },
  ];

  const popularArticles = [
    { title: 'How to submit your first thesis', category: 'Getting Started', readTime: '5 min' },
    { title: 'Setting up institutional workflows', category: 'Administration', readTime: '8 min' },
    { title: 'Managing reviewer feedback', category: 'Collaboration', readTime: '6 min' },
    { title: 'Understanding user permissions', category: 'User Roles', readTime: '4 min' },
    { title: 'Configuring SSO authentication', category: 'Security & Privacy', readTime: '10 min' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="help-center">
      <div className="pt-32 pb-20">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Help Center</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-6">
              How Can We <span className="bg-gradient-to-r from-[var(--text-brand)] to-[var(--text-brand)] bg-clip-text text-transparent">Help You?</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-8">
              Search our knowledge base or browse categories below
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search for articles, guides, and FAQs..."
                style={{ fontSize: 'var(--text-base)' }}
                className="w-full pl-12 pr-4 py-4 border-2 border-[var(--border-primary)] bg-[var(--card)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent outline-none transition-all placeholder:text-[var(--text-tertiary)]"
              />
            </div>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'var(--text-xl)' }}
            className="text-[var(--text-primary)] mb-8"
          >
            Browse by Category
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--card)] border-2 border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--border-brand-subtle)] hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--text-brand)]/10 to-[var(--text-brand)]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--text-brand)] transition-all">
                  <category.icon className="w-6 h-6 text-[var(--text-brand)] group-hover:text-white transition-all" />
                </div>
                <h3 style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-primary)] mb-2">{category.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-secondary)] mb-3">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.topics.map(topic => (
                    <span key={topic} style={{ fontSize: 'var(--text-xs)' }} className="px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded">
                      {topic}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: 'var(--text-xs)' }} className="text-[var(--text-brand)] group-hover:underline">{category.articles} articles</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-8">Popular Articles</h2>
            <div className="bg-[var(--card)] border-2 border-[var(--border-primary)] rounded-2xl overflow-hidden">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 border-b border-[var(--border-primary)] last:border-b-0 hover:bg-[var(--bg-secondary)] cursor-pointer group transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-primary)] mb-1 group-hover:text-[var(--text-brand)] transition-colors">{article.title}</h3>
                      <div style={{ fontSize: 'var(--text-sm)' }} className="flex items-center gap-3 text-[var(--text-secondary)]">
                        <span style={{ fontSize: 'var(--text-xs)' }} className="px-2 py-0.5 bg-[var(--text-brand)]/10 text-[var(--text-brand)] rounded">{article.category}</span>
                        <span>·</span>
                        <span>{article.readTime} read</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--text-brand)] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Support CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-3xl p-8 lg:p-12 text-center"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[var(--text-brand)]" />
            <h2 style={{ fontSize: 'var(--text-2xl)' }} className="lg:text-3xl text-[var(--text-primary)] mb-3">Still Need Help?</h2>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-6">
              Our support team is here to assist you with any questions
            </p>
            <button
              onClick={() => onNavigate('contact-support')}
              style={{ fontSize: 'var(--text-base)' }}
              className="px-8 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}