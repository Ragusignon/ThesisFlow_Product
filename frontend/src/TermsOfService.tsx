import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { FileText, Calendar } from 'lucide-react';

export default function TermsOfService({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="terms-of-service">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Legal</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-4">Terms of Service</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">1. Agreement to Terms</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between your institution ("Customer", "you", or "your") and MIGRI Technologies ("Thesisflow®", "we", "our", or "us") governing your use of the Thesisflow thesis management platform. By subscribing to or using Thesisflow, you agree to be bound by these Terms. If you do not agree with these Terms, you may not access or use the service.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">2. Service Description</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow is a B2B SaaS platform designed exclusively for institutional adoption by universities, academic publishers, and similar organizations. The platform provides:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Thesis and dissertation submission and management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Collaborative review and feedback workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Version control and document management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Institutional dashboard and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Integration capabilities with existing institutional systems (where applicable)</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">3. Institutional License</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Subject to these Terms and payment of applicable fees, we grant you a non-exclusive, non-transferable, revocable license to:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Access and use Thesisflow for your institution's internal academic purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Provision user accounts to your students, faculty, administrators, and authorized reviewers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Configure workflows and settings according to your institutional policies</span>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  This license does not grant you the right to sublicense, resell, or distribute the service to other institutions.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">4. Institutional Responsibilities</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  As the subscribing institution, you are responsible for:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Maintaining the security and confidentiality of administrative accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Managing user access, roles, and permissions appropriately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Ensuring your users comply with these Terms and your institutional policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Obtaining necessary consents and permissions from your users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Maintaining accurate billing and contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Promptly notifying us of any security breaches or unauthorized access</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">5. Acceptable Use Policy</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">You and your users may not:</p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Violate any applicable laws, regulations, or third-party rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Transmit viruses, malware, or other harmful code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Attempt to gain unauthorized access to systems or data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Reverse engineer, decompile, or disassemble the platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Use automated systems to scrape or extract data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Interfere with or disrupt the service or servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Remove or obscure any proprietary notices or branding</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">6. Data Ownership and Usage</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>Your Data:</strong> You and your authorized users retain all intellectual property rights in the content you submit to Thesisflow, including thesis documents, comments, and other materials ("Customer Data"). We do not claim ownership of Customer Data.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>Service Access License:</strong> You grant us a limited, revocable license to host, store, process, access, and transmit Customer Data solely to provide, maintain, and improve the service, including support, updates (when authorized by the institution), and necessary backup and disaster recovery copies.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Aggregated Data:</strong> We may create anonymized, aggregated statistical data from Customer Data for analytics, research, and service improvement purposes. This data will not identify your institution or individual users.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">7. Payment Terms</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Subscription fees are based on your selected plan and usage tier. You agree to:
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Pay all fees according to the agreed payment schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Provide accurate and complete billing information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Authorize us to charge your payment method on file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Pay applicable taxes, if not already included in the fees</span>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  Late payments may result in service suspension. Fees are non-refundable except as required by law or specified in your institutional agreement.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">8. Service Availability</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We aim to maintain reliable service availability and may perform scheduled maintenance from time to time. Specific uptime commitments, if any, are defined in your institutional subscription agreement.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">9. Privacy and Data Protection</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Your use of the service is also governed by our Privacy Policy. We design the platform with privacy and security considerations in mind and aim to support applicable data protection requirements relevant to educational and institutional environments.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">10. Termination</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>By You:</strong> You may terminate your subscription by providing 30 days' written notice, subject to your contractual commitment period.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>By Us:</strong> We may suspend or terminate your access immediately if you breach these Terms, fail to pay fees, or for other material violations. We will provide notice when reasonably possible.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Effect of Termination:</strong> Upon termination, access to the service will be disabled. Data export or retention terms will be governed by the institutional agreement.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">11. Warranties and Disclaimers</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We warrant that the service will perform substantially in accordance with its documentation. However, EXCEPT AS EXPRESSLY PROVIDED, THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We do not warrant that the service will be uninterrupted, error-free, or completely secure. You are responsible for implementing appropriate backup and security measures for your data.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">12. Limitation of Liability</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM. WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">13. Indemnification</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  You agree to indemnify and hold harmless MIGRI Technologies, its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including legal fees) arising from your use of the service, your violation of these Terms, or your infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">14. Changes to Terms</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We may modify these Terms from time to time. We will notify institutional administrators of material changes via email at least 30 days in advance. Continued use of the service after the effective date constitutes acceptance of the modified Terms. If you do not agree with the changes, you may terminate your subscription.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">15. Governing Law and Dispute Resolution</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong>Jurisdiction:</strong> Any disputes, claims, or legal proceedings arising out of or relating to these Terms, your use of the service, or your relationship with MIGRI Technologies shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India. You irrevocably consent to the jurisdiction and venue of such courts.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Dispute Resolution:</strong> Before initiating any legal proceedings, parties agree to first attempt to resolve disputes through good faith negotiations for a period of 30 days. If negotiations fail, the matter shall be resolved in accordance with the jurisdiction specified above.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">16. Non-Disclosure Agreement and Specific Policies</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  To maintain the highest level of product quality and security, institutional customers are required to execute a separate Non-Disclosure Agreement (NDA) with MIGRI Technologies.
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Additional Policies:</strong> More specific operational policies, security protocols, data handling procedures, and customization terms are mutually agreed upon and documented in the signed NDA and institutional subscription agreement. These documents take precedence over these general Terms of Service where applicable and provide detailed provisions tailored to your institution's specific requirements and use case.
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">17. General Provisions</h2>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Entire Agreement:</strong> These Terms, along with your subscription agreement and Privacy Policy, constitute the entire agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Assignment:</strong> You may not assign these Terms without our written consent</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">18. Contact Information</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  For questions about these Terms, please contact:
                </p>
                <div className="bg-[var(--card)] border border-[var(--border-primary)] rounded-xl p-6">
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-2"><strong>Email:</strong> admin@MIGRItech.com</p>
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]"><strong>Company:</strong> MIGRI Technologies</p>
                </div>
              </section>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}