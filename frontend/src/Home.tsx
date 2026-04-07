import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, FileText, Shield, Clock, Building2, Layers, Zap, Globe, Play, Award, BarChart3, Lock } from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, organizationSchema, softwareApplicationSchema, createFAQSchema } from './components/SEO';

export default function Home({ onNavigate }: any) {
  const faqSchema = createFAQSchema([
    {
      question: "What is ThesisFlow?",
      answer: "ThesisFlow is an AI-powered thesis management SaaS platform designed for universities and research institutions to automate and streamline thesis submission, review, and approval workflows. It features advanced AI modules for intelligent search and retrieval of academic documents."
    },
    {
      question: "Who can use ThesisFlow?",
      answer: "ThesisFlow is an institutional licensing product designed exclusively for universities and research institutions. Individual scholars cannot adopt it directly."
    },
    {
      question: "How does ThesisFlow improve thesis management?",
      answer: "ThesisFlow replaces 30-year-old manual email-based workflows with AI-powered automated digital processes, reducing administrative burden by up to 70% and improving completion rates."
    },
    {
      question: "Is ThesisFlow GDPR compliant?",
      answer: "Yes, ThesisFlow is fully GDPR compliant with built-in data protection, encryption, audit trails, and data export/deletion capabilities."
    }
  ]);

  return (
    <PageLayout onNavigate={onNavigate} currentPage="home">
      <SEO
        title="ThesisFlow - AI-Powered Thesis Management Platform for Universities and Research Institutions"
        description="Transform thesis workflows with AI-powered automation. ThesisFlow is a unified SaaS platform for universities and research institutions worldwide featuring intelligent search and retrieval, automated reviews, compliance tracking, and institutional repository integration."
        keywords="AI-powered thesis management, AI search and retrieval, thesis management software, academic workflow automation, university thesis platform, dissertation management, research institution software, thesis review system, academic compliance, institutional repository, global university software, higher education technology, SaaS platform"
        canonical="https://thesisflow.com"
        ogImage="https://images.unsplash.com/photo-1699978786249-fa3ad6cf051d?w=1200&h=630&fit=crop"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={softwareApplicationSchema} />
      <StructuredData data={faqSchema} />
      <div className="pt-20">
        <HeroSection onNavigate={onNavigate} />
        <TrustedBySection />
        <VideoSection />
        <ProblemSolutionSection />
        <FeaturesShowcaseSection />
        <WorkflowVisualization />
        <InstitutionalFocusSection onNavigate={onNavigate} />
        <ProofPointsSection />
        <CTASection onNavigate={onNavigate} />
      </div>
    </PageLayout>
  );
}

function HeroSection({ onNavigate }: any) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Clean, subtle background with minimal gradients */}
      <div className="absolute inset-0">
        {/* Subtle top accent */}
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[var(--bg-brand-subtle)] to-transparent opacity-60"></div>
        
        {/* Minimal corner glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.03] dark:opacity-[0.08] blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full">
            <div className="w-2 h-2 bg-[var(--text-brand)] rounded-full animate-pulse"></div>
            <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)] font-medium">Now available for institutional partnerships</span>
          </div>

          {/* Main heading */}
          <h1 style={{ fontSize: '3rem' }} className="lg:text-[3.5rem] text-[var(--text-primary)] mb-6 leading-tight font-medium">
            Rethinking
            <br />
            <span className="text-[#008C8A] dark:text-[#00D4D2]">ThesisFlow Management</span>
          </h1>

          <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Transform antiquated email-based workflows into AI-powered streamlined digital processes. A unified SaaS platform for universities and research institutions to manage the complete thesis lifecycle.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => onNavigate('request-demo')}
              className="group px-8 py-4 bg-gradient-to-r from-[#00A7A5] to-[#008C8A] text-white rounded-lg hover:from-[#008C8A] hover:to-[#007573] shadow-lg hover:shadow-xl transition-all"
            >
              <span className="flex items-center gap-2" style={{ fontSize: 'var(--text-base)' }}>
                Schedule Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => onNavigate('features')}
              className="px-8 py-4 bg-gray-100 dark:bg-white/10 dark:backdrop-blur-sm text-gray-900 dark:text-white dark:border dark:border-white/20 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 dark:hover:border-white/30 shadow-md hover:shadow-lg transition-all"
              style={{ fontSize: 'var(--text-base)' }}
            >
              Explore Platform
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-primary)]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="font-medium">Compliance in Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="font-medium">99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const capabilities = [
    { icon: Shield, label: 'Enterprise-grade security' },
    { icon: Layers, label: 'Complete lifecycle coverage' },
    { icon: Zap, label: 'Automated workflows' },
    { icon: Globe, label: 'Cloud-native platform' },
  ];

  return (
    <section className="py-16 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--text-secondary)] uppercase tracking-wider font-semibold" style={{ fontSize: 'var(--text-sm)' }}>Platform Capabilities</p>
        </motion.div>
        
        {/* Infinite scrolling container */}
        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {/* First set of capabilities */}
            {capabilities.map((item, index) => (
              <div
                key={`set1-${index}`}
                className="flex flex-col items-center text-center gap-3 min-w-[200px]"
              >
                <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[var(--text-brand)]" />
                </div>
                <div className="text-[var(--text-primary)] font-medium" style={{ fontSize: 'var(--text-base)' }}>{item.label}</div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {capabilities.map((item, index) => (
              <div
                key={`set2-${index}`}
                className="flex flex-col items-center text-center gap-3 min-w-[200px]"
              >
                <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[var(--text-brand)]" />
                </div>
                <div className="text-[var(--text-primary)] font-medium" style={{ fontSize: 'var(--text-base)' }}>{item.label}</div>
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {capabilities.map((item, index) => (
              <div
                key={`set3-${index}`}
                className="flex flex-col items-center text-center gap-3 min-w-[200px]"
              >
                <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[var(--text-brand)]" />
                </div>
                <div className="text-[var(--text-primary)] font-medium" style={{ fontSize: 'var(--text-base)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Elegant multi-layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-[var(--text-brand)] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.025] blur-[110px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--text-brand)] opacity-[0.02] blur-[90px] rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 style={{ fontSize: 'var(--text-2xl)' }} className="text-[var(--text-primary)] mb-3">
            Platform Walkthrough
          </h2>
          <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] max-w-xl mx-auto">
            See how ThesisFlow simplifies every step of the thesis lifecycle
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative rounded-xl overflow-hidden border border-[var(--border-primary)] shadow-xl bg-[var(--bg-secondary)]">
            <div className="aspect-video relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="https://firebasestorage.googleapis.com/v0/b/thesisflow-1b893.appspot.com/o/Videos%2FTF-07-04-2025.mp4?alt=media&token=79143299-b70e-4b09-8cb9-779a19ce9d01" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play indicator overlay - shows when not playing */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
                <div className="w-16 h-16 bg-[var(--text-brand)] backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="relative py-24 border-t border-[var(--border-primary)] overflow-hidden">
      {/* Elegant multi-layered gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-[var(--text-brand)] opacity-[0.04] blur-[130px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-[650px] h-[650px] bg-[var(--text-brand)] opacity-[0.035] blur-[110px] rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--text-brand)] opacity-[0.02] blur-[95px] rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-4">
            Replace 30-year old academic review workflows
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Move from fragmented email-based processes to a unified, automated platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-2">Centralized Submission</h3>
              <p className="text-base text-[var(--text-secondary)]">
                Single portal for all thesis submissions replacing email and file-sharing chaos
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-2">Automated Workflows</h3>
              <p className="text-base text-[var(--text-secondary)]">
                Smart routing, deadline tracking, and notifications without manual coordination
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-2">Built-in Compliance</h3>
              <p className="text-base text-[var(--text-secondary)]">
                Automatic format validation and audit trails for accreditation requirements
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesShowcaseSection() {
  const features = [
    {
      icon: Users,
      title: 'Policy based access',
      description: 'Custom interfaces for students, advisors, and administrators',
    },
    {
      icon: Zap,
      title: 'Automated workflows',
      description: 'Smart routing, notifications, and milestone tracking',
    },
    {
      icon: Shield,
      title: 'Enterprise security',
      description: 'GDPR-compliant with encryption and access controls',
    },
    {
      icon: BarChart3,
      title: 'Analytics dashboard',
      description: 'Track submissions, reviews, and bottlenecks',
    },
    {
      icon: Globe,
      title: 'Cloud-native',
      description: 'Deploy institution-wide without infrastructure overhead',
    },
    {
      icon: Layers,
      title: 'Repository integration',
      description: 'Direct archival to institutional repositories',
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-3">
            Everything you need
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Built for institutional scale with enterprise-grade features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative p-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-[var(--text-brand)]" />
                </div>
                <h3 className="text-lg text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-base text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowVisualization() {
  const steps = [
    { number: '01', title: 'Submit', desc: 'Student uploads thesis' },
    { number: '02', title: 'Review', desc: 'Committee provides feedback' },
    { number: '03', title: 'Revise', desc: 'Student makes changes' },
    { number: '04', title: 'Archive', desc: 'Approved thesis stored' },
  ];

  return (
    <section className="relative py-20 border-t border-[var(--border-primary)] overflow-hidden">
      {/* Elegant multi-layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[var(--text-brand)] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.025] blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--text-brand)] opacity-[0.02] blur-[85px] rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-3">
            Highlevel Workflow in Academic Review
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Four automated steps from submission to archive
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-lg mb-3">
                <span className="text-base text-[var(--text-brand)]">{step.number}</span>
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-1">{step.title}</h3>
              <p className="text-base text-[var(--text-secondary)]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstitutionalFocusSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-3">
            For institutions only
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Enterprise platform for universities. Individual scholars cannot purchase directly. However, you can refer to your institution by clicking{' '}
            <button 
              onClick={() => onNavigate('referral')} 
              className="text-lg text-[var(--text-brand)] hover:underline underline-offset-2 transition-all"
            >
              this form
            </button>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-3">
                Who we serve
              </h3>
              <p className="text-base text-[var(--text-secondary)]">
                Universities and research institutions managing master's theses, doctoral dissertations, 
                and honors projects across departments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-8 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg hover:border-[var(--border-brand-subtle)] hover:shadow-lg hover:shadow-[var(--text-brand)]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-brand)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-5 h-5 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-lg text-[var(--text-primary)] mb-3">
                How we work
              </h3>
              <p className="text-base text-[var(--text-secondary)]">
                Custom deployment tailored to your workflows. Dedicated onboarding and ongoing 
                support for your institution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProofPointsSection() {
  return null; // Remove this section
}

function CTASection({ onNavigate }: any) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Elegant multi-layered final gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-[var(--text-brand)] opacity-[0.04] blur-[130px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.03] blur-[110px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--text-brand)] opacity-[0.02] blur-[90px] rounded-full"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-xl"
        >
          <h2 className="text-2xl text-[var(--text-primary)] mb-4">
            Ready to modernize your thesis workflows?
          </h2>
          
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Schedule a consultation to discuss your institution's requirements
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="group px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] hover:shadow-lg hover:shadow-[var(--text-brand)]/20 transition-all"
            >
              <span className="flex items-center justify-center gap-2 text-base">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-brand-subtle)] transition-all text-base"
            >
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}