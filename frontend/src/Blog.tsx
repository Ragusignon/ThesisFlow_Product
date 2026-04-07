import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Mail, Shield, Tag, FileText } from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, breadcrumbSchema } from './components/SEO';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { getBlogPosts, getFeaturedBlogPost, type BlogPost } from './utils/blogData';
import { addSubscriber } from './utils/newsletterData';

export default function Blog({ onNavigate }: any) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const API_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${API_URL}/blogs/`);
        if (response.ok) {
          const resData = await response.json();
          const posts = Array.isArray(resData) ? resData : (resData.data || []);
          if (posts.length > 0) {
            setBlogPosts(posts.filter((p: BlogPost) => p.status === 'Published'));
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching blogs from API:', error);
      }
      // Fallback to localStorage
      const localPosts = getBlogPosts();
      setBlogPosts(localPosts.filter(p => p.status === 'Published'));
    };
    fetchPosts();
  }, []);

  const categories = ['All', 'Product Updates', 'Best Practices', 'Research', 'Company', 'Compliance'];

  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
    .filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://thesisflow.com' },
    { name: 'Blog', url: 'https://thesisflow.com/blog' }
  ]);

  return (
    <PageLayout onNavigate={onNavigate} currentPage="blog">
      <SEO
        title="Blog - ThesisFlow | Academic Workflow Insights & Best Practices"
        description="Insights on academic workflow automation, thesis management best practices, institutional software, compliance, and research technology. Expert articles from the ThesisFlow team on modernizing university processes."
        keywords="thesis management blog, academic workflow articles, university software insights, research technology, thesis best practices, institutional compliance, academic automation"
        canonical="https://thesisflow.com/blog"
        ogImage="https://images.unsplash.com/photo-1699978786249-fa3ad6cf051d?w=1200&h=630&fit=crop"
      />
      <StructuredData data={breadcrumb} />
      <BlogContent selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} onNavigate={onNavigate} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredPosts={filteredPosts} newsletterEmail={newsletterEmail} setNewsletterEmail={setNewsletterEmail} newsletterStatus={newsletterStatus} setNewsletterStatus={setNewsletterStatus} newsletterMessage={newsletterMessage} setNewsletterMessage={setNewsletterMessage} />
    </PageLayout>
  );
}

function BlogContent({ selectedCategory, setSelectedCategory, onNavigate, searchQuery, setSearchQuery, filteredPosts, newsletterEmail, setNewsletterEmail, newsletterStatus, setNewsletterStatus, newsletterMessage, setNewsletterMessage }: any) {
  const featuredPost = getFeaturedBlogPost();

  const categories = ['All', 'Product Updates', 'Best Practices', 'Research', 'Company', 'Compliance'];

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
            <FileText className="w-3.5 h-3.5 text-[var(--text-brand)]" />
            <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Blog</span>
          </div>
          <h1 className="mb-6 text-[var(--text-primary)]" style={{ fontSize: '2.5rem' }}>
            Insights & <span className="text-[var(--text-brand)]">Updates</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Stories, research insights, and product updates from the Thesisflow team
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div 
            onClick={() => onNavigate(featuredPost.slug)}
            className="bg-[var(--card)] border-2 border-[var(--border-primary)] rounded-3xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group hover:border-[var(--border-brand)]"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-full text-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-xs px-3 py-1 bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] rounded-full mb-4 w-fit border border-[var(--border-brand-subtle)]">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl lg:text-3xl mb-4 group-hover:text-[var(--text-brand)] transition-colors text-[var(--text-primary)]">
                  {featuredPost.title}
                </h2>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)] mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime} read</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-[var(--text-brand)] hover:gap-3 transition-all pointer-events-none">
                  <span>Read article</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      )}

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg transition-all ${
                cat === selectedCategory
                  ? 'bg-[var(--bg-brand)] text-[var(--text-on-brand)] shadow-md'
                  : 'bg-[var(--card)] border-2 border-[var(--border-primary)] hover:border-[var(--border-brand)] hover:text-[var(--text-brand)] text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Search Bar */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[var(--bg-primary)] via-[var(--card)] to-[var(--bg-primary)] rounded-3xl border border-[var(--border-primary)] shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00A7A5]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#008f8d]/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>

          <div className="relative z-10 p-10 lg:p-14 text-center">
            {/* Icon with gradient background */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-[#00A7A5] to-[#008f8d] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00A7A5]/20"
            >
              <Search className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-[var(--text-primary)] mb-3"
            >
              Search Articles
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto leading-relaxed"
            >
              Find articles by title or keyword
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-[var(--card)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl mb-8 text-[var(--text-primary)]"
        >
          {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
        </motion.h2>
        
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.title}
                className="group bg-[var(--card)] border-2 border-[var(--border-primary)] rounded-2xl overflow-hidden hover:border-[var(--border-brand)] hover:shadow-xl hover:shadow-[var(--shadow-brand)] transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-brand)] text-white text-xs rounded-full shadow-lg">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-[var(--text-primary)] mb-3 group-hover:text-[var(--text-brand)] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-[var(--text-tertiary)] mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onNavigate(post.slug)}
                    className="w-full py-3 bg-[var(--bg-secondary)] text-[var(--text-brand)] rounded-xl hover:bg-[var(--bg-brand)] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Tag className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
            <p className="text-[var(--text-secondary)]">No articles found in this category yet.</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[var(--bg-primary)] via-[var(--card)] to-[var(--bg-primary)] rounded-3xl border border-[var(--border-primary)] shadow-2xl overflow-hidden"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00A7A5]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#008f8d]/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>

          <div className="relative z-10 p-10 lg:p-14 text-center">
            {/* Icon with gradient background */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-[#00A7A5] to-[#008f8d] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#00A7A5]/20"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl text-[var(--text-primary)] mb-3"
            >
              Stay Updated
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto leading-relaxed"
            >
              Subscribe to our newsletter for the latest insights and product updates
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-[var(--card)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[#00A7A5]/20 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                />
                <button 
                  onClick={async () => {
                    if (newsletterEmail) {
                      setNewsletterStatus('idle');
                      setNewsletterMessage('');
                      try {
                        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
                        await fetch(`${API_URL}/newsletter/`, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            email: newsletterEmail,
                            name: newsletterEmail.split('@')[0],
                            source: 'Blog Subscription'
                          })
                        });
                        
                        // Fallback local persistence
                        await addSubscriber(newsletterEmail);
                        setNewsletterStatus('success');
                        setNewsletterMessage('Thank you for subscribing!');
                        setNewsletterEmail('');
                      } catch (error) {
                        console.error('Newsletter backend subscription error:', error);
                        // Still try local storage as fallback
                        try {
                          await addSubscriber(newsletterEmail);
                          setNewsletterStatus('success');
                          setNewsletterMessage('Thank you for subscribing!');
                          setNewsletterEmail('');
                        } catch (localError) {
                          setNewsletterStatus('error');
                          setNewsletterMessage('Failed to subscribe. Please try again.');
                        }
                      }
                    }
                  }}
                  className="px-8 py-3.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                  style={{ fontSize: 'var(--text-base)' }}
                >
                  Subscribe
                </button>
              </div>
              {newsletterStatus === 'success' && (
                <p className="text-sm text-[var(--text-success)] mt-4">
                  {newsletterMessage}
                </p>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-sm text-[var(--text-error)] mt-4">
                  {newsletterMessage}
                </p>
              )}
              {newsletterStatus === 'idle' && (
                <p className="text-sm text-[var(--text-tertiary)] mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}