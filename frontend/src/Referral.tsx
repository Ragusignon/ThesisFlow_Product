import { motion } from 'motion/react';
import { Building2, Send, CheckCircle, User, Mail, Heart, Globe, UserCheck, Link2 } from 'lucide-react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { useState } from 'react';
import { addReferral } from './utils/referralData';

export default function Referral({ onNavigate }: any) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    institutionName: '',
    country: '',
    contactPersonName: '',
    contactPersonEmail: '',
    notes: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
      await fetch(`${API_URL}/referrals/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          referrerName: formData.referrerName,
          referrerEmail: formData.referrerEmail,
          institutionName: formData.institutionName,
          institutionType: 'university',
          country: formData.country,
          contactPersonName: formData.contactPersonName || undefined,
          contactPersonEmail: formData.contactPersonEmail || undefined,
          notes: formData.notes || undefined
        })
      });

      addReferral(
        formData.referrerName,
        formData.referrerEmail,
        formData.institutionName,
        'university', // Default institution type
        formData.country,
        undefined, // No referrer role
        undefined, // No website URL
        formData.contactPersonName || undefined,
        undefined, // No contact person role
        formData.contactPersonEmail || undefined,
        undefined, // No contact person LinkedIn
        formData.notes || undefined
      );
      
      setSubmitStatus('success');
      setFormData({
        referrerName: '',
        referrerEmail: '',
        institutionName: '',
        country: '',
        contactPersonName: '',
        contactPersonEmail: '',
        notes: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Backend submission failed, falling back to local storage', error);
      try {
        addReferral(
          formData.referrerName,
          formData.referrerEmail,
          formData.institutionName,
          'university',
          formData.country,
          undefined,
          undefined,
          formData.contactPersonName || undefined,
          undefined,
          formData.contactPersonEmail || undefined,
          undefined,
          formData.notes || undefined
        );
        
        setSubmitStatus('success');
        setFormData({
          referrerName: '',
          referrerEmail: '',
          institutionName: '',
          country: '',
          contactPersonName: '',
          contactPersonEmail: '',
          notes: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (localError: any) {
        setSubmitStatus('error');
        setErrorMessage(localError.message || 'Failed to submit referral');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageLayout onNavigate={onNavigate} currentPage="referral">
      <SEO
        title="Refer an Institution - Thesisflow"
        description="Help bring modern thesis management to universities and research institutions. Refer an institution you believe would benefit from Thesisflow's automated workflow system."
        keywords="institutional referral, university referral, research institution, thesis management, academic software adoption, examiner referral"
        canonicalUrl="https://thesisflow.com/referral"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--bg-primary)]">
        {/* Elegant layered background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--text-brand)] opacity-[0.04] blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[var(--text-brand)] opacity-[0.05] blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.02] blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/30 to-[var(--bg-primary)]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <Heart className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="text-sm text-[var(--text-brand)]">Help Shape the Future of Research</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 leading-tight" style={{ fontSize: 'var(--text-3xl)' }}>
              Refer Your{' '}
              <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">
                Institution
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontSize: 'var(--text-lg)' }}>
              As an examiner, scholar, or academic professional, you've experienced thesis workflows firsthand. 
              If you believe your institution would benefit from Thesisflow's modern, automated approach, 
              we'd love to hear from you.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Globe, label: 'Global', desc: 'Impact' },
                { icon: Building2, label: 'Institutional', desc: 'Licensing' },
                { icon: CheckCircle, label: 'Automated', desc: 'Workflows' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl"
                >
                  <stat.icon className="w-6 h-6 text-[var(--text-brand)] mx-auto mb-2" />
                  <div className="text-[var(--text-primary)] mb-0.5">{stat.label}</div>
                  <div className="text-sm text-[var(--text-tertiary)]">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <div className="bg-[var(--bg-primary)] pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 lg:p-12 space-y-8">
              {/* Your Information Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-[var(--text-brand)]" />
                  </div>
                  <h3 className="text-xl text-[var(--text-primary)]">Your Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="referrerName" className="block text-base text-[var(--text-primary)] mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="referrerName"
                      name="referrerName"
                      value={formData.referrerName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="referrerEmail" className="block text-base text-[var(--text-primary)] mb-2">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="referrerEmail"
                      name="referrerEmail"
                      value={formData.referrerEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="jane.smith@university.edu"
                    />
                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                      We'll use this to keep you updated on the referral status
                    </p>
                  </div>
                </div>
              </div>

              {/* Institution Information Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[var(--text-brand)]" />
                  </div>
                  <h3 className="text-xl text-[var(--text-primary)]">Institution Information</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="institutionName" className="block text-base text-[var(--text-primary)] mb-2">
                      Institution Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="institutionName"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="e.g., Massachusetts Institute of Technology"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-base text-[var(--text-primary)] mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="e.g., United States"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person Information Section */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[var(--text-brand)]" />
                  </div>
                  <h3 className="text-xl text-[var(--text-primary)]">Contact Person at Institution</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-6 ml-13">
                  Know someone who could help? Share their contact details to make it easier for us to reach the right decision-maker.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contactPersonName" className="block text-base text-[var(--text-primary)] mb-2">
                      Contact Person's Full Name
                    </label>
                    <input
                      type="text"
                      id="contactPersonName"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="e.g., Dr. John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPersonEmail" className="block text-base text-[var(--text-primary)] mb-2">
                      Contact Person's Email Address
                    </label>
                    <input
                      type="email"
                      id="contactPersonEmail"
                      name="contactPersonEmail"
                      value={formData.contactPersonEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all placeholder:text-[var(--text-tertiary)]"
                      placeholder="e.g., john.doe@university.edu"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="notes" className="block text-base text-[var(--text-primary)] mb-2">
                  Why would this institution benefit from Thesisflow?
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-brand)] focus:border-transparent transition-all resize-none placeholder:text-[var(--text-tertiary)]"
                  placeholder="Share any insights about their current thesis workflow challenges, volume of submissions, or specific needs..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] hover:shadow-lg hover:shadow-[var(--text-brand)]/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-base">Submit Referral</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-[var(--text-tertiary)] text-center">
                We respect your privacy. Your information will only be used to contact the institution about Thesisflow 
                and to keep you updated on the referral status. We will not share your details without permission.
              </p>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Thank you for your referral! We'll reach out to the institution and keep you updated on the progress.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-red-800 dark:text-red-200">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[var(--text-brand)]" />
              </div>
              <div>
                <h3 className="text-lg text-[var(--text-primary)] mb-2">What Happens Next?</h3>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--text-brand)] mt-1">•</span>
                    <span>We'll review your referral and reach out to the institution's decision-makers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--text-brand)] mt-1">•</span>
                    <span>You'll receive updates on the referral progress via email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--text-brand)] mt-1">•</span>
                    <span>If the institution moves forward, you'll be credited for the referral</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Alternative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-base text-[var(--text-secondary)]">
              Have questions about the referral process?{' '}
              <button 
                onClick={() => onNavigate('contact')} 
                className="text-[var(--text-brand)] hover:underline underline-offset-2 transition-all"
              >
                Contact us directly
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}