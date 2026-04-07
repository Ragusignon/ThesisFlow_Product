import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, Users, Clock, Shield, ArrowLeft, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Tf1 from './imports/Tf1';
import { useTheme } from './components/ThemeProvider';

export default function Login({ onNavigate }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Marketing Content (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[var(--bg-secondary)]">
        {/* Clean gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A5]/5 via-transparent to-[#00A7A5]/10"></div>
        
        {/* Animated gradient orbs - more subtle */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00A7A5]/8 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#00A7A5]/6 to-transparent rounded-full blur-3xl"
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(var(--border-primary) 1px, transparent 1px), linear-gradient(to right, var(--border-primary) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>

        <div className="relative z-10 flex flex-col justify-center max-w-xl mx-auto p-12">
          {/* New Feature Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand)]/10 backdrop-blur-sm border border-[var(--border-brand-subtle)] rounded-full mb-8 self-start"
          >
            <div className="w-2 h-2 bg-[var(--text-brand)] rounded-full"></div>
            <span className="text-[var(--text-brand)] text-sm">Just Launched</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-4xl text-[var(--text-primary)] mb-6 leading-tight"
          >
            Streamlined thesis workflows for modern institutions
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed"
          >
            Replace 30-year-old email-based processes with automated workflows, real-time collaboration, and institutional-grade security.
          </motion.p>

          {/* Features List */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-12"
          >
            {[
              'Lightning-fast submission processing',
              'Advanced review system with no paperwork',
              'Enterprise-grade security & compliance',
              'Seamless institutional collaboration'
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8"
          >
            <div>
              <div className="text-3xl text-[var(--text-primary)] mb-1">2026</div>
              <div className="text-[var(--text-tertiary)] text-sm">Launched</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--text-primary)] mb-1">99.9%</div>
              <div className="text-[var(--text-tertiary)] text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl text-[var(--text-primary)] mb-1">24/7</div>
              <div className="text-[var(--text-tertiary)] text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form (Dark) */}
      <div className="w-full lg:w-1/2 bg-[var(--bg-primary)] flex flex-col justify-between p-8 lg:p-12 relative border-l border-[var(--border-primary)]">
        {/* Top Bar with Back Button and Theme Toggle */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </motion.button>

          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-brand-subtle)] transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex justify-center mb-8">
                <button onClick={() => onNavigate('home')} className="inline-block">
                  <div className="w-[186px] h-[30px] overflow-hidden">
                    <div className="w-[195px] h-[30px]">
                      <Tf1 />
                    </div>
                  </div>
                </button>
              </div>
              <h1 className="text-3xl text-[var(--text-primary)] mb-2 text-center">
                Welcome back
              </h1>
              <p className="text-[var(--text-secondary)] text-center">
                Sign in to continue to ThesisFlow
              </p>
            </motion.div>

            {/* Social Login Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 mb-6"
            >
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-transparent border border-[var(--border-primary)] rounded-lg hover:bg-[var(--bg-secondary)] hover:border-[var(--border-brand-subtle)] transition-all group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-[var(--text-primary)]">Continue with Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-transparent border border-[var(--border-primary)] rounded-lg hover:bg-[var(--bg-secondary)] hover:border-[var(--border-brand-subtle)] transition-all group">
                <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                  <path d="M0 0h9.996v9.996H0V0z" fill="#F25022"/>
                  <path d="M10.71 0h9.996v9.996H10.71V0z" fill="#7FBA00"/>
                  <path d="M0 10.71h9.996v9.996H0V10.71z" fill="#00A4EF"/>
                  <path d="M10.71 10.71h9.996v9.996H10.71V10.71z" fill="#FFB900"/>
                </svg>
                <span className="text-[var(--text-primary)]">Continue with Microsoft</span>
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border-primary)]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-[var(--bg-primary)] text-[var(--text-tertiary)] uppercase tracking-wider">Or continue with email</span>
              </div>
            </motion.div>

            {/* Login Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Email Input */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[var(--text-tertiary)]" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent outline-none transition-all placeholder-[var(--text-tertiary)]"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm text-[var(--text-secondary)]">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-sm text-[var(--text-brand)] hover:text-[var(--text-brand-hover)] transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[var(--text-tertiary)]" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent outline-none transition-all placeholder-[var(--text-tertiary)]"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[var(--text-brand)] bg-[var(--bg-secondary)] border-[var(--border-primary)] rounded focus:ring-[var(--text-brand)] focus:ring-2"
                  id="remember-me"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-[var(--text-secondary)]">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Sign in</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.form>

            {/* Sign Up Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-[var(--text-secondary)] text-sm">
                Want to try it out?{' '}
                <a
                  href="https://demo.thesisflow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-brand)] hover:text-[var(--text-brand-hover)] transition-colors"
                >
                  Login to demo
                </a>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-[var(--text-tertiary)] text-sm"
        >
          <Shield className="w-4 h-4" />
          <span>256-bit SSL Encryption</span>
        </motion.div>
      </div>
    </div>
  );
}