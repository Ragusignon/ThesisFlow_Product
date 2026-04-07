import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { BookOpen, ArrowLeft, Clock, User, Share2, Download, ChevronRight } from 'lucide-react';
import { getDocumentationBySlug, getPublishedDocumentation, type DocumentationPage } from './utils/documentationData';

interface DocumentationPageProps {
  onNavigate: (page: string) => void;
  slug: string;
}

export default function DocumentationPageView({ onNavigate, slug }: DocumentationPageProps) {
  const [doc, setDoc] = useState<DocumentationPage | null>(null);
  const [relatedDocs, setRelatedDocs] = useState<DocumentationPage[]>([]);

  useEffect(() => {
    const foundDoc = getDocumentationBySlug(slug);
    setDoc(foundDoc || null);

    if (foundDoc) {
      // Get related docs from same category
      const allDocs = getPublishedDocumentation();
      const related = allDocs
        .filter(d => d.category === foundDoc.category && d.id !== foundDoc.id)
        .sort((a, b) => a.order - b.order)
        .slice(0, 3);
      setRelatedDocs(related);
    }
  }, [slug]);

  if (!doc) {
    return (
      <PageLayout onNavigate={onNavigate} currentPage="documentation">
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-[var(--text-tertiary)] opacity-50" />
            <h1 style={{ fontSize: 'var(--text-3xl)' }} className="text-[var(--text-primary)] mb-4">
              Documentation Not Found
            </h1>
            <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-8">
              The documentation page you're looking for doesn't exist or has been moved.
            </p>
            <button
              onClick={() => onNavigate('documentation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
              style={{ fontSize: 'var(--text-base)' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Documentation
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: doc.title,
          text: doc.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageLayout onNavigate={onNavigate} currentPage="documentation">
      <SEO
        title={`${doc.title} - Documentation`}
        description={doc.excerpt}
        keywords={`ThesisFlow, ${doc.category}, ${doc.title}, documentation, help, guide`}
        canonicalUrl={`https://thesisflow.com/documentation/${doc.slug}`}
      />
      
      <div className="pt-32 pb-20">
        {/* Back Button */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate('documentation')}
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors"
            style={{ fontSize: 'var(--text-base)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Documentation
          </motion.button>
        </section>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">
                {doc.category}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-6">
              {doc.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)] pb-6 border-b border-[var(--border-primary)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Updated {doc.lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{doc.author}</span>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <button
                  onClick={handleShare}
                  className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                  title="Share this page"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
                  title="Print this page"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none mb-16"
            style={{
              '--tw-prose-body': 'var(--text-primary)',
              '--tw-prose-headings': 'var(--text-primary)',
              '--tw-prose-links': 'var(--text-brand)',
              '--tw-prose-bold': 'var(--text-primary)',
              '--tw-prose-code': 'var(--text-brand)',
              '--tw-prose-quotes': 'var(--text-secondary)',
            } as any}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: doc.content }}
              className="documentation-content"
            />
          </motion.div>

          {/* Related Documentation */}
          {relatedDocs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-[var(--border-primary)] pt-12"
            >
              <h2 style={{ fontSize: 'var(--text-2xl)' }} className="text-[var(--text-primary)] mb-6">
                Related Documentation
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedDocs.map((relatedDoc) => (
                  <div
                    key={relatedDoc.id}
                    onClick={() => onNavigate(`documentation/${relatedDoc.slug}`)}
                    className="group bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6 hover:shadow-lg hover:border-[var(--border-brand-subtle)] hover:-translate-y-1 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--text-brand)]/10 to-[var(--text-brand)]/5 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[var(--text-brand)]" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--text-brand)] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-primary)] mb-2 group-hover:text-[var(--text-brand)] transition-colors">
                      {relatedDoc.title}
                    </h3>
                    <p style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-secondary)] line-clamp-2">
                      {relatedDoc.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Help CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-[var(--text-brand)]/5 to-transparent border border-[var(--border-brand-subtle)] rounded-2xl p-8 text-center"
          >
            <h3 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-3">
              Still have questions?
            </h3>
            <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-6">
              Our support team is here to help you get the most out of ThesisFlow.
            </p>
            <button
              onClick={() => onNavigate('contact-support')}
              className="px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all shadow-lg shadow-[var(--text-brand)]/20"
              style={{ fontSize: 'var(--text-base)' }}
            >
              Contact Support
            </button>
          </motion.div>
        </article>
      </div>

      <style>{`
        .documentation-content h2 {
          font-size: var(--text-2xl);
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-primary);
        }
        .documentation-content h3 {
          font-size: var(--text-xl);
          color: var(--text-primary);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .documentation-content h4 {
          font-size: var(--text-lg);
          color: var(--text-primary);
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .documentation-content p {
          font-size: var(--text-base);
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .documentation-content ul,
        .documentation-content ol {
          font-size: var(--text-base);
          color: var(--text-secondary);
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        .documentation-content li {
          margin-bottom: 0.5rem;
        }
        .documentation-content strong {
          color: var(--text-primary);
        }
        .documentation-content code {
          font-size: var(--text-sm);
          color: var(--text-brand);
          background: var(--bg-secondary);
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
        }
        .documentation-content a {
          color: var(--text-brand);
          text-decoration: underline;
        }
        .documentation-content a:hover {
          color: var(--text-brand);
          opacity: 0.8;
        }
      `}</style>
    </PageLayout>
  );
}
