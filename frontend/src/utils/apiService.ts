/**
 * API Service Layer
 * 
 * This file provides service methods that interact with the backend API.
 * Each service method handles the communication with the backend and falls back
 * to localStorage if the backend is not configured or unavailable.
 * 
 * To enable backend API:
 * 1. Set USE_BACKEND_API to true
 * 2. Configure your API_BASE_URL in /utils/api.ts
 * 3. Ensure your Node.js backend is running
 */

import { apiGet, apiPost, apiPut, apiDelete, API_ENDPOINTS, handleApiError } from './api';
import { BlogPost } from './blogData';
import { DocumentationPage } from './documentationData';
import { LegalPage } from './legalData';

// ============================================
// CONFIGURATION
// ============================================

/**
 * Enable/Disable Backend API
 * 
 * Set to true to use backend API (requires backend server running)
 * Set to false to use localStorage only
 */
export const USE_BACKEND_API = false;

// ============================================
// BLOG POST API SERVICES
// ============================================

export const blogApiService = {
  /**
   * Get all blog posts
   */
  getAll: async (): Promise<BlogPost[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: BlogPost[] }>(API_ENDPOINTS.BLOG.LIST);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch blog posts from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Get blog post by ID
   */
  getById: async (id: number): Promise<BlogPost> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: BlogPost }>(API_ENDPOINTS.BLOG.GET(id));
      return response.data;
    } catch (error) {
      console.error('Failed to fetch blog post from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Get blog post by slug
   */
  getBySlug: async (slug: string): Promise<BlogPost> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: BlogPost }>(API_ENDPOINTS.BLOG.GET_BY_SLUG(slug));
      return response.data;
    } catch (error) {
      console.error('Failed to fetch blog post from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Create new blog post
   */
  create: async (post: Omit<BlogPost, 'id'>): Promise<BlogPost> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: BlogPost }>(API_ENDPOINTS.BLOG.CREATE, post);
      return response.data;
    } catch (error) {
      console.error('Failed to create blog post via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Update blog post
   */
  update: async (id: number, post: Partial<BlogPost>): Promise<BlogPost> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPut<{ data: BlogPost }>(API_ENDPOINTS.BLOG.UPDATE(id), post);
      return response.data;
    } catch (error) {
      console.error('Failed to update blog post via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Delete blog post
   */
  delete: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.BLOG.DELETE(id));
    } catch (error) {
      console.error('Failed to delete blog post via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Set featured blog post
   */
  setFeatured: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiPost(API_ENDPOINTS.BLOG.SET_FEATURED(id), {});
    } catch (error) {
      console.error('Failed to set featured blog post via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// DOCUMENTATION API SERVICES
// ============================================

export const documentationApiService = {
  /**
   * Get all documentation pages
   */
  getAll: async (): Promise<DocumentationPage[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: DocumentationPage[] }>(API_ENDPOINTS.DOCUMENTATION.LIST);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch documentation from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Get documentation page by ID
   */
  getById: async (id: number): Promise<DocumentationPage> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: DocumentationPage }>(
        API_ENDPOINTS.DOCUMENTATION.GET(id)
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch documentation from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Get documentation page by slug
   */
  getBySlug: async (slug: string): Promise<DocumentationPage> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: DocumentationPage }>(
        API_ENDPOINTS.DOCUMENTATION.GET_BY_SLUG(slug)
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch documentation from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Create new documentation page
   */
  create: async (page: Omit<DocumentationPage, 'id'>): Promise<DocumentationPage> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: DocumentationPage }>(
        API_ENDPOINTS.DOCUMENTATION.CREATE,
        page
      );
      return response.data;
    } catch (error) {
      console.error('Failed to create documentation via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Update documentation page
   */
  update: async (id: number, page: Partial<DocumentationPage>): Promise<DocumentationPage> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPut<{ data: DocumentationPage }>(
        API_ENDPOINTS.DOCUMENTATION.UPDATE(id),
        page
      );
      return response.data;
    } catch (error) {
      console.error('Failed to update documentation via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Delete documentation page
   */
  delete: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.DOCUMENTATION.DELETE(id));
    } catch (error) {
      console.error('Failed to delete documentation via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// NEWSLETTER API SERVICES
// ============================================

export interface NewsletterSubscriber {
  id: number;
  email: string;
  subscribedAt: string;
}

export const newsletterApiService = {
  /**
   * Get all newsletter subscribers
   */
  getAll: async (): Promise<NewsletterSubscriber[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: NewsletterSubscriber[] }>(
        API_ENDPOINTS.NEWSLETTER.LIST
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch newsletter subscribers from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Subscribe to newsletter
   */
  subscribe: async (email: string): Promise<NewsletterSubscriber> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: NewsletterSubscriber }>(
        API_ENDPOINTS.NEWSLETTER.SUBSCRIBE,
        { email }
      );
      return response.data;
    } catch (error) {
      console.error('Failed to subscribe to newsletter via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Unsubscribe from newsletter
   */
  unsubscribe: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.NEWSLETTER.UNSUBSCRIBE(id));
    } catch (error) {
      console.error('Failed to unsubscribe from newsletter via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// DEMO REQUEST API SERVICES
// ============================================

export interface DemoRequest {
  id: number;
  name: string;
  email: string;
  institution: string;
  role?: string;
  message?: string;
  status: 'pending' | 'contacted' | 'qualified' | 'rejected';
  createdAt: string;
}

export const demoApiService = {
  /**
   * Get all demo requests
   */
  getAll: async (): Promise<DemoRequest[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: DemoRequest[] }>(API_ENDPOINTS.DEMO.LIST);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch demo requests from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Create demo request
   */
  create: async (request: Omit<DemoRequest, 'id' | 'createdAt' | 'status'>): Promise<DemoRequest> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: DemoRequest }>(API_ENDPOINTS.DEMO.CREATE, request);
      return response.data;
    } catch (error) {
      console.error('Failed to create demo request via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Update demo request status
   */
  updateStatus: async (id: number, status: DemoRequest['status']): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiPost(API_ENDPOINTS.DEMO.UPDATE_STATUS(id), { status });
    } catch (error) {
      console.error('Failed to update demo request status via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Delete demo request
   */
  delete: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.DEMO.DELETE(id));
    } catch (error) {
      console.error('Failed to delete demo request via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// CONTACT MESSAGE API SERVICES
// ============================================

export interface ContactMessage {
  id: number;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'responded';
  createdAt: string;
}

export const contactApiService = {
  /**
   * Get all contact messages
   */
  getAll: async (): Promise<ContactMessage[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: ContactMessage[] }>(API_ENDPOINTS.CONTACT.LIST);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch contact messages from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Create contact message
   */
  create: async (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Promise<ContactMessage> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: ContactMessage }>(
        API_ENDPOINTS.CONTACT.CREATE,
        message
      );
      return response.data;
    } catch (error) {
      console.error('Failed to create contact message via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Update contact message status
   */
  updateStatus: async (id: number, status: ContactMessage['status']): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiPost(API_ENDPOINTS.CONTACT.UPDATE_STATUS(id), { status });
    } catch (error) {
      console.error('Failed to update contact message status via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Delete contact message
   */
  delete: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.CONTACT.DELETE(id));
    } catch (error) {
      console.error('Failed to delete contact message via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// REFERRAL API SERVICES
// ============================================

export interface Referral {
  id: number;
  referrerName: string;
  referrerEmail: string;
  referrerInstitution: string;
  refereeName: string;
  refereeEmail: string;
  refereeInstitution: string;
  message?: string;
  status: 'pending' | 'contacted' | 'qualified' | 'rejected';
  createdAt: string;
}

export const referralApiService = {
  /**
   * Get all referrals
   */
  getAll: async (): Promise<Referral[]> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiGet<{ data: Referral[] }>(API_ENDPOINTS.REFERRAL.LIST);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch referrals from API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Create referral
   */
  create: async (referral: Omit<Referral, 'id' | 'createdAt' | 'status'>): Promise<Referral> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: Referral }>(API_ENDPOINTS.REFERRAL.CREATE, referral);
      return response.data;
    } catch (error) {
      console.error('Failed to create referral via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Update referral status
   */
  updateStatus: async (id: number, status: Referral['status']): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiPost(API_ENDPOINTS.REFERRAL.UPDATE_STATUS(id), { status });
    } catch (error) {
      console.error('Failed to update referral status via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Delete referral
   */
  delete: async (id: number): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiDelete(API_ENDPOINTS.REFERRAL.DELETE(id));
    } catch (error) {
      console.error('Failed to delete referral via API:', handleApiError(error));
      throw error;
    }
  },
};

// ============================================
// AUTHENTICATION API SERVICES
// ============================================

export interface AuthResponse {
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
}

export const authApiService = {
  /**
   * Admin login
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      const response = await apiPost<{ data: AuthResponse }>(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });

      // Store token in localStorage
      if (response.data.token) {
        localStorage.setItem('adminAuthToken', response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error('Failed to login via API:', handleApiError(error));
      throw error;
    }
  },

  /**
   * Admin logout
   */
  logout: async (): Promise<void> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiPost(API_ENDPOINTS.AUTH.LOGOUT, {});
      localStorage.removeItem('adminAuthToken');
    } catch (error) {
      console.error('Failed to logout via API:', handleApiError(error));
      // Remove token anyway
      localStorage.removeItem('adminAuthToken');
      throw error;
    }
  },

  /**
   * Verify authentication token
   */
  verify: async (): Promise<boolean> => {
    if (!USE_BACKEND_API) {
      throw new Error('Backend API is disabled. Using localStorage.');
    }

    try {
      await apiGet(API_ENDPOINTS.AUTH.VERIFY);
      return true;
    } catch (error) {
      console.error('Token verification failed:', handleApiError(error));
      localStorage.removeItem('adminAuthToken');
      return false;
    }
  },
};
