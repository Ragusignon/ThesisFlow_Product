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
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-4">GDPR Compliance</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Our Commitment to GDPR</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow® (a product of MIGRI Technologies) is committed to protecting the privacy rights of individuals in the European Union and European Economic Area. We fully comply with the General Data Protection Regulation (GDPR) (EU) 2016/679 and implement appropriate technical and organizational measures to ensure data protection.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  This document explains how we comply with GDPR requirements and what rights you have regarding your personal data.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Legal Basis for Processing</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We process personal data under the following legal bases:
                </p>
                <ul className="space-y-3">
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
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Your Rights Under GDPR</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  As a data subject under GDPR, you have the following rights:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Right of Access',
                      description: 'Request confirmation of whether we process your personal data and obtain a copy of it'
                    },
                    {
                      title: 'Right to Rectification',
                      description: 'Request correction of inaccurate or incomplete personal data'
                    },
                    {
                      title: 'Right to Erasure ("Right to be Forgotten")',
                      description: 'Request deletion of your personal data under certain circumstances'
                    },
                    {
                      title: 'Right to Restriction of Processing',
                      description: 'Request that we limit the processing of your personal data in certain situations'
                    },
                    {
                      title: 'Right to Data Portability',
                      description: 'Receive your personal data in a structured, commonly used, machine-readable format'
                    },
                    {
                      title: 'Right to Object',
                      description: 'Object to processing based on legitimate interests or for direct marketing purposes'
                    },
                    {
                      title: 'Rights Related to Automated Decision-Making',
                      description: 'Not be subject to decisions based solely on automated processing that produce legal effects'
                    },
                    {
                      title: 'Right to Withdraw Consent',
                      description: 'Withdraw consent at any time where processing is based on consent'
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
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>End-to-end encryption (TLS 1.3 for data in transit, AES-256 for data at rest)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Regular security assessments and penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Multi-factor authentication and role-based access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Automated backup and disaster recovery systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Intrusion detection and monitoring systems</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Organizational Measures</h3>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Data Protection Impact Assessments (DPIAs) for high-risk processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Staff training on data protection and GDPR compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Data processing agreements with all third-party processors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Incident response and data breach notification procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Regular policy reviews and compliance audits</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Transfers</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Standard Contractual Clauses (SCCs) approved by the European Commission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Adequacy decisions for transfers to approved countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Additional security measures as required by law</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Retention</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods are determined based on:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mt-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Legal and regulatory requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Institutional policies and requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>The nature and sensitivity of the data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Potential risks from unauthorized use or disclosure</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Breach Notification</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, we will:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mt-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Notify the relevant supervisory authority within 72 hours of becoming aware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Notify affected individuals without undue delay if there is a high risk to their rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Notify institutional administrators to enable them to fulfill their obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Document all breaches, even if notification is not required</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Children's Data</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow is intended for use by universities and their communities. Where processing involves children's data (under 16 years old), we require that institutions obtain appropriate consents and implement necessary safeguards in accordance with GDPR Article 8.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Governing Law and Jurisdiction</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  While this document outlines our GDPR compliance measures applicable to EU data subjects, the interpretation and enforcement of this policy shall be governed by the laws of India. Any disputes arising from data processing activities shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India, except where EU data subjects have rights under GDPR to bring actions in their local jurisdiction.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Additional Agreements:</strong> More specific GDPR compliance procedures, data processing agreements, and security protocols are mutually agreed upon and documented in the Non-Disclosure Agreement (NDA) and Data Processing Agreement (DPA) signed with institutional customers to ensure the highest level of data protection and product quality.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Contact Our Data Protection Officer</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  For any GDPR-related questions, to exercise your rights, or to raise concerns, please contact:
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