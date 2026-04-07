/**
 * Admin Dashboard - Customer Enquiry Management System
 * 
 * CRITICAL SAFETY NOTES:
 * ======================
 * This dashboard manages customer enquiries (demo requests, contact messages, referrals, newsletter).
 * 
 * DELETION SAFETY:
 * - All deletions use a two-step process: ConfirmModal → Trash (12 month retention)
 * - Items are added to trash BEFORE removal from active list
 * - Error handling prevents data loss if trash operation fails
 * - All customer data can be restored from trash within 12 months (1 year mandatory retention)
 * 
 * DATA PERSISTENCE:
 * - All data is stored in localStorage
 * - Counts update every 2 seconds to reflect real-time changes
 * - Demo requests, contacts, referrals, and newsletter subscriptions are all tracked
 * 
 * NEVER modify the deletion flow without thorough testing!
 */
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Mail, MessageSquare, Users, PhoneCall, LogOut, 
  Edit, Plus, X, Check, Save, ArrowLeft, Eye, Trash2, 
  ExternalLink, Download, Calendar, Building2, Filter, RotateCcw, Scale, History, BookOpen
} from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { getBlogPosts, saveBlogPost, deleteBlogPost, createBlogPost, setFeaturedBlogPost, type BlogPost } from './utils/blogData';
import { getLegalPages, type LegalPage } from './utils/legalData';
import { getSubscribers, removeSubscriber } from './utils/newsletterData';
import { getContactMessages, removeContactMessage, updateMessageStatus } from './utils/contactData';
import { getReferrals, removeReferral, updateReferralStatus } from './utils/referralData';
import { getDemoRequests, removeDemoRequest, updateDemoStatus } from './utils/demoData';
import { getDocumentationPages, saveDocumentationPage, deleteDocumentationPage, createDocumentationPage, getDocumentationCategories, type DocumentationPage } from './utils/documentationData';
import { getTrashItems, addToTrash } from './utils/trashData';
import TrashPanel from './components/TrashPanel';
import ConfirmModal from './components/ConfirmModal';
import LegalPageEditor from './components/LegalPageEditor';
import ExportModal from './components/ExportModal';
import * as XLSX from 'xlsx';
import RichTextEditor from './components/RichTextEditor';

export default function AdminDashboard({ onNavigate }: any) {
  const [activeTab, setActiveTab] = useState<'blog' | 'documentation' | 'legal' | 'demo' | 'contact' | 'referral' | 'newsletter' | 'trash'>('blog');
  const [editingPost, setEditingPost] = useState<any>(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [editingLegalPage, setEditingLegalPage] = useState<LegalPage | null>(null);
  
  // Check authentication on mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    const loginTime = localStorage.getItem('adminLoginTime');
    
    // Session expires after 24 hours
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const isSessionValid = loginTime && (Date.now() - parseInt(loginTime)) < sessionDuration;
    
    if (!isAuthenticated || !isSessionValid) {
      // Redirect to login if not authenticated or session expired
      onNavigate('admin-login');
    }
  }, [onNavigate]);
  
  // Get real counts
  const [blogCount, setBlogCount] = useState(0);
  const [documentationCount, setDocumentationCount] = useState(0);
  const [legalCount, setLegalCount] = useState(0);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [referralCount, setReferralCount] = useState(0);
  const [demoCount, setDemoCount] = useState(0);
  const [trashCount, setTrashCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      setReferralCount(getReferrals().length);
      setTrashCount(getTrashItems().length);
    };
    
    updateCounts();
    const interval = setInterval(updateCounts, 2000);
    return () => clearInterval(interval);
  }, []);

  // Fetch legal count from backend API
  useEffect(() => {
    const fetchLegalCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${API_URL}/legal/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const pgs = Array.isArray(resData) ? resData : (resData.data || []);
          setLegalCount(pgs.length);
        } else {
          setLegalCount(getLegalPages().length);
        }
      } catch {
        setLegalCount(getLegalPages().length);
      }
    };

    fetchLegalCount();
    const interval = setInterval(fetchLegalCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch newsletter count from backend API
  useEffect(() => {
    const fetchNewsletterCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${API_URL}/newsletter/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const subs = Array.isArray(resData) ? resData : (resData.data || []);
          setNewsletterCount(subs.length);
        } else {
          setNewsletterCount(getSubscribers().length);
        }
      } catch {
        setNewsletterCount(getSubscribers().length);
      }
    };

    fetchNewsletterCount();
    const interval = setInterval(fetchNewsletterCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch blog count from backend API
  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${API_URL}/blogs/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const posts = Array.isArray(resData) ? resData : (resData.data || []);
          setBlogCount(posts.length);
        } else {
          setBlogCount(getBlogPosts().length);
        }
      } catch {
        setBlogCount(getBlogPosts().length);
      }
    };

    fetchBlogCount();
    const interval = setInterval(fetchBlogCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch demo request count from backend API
  useEffect(() => {
    const fetchDemoCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_URL}/demo-requests/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const requests = Array.isArray(resData) ? resData : (resData.data || []);
          setDemoCount(requests.length);
        } else {
          setDemoCount(getDemoRequests().length);
        }
      } catch {
        setDemoCount(getDemoRequests().length);
      }
    };

    fetchDemoCount();
    const interval = setInterval(fetchDemoCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch documentation count from backend API
  useEffect(() => {
    const fetchDocCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${API_URL}/documentation/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const docsArray = Array.isArray(resData) ? resData : (resData.data || []);
          setDocumentationCount(docsArray.length);
        } else {
          setDocumentationCount(getDocumentationPages().length);
        }
      } catch {
        setDocumentationCount(getDocumentationPages().length);
      }
    };

    fetchDocCount();
    const interval = setInterval(fetchDocCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch contact message count from backend API
  useEffect(() => {
    const fetchContactCount = async () => {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_URL}/contact/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
          const resData = await response.json();
          const msgs = Array.isArray(resData) ? resData : (resData.data || []);
          setContactCount(msgs.length);
        } else {
          setContactCount(getContactMessages().length);
        }
      } catch {
        setContactCount(getContactMessages().length);
      }
    };

    fetchContactCount();
    const interval = setInterval(fetchContactCount, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    onNavigate('admin-login');
  };

  return (
    <PageLayout onNavigate={onNavigate} currentPage="">
      <SEO
        title="Admin Dashboard"
        description="Admin dashboard for managing ThesisFlow content"
        canonicalUrl="https://thesisflow.com/admin-dashboard"
      />
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl text-[var(--text-primary)] mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-[var(--text-secondary)] hidden sm:block">
                  Manage blog posts and institutional requests
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-right hidden lg:block">
                  <p className="text-sm text-[var(--text-primary)]">Administrator</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Logged in</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
              <StatsCard
                icon={FileText}
                label="Blog Posts"
                count={blogCount}
                color="text-blue-500"
              />
              <StatsCard
                icon={BookOpen}
                label="Documentation"
                count={documentationCount}
                color="text-cyan-500"
              />
              <StatsCard
                icon={Scale}
                label="Legal Pages"
                count={legalCount}
                color="text-indigo-500"
              />
              <StatsCard
                icon={Mail}
                label="Newsletter Subs"
                count={newsletterCount}
                color="text-teal-500"
              />
              <StatsCard
                icon={PhoneCall}
                label="Demo Requests"
                count={demoCount}
                color="text-green-500"
              />
              <StatsCard
                icon={MessageSquare}
                label="Contact Messages"
                count={contactCount}
                color="text-purple-500"
              />
              <StatsCard
                icon={Users}
                label="Referrals"
                count={referralCount}
                color="text-orange-500"
              />
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex gap-2 border-b border-[var(--border-primary)] overflow-x-auto">
              <TabButton
                active={activeTab === 'blog'}
                onClick={() => setActiveTab('blog')}
                icon={FileText}
                label="Blog Posts"
              />
              <TabButton
                active={activeTab === 'documentation'}
                onClick={() => setActiveTab('documentation')}
                icon={BookOpen}
                label="Documentation"
              />
              <TabButton
                active={activeTab === 'legal'}
                onClick={() => setActiveTab('legal')}
                icon={Scale}
                label="Legal Pages"
              />
              <TabButton
                active={activeTab === 'newsletter'}
                onClick={() => setActiveTab('newsletter')}
                icon={Mail}
                label="Newsletter"
              />
              <TabButton
                active={activeTab === 'demo'}
                onClick={() => setActiveTab('demo')}
                icon={PhoneCall}
                label="Demo Requests"
              />
              <TabButton
                active={activeTab === 'contact'}
                onClick={() => setActiveTab('contact')}
                icon={MessageSquare}
                label="Contact Messages"
              />
              <TabButton
                active={activeTab === 'referral'}
                onClick={() => setActiveTab('referral')}
                icon={Users}
                label="Referrals"
              />
              <TabButton
                active={activeTab === 'trash'}
                onClick={() => setActiveTab('trash')}
                icon={Trash2}
                label="Trash"
                count={trashCount}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {activeTab === 'blog' && (
              <>
                {editingPost || isCreatingPost ? (
                  <BlogEditor
                    post={editingPost}
                    onSave={(post) => {
                      console.log('Saving post:', post);
                      setEditingPost(null);
                      setIsCreatingPost(false);
                    }}
                    onCancel={() => {
                      setEditingPost(null);
                      setIsCreatingPost(false);
                    }}
                  />
                ) : (
                  <BlogPostsPanel
                    onNavigate={onNavigate}
                    onEdit={setEditingPost}
                    onCreate={() => setIsCreatingPost(true)}
                  />
                )}
              </>
            )}
            {activeTab === 'documentation' && <DocumentationPanel />}
            {activeTab === 'legal' && (
              <>
                {editingLegalPage ? (
                  <LegalPageEditor
                    page={editingLegalPage}
                    onBack={() => setEditingLegalPage(null)}
                    onSave={(page) => {
                      setEditingLegalPage(null);
                    }}
                  />
                ) : (
                  <LegalPagesPanel onEdit={setEditingLegalPage} />
                )}
              </>
            )}
            {activeTab === 'newsletter' && <NewsletterPanel />}
            {activeTab === 'demo' && <DemoRequestsPanel />}
            {activeTab === 'contact' && <ContactMessagesPanel />}
            {activeTab === 'referral' && <ReferralsPanel />}
            {activeTab === 'trash' && <TrashPanel />}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

function StatsCard({ icon: Icon, label, count, color }: any) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} />
        <span className="text-xl sm:text-2xl text-[var(--text-primary)]">{count}</span>
      </div>
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] truncate">{label}</p>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 sm:px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
        active
          ? 'border-[var(--border-brand)] text-[var(--text-brand)]'
          : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm sm:text-base">{label}</span>
    </button>
  );
}

function BlogEditor({ post, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    id: post?.id || null,
    title: post?.title || '',
    slug: post?.slug || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    author: post?.author || 'Thesisflow Team',
    category: post?.category || 'Product Updates',
    readTime: post?.readTime || '5 min',
    image: post?.image || '',
    date: post?.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: post?.status || 'Published' as 'Published' | 'Draft',
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set status to Published when submitting
    const publishData = { ...formData, status: 'Published' as 'Published' | 'Draft' };
    
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      
      if (publishData.id) {
        // Update existing post
        await fetch(`${API_URL}/blogs/${publishData.id}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(publishData)
        });
        saveBlogPost(publishData as BlogPost);
      } else {
        // Create new post
        const { id, ...createData } = publishData;
        await fetch(`${API_URL}/blogs/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(createData)
        });
        createBlogPost(publishData as Omit<BlogPost, 'id'>);
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      if (publishData.id) saveBlogPost(publishData as BlogPost);
      else createBlogPost(publishData as Omit<BlogPost, 'id'>);
    }
    
    // Trigger refresh by calling onSave
    onSave(publishData);
  };

  const handleSaveDraft = async () => {
    const draftData = { ...formData, status: 'Draft' as 'Published' | 'Draft' };
    
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      
      if (draftData.id) {
        await fetch(`${API_URL}/blogs/${draftData.id}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(draftData)
        });
        saveBlogPost(draftData as BlogPost);
      } else {
        const { id, ...createData } = draftData;
        await fetch(`${API_URL}/blogs/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(createData)
        });
        createBlogPost(draftData as Omit<BlogPost, 'id'>);
      }
    } catch (error) {
      console.error('Error saving blog post:', error);
      if (draftData.id) saveBlogPost(draftData as BlogPost);
      else createBlogPost(draftData as Omit<BlogPost, 'id'>);
    }
    
    onSave(draftData);
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-[var(--text-primary)] flex items-center gap-2">
          {post ? <Edit className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          <span>{post ? 'Edit Blog Post' : 'Create New Blog Post'}</span>
        </h2>
        <button
          onClick={onCancel}
          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm text-[var(--text-primary)] mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            placeholder="Enter blog post title"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm text-[var(--text-primary)] mb-2">
            Slug * (URL path)
          </label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            required
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            placeholder="blog-post-slug"
          />
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            Will be used as: /blog-post-slug
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Author */}
          <div>
            <label className="block text-sm text-[var(--text-primary)] mb-2">
              Author *
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              required
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-[var(--text-primary)] mb-2">
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            >
              <option value="Product Updates">Product Updates</option>
              <option value="Best Practices">Best Practices</option>
              <option value="Research">Research</option>
              <option value="Company">Company</option>
              <option value="Compliance">Compliance</option>
            </select>
          </div>
        </div>

        {/* Read Time */}
        <div>
          <label className="block text-sm text-[var(--text-primary)] mb-2">
            Read Time
          </label>
          <input
            type="text"
            value={formData.readTime}
            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            placeholder="5 min"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm text-[var(--text-primary)] mb-2">
            Featured Image URL (Unsplash or other)
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
            placeholder="https://images.unsplash.com/..."
          />
          <p className="text-xs text-[var(--text-tertiary)] mt-1">
            This will be the main header image for the blog post
          </p>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm text-[var(--text-primary)] mb-2">
            Excerpt * (Short description for blog listing)
          </label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            required
            rows={3}
            className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all resize-none"
            placeholder="Enter a brief summary of the blog post"
          />
        </div>

        {/* Content Editor or Preview */}
        {!showPreview ? (
          <RichTextEditor
            value={formData.content}
            onChange={(html) => setFormData({ ...formData, content: html })}
            onPreview={() => setShowPreview(true)}
            showPreview={showPreview}
          />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm text-[var(--text-primary)]">
                Preview
              </label>
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] rounded-lg hover:bg-[var(--bg-brand)]/10 transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Back to Editor</span>
              </button>
            </div>
            <div className="min-h-[500px] max-h-[600px] overflow-y-auto px-8 py-8 bg-[var(--card)] border border-[var(--border-primary)] rounded-lg">
              <h1 className="text-3xl text-[var(--text-primary)] mb-4">{formData.title || 'Untitled Post'}</h1>
              <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-8 pb-6 border-b border-[var(--border-primary)]">
                <span>{formData.author}</span>
                <span>•</span>
                <span>{formData.date}</span>
                <span>•</span>
                <span>{formData.readTime}</span>
                <span>•</span>
                <span className="text-[var(--text-brand)]">{formData.category}</span>
              </div>
              {formData.image && (
                <img src={formData.image} alt={formData.title} className="w-full rounded-xl mb-8" />
              )}
              <div 
                className="prose prose-lg max-w-none 
                [&_h2]:text-2xl [&_h2]:text-[var(--text-primary)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:first:mt-0
                [&_h3]:text-xl [&_h3]:text-[var(--text-primary)] [&_h3]:mt-8 [&_h3]:mb-3 
                [&_p]:text-[var(--text-secondary)] [&_p]:mb-4 [&_p]:leading-relaxed
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-[var(--text-secondary)] [&_ul]:mb-4
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-[var(--text-secondary)] [&_ol]:mb-4
                [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote]:text-[var(--text-secondary)] [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--border-brand)] [&_blockquote]:pl-4 [&_blockquote]:my-8 
                [&_img]:w-full [&_img]:rounded-xl [&_img]:my-8"
                dangerouslySetInnerHTML={{ __html: formData.content }}
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-primary)]">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Publish Post</span>
          </button>
          <button
            type="button"
            onClick={handleSaveDraft}
            className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save as Draft</span>
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function BlogPostsPanel({ onNavigate, onEdit, onCreate }: any) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'lastModified'>('date');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; post: BlogPost | null }>({ isOpen: false, post: null });
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const loadPosts = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      const response = await fetch(`${API_URL}/blogs/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const resData = await response.json();
        const posts = Array.isArray(resData) ? resData : (resData.data || []);
        setBlogPosts(posts);
      } else {
        setBlogPosts(getBlogPosts()); // fallback
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogPosts(getBlogPosts()); // fallback
    }
  };

  useEffect(() => {
    loadPosts();
    
    const interval = setInterval(loadPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (post: BlogPost) => {
    setDeleteModal({ isOpen: true, post });
  };

  const confirmDelete = async () => {
    if (deleteModal.post) {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        
        await fetch(`${API_URL}/blogs/${deleteModal.post.id}/`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (e) {
        console.error('Backend delete failed', e);
      }
      
      deleteBlogPost(deleteModal.post.id);
      loadPosts();
      setDeleteModal({ isOpen: false, post: null });
    }
  };

  const handleFeaturedToggle = async (postId: number) => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      const post = blogPosts.find((p: BlogPost) => p.id === postId);
      if (post) {
        await fetch(`${API_URL}/blogs/${postId}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ featured: !post.featured })
        });
      }
    } catch (error) {
      console.error('Error updating featured status on backend:', error);
    }
    
    setFeaturedBlogPost(postId);
    loadPosts();
  };

  const years = ['All', '2026', '2025', '2024', '2023'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredPosts = blogPosts.filter(post => {
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear().toString();
    const postMonth = postDate.toLocaleString('en-US', { month: 'long' });
    
    if (selectedYear !== 'All' && postYear !== selectedYear) return false;
    if (selectedMonth !== 'All' && postMonth !== selectedMonth) return false;
    return true;
  }).sort((a, b) => {
    // Sort by selected criteria
    const dateA = sortBy === 'date' ? new Date(a.date) : new Date(a.lastModified);
    const dateB = sortBy === 'date' ? new Date(b.date) : new Date(b.lastModified);
    return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
  });

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Filters and Create Button */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[80px]"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[90px]"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'lastModified')}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[140px]"
            >
              <option value="date">Sort by: Publish Date</option>
              <option value="lastModified">Sort by: Last Modified</option>
            </select>
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={openExportModal}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
              title="Export to Excel"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Export to Excel</span>
            </button>
            <button
              onClick={onCreate}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Create New Post</span>
              <span className="sm:hidden">Create</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-[600px] overflow-y-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] sticky top-0 z-10">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[200px]">Title</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[120px]">Category</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[100px]">Date</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[120px]">Last Modified</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[100px]">Status</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[120px]">Featured</th>
                <th className="px-4 sm:px-6 py-4 text-right text-sm text-[var(--text-secondary)] min-w-[120px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="border-b border-[var(--border-primary)] hover:bg-[var(--bg-secondary)] transition-colors">
                    <td className="px-4 sm:px-6 py-4">
                      <p className="text-[var(--text-primary)]">{post.title}</p>
                      <p className="text-sm text-[var(--text-tertiary)] mt-1">/{post.slug}</p>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-sm text-[var(--text-secondary)]">{post.category}</span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-[var(--text-secondary)]">{post.date}</td>
                    <td className="px-4 sm:px-6 py-4 text-[var(--text-secondary)]">{post.lastModified}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border ${
                        post.status === 'Published' 
                          ? 'bg-green-500/10 border-green-500/20 text-green-500' 
                          : 'bg-orange-500/10 border-orange-500/20 text-orange-500'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <button
                        onClick={() => handleFeaturedToggle(post.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all whitespace-nowrap ${
                          post.featured 
                            ? 'bg-[var(--bg-brand)] text-[var(--text-on-brand)]' 
                            : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]'
                        }`}
                        title={post.featured ? 'Currently featured' : 'Set as featured'}
                      >
                        {post.featured && <Check className="w-3 h-3" />}
                        <span>{post.featured ? 'Featured' : 'Set Featured'}</span>
                      </button>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onEdit(post)}
                          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand-subtle)] rounded-lg transition-all"
                          title="Edit post"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.open(`/${post.slug}`, '_blank')}
                          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand-subtle)] rounded-lg transition-all"
                          title="View post in new tab"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post)}
                          className="p-2 text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
                    <p className="text-[var(--text-secondary)]">No blog posts for selected period</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, post: null })}
        onConfirm={confirmDelete}
        title="Move to Trash"
        message={`Are you sure you want to move "${deleteModal.post?.title}" to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Blog Posts"
        data={blogPosts}
        dataType="blog"
        fields={[
          { key: 'title', label: 'Title', selected: true },
          { key: 'slug', label: 'Slug', selected: true },
          { key: 'category', label: 'Category', selected: true },
          { key: 'author', label: 'Author', selected: true },
          { key: 'date', label: 'Date', selected: true },
          { key: 'lastModified', label: 'Last Modified', selected: true },
          { key: 'status', label: 'Status', selected: true },
          { key: 'featured', label: 'Featured', selected: false },
          { key: 'readTime', label: 'Read Time', selected: false },
          { key: 'excerpt', label: 'Excerpt', selected: false }
        ]}
      />
    </div>
  );
}

function LegalPagesPanel({ onEdit }: any) {
  const [legalPages, setLegalPages] = useState<LegalPage[]>([]);
  const [sortBy, setSortBy] = useState<'title' | 'lastModified'>('title');
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; page: LegalPage | null }>({ isOpen: false, page: null });

  const loadLegalPages = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      const response = await fetch(`${API_URL}/legal/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const resData = await response.json();
        const pages = Array.isArray(resData) ? resData : (resData.data || []);
        if (pages.length > 0) {
          setLegalPages(pages);
        } else {
          setLegalPages(getLegalPages());
        }
      } else {
        setLegalPages(getLegalPages());
      }
    } catch (e) {
      console.error('Fetch legal pages error', e);
      setLegalPages(getLegalPages());
    }
  };

  useEffect(() => {
    loadLegalPages();
    const interval = setInterval(loadLegalPages, 5000);
    return () => clearInterval(interval);
  }, []);

  const sortedPages = [...legalPages].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      const dateA = new Date(a.lastModified);
      const dateB = new Date(b.lastModified);
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    }
  });

  const exportPageToExcel = (page: LegalPage) => {
    // Export single page with all its version history
    const versionsData = page.versions.map((version, index) => ({
      'Page Title': page.title,
      'Version': page.versions.length - index,
      'Saved At': version.savedAt,
      'Saved By': version.savedBy,
      'Content Preview': version.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      'Is Current': index === page.versions.length - 1 ? 'Yes' : 'No'
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(versionsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Version History');
    XLSX.writeFile(workbook, `${page.slug}_all_versions.xlsx`);
  };

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  const handleDelete = (page: LegalPage) => {
    setDeleteModal({ isOpen: true, page });
  };

  const confirmDelete = async () => {
    if (deleteModal.page) {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        await fetch(`${API_URL}/legal/${deleteModal.page.id}/`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (e) {
        console.error('Backend delete failed', e);
      }
      loadLegalPages();
      setDeleteModal({ isOpen: false, page: null });
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
          <div>
            <h2 className="text-xl text-[var(--text-primary)] mb-1">Legal Pages</h2>
            <p className="text-sm text-[var(--text-secondary)] hidden sm:block">Manage privacy policy, terms of service, and compliance pages</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openExportModal}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
              title="Export All Pages"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Export All Pages</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'title' | 'lastModified')}
            className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[160px]"
          >
            <option value="title">Sort by: Title</option>
            <option value="lastModified">Sort by: Last Modified</option>
          </select>
          <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
            {sortedPages.length} page{sortedPages.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Pages Table */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] sticky top-0 z-10">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[150px]">Page Title</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[120px]">Slug</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[120px]">Last Modified</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm text-[var(--text-secondary)] min-w-[80px]">Versions</th>
                <th className="px-4 sm:px-6 py-4 text-right text-sm text-[var(--text-secondary)] min-w-[120px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-primary)]">
              {sortedPages.length > 0 ? (
                sortedPages.map((page) => (
                  <tr key={page.id} className="hover:bg-[var(--bg-secondary)] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[var(--text-secondary)]" />
                        <span className="text-[var(--text-primary)]">{page.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-sm text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-1 rounded">
                        /{page.slug}
                      </code>
                    </td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">{page.lastModified}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--bg-brand-subtle)] text-[var(--text-brand)] rounded text-sm">
                        <History className="w-3 h-3" />
                        {page.versions?.length || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => exportPageToExcel(page)}
                          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand)]/10 rounded-lg transition-all"
                          title="Download all versions"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => window.open(`/${page.slug}`, '_blank')}
                          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand)]/10 rounded-lg transition-all"
                          title="View page"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onEdit(page)}
                          className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-brand)]/10 rounded-lg transition-all"
                          title="Edit page"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(page)}
                          className="p-2 text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete page"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Scale className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
                    <p className="text-[var(--text-secondary)]">No legal pages found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Legal Pages"
        data={legalPages}
        dataType="legal"
        fields={[
          { key: 'title', label: 'Title', selected: true },
          { key: 'slug', label: 'Slug', selected: true },
          { key: 'lastModified', label: 'Last Modified', selected: true },
          { key: 'createdAt', label: 'Created At', selected: false },
          { key: 'content', label: 'Content Preview', selected: false }
        ]}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, page: null })}
        onConfirm={confirmDelete}
        title="Delete Legal Page"
        message={`Are you sure you want to delete "${deleteModal.page?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        type="danger"
        icon="delete"
      />
    </div>
  );
}

function DocumentationPanel() {
  const [docs, setDocs] = useState<DocumentationPage[]>([]);
  const [editingDoc, setEditingDoc] = useState<DocumentationPage | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; doc: DocumentationPage | null }>({ isOpen: false, doc: null });
  const [filter, setFilter] = useState<string>('All');

  const loadDocs = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      const response = await fetch(`${API_URL}/documentation/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const resData = await response.json();
        const docsArray = Array.isArray(resData) ? resData : (resData.data || []);
        setDocs(docsArray);
      } else {
        setDocs(getDocumentationPages()); // fallback
      }
    } catch (e) {
      console.error('Fetch docs error', e);
      setDocs(getDocumentationPages()); // fallback
    }
  };

  useEffect(() => {
    loadDocs();
    const interval = setInterval(loadDocs, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCreateNew = () => {
    const newDoc = createDocumentationPage();
    setEditingDoc(newDoc);
    setIsCreatingNew(true);
  };

  const handleSave = async (doc: DocumentationPage) => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

      if (isCreatingNew) {
        const { id, ...createData } = doc;
        await fetch(`${API_URL}/documentation/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(createData)
        });
        saveDocumentationPage(doc); // local fallback
      } else {
        await fetch(`${API_URL}/documentation/${doc.id}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(doc)
        });
        saveDocumentationPage(doc); // local fallback
      }
      
      loadDocs();
      setEditingDoc(null);
      setIsCreatingNew(false);
    } catch (error) {
      console.error('Error saving documentation to backend:', error);
      saveDocumentationPage(doc); // local fallback
      loadDocs();
      setEditingDoc(null);
      setIsCreatingNew(false);
    }
  };

  const handleDelete = (doc: DocumentationPage) => {
    setDeleteModal({ isOpen: true, doc });
  };

  const confirmDelete = async () => {
    if (deleteModal.doc) {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        
        await fetch(`${API_URL}/documentation/${deleteModal.doc.id}/`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (e) {
        console.error('Backend delete failed', e);
      }
      
      try {
        addToTrash('documentation' as any, deleteModal.doc.id, deleteModal.doc);
        deleteDocumentationPage(deleteModal.doc.id);
        loadDocs();
        setDeleteModal({ isOpen: false, doc: null });
      } catch (error) {
        console.error('Error deleting documentation locally:', error);
      }
    }
  };

  const categories = ['All', ...getDocumentationCategories()];
  const filteredDocs = filter === 'All' 
    ? docs 
    : docs.filter(doc => doc.category === filter);

  if (editingDoc) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6">
        <button
          onClick={() => { setEditingDoc(null); setIsCreatingNew(false); }}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Documentation</span>
        </button>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">Title</label>
              <input
                type="text"
                value={editingDoc.title}
                onChange={(e) => setEditingDoc({ ...editingDoc, title: e.target.value })}
                className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">Slug (URL)</label>
              <input
                type="text"
                value={editingDoc.slug}
                onChange={(e) => setEditingDoc({ ...editingDoc, slug: e.target.value })}
                className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">Category</label>
              <select
                value={editingDoc.category}
                onChange={(e) => setEditingDoc({ ...editingDoc, category: e.target.value as DocumentationPage['category'] })}
                className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
              >
                {getDocumentationCategories().map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">Order</label>
              <input
                type="number"
                value={editingDoc.order}
                onChange={(e) => setEditingDoc({ ...editingDoc, order: parseInt(e.target.value) || 1 })}
                className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[var(--text-secondary)] mb-2">Published</label>
              <label className="flex items-center gap-3 mt-2">
                <input
                  type="checkbox"
                  checked={editingDoc.published}
                  onChange={(e) => setEditingDoc({ ...editingDoc, published: e.target.checked })}
                  className="w-5 h-5 rounded border-[var(--border-primary)] text-[var(--bg-brand)] focus:ring-[var(--border-brand)]"
                />
                <span className="text-sm text-[var(--text-secondary)]">Publish this page</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-2">Excerpt</label>
            <textarea
              value={editingDoc.excerpt}
              onChange={(e) => setEditingDoc({ ...editingDoc, excerpt: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--border-brand)] focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--text-secondary)] mb-2">Content</label>
            <RichTextEditor
              content={editingDoc.content}
              onChange={(content) => setEditingDoc({ ...editingDoc, content })}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-[var(--border-primary)]">
            <button
              onClick={() => { setEditingDoc(null); setIsCreatingNew(false); }}
              className="px-6 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-secondary)] transition-all"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSave(editingDoc)}
              className="flex items-center gap-2 px-6 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Save Documentation</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[var(--text-primary)] mb-2">Documentation Pages</h2>
          <p className="text-[var(--text-secondary)]">Manage help documentation and guides</p>
        </div>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Documentation</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === cat
                ? 'bg-[var(--bg-brand)] text-[var(--text-on-brand)]'
                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Documentation List */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        {filteredDocs.length > 0 ? (
          <div className="divide-y divide-[var(--border-primary)]">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="p-4 sm:p-6 hover:bg-[var(--bg-secondary)] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[var(--text-primary)]">{doc.title}</h3>
                      <span className="px-2 py-1 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded text-xs text-[var(--text-secondary)]">
                        {doc.category}
                      </span>
                      {doc.published ? (
                        <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 rounded text-xs">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded text-xs">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">{doc.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                      <span>Updated: {doc.lastUpdated}</span>
                      <span>•</span>
                      <span>Order: {doc.order}</span>
                      <span>•</span>
                      <span>Slug: /{doc.slug}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-primary)]">
                  <button
                    onClick={() => { setEditingDoc(doc); setIsCreatingNew(false); }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(doc)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-secondary)] hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/10 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
            <p className="text-[var(--text-secondary)] mb-2">No documentation pages found</p>
            <p className="text-sm text-[var(--text-tertiary)]">Create your first documentation page to get started</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, doc: null })}
        onConfirm={confirmDelete}
        title="Move Documentation to Trash"
        message={`Are you sure you want to move "${deleteModal.doc?.title}" to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />
    </div>
  );
}

function DemoRequestsPanel() {
  const [demoRequests, setDemoRequests] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; request: any | null }>({ isOpen: false, request: null });
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const loadRequests = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/demo-requests/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const resData = await response.json();
        const rawRequests = Array.isArray(resData) ? resData : (resData.data || []);
        // Normalize: ensure each request has an `id` field (backend may return `_id`)
        const requests = rawRequests.map((r: any) => ({ ...r, id: r.id || r._id }));
        setDemoRequests(requests);
      } else {
        setDemoRequests(getDemoRequests()); // fallback
      }
    } catch (error) {
      console.error('Error fetching demo requests:', error);
      setDemoRequests(getDemoRequests()); // fallback
    }
  };

  useEffect(() => {
    loadRequests();
    
    const interval = setInterval(loadRequests, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (request: any) => {
    setDeleteModal({ isOpen: true, request });
  };

  const confirmDelete = async () => {
    if (deleteModal.request) {
      try {
        // CRITICAL: Add to trash BEFORE removing from active list
        addToTrash('demo', deleteModal.request.id, deleteModal.request);
        removeDemoRequest(deleteModal.request.id);
        
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        try {
          await fetch(`${API_URL}/demo-requests/${deleteModal.request.id}/`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
          });
        } catch (e) {
          console.error('Backend delete failed', e);
        }

        loadRequests();
        setDeleteModal({ isOpen: false, request: null });
      } catch (error) {
        console.error('Error moving demo request to trash:', error);
        alert('Error: Failed to move demo request to trash. Please try again.');
      }
    }
  };

  const handleStatusChange = async (id: number, status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed') => {
    updateDemoStatus(id, status);
    
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      await fetch(`${API_URL}/demo-requests/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
    } catch (error) {
      console.error('Error updating status on backend:', error);
    }

    loadRequests();
  };

  const years = ['2026', '2025', '2024', '2023'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const filteredRequests = demoRequests.filter(request => {
    const dStr = request.date || request.createdAt;
    const requestDate = dStr ? new Date(dStr) : new Date();
    const requestYear = requestDate.getFullYear().toString();
    const requestMonth = requestDate.toLocaleString('en-US', { month: 'long' });
    
    if (requestYear !== selectedYear) return false;
    if (selectedMonth !== 'All' && requestMonth !== selectedMonth) return false;
    return true;
  });

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Filters and Export */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[80px]"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[90px]"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
              {filteredRequests.length} request{filteredRequests.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={openExportModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
            title="Export to Excel"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export to Excel</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Scrollable List */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        <div className="max-h-[600px] overflow-y-auto">
          {filteredRequests.length > 0 ? (
            <div className="divide-y divide-[var(--border-primary)]">
              {filteredRequests.map((request) => (
                <div key={request.id} className="p-4 sm:p-6 hover:bg-[var(--bg-secondary)] transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg text-[var(--text-primary)] mb-1">{request.fullName}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{request.institutionName}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(request.date || request.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[var(--text-tertiary)]">{request.role}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                      request.status === 'Pending' ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-500' :
                      request.status === 'Contacted' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-500' :
                      request.status === 'Scheduled' ? 'bg-green-500/10 border border-green-500/20 text-green-500' :
                      'bg-gray-500/10 border border-gray-500/20 text-gray-500'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="mb-3 text-sm text-[var(--text-secondary)] italic">
                    {request.notes}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <a href={`mailto:${request.email}`} className="flex items-center gap-1.5 hover:text-[var(--text-brand)] transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>{request.email}</span>
                      </a>
                      <a href={`tel:${request.phone}`} className="flex items-center gap-1.5 hover:text-[var(--text-brand)] transition-colors">
                        <PhoneCall className="w-4 h-4" />
                        <span>{request.phone}</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      {request.status === 'Pending' && (
                        <button 
                          onClick={() => handleStatusChange(request.id, 'Contacted')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Contacted</span>
                        </button>
                      )}
                      {request.status === 'Contacted' && (
                        <button 
                          onClick={() => handleStatusChange(request.id, 'Scheduled')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Scheduled</span>
                        </button>
                      )}
                      {request.status === 'Scheduled' && (
                        <button 
                          onClick={() => handleStatusChange(request.id, 'Completed')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Completed</span>
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(request)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-secondary)] hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/10 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <PhoneCall className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
              <p className="text-[var(--text-secondary)]">No demo requests for selected period</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, request: null })}
        onConfirm={confirmDelete}
        title="Move Demo Request to Trash"
        message={`Are you sure you want to move the demo request from "${deleteModal.request?.name}" (${deleteModal.request?.institution}) to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Demo Requests"
        data={demoRequests}
        dataType="demo"
        fields={[
          { key: 'fullname', label: 'fullname', selected: true },
          { key: 'institutionName', label: 'institutionName', selected: true },
          { key: 'email', label: 'Email', selected: true },
          { key: 'phone', label: 'Phone', selected: true },
          { key: 'role', label: 'Role', selected: true },
          { key: 'date', label: 'Date', selected: true },
          { key: 'status', label: 'Status', selected: true },
          { key: 'notes', label: 'Notes', selected: true }
        ]}
      />
    </div>
  );
}

function ContactMessagesPanel() {
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; message: any | null }>({ isOpen: false, message: null });
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const loadMessages = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/contact/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const resData = await response.json();
        const rawMsgs = Array.isArray(resData) ? resData : (resData.data || []);
        // Normalize: ensure each message has an `id` field (backend may return `_id`)
        const msgs = rawMsgs.map((m: any) => ({ ...m, id: m.id || m._id }));
        setMessages(msgs);
      } else {
        setMessages(getContactMessages()); // fallback
      }
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      setMessages(getContactMessages()); // fallback
    }
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (message: any) => {
    setDeleteModal({ isOpen: true, message });
  };

  const confirmDelete = async () => {
    if (deleteModal.message) {
      try {
        // CRITICAL: Add to trash BEFORE removing from active list
        addToTrash('contact', deleteModal.message.id, deleteModal.message);
        removeContactMessage(deleteModal.message.id);

        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL;
        try {
          await fetch(`${API_URL}/contact/${deleteModal.message.id}/`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
          });
        } catch (e) {
          console.error('Backend delete failed', e);
        }

        loadMessages();
        setDeleteModal({ isOpen: false, message: null });
      } catch (error) {
        console.error('Error moving contact message to trash:', error);
        alert('Error: Failed to move message to trash. Please try again.');
      }
    }
  };

  const handleStatusChange = async (id: number, status: 'New' | 'Replied') => {
    updateMessageStatus(id, status);

    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL;
      await fetch(`${API_URL}/contact/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
    } catch (error) {
      console.error('Error updating status on backend:', error);
    }

    loadMessages();
  };

  const years = ['2026', '2025', '2024', '2023'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const filteredMessages = messages.filter(message => {
    const dStr = message.date || message.createdAt || message.created_at;
    const messageDate = dStr ? new Date(dStr) : new Date();
    const messageYear = messageDate.getFullYear().toString();
    const messageMonth = messageDate.toLocaleString('en-US', { month: 'long' });
    
    if (messageYear !== selectedYear) return false;
    if (selectedMonth !== 'All' && messageMonth !== selectedMonth) return false;
    return true;
  });

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Filters and Export */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[80px]"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[90px]"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
              {filteredMessages.length} message{filteredMessages.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={openExportModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
            title="Export to Excel"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export to Excel</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Scrollable Messages List */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        <div className="max-h-[600px] overflow-y-auto">
          {filteredMessages.length > 0 ? (
            <div className="divide-y divide-[var(--border-primary)]">
              {filteredMessages.map((message) => (
                <div key={message.id} className="p-4 sm:p-6 hover:bg-[var(--bg-secondary)] transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg text-[var(--text-primary)] mb-1">
                        {message.name || (message.firstName ? `${message.firstName} ${message.lastName || ''}`.trim() : 'Anonymous')}
                      </h3>
                      <p className="text-[var(--text-secondary)] mb-3">{message.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)] mb-4">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${message.email}`} className="hover:text-[var(--text-brand)] transition-colors">
                            {message.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(message.date || message.createdAt || message.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-4">
                        <p className="text-sm text-[var(--text-secondary)]">{message.message || message.body || message.content}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ml-4 whitespace-nowrap ${
                      message.status === 'New' ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-500' :
                      'bg-green-500/10 border border-green-500/20 text-green-500'
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--border-primary)]">
                    {message.status === 'New' && (
                      <button 
                        onClick={() => handleStatusChange(message.id, 'Replied')}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                      >
                        <Check className="w-4 h-4" />
                        <span>Mark as Replied</span>
                      </button>
                    )}
                    <button 
                      onClick={() => handleDelete(message)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-secondary)] hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
              <p className="text-[var(--text-secondary)]">No contact messages for selected period</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, message: null })}
        onConfirm={confirmDelete}
        title="Move Contact Message to Trash"
        message={`Are you sure you want to move the message from "${deleteModal.message?.name}" to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Contact Messages"
        data={messages}
        dataType="contact"
        fields={[
          { key: 'name', label: 'Name', selected: true },
          { key: 'email', label: 'Email', selected: true },
          { key: 'subject', label: 'Subject', selected: true },
          { key: 'message', label: 'Message', selected: true },
          { key: 'date', label: 'Date', selected: true },
          { key: 'status', label: 'Status', selected: true }
        ]}
      />
    </div>
  );
}

function ReferralsPanel() {
  const [referrals, setReferrals] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; referral: any | null }>({ isOpen: false, referral: null });
  const [exportModalOpen, setExportModalOpen] = useState(false);

  useEffect(() => {
    const loadReferrals = () => {
      setReferrals(getReferrals());
    };
    loadReferrals();
    
    const interval = setInterval(loadReferrals, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (referral: any) => {
    setDeleteModal({ isOpen: true, referral });
  };

  const confirmDelete = () => {
    if (deleteModal.referral) {
      try {
        // CRITICAL: Add to trash BEFORE removing from active list
        addToTrash('referral', deleteModal.referral.id, deleteModal.referral);
        removeReferral(deleteModal.referral.id);
        setReferrals(getReferrals());
        setDeleteModal({ isOpen: false, referral: null });
      } catch (error) {
        console.error('Error moving referral to trash:', error);
        alert('Error: Failed to move referral to trash. Please try again.');
      }
    }
  };

  const handleStatusChange = (id: number, status: 'Pending' | 'Contacted' | 'Scheduled' | 'Completed') => {
    updateReferralStatus(id, status);
    setReferrals(getReferrals());
  };

  const years = ['2026', '2025', '2024', '2023'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const filteredReferrals = referrals.filter(referral => {
    const referralDate = new Date(referral.date);
    const referralYear = referralDate.getFullYear().toString();
    const referralMonth = referralDate.toLocaleString('en-US', { month: 'long' });
    
    if (referralYear !== selectedYear) return false;
    if (selectedMonth !== 'All' && referralMonth !== selectedMonth) return false;
    return true;
  });

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Filters and Export */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[80px]"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[90px]"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
              {filteredReferrals.length} referral{filteredReferrals.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={openExportModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
            title="Export to Excel"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export to Excel</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Scrollable Referrals List */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        <div className="max-h-[600px] overflow-y-auto">
          {filteredReferrals.length > 0 ? (
            <div className="divide-y divide-[var(--border-primary)]">
              {filteredReferrals.map((referral) => (
                <div key={referral.id} className="p-4 sm:p-6 hover:bg-[var(--bg-secondary)] transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-lg text-[var(--text-primary)] mb-1">{referral.institutionName}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            <span>{referral.institutionType}</span>
                          </div>
                          <span>•</span>
                          <span>{referral.country}</span>
                          {referral.websiteUrl && (
                            <>
                              <span>•</span>
                              <a href={referral.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--text-brand)] hover:underline flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                <span>Website</span>
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Referrer Information */}
                      {referral.referrerName && (
                        <div className="mb-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg p-3">
                          <p className="text-sm text-[var(--text-tertiary)] mb-1">Referred by:</p>
                          <p className="text-sm text-[var(--text-primary)] mb-1">{referral.referrerName}</p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
                            {referral.referrerEmail && (
                              <a href={`mailto:${referral.referrerEmail}`} className="hover:text-[var(--text-brand)] transition-colors flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                <span>{referral.referrerEmail}</span>
                              </a>
                            )}
                            {referral.referrerRole && (
                              <>
                                <span>•</span>
                                <span>{referral.referrerRole}</span>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {referral.notes && (
                        <div className="mt-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-3">
                          <p className="text-sm text-[var(--text-tertiary)] mb-1">Additional notes:</p>
                          <p className="text-sm text-[var(--text-secondary)]">{referral.notes}</p>
                        </div>
                      )}
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ml-4 whitespace-nowrap ${
                      referral.status === 'Pending' ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-500' :
                      referral.status === 'Contacted' ? 'bg-blue-500/10 border border-blue-500/20 text-blue-500' :
                      referral.status === 'Scheduled' ? 'bg-green-500/10 border border-green-500/20 text-green-500' :
                      'bg-gray-500/10 border border-gray-500/20 text-gray-500'
                    }`}>
                      {referral.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                      <Calendar className="w-4 h-4" />
                      <span>{referral.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {referral.status === 'Pending' && (
                        <button 
                          onClick={() => handleStatusChange(referral.id, 'Contacted')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Contacted</span>
                        </button>
                      )}
                      {referral.status === 'Contacted' && (
                        <button 
                          onClick={() => handleStatusChange(referral.id, 'Scheduled')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Scheduled</span>
                        </button>
                      )}
                      {referral.status === 'Scheduled' && (
                        <button 
                          onClick={() => handleStatusChange(referral.id, 'Completed')}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all text-sm"
                        >
                          <Check className="w-4 h-4" />
                          <span>Mark as Completed</span>
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(referral)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-secondary)] hover:text-red-500 hover:border-red-500/20 hover:bg-red-500/10 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
              <p className="text-[var(--text-secondary)]">No referrals for selected period</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, referral: null })}
        onConfirm={confirmDelete}
        title="Move Referral to Trash"
        message={`Are you sure you want to move the referral from "${deleteModal.referral?.referrerName}" for "${deleteModal.referral?.institutionName}" to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Referrals"
        data={referrals}
        dataType="referral"
        fields={[
          { key: 'referrerName', label: 'Referrer Name', selected: true },
          { key: 'referrerEmail', label: 'Referrer Email', selected: true },
          { key: 'referrerRole', label: 'Referrer Role', selected: true },
          { key: 'institutionName', label: 'Institution Name', selected: true },
          { key: 'institutionType', label: 'Institution Type', selected: true },
          { key: 'country', label: 'Country', selected: true },
          { key: 'websiteUrl', label: 'Website URL', selected: false },
          { key: 'notes', label: 'Notes', selected: true },
          { key: 'date', label: 'Date', selected: true },
          { key: 'status', label: 'Status', selected: true }
        ]}
      />
    </div>
  );
}

function NewsletterPanel() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; subscriber: any | null }>({ isOpen: false, subscriber: null });
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const loadSubscribers = async () => {
    try {
      const token = localStorage.getItem('adminAuthToken');
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      const response = await fetch(`${API_URL}/newsletter/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const resData = await response.json();
        const subs = Array.isArray(resData) ? resData : (resData.data || []);
        setSubscribers(subs);
      } else {
        setSubscribers(getSubscribers());
      }
    } catch (e) {
      console.error('Fetch subscribers error', e);
      setSubscribers(getSubscribers());
    }
  };

  useEffect(() => {
    loadSubscribers();
    
    const interval = setInterval(loadSubscribers, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (subscriber: any) => {
    setDeleteModal({ isOpen: true, subscriber });
  };

  const confirmDelete = async () => {
    if (deleteModal.subscriber) {
      try {
        const token = localStorage.getItem('adminAuthToken');
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
        await fetch(`${API_URL}/newsletter/${deleteModal.subscriber.id}/`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (e) {
        console.error('Backend delete failed', e);
      }

      try {
        // CRITICAL: Add to trash BEFORE removing from active list
        addToTrash('newsletter', deleteModal.subscriber.id, deleteModal.subscriber);
        removeSubscriber(deleteModal.subscriber.id);
        loadSubscribers();
        setDeleteModal({ isOpen: false, subscriber: null });
      } catch (error) {
        console.error('Error moving subscriber to trash:', error);
        alert('Error: Failed to move subscriber to trash. Please try again.');
      }
    }
  };

  const years = ['2026', '2025', '2024', '2023'];
  const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const filteredSubscribers = subscribers.filter(sub => {
    const subDate = new Date(sub.date);
    const subYear = subDate.getFullYear().toString();
    const subMonth = subDate.toLocaleString('en-US', { month: 'long' });
    
    if (subYear !== selectedYear) return false;
    if (selectedMonth !== 'All' && subMonth !== selectedMonth) return false;
    return true;
  });

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Filters and Export */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Filter className="w-4 h-4 text-[var(--text-secondary)] hidden sm:block" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[80px]"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-2 sm:px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] text-sm focus:border-[var(--border-brand)] focus:outline-none min-w-[90px]"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">
              {filteredSubscribers.length} subscriber{filteredSubscribers.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={openExportModal}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all"
            title="Export to Excel"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export to Excel</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl overflow-hidden">
        {filteredSubscribers.length > 0 ? (
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Name</th>
                  <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Email</th>
                  <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Source</th>
                  <th className="px-6 py-4 text-left text-sm text-[var(--text-secondary)]">Subscribed</th>
                  <th className="px-6 py-4 text-right text-sm text-[var(--text-secondary)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b border-[var(--border-primary)] hover:bg-[var(--bg-secondary)] transition-colors">
                    <td className="px-6 py-4 text-[var(--text-primary)]">{subscriber.name}</td>
                    <td className="px-6 py-4">
                      <a href={`mailto:${subscriber.email}`} className="text-[var(--text-brand)] hover:underline">
                        {subscriber.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">{subscriber.source}</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)]">{subscriber.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleDelete(subscriber)}
                          className="p-2 text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Unsubscribe"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-[var(--text-tertiary)] opacity-50" />
            <p className="text-[var(--text-secondary)] mb-2">No newsletter subscribers for selected period</p>
            <p className="text-sm text-[var(--text-tertiary)]">Try selecting a different time period</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, subscriber: null })}
        onConfirm={confirmDelete}
        title="Move Subscriber to Trash"
        message={`Are you sure you want to move "${deleteModal.subscriber?.name}" (${deleteModal.subscriber?.email}) to trash? You can restore it later from the trash panel.`}
        confirmText="Move to Trash"
        type="danger"
        icon="delete"
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Newsletter Subscribers"
        data={subscribers}
        dataType="newsletter"
        fields={[
          { key: 'name', label: 'Name', selected: true },
          { key: 'email', label: 'Email', selected: true },
          { key: 'source', label: 'Source', selected: true },
          { key: 'date', label: 'Subscribed Date', selected: true },
          { key: 'active', label: 'Active Status', selected: false }
        ]}
      />
    </div>
  );
}