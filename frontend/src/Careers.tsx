import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { Briefcase, Heart, Code, Palette, BarChart3 } from 'lucide-react';

export default function Careers({ onNavigate }: any) {
  const openings = [
    { title: 'Senior Full-Stack Engineer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { title: 'Product Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
    { title: 'Growth Marketing Manager', department: 'Marketing', type: 'Full-time', location: 'Remote' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="careers">
      <SEO
        title="Careers - Join ThesisFlow Team"
        description="Join ThesisFlow and help build the future of AI-powered academic thesis management globally. Explore remote job opportunities in engineering, design, marketing for institutions worldwide."
        keywords="ThesisFlow careers, thesis management jobs, remote jobs worldwide, software engineer jobs, product designer jobs, global academic technology careers, international startup jobs, AI-powered platform careers"
        canonicalUrl="https://thesisflow.com/careers"
      />
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A7A5]/10 to-transparent border border-[#00A7A5]/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#00A7A5]" />
              <span className="text-sm text-[#00A7A5]">Join Our Team</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">
                Academic Research
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Join a team that's passionate about making research better for everyone.
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Heart, title: 'Mission-Driven', description: 'Work on something that matters to academia' },
              { icon: Code, title: 'Modern Stack', description: 'Latest technologies and best practices' },
              { icon: Palette, title: 'Remote-First', description: 'Work from anywhere in the world' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#00A7A5]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-lg hover:shadow-lg transition-all">
                    Apply
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}