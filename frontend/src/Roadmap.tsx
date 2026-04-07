import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO, StructuredData, softwareApplicationSchema } from './components/SEO';
import { Map, CheckCircle2, Circle, Clock } from 'lucide-react';

export default function Roadmap({ onNavigate }: any) {
  const roadmapItems = [
    { quarter: 'Q1 2025', status: 'completed', items: ['Core architecture', 'Database design', 'Initial prototypes'] },
    { quarter: 'Q2 2025', status: 'completed', items: ['Core features development', 'User interface design', 'Version control system'] },
    { quarter: 'Q3 2025', status: 'completed', items: ['Collaboration tools', 'Advanced analytics', 'Internal testing'] },
    { quarter: 'Q4 2025', status: 'completed', items: ['Beta launch', 'Initial user testing', 'Partner institution onboarding'] },
    { quarter: 'Q1 2026', status: 'in-progress', items: ['Enhanced AI features', 'Mobile app development', 'Advanced integrations'] },
    { quarter: 'Q2 2026', status: 'planned', items: ['Global expansion', 'Multi-language support', 'Advanced reporting'] },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="roadmap">
      <SEO
        title="Product Roadmap 2025 - ThesisFlow | Development Timeline & Future Features"
        description="Explore ThesisFlow's product development roadmap for 2025. See our planned features, upcoming releases, beta launch timeline, and how we're building the future of academic thesis management."
        keywords="ThesisFlow roadmap, product development, upcoming features, beta launch 2025, thesis management future, release schedule, feature timeline"
        canonical="https://thesisflow.com/roadmap"
        ogImage="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1200&h=630&fit=crop"
      />
      <StructuredData data={softwareApplicationSchema} />
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--text-brand)]/10 to-transparent border border-[var(--text-brand)]/30 rounded-full mb-6">
              <Map className="w-4 h-4 text-[var(--text-brand)]" />
              <span style={{ fontSize: 'var(--text-sm)' }} className="text-[var(--text-brand)]">Product Roadmap</span>
            </div>
            <h1 style={{ fontSize: 'var(--text-4xl)' }} className="lg:text-5xl text-[var(--text-primary)] mb-6">
              Our <span className="bg-gradient-to-r from-[var(--text-brand)] to-[var(--text-brand)] bg-clip-text text-transparent">Vision</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)' }} className="text-[var(--text-secondary)]">
              See what we're building next. Your feedback shapes our roadmap.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border-primary)] rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {item.status === 'completed' && <CheckCircle2 className="w-8 h-8 text-green-500" />}
                  {item.status === 'in-progress' && <Clock className="w-8 h-8 text-blue-500" />}
                  {item.status === 'planned' && <Circle className="w-8 h-8 text-[var(--text-tertiary)]" />}
                  <div>
                    <h3 style={{ fontSize: 'var(--text-xl)' }} className="text-[var(--text-primary)]">{item.quarter}</h3>
                    <span style={{ fontSize: 'var(--text-sm)' }} className={
                      item.status === 'completed' ? 'text-green-600' :
                      item.status === 'in-progress' ? 'text-blue-600' : 'text-[var(--text-secondary)]'
                    }>
                      {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.items.map((feature) => (
                    <li key={feature} style={{ fontSize: 'var(--text-base)' }} className="text-[var(--text-secondary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--text-brand)] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}