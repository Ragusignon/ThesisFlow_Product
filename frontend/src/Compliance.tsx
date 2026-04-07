import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Award, CheckCircle2, Clock, Target, Shield } from 'lucide-react';

export default function Compliance({ onNavigate }: any) {
  const complianceGoals = [
    { 
      name: 'GDPR Compliance', 
      description: 'General Data Protection Regulation for EU/EEA institutions',
      status: 'In Development',
      badge: 'progress'
    },
    { 
      name: 'FERPA Readiness', 
      description: 'Family Educational Rights and Privacy Act for US institutions',
      status: 'In Development',
      badge: 'progress'
    },
    { 
      name: 'SOC 2 Type II', 
      description: 'Security, availability, and confidentiality standards',
      status: 'Planned',
      badge: 'planned'
    },
    { 
      name: 'ISO 27001', 
      description: 'International standard for information security management',
      status: 'Planned',
      badge: 'planned'
    },
    {
      name: 'WCAG 2.1 Level AA',
      description: 'Web Content Accessibility Guidelines',
      status: 'In Development',
      badge: 'progress'
    },
    {
      name: 'Data Residency',
      description: 'Geographic data storage options for institutional requirements',
      status: 'Planned',
      badge: 'planned'
    },
  ];

  const securityMeasures = [
    'End-to-end encryption (TLS 1.3 and AES-256)',
    'Secure authentication and session management',
    'Role-based access control (RBAC)',
    'Regular security code reviews',
    'Automated vulnerability scanning',
    'Data backup and recovery planning',
    'Secure development lifecycle',
    'Privacy by design principles',
  ];

  const dataProtection = [
    'Data encryption at rest and in transit',
    'Minimal data collection principles',
    'Clear data retention policies',
    'User data export capabilities',
    'Transparent privacy documentation',
    'Regular security updates',
    'Secure credential storage',
    'Activity logging and audit trails',
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="compliance">
      <div className="pt-32 pb-20 bg-[var(--bg-primary)]">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="text-sm text-[var(--text-brand)]">Security & Compliance</span>
            </div>
            <h1 className="text-4xl lg:text-5xl mb-6">
              Building with <span className="text-[var(--text-brand)]">Security First</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              As a startup serving academic institutions, research institutions, and academic publishers, we're committed to building security and compliance into our platform from day one.
            </p>
          </motion.div>
        </section>

        {/* Important Notice */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--bg-brand)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-[var(--text-on-brand)]" />
              </div>
              <div>
                <h3 className="text-xl mb-3">Our Compliance Journey</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We're a new startup replacing 30-year-old review workflows with modern automation. While we don't yet have formal compliance certifications, we're actively working toward them as we build our platform. We're designing with compliance requirements in mind from the ground up.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Current Status:</strong> Pre-launch development phase with no institutional clients yet. We're building our compliance framework alongside our product.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Compliance Roadmap */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl mb-8"
          >
            Compliance Roadmap
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceGoals.map((goal, index) => (
              <motion.div
                key={goal.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--border-brand)] hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    goal.badge === 'progress' 
                      ? 'bg-blue-100 dark:bg-blue-900/30' 
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    {goal.badge === 'progress' ? (
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Target className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    goal.badge === 'progress'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                  }`}>
                    {goal.status}
                  </span>
                </div>
                <h3 className="text-lg mb-2">{goal.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security Measures */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-8">Security Measures We're Implementing</h2>
            <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 lg:p-10">
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                We're building comprehensive security measures into our platform to protect institutional data and maintain platform integrity:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{measure}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Data Protection */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-8">Data Protection & Privacy</h2>
            <div className="bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-2xl p-8 lg:p-10">
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Privacy and data protection are core to our design philosophy. We're building with these principles:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {dataProtection.map((practice, index) => (
                  <motion.div
                    key={practice}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{practice}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Target Sectors */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-8">Built for Academic Institutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h3 className="text-lg mb-2">Universities</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Graduate schools and research departments managing thesis workflows at scale
                </p>
              </div>

              <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h3 className="text-lg mb-2">Research Institutions</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Independent research organizations with dissertation and thesis programs
                </p>
              </div>

              <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h3 className="text-lg mb-2">Academic Publishers</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Publishers managing academic manuscript and thesis submission workflows
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Modernizing Workflows */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8"
          >
            <h2 className="text-2xl mb-6">Modernizing 30-Year-Old Workflows</h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Traditional thesis review workflows have remained largely unchanged for three decades, relying on email chains, file sharing, and manual coordination. We're building automated workflows that:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3">Replace Manual Processes</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Automated submission and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Intelligent reviewer assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Automated reminders and notifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3">Maintain Security</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>End-to-end encrypted communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Granular access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Complete audit trails</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-md hover:border-[var(--border-brand-subtle)] transition-all duration-300"
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--bg-brand-subtle)] opacity-30 blur-3xl rounded-full"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl mb-4">
                  <Shield className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h2 className="text-2xl text-[var(--text-primary)] mb-3">Questions About Our Security?</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-6">
                  We're transparent about our development journey. Reach out to discuss your institution's security and compliance requirements.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] hover:shadow-xl hover:shadow-[var(--text-brand)]/30 transition-all duration-300"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}