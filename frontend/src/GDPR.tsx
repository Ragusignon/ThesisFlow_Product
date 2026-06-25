import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Shield, Calendar, CheckCircle2 } from 'lucide-react';

export default function GDPR({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="gdpr">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Legal</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-4">GDPR & DPDPA Readiness</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Our Commitment to GDPR and DPDPA</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow® (a product of MIGRI Technologies) is designed with a strong focus on privacy, security, and responsible data handling. We are actively working toward alignment with the principles of the General Data Protection Regulation (GDPR) (EU) 2016/679 and India's Digital Personal Data Protection Act, 2023 (DPDPA). Our systems are being developed with privacy-by-design and security-by-default principles in mind.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  While we are not claiming full compliance at this stage, we are continuously improving our platform, policies, and internal processes to better meet applicable privacy and data protection expectations.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  This document describes our current approach, design principles, and the privacy rights we aim to support as the product evolves.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Legal Basis for Processing</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We process personal data under the following legal bases:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <div style={{ fontSize: 'var(--text-base)' }}>
                      <span className="text-[var(--text-primary)]"><strong>Contractual Necessity:</strong></span>
                      <span className="text-[var(--text-secondary)]"> Processing necessary to provide services to institutional customers</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <div style={{ fontSize: 'var(--text-base)' }}>
                      <span className="text-[var(--text-primary)]"><strong>Legitimate Interests:</strong></span>
                      <span className="text-[var(--text-secondary)]"> Service improvement, security, and fraud prevention</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <div style={{ fontSize: 'var(--text-base)' }}>
                      <span className="text-[var(--text-primary)]"><strong>Legal Obligation:</strong></span>
                      <span className="text-[var(--text-secondary)]"> Compliance with applicable laws and regulations</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                    <div style={{ fontSize: 'var(--text-base)' }}>
                      <span className="text-[var(--text-primary)]"><strong>Consent:</strong></span>
                      <span className="text-[var(--text-secondary)]"> For optional features or marketing communications (where applicable)</span>
                    </div>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  These bases may be refined as our compliance and legal review processes mature.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Rights We Aim to Support (DPDPA & GDPR)</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We aim to support the following rights, subject to legal requirements, technical feasibility, and the role of the institution managing the data:
                </p>
                <ul className="space-y-4 mb-4">
                  {[
                    {
                      title: 'Right of Access',
                      description: 'Request information about personal data processed'
                    },
                    {
                      title: 'Right to Correction',
                      description: 'Request correction of inaccurate or incomplete data'
                    },
                    {
                      title: 'Right to Deletion',
                      description: 'Request deletion of personal data where applicable'
                    },
                    {
                      title: 'Right to Restrict Processing',
                      description: 'Request limitation of processing in certain cases'
                    },
                    {
                      title: 'Right to Data Portability (GDPR)',
                      description: 'Receive personal data in a structured format where feasible'
                    },
                    {
                      title: 'Right to Object (GDPR)',
                      description: 'Object to certain types of processing'
                    },
                    {
                      title: 'Right to Withdraw Consent',
                      description: 'Withdraw consent where processing is based on consent'
                    },
                    {
                      title: 'Right to Grievance Redressal (DPDPA)',
                      description: 'Raise concerns through appropriate channels'
                    },
                    {
                      title: 'Transparency for Automated Processing',
                      description: 'Request information about significant automated decisions where applicable'
                    },
                  ].map((right) => (
                    <li key={right.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[var(--text-primary)]"><strong>{right.title}:</strong></span>
                        <span className="text-[var(--text-secondary)]"> {right.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  The availability of these rights may vary depending on the legal context and system maturity.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Exercising Your Rights</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>For Individual Users:</strong> Since Thesisflow is a B2B platform, individual users should first contact their institution's administrator to exercise their rights. The institution is typically the data controller for user data.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>For Institutional Administrators:</strong> You can exercise rights on behalf of your users or manage institutional data by contacting our Data Protection Officer.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We will respond to valid requests within one month, or inform you if we need additional time (up to two more months for complex requests).
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Protection Measures</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We implement comprehensive technical and organizational measures:
                </p>

                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Technical Measures</h3>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mb-6">
                  {[
                    'Encryption for data transmission and storage where appropriate',
                    'Authentication and access control mechanisms',
                    'Role-based permissions and authorization controls',
                    'Backup and recovery processes',
                    'Security monitoring and logging systems',
                    'Ongoing security reviews and improvements',
                  ].map((measure, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Organizational Measures</h3>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mb-4">
                  {[
                    'Internal privacy and security policies',
                    'Staff awareness and training initiatives',
                    'Vendor and third-party risk management practices',
                    'Incident response procedures',
                    'Documentation and governance processes',
                    'Periodic review of security and privacy practices',
                  ].map((measure, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  These measures are being strengthened over time as the platform scales.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Transfers</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow does not intentionally transfer or store institutional data outside its designated hosting infrastructure. Data is hosted using trusted third-party cloud service providers and is managed in accordance with institutional requirements, contractual obligations, and our ongoing privacy and security practices.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Where cross-jurisdictional data processing is required, we seek to implement appropriate technical, contractual, and organizational safeguards consistent with customer requirements and applicable legal obligations.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Retention</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods are determined based on:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mt-4">
                  {[
                    'Legal and regulatory requirements',
                    'Institutional policies and requirements',
                    'The nature and sensitivity of the data',
                    'Potential risks from unauthorized use or disclosure'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Breach Notification</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, we will:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mt-4">
                  {[
                    'Investigate and assess the incident promptly',
                    'Support notifications where required under applicable laws (including GDPR and DPDPA, where applicable)',
                    'Inform institutional administrators where relevant',
                    'Take reasonable steps toward mitigation and remediation',
                    'Maintain internal records of security incidents'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Children's Data</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow is intended for use by universities and their communities. Where processing involves children's data (under 16 years old), we require that institutions obtain appropriate consents and implement necessary safeguards.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Governing Law and Jurisdiction</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  While this document outlines our ongoing efforts toward GDPR and DPDPA alignment and reflects our current privacy engineering principles, the interpretation and enforcement of this policy shall be governed by the laws of India. Any disputes arising from data processing activities shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India, unless otherwise required under applicable data protection laws.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Additional Agreements:</strong> More specific GDPR and DPDPA compliance procedures, data processing agreements, and security protocols are mutually agreed upon and documented in the Non-Disclosure Agreement (NDA) and Data Processing Agreement (DPA) signed with institutional customers to ensure the highest level of data protection and product quality.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Important Notice</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  This document describes our current privacy engineering approach and regulatory alignment efforts. It does not represent full compliance certification under GDPR, DPDPA, or any other regulation.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We are actively working toward stronger alignment and continuously improving our systems, policies, and safeguards as the platform evolves.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Contact Our Data Protection Officer</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  For any compliance-related questions, to exercise your rights, or to raise concerns, please contact:
                </p>
                <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6">
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-2"><strong>Email:</strong> admin@migritech.com</p>
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-4"><strong>Company:</strong> MIGRI Technologies</p>
                  <p style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-tertiary)] italic">
                    We will respond to your inquiry within 30 days and may request additional information to verify your identity before processing your request.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}