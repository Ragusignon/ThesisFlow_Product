import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Download, Newspaper, Image as ImageIcon, FileText } from 'lucide-react';

export default function PressKit({ onNavigate }: any) {
  const assets = [
    { type: 'Logo Package', description: 'SVG, PNG, and EPS formats', icon: ImageIcon },
    { type: 'Brand Guidelines', description: 'Colors, typography, and usage', icon: FileText },
    { type: 'Press Release', description: 'Latest announcements', icon: Newspaper },
    { type: 'Product Screenshots', description: 'High-resolution images', icon: ImageIcon },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="press-kit">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A7A5]/10 to-transparent border border-[#00A7A5]/30 rounded-full mb-6">
              <Newspaper className="w-4 h-4 text-[#00A7A5]" />
              <span className="text-sm text-[#00A7A5]">Press Kit</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Media <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to write about Thesisflow.
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {assets.map((asset, index) => (
              <motion.div
                key={asset.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-xl flex items-center justify-center mb-4">
                      <asset.icon className="w-6 h-6 text-[#00A7A5]" />
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">{asset.type}</h3>
                    <p className="text-sm text-gray-600">{asset.description}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-[#00A7A5]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl text-gray-900 mb-4">Company Information</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <strong className="text-gray-900">Founded:</strong> 2023
              </div>
              <div>
                <strong className="text-gray-900">Headquarters:</strong> Remote-first
              </div>
              <div>
                <strong className="text-gray-900">Industry:</strong> Education Technology
              </div>
              <div>
                <strong className="text-gray-900">Description:</strong> Thesisflow is a modern thesis management platform designed to streamline collaboration between graduate students and advisors.
              </div>
              <div>
                <strong className="text-gray-900">Contact:</strong> press@thesisflow.com
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}
