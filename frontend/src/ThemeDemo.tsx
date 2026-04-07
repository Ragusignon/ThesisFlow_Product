import { motion } from 'motion/react';
import { Sun, Moon, CheckCircle2, Users, FileText, Shield } from 'lucide-react';
import { useTheme } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';

export default function ThemeDemo() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl">Thesisflow - {theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Theme-aware gradient background */}
        <div className="absolute inset-0 bg-[image:var(--gradient-bg-subtle)]"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,var(--border-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-primary)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="text-sm text-[var(--text-brand)]">Theme Demo - Both Light & Dark</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Experience Thesisflow in Any Mode
            </h1>
            
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Toggle between light and dark themes using the button in the top right. All colors adapt seamlessly to provide the perfect viewing experience.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-[image:var(--gradient-brand)] text-white rounded-lg shadow-[var(--shadow-brand)] hover:scale-105 transition-all duration-300">
                Primary Button
              </button>
              <button className="px-8 py-4 bg-[var(--bg-primary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:border-[var(--border-brand)] hover:bg-[var(--bg-brand-subtle)] transition-all duration-300">
                Secondary Button
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-center mb-12">
            Theme-Aware Components
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Adaptive Cards',
                description: 'Cards automatically adjust to light or dark mode'
              },
              {
                icon: Users,
                title: 'Consistent Colors',
                description: 'Brand colors maintain visibility in both themes'
              },
              {
                icon: CheckCircle2,
                title: 'Smart Contrast',
                description: 'Text and backgrounds always maintain readability'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[var(--border-brand-subtle)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette Display */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-center mb-12">
            Current Theme Colors
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg mb-4">Text Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--text-primary)] rounded-lg"></div>
                  <span className="text-sm">Primary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--text-secondary)] rounded-lg"></div>
                  <span className="text-sm">Secondary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--text-brand)] rounded-lg"></div>
                  <span className="text-sm">Brand</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg mb-4">Backgrounds</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg"></div>
                  <span className="text-sm">Primary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-secondary)] rounded-lg"></div>
                  <span className="text-sm">Secondary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-brand)] rounded-lg"></div>
                  <span className="text-sm">Brand</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg mb-4">Borders</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-lg"></div>
                  <span className="text-sm">Primary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-primary)] border-2 border-[var(--border-brand)] rounded-lg"></div>
                  <span className="text-sm">Brand</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--bg-primary)] border-2 border-[var(--border-brand-subtle)] rounded-lg"></div>
                  <span className="text-sm">Brand Subtle</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg mb-4">Gradients</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[image:var(--gradient-brand)] rounded-lg"></div>
                  <span className="text-sm">Brand</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[image:var(--gradient-bg-subtle)] rounded-lg"></div>
                  <span className="text-sm">BG Subtle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8">
            <h2 className="text-2xl mb-6">Theme-Aware Form</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[var(--input-background)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[var(--input-background)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs"
                  className="w-full px-4 py-3 bg-[var(--input-background)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg focus:outline-none focus:border-[var(--border-brand)] transition-colors resize-none"
                />
              </div>

              <button className="w-full px-6 py-3 bg-[image:var(--gradient-brand)] text-white rounded-lg shadow-[var(--shadow-brand)] hover:scale-105 transition-all duration-300">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[var(--text-secondary)]">
            © 2025 Thesisflow. Theme system powered by CSS variables.
          </p>
        </div>
      </footer>
    </div>
  );
}
