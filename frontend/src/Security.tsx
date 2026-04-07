import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { Shield, Lock, Key, Database, Eye, FileCheck, Server, Award } from 'lucide-react';

export default function Security({ onNavigate }: any) {
  const features = [
    { icon: Lock, title: 'End-to-End Encryption', description: 'All data encrypted in transit and at rest using AES-256.' },
    { icon: Key, title: 'Two-Factor Authentication', description: 'Additional layer of security for your account.' },
    { icon: Database, title: 'Secure Backups', description: 'Automated encrypted backups every 6 hours.' },
    { icon: Eye, title: 'Audit Logs', description: 'Complete activity tracking and monitoring.' },
    { icon: FileCheck, title: 'Data Compliance', description: 'GDPR, FERPA, and SOC 2 Type II compliant.' },
    { icon: Server, title: 'Redundant Infrastructure', description: 'Multi-region deployment for maximum uptime.' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="security">
      <SEO
        title="Security & Compliance"
        description="Enterprise-grade security for Thesisflow. Learn about our AES-256 encryption, GDPR and FERPA compliance, SOC 2 Type II certification, secure backups, audit logs, and data protection measures."
        keywords="Thesisflow security, data encryption, GDPR compliance, FERPA compliance, SOC 2, academic data security, thesis data protection, enterprise security, audit logs"
        canonicalUrl="https://thesisflow.com/security"
      />
      <div className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Security First</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl xl:text-6xl text-[var(--text-primary)] mb-6">
              Your Research Is <span className="bg-gradient-to-r from-[var(--text-brand)] to-[var(--text-brand)] bg-clip-text text-transparent">Protected</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] max-w-3xl mx-auto">
              Enterprise-grade security and compliance you can trust.
            </p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8 hover:shadow-2xl hover:border-[var(--border-brand-subtle)] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--text-brand)]/10 to-[var(--text-brand)]/5 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[var(--text-brand)]" />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3">{feature.title}</h3>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-3xl p-12 text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-[var(--text-brand)]" />
            <h2 style={{ fontSize: 'var(--text-2xl)' }} className="text-[var(--text-primary)] mb-4">SOC 2 Type II Certified</h2>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-6">
              Independently audited and certified for security, availability, and confidentiality.
            </p>
            <button style={{ fontSize: 'var(--text-base)' }} className="px-8 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] transition-all">
              View Security Report
            </button>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}