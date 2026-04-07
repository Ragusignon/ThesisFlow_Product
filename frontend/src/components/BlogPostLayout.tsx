import { motion } from 'motion/react';
import PageLayout from './PageLayout';
import { Calendar, User, Clock, ArrowLeft, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SEO, StructuredData, createBlogPostSchema, breadcrumbSchema } from './SEO';

interface BlogPostLayoutProps {
  onNavigate: any;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  children: React.ReactNode;
  slug?: string;
}

export default function BlogPostLayout({
  onNavigate,
  title,
  excerpt,
  date,
  author,
  category,
  readTime,
  image,
  children,
  slug = '',
}: BlogPostLayoutProps) {
  const blogPostSchema = createBlogPostSchema({
    title,
    description: excerpt,
    author,
    date,
    image,
    url: `https://thesisflow.com/blog/${slug}`,
    category
  });

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://thesisflow.com' },
    { name: 'Blog', url: 'https://thesisflow.com/blog' },
    { name: title, url: `https://thesisflow.com/blog/${slug}` }
  ]);

  return (
    <PageLayout onNavigate={onNavigate} currentPage="blog">
      <SEO
        title={`${title} | ThesisFlow Blog`}
        description={excerpt}
        keywords={`thesis management, academic workflow, ${category.toLowerCase()}, university software, research management`}
        canonical={`https://thesisflow.com/blog/${slug}`}
        ogImage={image}
        ogType="article"
        author={author}
        publishedTime={new Date(date).toISOString()}
        modifiedTime={new Date(date).toISOString()}
        articleSection={category}
      />
      <StructuredData data={blogPostSchema} />
      <StructuredData data={breadcrumb} />
      <div className="pt-32 pb-20">
        {/* Back Button */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-8">
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
        </section>

        {/* Article Header */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] border border-[var(--border-brand-subtle)] rounded-full text-sm mb-6">
              {category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl text-[var(--text-primary)] mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              {excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)] mb-8 pb-8 border-b border-[var(--border-primary)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime} read</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-[var(--text-secondary)]">Share:</span>
              <a
                href="https://www.linkedin.com/company/thesisflow/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-brand)] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Featured Image */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {children}
          </motion.div>
        </article>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 text-center overflow-hidden"
          >
            {/* Subtle gradient overlay - more muted for dark theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A5]/5 via-[#008f8d]/5 to-transparent"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A7A5]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#008f8d]/5 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl mb-4 text-[var(--text-primary)]">
                Interested in Thesisflow for Your Institution?
              </h3>
              <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                Schedule a personalized demo to see how we can help streamline your thesis management
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] hover:shadow-lg hover:shadow-[var(--shadow-brand)] hover:-translate-y-0.5 transition-all"
              >
                Request a Demo
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}