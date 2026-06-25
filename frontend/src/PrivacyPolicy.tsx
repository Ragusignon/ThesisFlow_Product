import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Shield, Calendar } from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="privacy-policy">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Legal</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-4">Privacy Policy</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026[cite: 2]</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Introduction[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow® (a product of MIGRI Technologies, "we", "our", or "us") values your privacy.[cite: 2] This Privacy Policy explains how we handle information in connection with your use of our institutional thesis management platform.[cite: 2] This policy applies to universities, academic publishers, and other institutions that adopt Thesisflow, as well as their end users.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Service Model[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Thesisflow is a B2B software platform used by institutions for managing academic thesis workflows.[cite: 2] The platform may be deployed on institutional infrastructure or designated hosting environments controlled by the subscribing institution.[cite: 2]
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We collect and maintain only limited administrative and account-related information necessary to provide and manage the service.[cite: 2] All academic content and operational data within the Thesisflow system are controlled and managed by the subscribing institution in its designated environment.[cite: 2] We access such data only when explicitly authorized for maintenance, updates, or technical support purposes.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Information We Collect[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We collect the following limited information necessary for providing our services:[cite: 2]
                </p>
                
                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Institutional Information[cite: 2]</h3>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Institution name, domain, and contact details[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Billing and subscription information[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Administrative contact information[cite: 2]</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Cookies[cite: 2]</h3>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We use browser cookies to enable basic platform functionality and to understand general usage patterns for performance and product improvement.[cite: 2]
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  These cookies are not used for advertising or marketing purposes and are not used to collect direct personal identifiers.[cite: 2]
                </p>

                <h3 style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-primary)] mb-3 mt-6">Information Managed by the Institution[cite: 2]</h3>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  The following types of information are stored within the Thesisflow system but are controlled by the subscribing institution:[cite: 2]
                </p>

                <h4 style={{ fontSize: 'var(--text-base)' }} className="font-semibold text-[var(--text-primary)] mb-2 mt-4">User Information[cite: 2]</h4>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Account information (name, email address, institutional affiliation)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Authentication credentials (encrypted passwords or SSO tokens)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>User role and permissions within the institution[cite: 2]</span>
                  </li>
                </ul>

                <h4 style={{ fontSize: 'var(--text-base)' }} className="font-semibold text-[var(--text-primary)] mb-2 mt-4">Academic Content[cite: 2]</h4>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)] mb-6">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Thesis documents, manuscripts, and related academic content[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Metadata (title, author, department, submission date, version history)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Comments, feedback, and review annotations[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Workflow status and approval records[cite: 2]</span>
                  </li>
                </ul>

                <h4 style={{ fontSize: 'var(--text-base)' }} className="font-semibold text-[var(--text-primary)] mb-2 mt-4">Usage and Technical Data[cite: 2]</h4>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Log data (IP addresses, browser type, access times)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Device information and operating system[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Feature usage analytics and interaction patterns[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span>Performance and error reports[cite: 2]</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">How We Use Your Information[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We use the limited information we collect for the following purposes:[cite: 2]
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Service Delivery:</strong> To provide, maintain, and improve thesis management services[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Account Management:</strong> To manage subscriptions, licensing, and institutional access[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Communication:</strong> To send service-related notices and administrative communications[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Analytics:</strong> To understand usage patterns and improve user experience[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Support:</strong> To provide technical assistance and maintenance services when requested or authorized[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Compliance:</strong> To comply with legal obligations and institutional policies[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Security:</strong> To detect, prevent, and address security threats and fraud[cite: 2]</span>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  We do not independently use or process academic content or user-generated institutional data outside of authorized maintenance activities.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Sharing and Disclosure[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We do not sell your personal information.[cite: 2] We may share information in the following circumstances:[cite: 2]
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Within Your Institution:</strong> With authorized users within your institution according to defined roles and permissions[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Service Providers:</strong> With trusted third-party vendors who assist in service delivery (e.g., cloud hosting, email services)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Legal Compliance:</strong> When required by law or to protect rights, property, or safety[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to affected parties)[cite: 2]</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Security[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  We implement reasonable technical and organizational measures to help protect your information, including secure data transmission, role-based access controls, authentication safeguards, and the use of trusted third-party cloud service providers for data storage and infrastructure.[cite: 2]
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  While we take reasonable precautions, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Data Retention[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Institutional data stored within the Thesisflow system is retained and managed by the subscribing institution according to its own policies and requirements.[cite: 2]
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Administrative and billing information collected by Thesisflow is retained for as long as necessary to manage the customer relationship, provide services, and comply with legal obligations.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Your Rights[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights:[cite: 2]
                </p>
                <ul style={{ fontSize: 'var(--text-base)' }} className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Access:</strong> Request a copy of your personal data[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Correction:</strong> Request correction of inaccurate data[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Portability:</strong> Request your data in a portable format[cite: 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full mt-2"></span>
                    <span><strong>Objection:</strong> Object to certain data processing activities[cite: 2]</span>
                  </li>
                </ul>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mt-4">
                  Please note that Thesisflow is a B2B platform.[cite: 2] Individual users should contact their institution's administrator for data-related requests.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">International Data Transfers[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow does not intentionally transfer or store institutional data outside its designated hosting infrastructure.[cite: 2] Data is hosted using trusted third-party cloud service providers and is managed in accordance with applicable laws and institutional agreements.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Children's Privacy[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  Thesisflow is designed for institutional use and is not intended for children under 16.[cite: 2] We do not knowingly collect personal information from children without appropriate institutional authorization and parental consent where required.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Changes to This Policy[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  We may update this Privacy Policy from time to time.[cite: 2] We will notify institutional administrators of material changes via email or through the platform.[cite: 2] Continued use of the service after changes constitutes acceptance of the updated policy.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Governing Law and Jurisdiction[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  This Privacy Policy is governed by the laws of India.[cite: 2] Any disputes arising from this policy or our data practices shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.[cite: 2]
                </p>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>Additional Agreements:</strong> More specific data protection protocols, security measures, and data handling procedures are mutually agreed upon and documented in the Non-Disclosure Agreement (NDA) and institutional subscription agreement signed with MIGRI Technologies to ensure the highest level of product quality and data security.[cite: 2]
                </p>
              </section>

              <section>
                <h2 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)] mb-4">Contact Us[cite: 2]</h2>
                <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:[cite: 2]
                </p>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-6">
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-2"><strong>Email:</strong> privacy@thesisflow.com[cite: 2]</p>
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] mb-2"><strong>Data Protection Officer:</strong> dpo@thesisflow.com[cite: 2]</p>
                  <p style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)]"><strong>Company:</strong> MIGRI Technologies[cite: 2]</p>
                </div>
              </section>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}