import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, softwareApplicationSchema } from './components/SEO';
import { CheckCircle2, FileText, Users, MessageSquare, Clock, Shield, Database, Zap, BarChart3, Bell, GitBranch, Lock, Upload, Download, Search, Workflow, FileCheck, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Layers } from 'lucide-react';

export default function Features({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="features">
      <SEO
        title="Features - ThesisFlow | Complete Institutional Thesis Management Platform"
        description="Explore ThesisFlow's comprehensive features: automated workflows, version control, compliance tracking, real-time collaboration, role-based access, analytics dashboard, and institutional repository integration for efficient thesis management."
        keywords="thesis management features, academic workflow automation, version control, compliance tracking, thesis collaboration, repository integration, review management, deadline tracking"
        canonical="https://thesisflow.com/features"
        ogImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
      />
      <StructuredData data={softwareApplicationSchema} />
      <div className="pt-32 pb-20">
        <HeroSection />
        <FeaturesGrid />
        <DetailedFeatures />
        <ComparisonTable />
        <WorkflowFeatures />
        <TechnicalFeatures />
        <IntegrationSection onNavigate={onNavigate} />
        <CTASection onNavigate={onNavigate} />
      </div>
    </PageLayout>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
          <Layers className="w-3.5 h-3.5 text-[var(--text-brand)]" />
          <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Product Features</span>
        </div>
        
        <h1 className="mb-6" style={{ fontSize: '2.5rem' }}>
          AI-Powered Institutional Thesis Management
        </h1>
        
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Enterprise-grade AI-powered features designed for universities and academic publishers. Built to scale with your institution featuring intelligent search and retrieval.
        </p>
      </motion.div>
    </section>
  );
}

function FeaturesGrid() {
  const features = [
    {
      icon: FileText,
      title: 'Enterprise Document Management',
      description: 'Centralized version control, secure cloud storage, and real-time syncing across departments with unlimited capacity.',
    },
    {
      icon: Users,
      title: 'Multi-User Collaboration',
      description: 'Enable seamless collaboration between students, advisors, and committees with role-based permissions and workflows.',
    },
    {
      icon: MessageSquare,
      title: 'Review Management',
      description: 'Structured review processes with contextual feedback, threaded discussions, and comprehensive audit trails.',
    },
    {
      icon: Clock,
      title: 'Workflow Automation',
      description: 'Automated milestone tracking, deadline management, and notifications that keep institutional processes on schedule.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Bank-level encryption, secure backups, SSO/SAML integration, and full compliance with GDPR and academic standards.',
    },
    {
      icon: Search,
      title: 'AI-Powered Search & Retrieval',
      description: 'Intelligent search capabilities with AI-powered document retrieval, semantic search, and automated content discovery across thesis documents.',
    },
    {
      icon: Database,
      title: 'Institutional Repository',
      description: 'Centralized thesis repository with AI-powered organization, advanced search, and customizable metadata schemas.',
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Visualize your progress with interactive charts, detailed reports, and productivity insights.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay updated with intelligent, customizable notifications that adapt to your preferences.',
    },
    {
      icon: GitBranch,
      title: 'Version History',
      description: 'Complete version history with the ability to compare, restore, or branch from any previous version.',
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Granular role-based permissions to control exactly who can view, edit, or comment on your work.',
    },
    {
      icon: Upload,
      title: 'Easy Submission',
      description: 'Drag-and-drop file uploads with automatic validation and format checking for compliance.',
    },
    {
      icon: Workflow,
      title: 'Custom Workflows',
      description: 'Configure approval chains, review stages, and submission requirements to match your institution.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[#00A7A5]/40 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[#00A7A5]/10 rounded-xl flex items-center justify-center mb-6">
              <feature.icon className="w-6 h-6 text-[#00A7A5]" />
            </div>
            <h3 className="text-[var(--text-primary)] mb-3">{feature.title}</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DetailedFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <div className="space-y-24">
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--text-primary)] mb-6">
              Advanced Review System
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              A unified interface for scholars, supervisors, committee members, examiners, publishers, and administrators. Real-time comments, instant UI responses, and automated moderation streamline the entire review workflow.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Unified interface for all stakeholders</div>
                  <div className="text-sm text-[var(--text-secondary)]">Scholars, supervisors, committee members, examiners, publishers, and administrators in one system</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Real-time comment visibility</div>
                  <div className="text-sm text-[var(--text-secondary)]">All participants see comments instantly as they're posted</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Integrated UI responses</div>
                  <div className="text-sm text-[var(--text-secondary)]">Respond directly within the interface without external emails or tools</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Automated moderation by administrators</div>
                  <div className="text-sm text-[var(--text-secondary)]">Smart automation with administrative oversight keeps discussions productive</div>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-primary)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlJTIwdGVhbXxlbnwxfHx8fDE3NjMyNDcwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Review System"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-primary)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBkYXRhfGVufDF8fHx8MTc2MzI0NzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Enterprise Security"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--text-primary)] mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Built with security at its core. Bank-level encryption, comprehensive audit trails, and compliance with international data protection standards ensure your institutional data remains protected.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">End-to-end encryption</div>
                  <div className="text-sm text-[var(--text-secondary)]">AES-256 encryption for data at rest and TLS 1.3 for data in transit</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">SSO & SAML integration</div>
                  <div className="text-sm text-[var(--text-secondary)]">Seamlessly integrate with your institution's identity provider</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">GDPR & compliance</div>
                  <div className="text-sm text-[var(--text-secondary)]">Full compliance with GDPR, FERPA, and academic data protection standards</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Comprehensive audit logs</div>
                  <div className="text-sm text-[var(--text-secondary)]">Track every action with detailed, immutable audit trails</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--text-primary)] mb-6">
              Policy-Based Permission System
            </h2>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              Granular access controls tailored to your institution's governance structure. Define custom roles, permissions, and policies that reflect your organizational hierarchy and workflows.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Policy-based access control</div>
                  <div className="text-sm text-[var(--text-secondary)]">Pre-configured roles for students, supervisors, examiners, and administrators</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Custom permission policies</div>
                  <div className="text-sm text-[var(--text-secondary)]">Create institution-specific policies that match your governance requirements</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Hierarchical permissions</div>
                  <div className="text-sm text-[var(--text-secondary)]">Department and faculty-level access control with inheritance</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-[var(--text-primary)] mb-1">Time-bound access</div>
                  <div className="text-sm text-[var(--text-secondary)]">Automatically grant or revoke permissions based on timeline and milestones</div>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-primary)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595489154995-75e074c8ef20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb3JnYW5pemF0aW9uJTIwc3RydWN0dXJlfGVufDF8fHx8MTc2MzE2MDAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Permission System"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[var(--text-primary)] mb-6">
            How ThesisFlow Compares to ScholarOne
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Modern thesis management built for institutions replacing 30-year-old workflows with automated, streamlined processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-primary)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-primary)]">
                  <th className="text-left py-4 px-6 text-[var(--text-primary)] min-w-[200px]">Feature</th>
                  <th className="text-left py-4 px-6 text-[var(--text-primary)] bg-[#00A7A5]/5 min-w-[280px]">ThesisFlow</th>
                  <th className="text-left py-4 px-6 text-[var(--text-primary)] min-w-[280px]">ScholarOne</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">User Interface</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Modern, intuitive interface with real-time updates</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Dated interface, steep learning curve</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Review Workflow</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Unified interface with real-time comments, in-app responses, automated moderation</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Email-based workflow with fragmented communication</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Collaboration</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Real-time collaboration for scholars, supervisors, committees, examiners, administrators</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Limited collaboration, primarily email-based</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Permissions</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Policy-based permission system with custom roles, hierarchical access, time-bound controls</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Rigid role-based permissions with limited customization</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Automation</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Automated validation, deadline management, reviewer assignment, status notifications</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Manual processes requiring administrative intervention</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Version Control</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Git-like version control with unlimited history, branching, merging</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Basic version tracking with limited history</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Analytics</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Interactive dashboards, detailed reports, productivity insights</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Basic reporting with limited visualization</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Mobile Experience</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Fully responsive, mobile-optimized interface</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Limited mobile support, desktop-centric</td>
                </tr>
                <tr className="border-b border-[var(--border-primary)]">
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Setup Time</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Quick onboarding with dedicated support</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Lengthy implementation, complex configuration</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Pricing Model</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)] bg-[#00A7A5]/5">Transparent, scalable institutional pricing</td>
                  <td className="py-4 px-6 text-[var(--text-secondary)]">Complex, often expensive enterprise contracts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkflowFeatures() {
  const workflows = [
    {
      icon: FileCheck,
      title: 'Automated Validation',
      description: 'Automatic checks for formatting, completeness, and compliance with your institution\'s requirements before submission.',
    },
    {
      icon: Calendar,
      title: 'Deadline Management',
      description: 'Set milestone dates, get reminders, and track progress against your thesis timeline with visual indicators.',
    },
    {
      icon: Users,
      title: 'Review Assignment',
      description: 'Automatically assign reviewers based on expertise, availability, and workload distribution algorithms.',
    },
    {
      icon: Bell,
      title: 'Status Notifications',
      description: 'Keep all stakeholders informed with automated updates when submissions move through review stages.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[var(--text-primary)] mb-6">
            Streamlined Workflow Automation
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Reduce manual work with intelligent automation that handles the repetitive tasks so you can focus on what matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-[#00A7A5]/10 rounded-xl flex items-center justify-center mb-6">
                <workflow.icon className="w-6 h-6 text-[#00A7A5]" />
              </div>
              <h3 className="text-[var(--text-primary)] mb-3">{workflow.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{workflow.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalFeatures() {
  const technical = [
    {
      title: 'Version Control',
      description: 'Git-like version control for your thesis documents with branching, merging, and conflict resolution.',
      features: ['Unlimited version history', 'Compare any two versions', 'Restore previous versions', 'Branch for major revisions'],
    },
    {
      title: 'Advanced Search',
      description: 'Find anything instantly with our powerful search engine that indexes all your content, comments, and metadata.',
      features: ['Full-text search', 'Filter by date, author, status', 'Search within comments', 'Saved search queries'],
    },
    {
      title: 'Export Options',
      description: 'Export your thesis in multiple formats with proper formatting and citation styles preserved.',
      features: ['PDF with embedded fonts', 'Word (.docx) format', 'LaTeX source files', 'Citation export (BibTeX, RIS)'],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-[var(--text-primary)] mb-6">
          Technical Excellence
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Built on modern infrastructure with features that researchers actually need for serious academic work.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {technical.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8"
          >
            <h3 className="text-[var(--text-primary)] mb-3">{item.title}</h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{item.description}</p>
            <ul className="space-y-2">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[#00A7A5] flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function IntegrationSection({ onNavigate }: any) {
  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-[var(--text-primary)] mb-6">
            Integrates With Your Tools
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
            Thesisflow works seamlessly with the tools you already use. Import from Google Drive, Dropbox, OneDrive, and more. Export to your preferred citation manager or document format.
          </p>
          <button 
            onClick={() => onNavigate('integrations')}
            className="px-6 py-3 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] hover:shadow-lg transition-all duration-300"
          >
            View All Integrations
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: any) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Elegant multi-layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[700px] bg-[var(--text-brand)] opacity-[0.04] blur-[130px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.03] blur-[110px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--text-brand)] opacity-[0.02] blur-[90px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Card with sophisticated border and shadow */}
          <div className="bg-[var(--bg-primary)] border-2 border-[var(--border-primary)] rounded-2xl p-10 lg:p-12 shadow-sm hover:shadow-lg hover:border-[var(--border-brand-subtle)] transition-all duration-300">
            
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--bg-brand-subtle)] opacity-30 blur-3xl rounded-full"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl mb-4">
                  <Zap className="w-6 h-6 text-[var(--text-brand)]" />
                </div>
                <h2 className="text-2xl lg:text-3xl text-[var(--text-primary)] mb-3">
                  See ThesisFlow in Action
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                  Experience how our enterprise platform transforms institutional thesis management. Schedule a personalized demo with our team.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl hover:bg-[var(--bg-brand-hover)] hover:shadow-xl hover:shadow-[var(--text-brand)]/30 transition-all duration-300"
                >
                  <span className="text-base">Request Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="px-8 py-4 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg-tertiary)] hover:border-[var(--border-brand-subtle)] transition-all text-base"
                >
                  View Pricing
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-[var(--border-primary)]">
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--text-brand)]" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <Shield className="w-4 h-4 text-[var(--text-brand)]" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                  <Users className="w-4 h-4 text-[var(--text-brand)]" />
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