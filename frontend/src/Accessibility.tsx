import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Accessibility as AccessibilityIcon, Calendar } from 'lucide-react';

export default function Accessibility({ onNavigate }: any) {
  const designConsiderations = [
    'Structured content using proper HTML semantics',
    'Responsive design adaptable to different devices and screen sizes',
    'Readable and simple interface design with clear language',
    'Consistent navigation and identification patterns',
    'Descriptive page titles and headings',
    'Form labels and input guidance for user interactions',
    'Helpful error messages and suggestions where applicable',
    'Predictable interface behaviour and interaction patterns',
    'Content designed to be readable without requiring time constraints',
    'General support for content resizing and layout adaptability',
  ];

  const testingTools = [
    'Automated accessibility testing tools',
    'Manual testing with assistive technologies',
    'User testing with real academic users',
  ];

  const institutionalSupport = [
    'Accessibility training for administrators and users',
    'Documentation on creating accessible content',
    'Assistance with institutional accessibility compliance',
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
                  Thesisflow® (a product of MIGRI Technologies) is committed to improving the accessibility and usability of our platform for all users, including people with disabilities. We are continuously enhancing the user experience to support inclusive access for a broad range of users.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We believe that education and research should be accessible to everyone. Our platform is designed to support students, advisors, reviewers, and administrators with diverse abilities and needs.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Standards and Guidelines</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow uses the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a reference framework to guide accessibility improvements across the platform.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Design and Usability Considerations</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow incorporates the following design and usability characteristics:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  {designConsiderations.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Testing and Evaluation</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We conduct regular accessibility testing using:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  {testingTools.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Known Limitations</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  While we strive for full accessibility, we acknowledge the following current limitations:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Some third-party embedded content may not meet WCAG 2.1 Level AA standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
                    <span>User-uploaded documents are dependent on the accessibility of the source material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
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
                  {institutionalSupport.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
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
                  Some features of Thesisflow may rely on third-party services or content. While we aim to provide a consistent user experience, we do not control the accessibility of third-party content. If you encounter any difficulty with such content, you may contact us, and we will review the issue where possible.
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