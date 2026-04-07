import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, createFAQSchema } from './components/SEO';
import { Check, Zap, Rocket, Building2, HelpCircle, Users, Shield, Sparkles, ArrowRight, DollarSign } from 'lucide-react';

export default function Pricing({ onNavigate }: any) {
  const faqSchema = createFAQSchema([
    {
      question: "How is pricing calculated?",
      answer: "Pricing is based on institution size and deployment scope. We offer flexible plans for departments, full universities, and academic publishers."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer personalized demonstrations and pilot programs for interested institutions. Contact our team to discuss options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept institutional purchase orders, bank transfers, and major payment methods suitable for institutional procurement."
    },
    {
      question: "Can we upgrade or downgrade our plan?",
      answer: "Yes, plans can be adjusted based on your institution's needs. Contact our team to discuss changes to your subscription."
    }
  ]);

  return (
    <PageLayout onNavigate={onNavigate} currentPage="pricing">
      <SEO
        title="Pricing - ThesisFlow | Institutional Plans for Universities Worldwide"
        description="Flexible institutional pricing for universities and research institutions worldwide. Department, University, and Publisher plans with custom features, unlimited users, and 24/7 support. Global availability with competitive pricing."
        keywords="thesis management pricing, institutional pricing worldwide, university software pricing, academic platform costs, enterprise thesis software, global educational pricing, international university plans"
        canonical="https://thesisflow.com/pricing"
        ogImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop"
      />
      <StructuredData data={faqSchema} />
      <div className="pt-32 pb-20">
        <HeroSection />
        <PricingCards onNavigate={onNavigate} />
        <ComparisonTable />
        <FAQSection />
        <CTASection onNavigate={onNavigate} />
      </div>
    </PageLayout>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-full mb-6">
          <DollarSign className="w-3.5 h-3.5 text-[var(--text-brand)]" />
          <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Pricing</span>
        </div>
        
        <h1 className="mb-6" style={{ fontSize: '2.5rem' }}>
          Simple, Transparent Pricing
        </h1>
        
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
          Flexible pricing tailored to your institution's size and needs. Transparent costs, predictable budgeting, and exceptional value for academic organizations.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)] rounded-lg text-[var(--text-brand)]" style={{ fontSize: 'var(--text-sm)' }}>
          <Sparkles className="w-4 h-4" />
          <span>Early partner institutions: Special pricing and dedicated onboarding support</span>
        </div>
      </motion.div>
    </section>
  );
}

function PricingCards({ onNavigate }: any) {
  const plans = [
    {
      name: 'Department',
      priceLabel: 'Custom Pricing',
      priceSubtext: 'Starting from $2,000/year',
      description: 'For individual departments or small programs',
      icon: Zap,
      features: [
        'Up to 100 users',
        'Up to 50 active theses',
        '100GB storage',
        'Traditional review system',
        'Advanced version control',
        'Email & chat support',
        'Basic analytics',
        'Standard workflows',
        'Data export tools',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
    {
      name: 'University',
      priceLabel: 'Custom Pricing',
      priceSubtext: 'Starting from $10,000/year',
      description: 'For universities and multi-department institutions',
      icon: Building2,
      features: [
        'Unlimited users',
        'Up to 500 active theses',
        '1TB+ storage',
        'Advanced review system',
        'SSO & SAML integration',
        'Priority support (24/7)',
        'Advanced analytics & reporting',
        'Custom workflows',
        'API access',
        'Dedicated account manager',
      ],
      cta: 'Schedule Demo',
      popular: true,
    },
    {
      name: 'Publisher',
      priceLabel: 'Enterprise Pricing',
      priceSubtext: 'Contact us for a quote',
      description: 'For academic publishers and multi-institution networks',
      icon: Rocket,
      features: [
        'Multi-tenant architecture',
        'Unlimited institutions',
        'Unlimited active theses',
        'Enterprise storage',
        'White-label options',
        'Dedicated infrastructure',
        'Custom integrations',
        'On-premise deployment option',
        'SLA guarantee (99.9% uptime)',
        'Custom training & onboarding',
        'Advanced compliance tools',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative bg-[var(--bg-primary)] rounded-2xl p-8 transition-all duration-300 ${
              plan.popular
                ? 'border-2 border-[#00A7A5] shadow-xl shadow-[#00A7A5]/10 md:scale-105'
                : 'border border-[var(--border-primary)] hover:border-[#00A7A5]/30 hover:shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#00A7A5] to-[#00968f] text-white text-sm rounded-full shadow-lg">
                Most Popular
              </div>
            )}

            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
              plan.popular 
                ? 'bg-gradient-to-br from-[#00A7A5] to-[#00968f]' 
                : 'bg-[#00A7A5]/10 group-hover:bg-[#00A7A5]/20'
            }`}>
              <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-[#00A7A5]'}`} />
            </div>

            <h3 className="text-2xl text-[var(--text-primary)] mb-2">{plan.name}</h3>
            <p className="text-[var(--text-secondary)] mb-6 min-h-[3rem]">{plan.description}</p>

            <div className="mb-8 pb-6 border-b border-[var(--border-primary)]">
              <div className="text-3xl text-[var(--text-primary)] mb-1">{plan.priceLabel}</div>
              <div className="text-sm text-[var(--text-secondary)]">{plan.priceSubtext}</div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A7A5]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#00A7A5]" />
                  </div>
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onNavigate('contact')}
              className={`w-full py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#00A7A5] to-[#00968f] text-white hover:shadow-lg hover:shadow-[#00A7A5]/30 hover:-translate-y-0.5'
                  : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]/80'
              }`}
            >
              <span>{plan.cta}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                plan.popular ? 'group-hover/btn:translate-x-1' : ''
              }`} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ComparisonTable() {
  const features = [
    { name: 'Active theses', free: '50', student: '500', institution: 'Unlimited' },
    { name: 'Collaborators per thesis', free: '2', student: '10', institution: 'Unlimited' },
    { name: 'Storage', free: '500MB', student: '10GB', institution: 'Unlimited' },
    { name: 'Review system', free: 'Traditional', student: 'Advanced', institution: 'Advanced' },
    { name: 'Version control', free: 'Basic', student: 'Advanced', institution: 'Advanced' },
    { name: 'Support', free: 'Email', student: 'Priority', institution: 'Dedicated' },
    { name: 'Analytics', free: '—', student: '✓', institution: '✓' },
    { name: 'Custom workflows', free: '—', student: '✓', institution: '✓' },
    { name: 'SSO/SAML', free: '—', student: '—', institution: '✓' },
    { name: 'API access', free: '—', student: '—', institution: '✓' },
    { name: 'SLA guarantee', free: '—', student: '—', institution: '✓' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
            Compare Plans
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Detailed feature comparison across all plans
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-primary)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-primary)]">
                  <th className="text-left py-4 px-6 text-[var(--text-primary)]">Feature</th>
                  <th className="text-center py-4 px-6 text-[var(--text-primary)]">Small</th>
                  <th className="text-center py-4 px-6 text-[var(--text-primary)] bg-[#00A7A5]/5">Medium</th>
                  <th className="text-center py-4 px-6 text-[var(--text-primary)]">Large</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={index !== features.length - 1 ? 'border-b border-[var(--border-primary)]' : ''}>
                    <td className="py-4 px-6 text-[var(--text-secondary)]">{feature.name}</td>
                    <td className="py-4 px-6 text-center text-[var(--text-secondary)]">{feature.free}</td>
                    <td className="py-4 px-6 text-center text-[var(--text-secondary)] bg-[#00A7A5]/5">{feature.student}</td>
                    <td className="py-4 px-6 text-center text-[var(--text-secondary)]">{feature.institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: 'Can I change plans later?',
      a: 'Yes! You can upgrade or downgrade at any time. Changes take effect immediately, and we prorate any payments.',
    },
    {
      q: 'Is there a student discount?',
      a: 'We offer institutional licenses to universities and research institutions only. Individual students and researchers cannot purchase directly, but benefit from their institution\'s license. Special institutional pricing is available for educational institutions and developing countries.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, Mastercard, Amex). For institutional plans, we can provide invoicing and support purchase orders.',
    },
    {
      q: 'Can I try before committing?',
      a: 'Absolutely! Start with our free plan to get a feel for the platform. Beta users get free access to premium features during early access.',
    },
    {
      q: 'What happens to my data if I cancel?',
      a: 'Your data remains accessible for 30 days after cancellation. You can export all your content at any time, even after cancellation.',
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 30-day money-back guarantee on all paid plans. If you\\\'re not satisfied, we\\\'ll refund your payment in full.',
    },
    {
      q: 'Is my payment information secure?',
      a: 'Yes. We use Stripe for payment processing and never store your credit card information on our servers.',
    },
    {
      q: 'Can institutions get custom pricing?',
      a: 'Yes! We offer volume discounts and custom packages for universities and large departments. Contact our sales team for a quote.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 lg:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl lg:text-4xl text-[var(--text-primary)] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Have questions? We've got answers.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <HelpCircle className="w-5 h-5 text-[#00A7A5] flex-shrink-0 mt-0.5" />
              <h3 className="text-lg text-[var(--text-primary)]">{faq.q}</h3>
            </div>
            <p className="text-[var(--text-secondary)] pl-8">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ onNavigate }: any) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl p-12 lg:p-16 text-center overflow-hidden bg-[var(--bg-brand-subtle)] border border-[var(--border-brand-subtle)]"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 rounded-2xl" style={{
          backgroundImage: 'radial-gradient(circle, var(--text-brand) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h2 style={{ fontSize: 'var(--text-2xl)' }} className="lg:text-4xl text-[var(--text-primary)] mb-4">Ready to Discuss Your Institution's Needs?</h2>
          <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect solution. Let's discuss how Thesisflow can be tailored to your institution's requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              style={{ fontSize: 'var(--text-base)' }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--bg-brand)] text-[var(--text-on-brand)] rounded-lg hover:bg-[var(--bg-brand-hover)] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('features')}
              style={{ fontSize: 'var(--text-base)' }}
              className="px-8 py-4 bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all duration-300"
            >
              Explore Features
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}