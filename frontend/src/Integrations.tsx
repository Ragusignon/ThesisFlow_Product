import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { Cloud, Database, FileText, BookOpen, Users, Lock, BarChart3, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Integrations({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="">
      <SEO
        title="Integrations - ThesisFlow"
        description="Connect ThesisFlow with your favorite academic tools and services. Seamless integrations with institutional repositories, reference managers, storage providers, and more."
        keywords="thesis management integrations, academic software integrations, institutional repository, reference managers, cloud storage"
        canonicalUrl="https://thesisflow.com/integrations"
      />
      
      <div className="pt-32 pb-20">
        <HeroSection />
        <IntegrationCategories />
        <AllIntegrations />
        <CTASection onNavigate={onNavigate} />
      </div>
    </PageLayout>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
          <Cloud className="w-3.5 h-3.5 text-[var(--text-brand)]" />
          <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Seamless Connections</span>
        </div>
        
        <h1 className="mb-6" style={{ fontSize: '2.5rem' }}>
          Integrate With Your{' '}
          <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">
            Academic Tools
          </span>
        </h1>
        
        <p className="text-[var(--text-secondary)] leading-relaxed text-xl">
          ThesisFlow seamlessly connects with the institutional tools and services you already use, creating a unified ecosystem for thesis management.
        </p>
      </motion.div>
    </section>
  );
}

function IntegrationCategories() {
  const categories = [
    {
      icon: Database,
      title: 'Institutional Repositories',
      count: '8+',
      description: 'Direct integration with DSpace, EPrints, Fedora, and more',
    },
    {
      icon: BookOpen,
      title: 'Reference Managers',
      count: '6+',
      description: 'Sync with Zotero, Mendeley, EndNote, and others',
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      count: '5+',
      description: 'Connect to Google Drive, OneDrive, Dropbox, and more',
    },
    {
      icon: Lock,
      title: 'Identity Providers',
      count: '10+',
      description: 'SSO with Shibboleth, SAML, OAuth, and LDAP',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--border-brand-subtle)] transition-all duration-300"
          >
            <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center mb-4">
              <category.icon className="w-6 h-6 text-[var(--text-brand)]" />
            </div>
            <div className="text-2xl text-[var(--text-brand)] mb-2">{category.count}</div>
            <h3 className="text-[var(--text-primary)] mb-2">{category.title}</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AllIntegrations() {
  const integrations = [
    // Institutional Repositories
    {
      category: 'Institutional Repositories',
      items: [
        {
          name: 'DSpace',
          description: 'Open-source repository platform used by thousands of academic institutions worldwide',
          logo: Database,
          status: 'Available',
          features: ['Direct metadata export', 'Bulk upload', 'Custom field mapping'],
        },
        {
          name: 'EPrints',
          description: 'Flexible repository software for research institutions and archives',
          logo: Database,
          status: 'Available',
          features: ['Automatic deposit', 'Metadata sync', 'Version tracking'],
        },
        {
          name: 'Fedora Commons',
          description: 'Robust, modular repository system for preservation and access',
          logo: Database,
          status: 'Available',
          features: ['RESTful API', 'RDF metadata', 'Preservation policies'],
        },
        {
          name: 'Invenio',
          description: 'Modern digital library framework powering research data repositories',
          logo: Database,
          status: 'Coming Soon',
          features: ['DOI minting', 'OAI-PMH', 'Advanced search'],
        },
      ],
    },
    // Reference Managers
    {
      category: 'Reference Managers',
      items: [
        {
          name: 'Zotero',
          description: 'Free, open-source reference manager for research and citations',
          logo: BookOpen,
          status: 'Available',
          features: ['Citation export', 'Bibliography sync', 'Group libraries'],
        },
        {
          name: 'Mendeley',
          description: 'Reference manager and academic social network',
          logo: BookOpen,
          status: 'Available',
          features: ['PDF annotations', 'Collaborative collections', 'Citation styles'],
        },
        {
          name: 'EndNote',
          description: 'Industry-standard reference management for researchers',
          logo: BookOpen,
          status: 'Available',
          features: ['Library sync', 'Cite While You Write', 'Import filters'],
        },
        {
          name: 'RefWorks',
          description: 'Web-based reference management tool',
          logo: BookOpen,
          status: 'Coming Soon',
          features: ['Cloud sync', 'Collaboration', 'Format conversion'],
        },
      ],
    },
    // Cloud Storage
    {
      category: 'Cloud Storage',
      items: [
        {
          name: 'Google Drive',
          description: 'Cloud storage and file synchronization service by Google',
          logo: Cloud,
          status: 'Available',
          features: ['Two-way sync', 'Real-time collaboration', 'Version history'],
        },
        {
          name: 'Microsoft OneDrive',
          description: 'Cloud storage service integrated with Microsoft 365',
          logo: Cloud,
          status: 'Available',
          features: ['Office integration', 'Auto-save', 'Sharing controls'],
        },
        {
          name: 'Dropbox',
          description: 'Popular file hosting service for personal and institutional use',
          logo: Cloud,
          status: 'Available',
          features: ['Smart sync', 'File recovery', 'Team folders'],
        },
        {
          name: 'Box',
          description: 'Enterprise-grade cloud content management',
          logo: Cloud,
          status: 'Available',
          features: ['Advanced security', 'Compliance tools', 'Workflow automation'],
        },
      ],
    },
    // Identity Providers
    {
      category: 'Identity & Access',
      items: [
        {
          name: 'Shibboleth',
          description: 'Federated identity solution for academic institutions',
          logo: Lock,
          status: 'Available',
          features: ['SSO', 'Multi-factor auth', 'SAML 2.0'],
        },
        {
          name: 'Okta',
          description: 'Enterprise identity and access management platform',
          logo: Lock,
          status: 'Available',
          features: ['Universal directory', 'Adaptive MFA', 'Lifecycle management'],
        },
        {
          name: 'Azure AD',
          description: 'Microsoft\'s cloud-based identity and access management service',
          logo: Lock,
          status: 'Available',
          features: ['Conditional access', 'Identity protection', 'B2B collaboration'],
        },
        {
          name: 'LDAP / Active Directory',
          description: 'Directory services for institutional user management',
          logo: Lock,
          status: 'Available',
          features: ['User sync', 'Group policies', 'Role mapping'],
        },
      ],
    },
    // Document Formats
    {
      category: 'Document & Publishing',
      items: [
        {
          name: 'LaTeX / Overleaf',
          description: 'Professional typesetting system for academic documents',
          logo: FileText,
          status: 'Available',
          features: ['Direct import', 'Template library', 'Compiler integration'],
        },
        {
          name: 'Microsoft Word',
          description: 'Industry-standard word processor for document creation',
          logo: FileText,
          status: 'Available',
          features: ['.docx export', 'Track changes', 'Style preservation'],
        },
        {
          name: 'PDF/A',
          description: 'Long-term preservation format for electronic documents',
          logo: FileText,
          status: 'Available',
          features: ['Archival compliance', 'Embedded fonts', 'Metadata preservation'],
        },
        {
          name: 'ORCID',
          description: 'Unique identifier for researchers and contributors',
          logo: Users,
          status: 'Coming Soon',
          features: ['Author attribution', 'Profile linking', 'Publication tracking'],
        },
      ],
    },
    // Analytics & Reporting
    {
      category: 'Analytics & Metrics',
      items: [
        {
          name: 'Google Analytics',
          description: 'Web analytics service for institutional dashboards',
          logo: BarChart3,
          status: 'Coming Soon',
          features: ['Usage tracking', 'Custom reports', 'Event monitoring'],
        },
        {
          name: 'Altmetric',
          description: 'Track attention and impact of research outputs',
          logo: BarChart3,
          status: 'Coming Soon',
          features: ['Social media tracking', 'Citation metrics', 'Impact visualization'],
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
      <div className="space-y-16">
        {integrations.map((section, sectionIndex) => (
          <div key={section.category}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-[var(--text-primary)] mb-8"
            >
              {section.category}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--border-brand-subtle)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <integration.logo className="w-6 h-6 text-[var(--text-brand)]" />
                      </div>
                      <div>
                        <h3 className="text-lg text-[var(--text-primary)]">{integration.name}</h3>
                        <span
                          className={`inline-block text-xs px-2 py-1 rounded-full ${
                            integration.status === 'Available'
                              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                              : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          }`}
                        >
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {integration.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {integration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {integration.status === 'Available' && (
                    <button className="text-sm text-[var(--text-brand)] hover:text-[var(--text-brand-hover)] flex items-center gap-1 transition-colors">
                      Learn more
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: any) {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[var(--bg-brand-subtle)] to-[var(--bg-secondary)] border border-[var(--border-brand-subtle)] rounded-3xl p-10 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--text-brand)] opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--text-brand)] opacity-5 blur-3xl rounded-full"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--bg-brand)] rounded-2xl mb-6">
            <Cloud className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-[var(--text-primary)] mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
            Need a Custom Integration?
          </h2>
          
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8" style={{ fontSize: 'var(--text-lg)' }}>
            We can build custom integrations tailored to your institution's specific tools and workflows. Contact our team to discuss your integration needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[var(--bg-brand)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              style={{ fontSize: 'var(--text-base)' }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('request-demo')}
              className="inline-flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] px-8 py-4 rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors"
              style={{ fontSize: 'var(--text-base)' }}
            >
              Request Demo
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
