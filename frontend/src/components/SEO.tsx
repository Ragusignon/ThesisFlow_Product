import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  keywords = 'ThesisFlow, thesis management, AI-powered thesis management, AI search and retrieval, academic workflow automation, university software, research management, institutional software, graduate school software, SaaS platform, dissertation management',
  ogImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=630&fit=crop',
  ogType = 'website',
  canonical,
  author,
  publishedTime,
  modifiedTime,
  articleSection,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Helper function to set or update link tags
    const setLinkTag = (rel: string, href: string, type?: string, sizes?: string, media?: string) => {
      let element = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}${media ? `[media="${media}"]` : ''}`);
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute('href', href);
      if (type) element.setAttribute('type', type);
      if (sizes) element.setAttribute('sizes', sizes);
      if (media) element.setAttribute('media', media);
    };

    // Favicon implementation
    setLinkTag('icon', '/favicon.svg', 'image/svg+xml');
    setLinkTag('icon', '/favicon.svg', 'image/svg+xml', undefined, '(prefers-color-scheme: light)');
    setLinkTag('icon', '/favicon-dark.svg', 'image/svg+xml', undefined, '(prefers-color-scheme: dark)');
    setLinkTag('apple-touch-icon', '/apple-touch-icon.png', undefined, '180x180');
    setLinkTag('manifest', '/manifest.json');
    
    // Theme color meta tag
    setMetaTag('theme-color', '#00A7A5');
    setMetaTag('msapplication-TileColor', '#00A7A5');

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    if (author) setMetaTag('author', author);
    
    // Robots meta tag
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'ThesisFlow - AI-Powered Thesis Management Platform', true);
    setMetaTag('og:locale', 'en_US', true);
    
    if (canonical) {
      setMetaTag('og:url', canonical, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:site', '@thesisflow');
    setMetaTag('twitter:creator', '@thesisflow');

    // Article-specific tags
    if (ogType === 'article') {
      if (publishedTime) setMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) setMetaTag('article:modified_time', modifiedTime, true);
      if (author) setMetaTag('article:author', author, true);
      if (articleSection) setMetaTag('article:section', articleSection, true);
    }

    // Canonical URL
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Language
    document.documentElement.lang = 'en';

  }, [title, description, keywords, ogImage, ogType, canonical, author, publishedTime, modifiedTime, articleSection, noindex]);

  return null;
}

// Structured Data Component
interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'structured-data';
    
    // Remove existing structured data
    const existing = document.getElementById('structured-data');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
}

// Predefined structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MIGRI Technologies Pvt Ltd",
  "description": "Provider of ThesisFlow, an AI-powered thesis management SaaS platform for universities and research institutions worldwide, featuring advanced AI search and retrieval capabilities.",
  "url": "https://thesisflow.com",
  "logo": "https://thesisflow.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "MIGRI Technologies"
  },
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "Chennai"
  },
  "sameAs": [
    "https://twitter.com/thesisflow",
    "https://linkedin.com/company/migri-technologies"
  ]
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ThesisFlow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "1"
  },
  "description": "AI-powered thesis management SaaS platform designed for universities and research institutions to automate and streamline thesis submission, review, and approval workflows. Features advanced AI modules for intelligent search and retrieval of academic documents.",
  "screenshot": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
  "author": {
    "@type": "Organization",
    "name": "MIGRI Technologies Pvt Ltd"
  },
  "datePublished": "2025-10-01",
  "softwareVersion": "1.0",
  "releaseNotes": "Beta launch with core thesis management features and AI-powered search"
};

export const createBlogPostSchema = (post: {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  url: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "image": post.image,
  "author": {
    "@type": post.author.includes('Dr.') ? "Person" : "Organization",
    "name": post.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "MIGRI Technologies Pvt Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://thesisflow.com/logo.png"
    }
  },
  "datePublished": new Date(post.date).toISOString(),
  "dateModified": new Date(post.date).toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  },
  "articleSection": post.category,
  "keywords": "thesis management, academic workflow, research management"
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});