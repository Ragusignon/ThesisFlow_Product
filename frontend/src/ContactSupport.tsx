import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { Headphones, Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactSupport({ onNavigate }: any) {
  return (
    <PageLayout onNavigate={onNavigate} currentPage="contact-support">
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A7A5]/10 to-transparent border border-[#00A7A5]/30 rounded-full mb-6">
              <Headphones className="w-4 h-4 text-[#00A7A5]" />
              <span className="text-sm text-[#00A7A5]">Support</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              We're Here to <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">Help</span>
            </h1>
            <p className="text-xl text-gray-600">
              Get technical support from our team.
            </p>
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white border-2 border-gray-200 hover:border-[#00A7A5]/30 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Mail className="w-7 h-7 text-[#00A7A5]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-1">24h response</p>
                <div className="inline-flex items-center gap-1 text-xs text-[#00A7A5] mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available now</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white border-2 border-gray-200 hover:border-[#00A7A5]/30 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A7A5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MessageCircle className="w-7 h-7 text-[#00A7A5]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-1">Mon-Fri 9am-5pm</p>
                <div className="inline-flex items-center gap-1 text-xs text-[#00A7A5] mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>3 agents online</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-gradient-to-br from-[#00A7A5] to-[#008f8d] border-2 border-[#00A7A5] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A7A5]/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg text-white mb-2">Priority</h3>
                <p className="text-sm text-white/90 mb-1">For paid users</p>
                <div className="inline-flex items-center gap-1 text-xs text-white/90 mt-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Instant support</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h2 className="text-2xl text-gray-900 mb-2">Submit a Support Request</h2>
            <p className="text-sm text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A7A5] focus:border-transparent outline-none" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A7A5] focus:border-transparent outline-none" placeholder="Brief description" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Description</label>
                <textarea rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A7A5] focus:border-transparent outline-none resize-none" placeholder="Please describe your issue in detail..." />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#00A7A5] to-[#008f8d] text-white rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Request</span>
              </button>
            </form>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
}