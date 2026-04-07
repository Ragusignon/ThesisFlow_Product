import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Cookie, Calendar } from 'lucide-react';

export default function CookiePolicy({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="cookie-policy">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A7A5]/10 to-transparent border border-[#00A7A5]/30 rounded-full mb-6">
              <Cookie className="w-4 h-4 text-[#00A7A5]" />
              <span className="text-sm text-[#00A7A5]">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4">Cookie Policy</h1>
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-12 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg px-4 py-3 w-fit">
              <Calendar className="w-5 h-5 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-base)' }} className="font-medium">Last updated: January 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website or use the Thesisflow platform. They help us provide you with a better, faster, and safer experience. Cookies contain information that is transferred to your device's hard drive and can be used to recognize your device when you return.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl text-gray-900 mb-3 mt-6">1. Strictly Necessary Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  These cookies are essential for the platform to function and cannot be disabled in our systems. They are usually only set in response to actions you take, such as logging in, setting privacy preferences, or filling in forms.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Authentication and session management</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Load balancing and system functionality</li>
                  </ul>
                </div>

                <h3 className="text-xl text-gray-900 mb-3 mt-6">2. Functional Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Language preferences</li>
                    <li>• User interface customizations</li>
                    <li>• Remember your settings and choices</li>
                  </ul>
                </div>

                <h3 className="text-xl text-gray-900 mb-3 mt-6">3. Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously. This data helps us improve the platform and user experience.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Page views and navigation patterns</li>
                    <li>• Feature usage statistics</li>
                    <li>• Performance monitoring</li>
                    <li>• Error tracking and diagnostics</li>
                  </ul>
                </div>

                <h3 className="text-xl text-gray-900 mb-3 mt-6">4. Performance Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our platform. They help us know which pages are most and least popular and see how visitors move around the site.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2"><strong>Examples:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Load times and response rates</li>
                    <li>• Server performance metrics</li>
                    <li>• Resource usage optimization</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may use third-party service providers who place cookies on your device on our behalf to perform certain functions:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Analytics Services:</strong> To understand platform usage and improve user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Authentication Providers:</strong> For secure SSO (Single Sign-On) integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Content Delivery Networks:</strong> To deliver content quickly and efficiently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Support Services:</strong> For customer support chat and helpdesk functionality</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Cookie Duration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies can be either session cookies or persistent cookies:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them. We use persistent cookies with expiration periods ranging from 30 days to 2 years, depending on their purpose</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have several options for managing cookies:
                </p>
                
                <h3 className="text-xl text-gray-900 mb-3 mt-6">Platform Cookie Settings</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can manage your cookie preferences through our Cookie Settings panel, accessible through your account settings. Note that disabling certain cookies may impact platform functionality.
                </p>

                <h3 className="text-xl text-gray-900 mb-3 mt-6">Browser Settings</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>View and delete cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Block third-party cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Block all cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Delete cookies when you close your browser</span>
                  </li>
                </ul>

                <div className="bg-[#00A7A5]/5 border border-[#00A7A5]/20 rounded-xl p-6">
                  <p className="text-gray-600 mb-3"><strong>Browser-specific instructions:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li>• <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li>• <strong>Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Impact of Disabling Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Blocking or deleting cookies may impact your experience with Thesisflow:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>You may need to log in more frequently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Your preferences and settings may not be saved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Some features may not work correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A7A5] rounded-full mt-2"></span>
                    <span>Platform performance may be reduced</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Do Not Track Signals</h2>
                <p className="text-gray-600 leading-relaxed">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no universal standard for how DNT signals should be interpreted. We do not currently respond to DNT signals, but we respect your privacy choices made through our Cookie Settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of material changes by updating the "Last updated" date and, where appropriate, providing additional notice to institutional administrators.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@thesisflow.com</p>
                  <p className="text-gray-600"><strong>Company:</strong> MIGRI Technologies</p>
                </div>
              </section>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}