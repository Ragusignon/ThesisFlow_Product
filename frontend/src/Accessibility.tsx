import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Accessibility as AccessibilityIcon, CheckCircle2, Calendar } from 'lucide-react';

export default function Accessibility({ onNavigate }: any) {
  const wcagFeatures = [
    {
      principle: 'Perceivable',
      items: [
        'Alternative text for all images and non-text content',
        'Captions and transcripts for multimedia content',
        'Content structure using proper HTML semantics',
        'Sufficient color contrast (minimum 4.5:1 for normal text)',
        'Text resizable up to 200% without loss of functionality',
        'Content adaptable to different presentations and devices',
      ]
    },
    {
      principle: 'Operable',
      items: [
        'Full keyboard navigation support',
        'No keyboard traps',
        'Skip navigation links to bypass repetitive content',
        'Descriptive page titles and headings',
        'Visible focus indicators',
        'Sufficient time for users to read and interact with content',
        'No content that causes seizures or physical reactions',
      ]
    },
    {
      principle: 'Understandable',
      items: [
        'Clear and simple language',
        'Consistent navigation and identification',
        'Helpful error messages and suggestions',
        'Labels and instructions for user input',
        'Predictable functionality and behavior',
        'Context-sensitive help where needed',
      ]
    },
    {
      principle: 'Robust',
      items: [
        'Valid HTML and ARIA markup',
        'Compatible with current and future assistive technologies',
        'Progressive enhancement approach',
        'Graceful degradation for older browsers',
      ]
    },
  ];

  const assistiveTech = [
    { name: 'Screen Readers', examples: 'JAWS, NVDA, VoiceOver, TalkBack' },
    { name: 'Screen Magnifiers', examples: 'ZoomText, Windows Magnifier, macOS Zoom' },
    { name: 'Speech Recognition', examples: 'Dragon NaturallySpeaking, Windows Speech Recognition' },
    { name: 'Switch Access', examples: 'Various hardware switches and alternative input devices' },
    { name: 'Keyboard-Only Navigation', examples: 'Full functionality without mouse' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="accessibility">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <AccessibilityIcon className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Accessibility</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-4">Accessibility Statement</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Our Commitment</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow® (a product of MIGRI Technologies) is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our platform is accessible to all users, regardless of ability.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We believe that education and research should be accessible to everyone. Our platform is designed to support students, advisors, reviewers, and administrators with diverse abilities and needs.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Standards and Guidelines</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow strives to conform to Level AA of the Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines are organized around four principles that lay the foundation for accessible web content:
                </p>

                {wcagFeatures.map((section, index) => (
                  <div key={section.principle} className="mb-6">
                    <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3">{index + 1}. {section.principle}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                          <span style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Assistive Technology Compatibility</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We design and test Thesisflow to be compatible with the following assistive technologies:
                </p>
                <div className="space-y-3">
                  {assistiveTech.map((tech) => (
                    <div key={tech.name} className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-4">
                      <h4 style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-primary)] mb-1">{tech.name}</h4>
                      <p style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-secondary)]">{tech.examples}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Keyboard Navigation</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  All functionality is available using a keyboard alone. Key keyboard shortcuts include:
                </p>
                <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6">
                  <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Tab</span>
                      <span>Navigate forward through interactive elements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Shift + Tab</span>
                      <span>Navigate backward through interactive elements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Enter</span>
                      <span>Activate links and buttons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Space</span>
                      <span>Activate buttons and toggle checkboxes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Arrow Keys</span>
                      <span>Navigate within menus, dropdowns, and radio groups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--text-brand)] font-mono" style={{ fontSize: 'var(--text-sm)' }}>Esc</span>
                      <span>Close dialogs and modal windows</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Document Accessibility</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We encourage users to create accessible thesis documents. Our platform supports:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>PDF/UA (Universal Accessibility) compliant documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Document accessibility checking and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Guidelines for creating accessible academic content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Alternative format generation capabilities</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Testing and Evaluation</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We conduct regular accessibility testing using:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Automated accessibility testing tools (axe, WAVE, Lighthouse)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Manual testing with assistive technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>User testing with people with disabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Third-party accessibility audits</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Known Limitations</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  While we strive for full accessibility, we acknowledge the following current limitations:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Some third-party embedded content may not meet WCAG 2.1 Level AA standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>User-uploaded documents are dependent on the accessibility of the source material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Complex mathematical notation may require specialized assistive technology</span>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  We are actively working to address these limitations in future updates.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Institutional Support</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  For institutions using Thesisflow, we offer:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Accessibility training for administrators and users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Documentation on creating accessible content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Assistance with institutional accessibility compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>VPAT (Voluntary Product Accessibility Template) documentation</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Ongoing Improvement</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Accessibility is an ongoing journey, not a destination. We continuously monitor, test, and improve our platform's accessibility. Our development process includes accessibility considerations from the earliest design stages through implementation and testing.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Feedback and Contact</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of Thesisflow. If you encounter accessibility barriers or have suggestions for improvement, please let us know:
                </p>
                <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6">
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-2"><strong>Email:</strong> admin@migritech.com</p>
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-4"><strong>Company:</strong> MIGRI Technologies</p>
                  <p style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-tertiary)] italic">
                    We aim to respond to accessibility feedback within 5 business days and will work with you to provide the information or access you need.
                  </p>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Third-Party Content</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  While we strive to ensure that third-party content and integrations meet accessibility standards, we do not have full control over external content. If you encounter inaccessible third-party content, please contact us, and we will work with our partners to address the issue.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Formal Complaints</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  If you are not satisfied with our response to your accessibility concerns, you may file a formal complaint with your institution's disability services office or with relevant regulatory authorities in your jurisdiction.
                </p>
              </section>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}