/**
 * API Configuration and HTTP Client
 * 
 * This file provides the backend API connection layer.
 * Configure your API_BASE_URL to connect to your Node.js backend.
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

/**
 * Backend API Base URL
 * 
 * Development: Set to your local backend (e.g., 'http://localhost:3001/api')
 * Production: Set to your production API endpoint
 */
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

/**
 * API timeout in milliseconds
 */
const API_TIMEOUT = 30000; // 30 seconds

// ============================================
// HTTP CLIENT
// ============================================

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

/**
 * Generic API request handler with timeout support
 */
export const apiRequest = async <T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  const {
    method = 'GET',
    headers = {},
    body,
    timeout = API_TIMEOUT,
  } = options;

  // Get authentication token from localStorage
  const token = localStorage.getItem('adminAuthToken');

  // Build request headers
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Add auth token if available
  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Build request config
  const requestConfig: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // Add body for POST/PUT/PATCH requests
  if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
    requestConfig.body = JSON.stringify(body);
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  requestConfig.signal = controller.signal;

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestConfig);
    clearTimeout(timeoutId);

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || errorData.error || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    // Parse and return JSON response
    const data = await response.json();
    return data;
  } catch (error: any) {
    clearTimeout(timeoutId);

    // Handle timeout
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }

    // Handle network errors
    if (error.message === 'Failed to fetch') {
      throw new Error('Network error - please check your connection and ensure backend is running');
    }

    // Re-throw other errors
    throw error;
  }
};

// ============================================
// CONVENIENCE METHODS
// ============================================

/**
 * GET request
 */
export const apiGet = <T = any>(endpoint: string, headers?: Record<string, string>): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'GET', headers });
};

/**
 * POST request
 */
export const apiPost = <T = any>(
  endpoint: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'POST', body, headers });
};

/**
 * PUT request
 */
export const apiPut = <T = any>(
  endpoint: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'PUT', body, headers });
};

/**
 * PATCH request
 */
export const apiPatch = <T = any>(
  endpoint: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'PATCH', body, headers });
};

/**
 * DELETE request
 */
export const apiDelete = <T = any>(endpoint: string, headers?: Record<string, string>): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'DELETE', headers });
};

// ============================================
// API ENDPOINTS
// ============================================

/**
 * All backend API endpoints
 * Update these to match your backend route structure
 */
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    VERIFY: '/auth/verify',
    REFRESH: '/auth/refresh',
  },

  // Blog Posts
  BLOG: {
    LIST: '/blog',
    GET: (id: number | string) => `/blog/${id}`,
    GET_BY_SLUG: (slug: string) => `/blog/slug/${slug}`,
    CREATE: '/blog',
    UPDATE: (id: number | string) => `/blog/${id}`,
    DELETE: (id: number | string) => `/blog/${id}`,
    SET_FEATURED: (id: number | string) => `/blog/${id}/featured`,
  },

  // Documentation
  DOCUMENTATION: {
    LIST: '/documentation',
    GET: (id: number | string) => `/documentation/${id}`,
    GET_BY_SLUG: (slug: string) => `/documentation/slug/${slug}`,
    CREATE: '/documentation',
    UPDATE: (id: number | string) => `/documentation/${id}`,
    DELETE: (id: number | string) => `/documentation/${id}`,
    CATEGORIES: '/documentation/categories',
  },

  // Legal Pages
  LEGAL: {
    LIST: '/legal',
    GET: (id: string) => `/legal/${id}`,
    UPDATE: (id: string) => `/legal/${id}`,
  },

  // Newsletter Subscribers
  NEWSLETTER: {
    LIST: '/newsletter',
    SUBSCRIBE: '/newsletter/subscribe',
    UNSUBSCRIBE: (id: number | string) => `/newsletter/${id}`,
    EXPORT: '/newsletter/export',
  },

  // Demo Requests
  DEMO: {
    LIST: '/demo',
    CREATE: '/demo',
    GET: (id: number | string) => `/demo/${id}`,
    UPDATE_STATUS: (id: number | string) => `/demo/${id}/status`,
    DELETE: (id: number | string) => `/demo/${id}`,
    EXPORT: '/demo/export',
  },

  // Contact Messages
  CONTACT: {
    LIST: '/contact',
    CREATE: '/contact',
    GET: (id: number | string) => `/contact/${id}`,
    UPDATE_STATUS: (id: number | string) => `/contact/${id}/status`,
    DELETE: (id: number | string) => `/contact/${id}`,
    EXPORT: '/contact/export',
  },

  // Referrals
  REFERRAL: {
    LIST: '/referral',
    CREATE: '/referral',
    GET: (id: number | string) => `/referral/${id}`,
    UPDATE_STATUS: (id: number | string) => `/referral/${id}/status`,
    DELETE: (id: number | string) => `/referral/${id}`,
    EXPORT: '/referral/export',
  },

  // Trash
  TRASH: {
    LIST: '/trash',
    RESTORE: (id: number | string) => `/trash/${id}/restore`,
    DELETE_PERMANENT: (id: number | string) => `/trash/${id}`,
    EMPTY: '/trash/empty',
  },
};

// ============================================
// ERROR HANDLING
// ============================================

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: any): string => {
  if (error instanceof ApiError) {
    return error.message;
  }

  if (error.message) {
    return error.message;
  }

  return 'An unexpected error occurred. Please try again.';
};
