import { useState, useEffect } from 'react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { BookOpen, Search, ChevronRight, Clock, User, FileText, Layers, Zap, Settings } from 'lucide-react';
import { getPublishedDocumentation, getDocumentationByCategory, getDocumentationCategories, type DocumentationPage } from './utils/documentationData';

export default function Documentation({ onNavigate }: any) {
  const [docs, setDocs] = useState<DocumentationPage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setDocs(getPublishedDocumentation());
  }, []);

  const categories = ['All', ...getDocumentationCategories()];

  const filteredDocs = docs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doc.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort by category and order
  const sortedDocs = [...filteredDocs].sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.order - b.order;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'getting started': return FileText;
      case 'user guides': return BookOpen;
      case 'integrations': return Layers;
      case 'api reference': return Zap;
      default: return Settings;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'getting started': return 'from-emerald-500/10 to-emerald-500/5';
      case 'user guides': return 'from-blue-500/10 to-blue-500/5';
      case 'integrations': return 'from-purple-500/10 to-purple-500/5';
      case 'api reference': return 'from-orange-500/10 to-orange-500/5';
      default: return 'from-[var(--text-brand)]/10 to-[var(--text-brand)]/5';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'getting started': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
      case 'user guides': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'integrations': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'api reference': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400';
      default: return 'bg-[var(--text-brand)]/10 text-[var(--text-brand)]';
    }
  };

  return (
    <PageLayout onNavigate={onNavigate} currentPage="documentation">
      <SEO
        title="Documentation"
        description="Complete documentation for ThesisFlow thesis management platform. Learn how to set up, configure, and use all features including workflows, integrations, API reference, and best practices."
        keywords="ThesisFlow documentation, thesis management guide, API reference, integration guide, workflow configuration, user manual, technical documentation"
        canonicalUrl="https://thesisflow.com/documentation"
      />
      <div className="pt-32 pb-20 bg-[var(--bg-secondary)]">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--text-brand)]/10 border border-[var(--text-brand)]/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Documentation</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-5xl)' }} className="text-[var(--text-primary)] mb-4">
              ThesisFlow Documentation
            </h1>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-8">
              Comprehensive guides and references to help you get the most out of ThesisFlow.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[var(--card)] border border-[var(--border-primary)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:outline-none transition-all shadow-sm"
                style={{ fontSize: 'var(--text-base)' }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--bg-brand)] text-[var(--text-on-brand)] shadow-md'
                      : 'bg-[var(--card)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)]'
                  }`}
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Grid - Unified Layout */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          {sortedDocs.length > 0 ? (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {sortedDocs.map((doc) => {
                const CategoryIcon = getCategoryIcon(doc.category);
                return (
                  <div
                    key={doc.id}
                    onClick={() => onNavigate(`documentation/${doc.slug}`)}
                    className="group bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden hover:shadow-xl hover:border-[var(--text-brand)]/30 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    {/* Card Header with Icon */}
                    <div className={`p-6 bg-gradient-to-br ${getCategoryColor(doc.category)}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-white/80 dark:bg-[var(--card)]/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm">
                          <CategoryIcon className="w-6 h-6 text-[var(--text-brand)]" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--text-brand)] group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="inline-block">
                        <span 
                          className={`px-3 py-1 rounded-full text-xs ${getCategoryBadgeColor(doc.category)}`}
                        >
                          {doc.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 
                        className="text-[var(--text-primary)] mb-3 group-hover:text-[var(--text-brand)] transition-colors line-clamp-2"
                        style={{ fontSize: 'var(--text-xl)', minHeight: '3.5rem' }}
                      >
                        {doc.title}
                      </h3>
                      
                      <p 
                        style={{ fontSize: 'var(--text-sm)' }} 
                        className="text-[var(--text-secondary)] mb-4 line-clamp-3"
                      >
                        {doc.excerpt}
                      </p>

                      {/* Card Footer */}
                      <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-primary)]">
                        <div className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                          <Clock className="w-4 h-4" />
                          <span style={{ fontSize: 'var(--text-xs)' }}>{doc.lastUpdated}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                          <User className="w-4 h-4" />
                          <span style={{ fontSize: 'var(--text-xs)' }} className="truncate max-w-[120px]">{doc.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-[var(--card)] rounded-2xl border border-[var(--border-primary)]">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
              <p style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-2">
                No documentation found
              </p>
              <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </section>

        {/* Help Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
          <div className="bg-gradient-to-r from-[var(--text-brand)]/5 to-transparent border border-[var(--text-brand)]/20 rounded-2xl p-10 text-center">
            <h2 style={{ fontSize: 'var(--text-3xl)' }} className="text-[var(--text-primary)] mb-3">
              Need Additional Help?
            </h2>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact-support')}
                className="px-8 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all shadow-lg hover:shadow-xl"
                style={{ fontSize: 'var(--text-base)' }}
              >
                Contact Support
              </button>
              <button
                onClick={() => onNavigate('request-demo')}
                className="px-8 py-3 bg-[var(--card)] border-2 border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:border-[var(--text-brand)] hover:text-[var(--text-brand)] transition-all"
                style={{ fontSize: 'var(--text-base)' }}
              >
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
