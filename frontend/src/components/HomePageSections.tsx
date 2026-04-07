import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Lock, Clock, Users, BarChart3, Shield, Zap, Award, FileCheck, GitBranch, Bot, Linkedin, Twitter, Sun, Moon, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import TfLogo from '../imports/TfLogo1-6052-400';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Finally, a platform that understands the thesis process. The collaboration features have saved us countless hours of back-and-forth emails.",
      author: "Dr. Sarah Chen",
      role: "PhD Supervisor, Stanford University",
    },
    {
      quote: "As a graduate student, Thesisflow has been a game-changer. Everything I need is in one place, and I can track my progress easily.",
      author: "Michael Rodriguez",
      role: "PhD Candidate, MIT",
    },
    {
      quote: "The version control and feedback system is exactly what we needed for our department. Highly recommend for academic institutions.",
      author: "Prof. James Wilson",
      role: "Department Chair, Oxford University",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)] gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[var(--text-primary)] mb-6">
            What Our Beta Users Say
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Early feedback from researchers and institutions using Thesisflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8 gradient-card hover:border-[var(--border-brand-subtle)] transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-[var(--text-brand)]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="text-[var(--text-primary)] mb-1">{testimonial.author}</div>
                <div className="text-sm text-[var(--text-tertiary)]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  const useCases = [
    {
      icon: Users,
      title: 'For Graduate Students',
      description: 'Keep your thesis organized, collaborate with your advisor, and track your progress from proposal to defense.',
    },
    {
      icon: Shield,
      title: 'For Faculty Advisors',
      description: 'Manage multiple students efficiently, provide structured feedback, and ensure nothing falls through the cracks.',
    },
    {
      icon: Database,
      title: 'For Universities',
      description: 'Streamline institutional workflows, maintain compliance, and provide better support for your graduate programs.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 gradient-mesh-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[var(--text-primary)] mb-6">
            Built For Every Role
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Whether you're a student, advisor, or administrator, Thesisflow adapts to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[var(--border-brand-subtle)] transition-all duration-300 gradient-card"
            >
              <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="w-6 h-6 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-xl text-[var(--text-primary)] mb-3">{useCase.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection({ onNavigate }: any) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      {/* Theme-adaptive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A5]/90 via-[#00968f]/85 to-[#008f8d]/90 dark:from-[#00A7A5]/20 dark:via-[#00968f]/15 dark:to-[#008f8d]/20"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm text-white">Ready to Transform Your Institution</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl lg:text-6xl text-white leading-tight">
              Modernize Your
              <span className="block mt-2">
                Thesis Management Workflow
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
              Join leading universities and academic publishers in replacing 30-year-old workflows with modern, automated systems. See how Thesisflow can serve your institution.
            </p>
          </div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: '🎓', title: 'For Universities', desc: 'Streamline thesis submissions & reviews' },
              { icon: '📚', title: 'For Publishers', desc: 'Automate manuscript workflows' },
              { icon: '⚡', title: 'B2B Solution', desc: 'Institutional licensing only' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => onNavigate('contact')}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00A7A5] rounded-xl hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20"
            >
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
            >
              View Pricing Plans
            </button>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center text-sm text-white/90 mt-8"
          >
            🔒 Enterprise-grade security • 🌍 GDPR compliant • 🤝 Dedicated support team
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onNavigate }: any) {
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
                <span className="text-[10px] text-[var(--text-tertiary)] -mt-0.5">®</span>
              </div>
            </button>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              A unified platform that transforms how universities and research institutions manage the complete thesis lifecycle.
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