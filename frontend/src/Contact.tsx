import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, organizationSchema, createFAQSchema } from './components/SEO';
import { Mail, MessageSquare, Send, MapPin, HelpCircle, ArrowRight, Phone, Building2, Clock, CheckCircle2, Globe, X } from 'lucide-react';
import { useState } from 'react';
import { addContactMessage } from './utils/contactData';

export default function Contact({ onNavigate }: any) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

const API_URL = import.meta.env.VITE_API_URL;

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const response = await fetch(`${API_URL}/contact/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        setSubmitStatus('success');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            organization: '',
            subject: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
    }
};

  const faqSchema = createFAQSchema([
    {
      question: "How quickly will I receive a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, institutions can reach us via phone during business hours."
    },
    {
      question: "Can I schedule a product demo?",
      answer: "Absolutely! Use the contact form to request a demo, and our team will schedule a personalized walkthrough of ThesisFlow tailored to your institution's needs."
    },
    {
      question: "Do you offer institutional consultations?",
      answer: "Yes, we provide free consultations for universities and research institutions interested in modernizing their thesis workflows. Contact us to discuss your specific requirements."
    }
  ]);

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent matters, institutions can reach us via phone during business hours."
    },
    {
      question: "Can I schedule a product demo?",
      answer: "Absolutely! Use the contact form to request a demo, and our team will schedule a personalized walkthrough of ThesisFlow tailored to your institution's needs."
    },
    {
      question: "Do you offer institutional consultations?",
      answer: "Yes, we provide free consultations for universities and research institutions interested in modernizing their thesis workflows. Contact us to discuss your specific requirements."
    }
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="contact">
      <SEO
        title="Contact ThesisFlow - AI-Powered Thesis Management Support"
        description="Contact ThesisFlow for AI-powered thesis management inquiries worldwide. Reach us at admin@migritech.com or +91 9159355953. Serving universities and research institutions globally."
        keywords="ThesisFlow contact, thesis management support, AI-powered platform support, global academic software, university software worldwide, Dr. Jeevananthan Kannan, international university solutions"
        canonicalUrl="https://thesisflow.com/contact"
      />
      <StructuredData
        schema={[
          organizationSchema,
          faqSchema
        ]}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--bg-primary)]">
        {/* Elegant layered background gradients - similar to hero section */}
        <div className="absolute inset-0">
          {/* Primary ambient glow - top left */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--text-brand)] opacity-[0.04] blur-[140px] rounded-full"></div>
          {/* Secondary ambient glow - bottom right */}
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[var(--text-brand)] opacity-[0.05] blur-[120px] rounded-full"></div>
          {/* Tertiary accent - center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--text-brand)] opacity-[0.02] blur-[100px] rounded-full"></div>
          {/* Subtle mesh overlay */}
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
              <Mail className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="text-sm text-[var(--text-brand)]">We're Here to Help</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 leading-tight" style={{ fontSize: 'var(--text-3xl)' }}>
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontSize: 'var(--text-lg)' }}>
              Whether you're interested in a demo, have questions about our platform, or want to discuss custom solutions for your institution — we're ready to help.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Clock, label: '<24h Response', desc: 'Guaranteed' },
                { icon: Globe, label: 'Worldwide', desc: 'Coverage' },
                { icon: CheckCircle2, label: 'Expert', desc: 'Support' }
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

      {/* Main Content */}
      <div className="bg-[var(--bg-primary)]">
        {/* Contact Methods Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-8 hover:border-[var(--border-brand-subtle)] transition-all duration-300 gradient-card"
            >
              <div className="w-16 h-16 bg-[var(--bg-brand-subtle)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-xl text-[var(--text-primary)] mb-3">Email Us</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Send us an email and we'll respond within 24 hours
              </p>
              <a 
                href="mailto:admin@migritech.com"
                className="inline-flex items-center gap-2 text-[var(--text-brand)] hover:gap-3 transition-all duration-300"
              >
                admin@migritech.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-8 hover:border-[var(--border-brand-subtle)] transition-all duration-300 gradient-card"
            >
              <div className="w-16 h-16 bg-[var(--bg-brand-subtle)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-xl text-[var(--text-primary)] mb-3">Call Us</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Speak directly with our team during business hours
              </p>
              <a 
                href="tel:+919159355953"
                className="inline-flex items-center gap-2 text-[var(--text-brand)] hover:gap-3 transition-all duration-300"
              >
                +91 9159355953
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-8 hover:border-[var(--border-brand-subtle)] transition-all duration-300 gradient-card"
            >
              <div className="w-16 h-16 bg-[var(--bg-brand-subtle)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-[var(--text-brand)]" />
              </div>
              <h3 className="text-xl text-[var(--text-primary)] mb-3">Product Support</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Get help with technical issues and product questions
              </p>
              <a 
                href="mailto:contact@thesisflow.com"
                className="inline-flex items-center gap-2 text-[var(--text-brand)] hover:gap-3 transition-all duration-300"
              >
                contact@thesisflow.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="max-w-5xl mx-auto px-6 lg:px-8 py-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 style={{ fontSize: 'var(--text-2xl)' }} className="text-[var(--text-primary)] mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden"
          >
            {/* Decorative gradients */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00A7A5]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#008f8d]/10 to-transparent rounded-full blur-3xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">
                    First Name <span className="text-[var(--text-brand)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-2">
                    Last Name <span className="text-[var(--text-brand)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  Email Address <span className="text-[var(--text-brand)]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                  placeholder="john.doe@university.edu"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  Organization/Institution
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                  placeholder="Your University or Company"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  Subject <span className="text-[var(--text-brand)]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all placeholder:text-[var(--text-tertiary)]"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-[var(--text-secondary)] mb-2">
                  Message <span className="text-[var(--text-brand)]">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-xl focus:ring-2 focus:ring-[#00A7A5]/20 focus:border-[var(--border-brand)] outline-none transition-all resize-none placeholder:text-[var(--text-tertiary)]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-lg hover:shadow-lg hover:shadow-[#00A7A5]/20 hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontSize: 'var(--text-sm)' }}
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Send Message</span>
              </button>

              {/* Privacy Notice */}
              <p className="text-sm text-[var(--text-tertiary)] text-center">
                By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
              </p>

              {/* Submit Status Banner (error only, inline) */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-4 p-5 bg-red-500/10 border border-red-500/30 rounded-xl"
                >
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-red-500 font-medium mb-0.5">Failed to Send Message</p>
                    <p className="text-sm text-red-500/80">Something went wrong. Please try again or email us directly at admin@migritech.com.</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[var(--text-brand)]" />
              <span className="text-sm text-[var(--text-brand)]">Quick Answers</span>
            </div>
            <h2 className="text-[var(--text-primary)] mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--text-secondary)]" style={{ fontSize: 'var(--text-lg)' }}>
              Common questions about getting in touch with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6 hover:border-[var(--border-brand-subtle)] transition-all duration-300"
              >
                <h3 className="text-lg text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--text-brand)] mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Popup Modal */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSubmitStatus('idle')}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSubmitStatus('idle')}
                className="absolute top-4 right-4 p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--bg-primary)]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Check icon */}
              <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>

              <h3 className="text-2xl text-[var(--text-primary)] mb-3">Message Sent!</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Thank you for reaching out. Our team will get back to you within{' '}
                <span className="text-[var(--text-primary)] font-medium">24 hours</span>.
              </p>

              <button
                onClick={() => setSubmitStatus('idle')}
                className="w-full py-3 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Office Information Section */}
        <section id="office-location" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--text-primary)] mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
              Visit Our Office
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontSize: 'var(--text-lg)' }}>
              Find our location and office hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Company Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-10 shadow-lg overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00A7A5]/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 bg-[var(--bg-brand-subtle)] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-[var(--text-brand)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[var(--text-primary)] mb-2">MIGRI Technologies Pvt Ltd</h3>
                    <p className="text-[var(--text-tertiary)]">Registered Office</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[var(--text-brand)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[var(--text-primary)] mb-2">Office Address</p>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        1/1A, KK Plaza, Salem Main Road,<br />
                        Kallakurichi, Tamil Nadu,<br />
                        India - 606201
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-primary)]">
                    <p className="text-sm text-[var(--text-tertiary)] mb-2">Corporate Identity Number</p>
                    <p className="font-mono text-[var(--text-primary)]">U72200TN2020PC139408</p>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-primary)]">
                    <p className="text-sm text-[var(--text-tertiary)] mb-3">About MIGRI Technologies</p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      An Indian software company specializing in enterprise solutions for academic institutions. 
                      We build innovative products that transform how universities 
                      manage their workflows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Business Hours */}
              <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-10 shadow-lg overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#00A7A5]/10 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-[var(--bg-brand-subtle)] rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[var(--text-brand)]" />
                    </div>
                    <h3 className="text-2xl text-[var(--text-primary)]">Business Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-primary)]">
                      <span className="text-[var(--text-secondary)]">Monday - Friday</span>
                      <span className="text-[var(--text-primary)]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[var(--border-primary)]">
                      <span className="text-[var(--text-secondary)]">Saturday</span>
                      <span className="text-[var(--text-primary)]">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-[var(--text-secondary)]">Sunday</span>
                      <span className="text-[var(--text-tertiary)]">Closed</span>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-[var(--border-primary)]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[var(--text-secondary)]">Indian Standard Time (IST)</span>
                      </div>
                      <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="relative bg-gradient-to-br from-[#00A7A5]/5 to-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl text-[var(--text-primary)] mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <Mail className="w-5 h-5 text-[var(--text-brand)]" />
                    <a href="mailto:admin@migritech.com" className="hover:text-[var(--text-brand)] transition-colors">
                      admin@migritech.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <Phone className="w-5 h-5 text-[var(--text-brand)]" />
                    <a href="tel:+919159355953" className="hover:text-[var(--text-brand)] transition-colors">
                      +91 9159355953
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <MessageSquare className="w-5 h-5 text-[var(--text-brand)]" />
                    <a href="mailto:contact@thesisflow.com" className="hover:text-[var(--text-brand)] transition-colors">
                      contact@thesisflow.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Institutional Referral CTA */}
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-[var(--text-primary)] mb-4" style={{ fontSize: 'var(--text-2xl)' }}>
                Refer Your Institution
              </h2>
              
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8" style={{ fontSize: 'var(--text-lg)' }}>
                Individual scholars cannot purchase directly. Help us bring Thoth to your institution by referring your library or department.
              </p>
              
              <button
                onClick={() => onNavigate('referral')}
                className="inline-flex items-center gap-2 bg-[var(--bg-brand)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                style={{ fontSize: 'var(--text-base)' }}
              >
                <Mail className="w-5 h-5" />
                Refer Your Institution
              </button>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[var(--card)] border border-[var(--border-primary)] rounded-3xl overflow-hidden"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-brand-subtle)] via-transparent to-[var(--bg-brand-subtle)] opacity-50"></div>
            
            {/* Content Grid */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[var(--text-brand)]" />
                  <span className="text-sm text-[var(--text-brand)]">Next Steps</span>
                </div>
                
                <h2 className="text-[var(--text-primary)]" style={{ fontSize: 'var(--text-3xl)' }}>
                  Ready to Transform Your Institution?
                </h2>
                
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Join leading universities modernizing their thesis management with Thesisflow. Schedule a personalized demo to see how we can support your institution's unique needs.
                </p>

                {/* Key Points */}
                <div className="space-y-4 pt-4">
                  {[
                    { icon: Clock, text: '60-minute personalized demo' },
                    { icon: Building2, text: 'Tailored to your institution' },
                    { icon: Globe, text: 'No commitment required' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <div className="w-8 h-8 rounded-lg bg-[var(--bg-brand-subtle)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[var(--text-brand)]" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Action Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl text-[var(--text-primary)]">
                      Choose Your Next Step
                    </h3>
                    
                    {/* Primary Action */}
                    <button 
                      onClick={() => onNavigate('request-demo')}
                      className="w-full group relative px-6 py-4 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[var(--bg-brand-hover)] hover:shadow-lg hover:shadow-[var(--shadow-brand)]"
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="text-left">
                          <div className="font-medium">Request a Demo</div>
                          <div className="text-sm opacity-90">See Thesisflow in action</div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>

                    {/* Secondary Action */}
                    <button 
                      onClick={() => onNavigate('pricing')}
                      className="w-full group px-6 py-4 bg-[var(--card)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl hover:border-[var(--border-brand)] hover:bg-[var(--bg-brand-subtle)] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="font-medium">View Pricing</div>
                          <div className="text-sm text-[var(--text-secondary)]">Explore our plans</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[var(--text-brand)] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>

                  {/* Trust Badge */}
                  <div className="pt-6 border-t border-[var(--border-primary)]">
                    <p className="text-sm text-[var(--text-tertiary)] text-center">
                      Trusted by research institutions worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}