import { motion } from 'motion/react';
import { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';

export default function AdminLogin({ onNavigate }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
          email: email // Send both formats just in case
        }),
      });

      if (!response.ok) {
        let errMessage = 'Invalid admin credentials. Please try again.';
        try {
          const errData = await response.json();
          if (errData.detail) errMessage = errData.detail;
          else if (errData.message) errMessage = errData.message;
          else if (errData.error) errMessage = errData.error;
        } catch {
          // ignore parsing error
        }
        throw new Error(errMessage);
      }

      const responseData = await response.json();
      
      // Store token depending on common API response formats
      const token = responseData.data.accessToken || responseData.token || (responseData.data && responseData.data.token);
      if (token) {
        localStorage.setItem('adminAuthToken', token);
      }

      // Set authentication state in localStorage
      localStorage.setItem('adminAuthenticated', 'true');
      localStorage.setItem('adminLoginTime', Date.now().toString());
      
      // Navigate to admin dashboard
      onNavigate('admin-dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout onNavigate={onNavigate} currentPage="">
      <SEO
        title="Admin Login"
        description="Admin portal for managing ThesisFlow content and requests"
        canonicalUrl="https://thesisflow.com/admin-login"
      />
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--bg-brand-subtle)] rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-[var(--text-brand)]" />
            </div>
            <h1 className="text-2xl text-[var(--text-primary)] mb-2">
              Admin Portal
            </h1>
            <p className="text-[var(--text-secondary)]">
              Manage blog posts and institutional requests
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-500">{error}</p>
                </motion.div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="admin-email" className="block text-sm text-[var(--text-primary)] mb-2">
                  Username
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="admin-password" className="block text-sm text-[var(--text-primary)] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-12 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--border-brand)] focus:ring-2 focus:ring-[var(--bg-brand-subtle)] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Sign In to Admin Portal</span>
                  </>
                )}
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
              <div className="flex items-start gap-3 text-sm text-[var(--text-tertiary)]">
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>
                  This is a secure admin portal. Access is restricted to authorized MIGRI Technologies personnel only.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Site */}
          <div className="text-center mt-6">
            <button
              onClick={() => onNavigate('home')}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors"
            >
              ← Back to ThesisFlow
            </button>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}