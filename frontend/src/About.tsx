import { motion } from 'motion/react';
import { ArrowRight, Building2, Layers, Shield, Globe, Target, Zap, CheckCircle2, Users, Code, FileText } from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, organizationSchema } from './components/SEO';

export default function About({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="about">
      <SEO
        title="About ThesisFlow - AI-Powered Thesis Management for Universities Worldwide"
        description="Learn about ThesisFlow and how we're transforming academic thesis management for universities worldwide. Replacing 30-year-old review workflows with modern, AI-powered automated solutions."
        keywords="about ThesisFlow, AI-powered thesis management, academic software, thesis management solution, university technology, research workflow automation, institutional software"
        canonical="https://thesisflow.com/about"
        ogImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=630&fit=crop"
      />
      <StructuredData data={organizationSchema} />
      <div className="pt-32 pb-20">
        <HeroSection />
        <WhatThesisFlowDoesSection />
        <WhyItExistsSection />
        <BehindThesisFlowSection />
        <ApproachSection />
        <CTASection onNavigate={onNavigate} />
      </div>
    </PageLayout>
  );
}

function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
          <FileText className="w-3.5 h-3.5 text-[var(--text-brand)]" />
          <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">About ThesisFlow</span>
        </div>

        <h1 className="mb-4 leading-tight max-w-3xl mx-auto" style={{ fontSize: '2.5rem' }}>
          Modern thesis management for academic institutions
        </h1>

        <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
          ThesisFlow is an AI-powered cloud-based platform that consolidates the complete thesis lifecycle — 
          from student submission to institutional archiving — replacing 30-year-old email and 
          spreadsheet workflows.
        </p>
      </motion.div>
    </section>
  );
}

function WhatThesisFlowDoesSection() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-2">
            What ThesisFlow Does
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
            A comprehensive platform for institutional thesis management and review workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-8 mb-8"
        >
          <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed mb-6" style={{ fontSize: 'var(--text-lg)' }}>
            <p>
              ThesisFlow consolidates the complete thesis lifecycle into a single AI-powered cloud platform: 
              student submissions, advisor reviews, committee evaluations, format compliance checks, 
              revision tracking, and institutional archiving with intelligent search and retrieval capabilities.
            </p>
            <p>
              It replaces email-based coordination, scattered feedback across multiple documents, 
              manual version control, and spreadsheet-based deadline tracking — workflows that 
              haven't fundamentally changed in over 30 years — with AI-powered automation.
            </p>
            <p>
              The platform is designed exclusively for institutional adoption. We partner with 
              universities and academic publishers to deploy department-wide or institution-wide solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-[var(--border-primary)]">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-4 h-4 text-[var(--text-brand)]" />
              <div>
                <div className="text-[var(--text-primary)] mb-1" style={{ fontSize: 'var(--text-sm)' }}>Institutional Only</div>
                <div className="text-[var(--text-tertiary)]" style={{ fontSize: 'var(--text-sm)' }}>Enterprise licensing, not individual subscriptions</div>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-4 h-4 text-[var(--text-brand)]" />
              <div>
                <div className="text-[var(--text-primary)] mb-1" style={{ fontSize: 'var(--text-sm)' }}>Flexible Deployment</div>
                <div className="text-[var(--text-tertiary)]" style={{ fontSize: 'var(--text-sm)' }}>Cloud-native or on-premises infrastructure</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-[var(--text-brand)]" />
              <div>
                <div className="text-[var(--text-primary)] mb-1" style={{ fontSize: 'var(--text-sm)' }}>Purpose-Built</div>
                <div className="text-[var(--text-tertiary)]" style={{ fontSize: 'var(--text-sm)' }}>Designed for academic workflows</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-6"
          >
            <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-[var(--text-brand)]" />
            </div>
            <h3 className="text-[var(--text-primary)] mb-2">
              Enterprise Security
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              GDPR-compliant infrastructure with enterprise-grade security standards. 
              Academic data protection is non-negotiable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-6"
          >
            <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[var(--text-brand)]" />
            </div>
            <h3 className="text-[var(--text-primary)] mb-2">
              Institutional Partnerships
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We work directly with universities and publishers. Product roadmap driven 
              by partner institution feedback.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyItExistsSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-2">
            Why ThesisFlow Exists
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
            The academic sector deserves modern institutional software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-8"
        >
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Many universities still manage thesis workflows using tools designed in the 1990s: 
              email for coordination, shared drives for storage, manual format checks, and 
              spreadsheet tracking. These processes create administrative overhead for faculty 
              and frustration for students.
            </p>
            <p>
              The problem isn't unique to resource-constrained institutions. Even well-funded 
              universities with significant IT budgets often lack purpose-built thesis management 
              platforms. Generic enterprise software doesn't map well to academic review workflows.
            </p>
            <p>
              ThesisFlow addresses this gap with software built specifically for institutional 
              thesis management — from submission through archiving. Purpose-built for the academic 
              sector, not adapted from generic project management tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BehindThesisFlowSection() {
  return (
    <section className="py-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-4">
            <Building2 className="w-3.5 h-3.5 text-[var(--text-brand)]" />
            <span className="text-[var(--text-brand)]" style={{ fontSize: 'var(--text-sm)' }}>Behind ThesisFlow</span>
          </div>
          <h2 className="text-2xl text-[var(--text-primary)] mb-2">
            Built by MIGRI Technologies
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
            ThesisFlow is developed and maintained by MIGRI Technologies Pvt Ltd.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-8"
          >
            <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-[var(--text-brand)]" />
            </div>
            <h3 className="text-xl text-[var(--text-primary)] mb-3">
              About MIGRI Technologies
            </h3>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p>
                MIGRI Technologies Pvt Ltd is an Indian software company based in Kallakurichi, 
                Tamil Nadu, developing enterprise platforms across multiple sectors.
              </p>
              <p>
                Our technology solutions span workflow automation, data management, and 
                institutional software. ThesisFlow represents our academic sector offering, 
                with additional products planned across diverse industries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-8"
          >
            <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-[var(--text-brand)]" />
            </div>
            <h3 className="text-xl text-[var(--text-primary)] mb-3">
              Product Vision
            </h3>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p>
                ThesisFlow is the first product in MIGRI's portfolio, addressing institutional 
                thesis management for universities and academic publishers.
              </p>
              <p>
                Future products will extend beyond academia, leveraging our expertise in 
                workflow automation and institutional software architecture across different sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const principles = [
    {
      icon: Code,
      title: 'Academic-Specific Design',
      description: 'Built specifically for thesis workflows, not adapted from generic project management or CRM platforms.',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'GDPR-compliant infrastructure with enterprise-grade security standards. Academic data protection is paramount.',
    },
    {
      icon: Users,
      title: 'Institutional Partnership',
      description: 'Direct collaboration with universities and publishers. Product roadmap driven by partner institution feedback.',
    },
    {
      icon: Zap,
      title: 'Continuous Development',
      description: 'Active development cycle with regular updates. Transparent about feature maturity and institutional input.',
    },
  ];

  return (
    <section className="py-12 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-2">
            How We Build ThesisFlow
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
            Our approach to developing institutional thesis management software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-[var(--border-brand-subtle)] transition-colors"
            >
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: any) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-md hover:border-[var(--border-brand-subtle)] transition-all duration-300">
            
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--bg-brand-subtle)] opacity-30 blur-3xl rounded-full"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl mb-4">
                  <FileText className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h2 className="text-2xl text-[var(--text-primary)] mb-3">
                  Ready to Modernize Your Thesis Workflow?
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
                  Interested in ThesisFlow for your institution? Schedule a consultation to 
                  discuss your requirements and explore partnership opportunities.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] transition-all shadow-sm hover:shadow"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-brand-subtle)] transition-all"
                >
                  View Pricing
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-[var(--border-primary)]">
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--text-brand)]" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <Shield className="w-3.5 h-3.5 text-[var(--text-brand)]" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <Globe className="w-3.5 h-3.5 text-[var(--text-brand)]" />
                  <span>Institutional Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}