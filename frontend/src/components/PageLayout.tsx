import { motion } from 'motion/react';
import { Menu, X, Linkedin, Twitter, Sun, Moon } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import TfLogo from '../imports/TfLogo1-6052-400';
import TfLogoFooter from '../imports/TfLogo1-6052-400';

interface PageLayoutProps {
  children: ReactNode;
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export default function PageLayout({ children, onNavigate, currentPage }: PageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }
    setIsThemeLoaded(true);
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Use callback to ensure we're working with the latest state
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-transparent flex flex-col">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        onNavigate={onNavigate} 
        currentPage={currentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function Navigation({ mobileMenuOpen, setMobileMenuOpen, onNavigate, currentPage, theme, toggleTheme }: any) {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)] bg-opacity-95 backdrop-blur-sm border-b border-[var(--border-primary)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="w-[155px] h-[25px] overflow-hidden">
              <div className="w-[163px] h-[25px]">
                <TfLogo />
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'home' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              Home
            </button>
            <button onClick={() => onNavigate('about')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'about' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              About
            </button>
            <button onClick={() => onNavigate('features')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'features' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              Features
            </button>
            <button onClick={() => onNavigate('pricing')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'pricing' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              Pricing
            </button>
            <button onClick={() => onNavigate('blog')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'blog' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              Blog
            </button>
            <button onClick={() => onNavigate('contact')} className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${currentPage === 'contact' ? 'bg-gradient-to-r from-[#00A7A5] via-[#00C4C1] to-[#00E5E1] bg-clip-text text-transparent font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-brand)]'}`}>
              Contact
            </button>
            <div className="w-px h-5 bg-[var(--border-primary)] mx-2 lg:mx-3"></div>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors duration-300 rounded-lg hover:bg-[var(--bg-secondary)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <button onClick={() => onNavigate('login')} className="px-3 lg:px-4 py-2 text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors duration-300">
              Login
            </button>
            <button
              onClick={() => onNavigate('request-demo')}
              className="group relative ml-1 lg:ml-2 px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg overflow-hidden hover:bg-[var(--bg-brand-hover)] hover:shadow-xl hover:shadow-[var(--text-brand)]/30 transition-all duration-300 whitespace-nowrap"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--border-primary)]"
          >
            <div className="flex flex-col py-4 space-y-1">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Home
              </button>
              <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                About
              </button>
              <button onClick={() => { onNavigate('features'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Features
              </button>
              <button onClick={() => { onNavigate('pricing'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Pricing
              </button>
              <button onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Blog
              </button>
              <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Contact
              </button>
              <div className="h-px bg-[var(--border-primary)] my-2"></div>
              <button onClick={() => { onNavigate('login'); setMobileMenuOpen(false); }} className="px-4 py-3 text-left text-[var(--text-secondary)] hover:text-[var(--text-brand)] hover:bg-[var(--bg-secondary)] rounded-lg transition-colors">
                Login
              </button>
              <button onClick={() => { onNavigate('request-demo'); setMobileMenuOpen(false); }} className="mx-4 mt-2 px-4 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-colors text-center">
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function Footer({ onNavigate }: any) {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <button onClick={() => onNavigate('home')} className="mb-6 block">
              <div className="flex items-start gap-0.5">
                <div className="w-[155px] h-[25px] overflow-hidden">
                  <div className="w-[163px] h-[25px]">
                    <TfLogo />
                  </div>
                </div>
                <span className="text-[11px] text-white -mt-0.5">®</span>
              </div>
            </button>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              An AI-powered SaaS platform that transforms how universities and research institutions manage the complete thesis lifecycle.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/thesisflow/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-brand)] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg mb-4 text-[var(--text-primary)]">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('features')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Features</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Pricing</button></li>
              <li><button onClick={() => onNavigate('security')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Security</button></li>
              <li><button onClick={() => onNavigate('roadmap')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Roadmap</button></li>
              <li><button onClick={() => onNavigate('updates')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Updates</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4 text-[var(--text-primary)]">Resources</h3>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('documentation')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Documentation</button></li>
              <li><button onClick={() => onNavigate('blog')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('integrations')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Integrations</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('referral')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Referral</button></li>
              <li><button onClick={() => onNavigate('admin-login')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Admin Portal</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg mb-4 text-[var(--text-primary)]">Legal</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('privacy-policy')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms-of-service')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('gdpr')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">GDPR</button></li>
              <li><button onClick={() => onNavigate('compliance')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Compliance</button></li>
              <li><button onClick={() => onNavigate('accessibility')} className="text-base text-[var(--text-secondary)] hover:text-[var(--text-brand)] transition-colors">Accessibility</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-primary)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-[var(--text-secondary)] text-center md:text-left">
              © {new Date().getFullYear()} ThesisFlow. All Rights Reserved.
            </p>
            <p className="text-base text-[var(--text-tertiary)] text-center">
              A product of MIGRI Technologies Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}