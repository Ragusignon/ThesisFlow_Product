import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Activity, CheckCircle2, Server } from 'lucide-react';

export default function Status({ onNavigate }: any) {
  const systems = [
    { name: 'API', status: 'operational', uptime: '99.9%' },
    { name: 'Web Application', status: 'operational', uptime: '99.8%' },
    { name: 'Database', status: 'operational', uptime: '100%' },
    { name: 'File Storage', status: 'operational', uptime: '99.9%' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="status">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">All Systems Operational</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              System <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-xl text-gray-600">
              Current status and uptime metrics for Thesisflow.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {systems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Server className="w-6 h-6 text-gray-400" />
                    <div>
                      <h3 className="text-lg text-gray-900">{system.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600 capitalize">{system.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">30-day uptime</div>
                    <div className="text-lg text-gray-900">{system.uptime}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
