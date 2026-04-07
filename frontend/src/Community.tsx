import { motion } from 'motion/react';
import PageLayout from './components/PageLayout';
import { SEO } from './components/SEO';
import { Users, MessageSquare, Github, Twitter } from 'lucide-react';

export default function Community({ onNavigate }: any) {
  const channels = [
    { icon: MessageSquare, name: 'Discord Community', members: '200+ members', description: 'Chat with other users and get help', link: '#' },
    { icon: Github, name: 'GitHub Discussions', members: 'Public', description: 'Feature requests and bug reports', link: '#' },
    { icon: Twitter, name: 'Twitter', members: '@thesisflow', description: 'Latest updates and announcements', link: '#' },
  ];

  return (
    <PageLayout onNavigate={onNavigate} currentPage="community">
      <SEO
        title="Community"
        description="Join the Thesisflow community. Connect with researchers, get help, share feedback, and stay updated with the latest news. Find us on Discord, GitHub, and Twitter."
        keywords="Thesisflow community, Discord community, GitHub discussions, academic community, thesis management community, researcher network, user support"
        canonicalUrl="https://thesisflow.com/community"
      />
      <div className="pt-32 pb-20">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00A7A5]/10 to-transparent border border-[#00A7A5]/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#00A7A5]" />
              <span className="text-sm text-[#00A7A5]">Community</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Join the <span className="bg-gradient-to-r from-[#00A7A5] to-[#008f8d] bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-gray-600">
              Connect with researchers, get help, and share feedback.
            </p>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {channels.map((channel, index) => (
              <a
                key={channel.name}
                href={channel.link}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00A7A5]/10 to-[#00A7A5]/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <channel.icon className="w-8 h-8 text-[#00A7A5]" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl text-gray-900 mb-1">{channel.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{channel.description}</p>
                    <span className="text-xs text-[#00A7A5]">{channel.members}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}