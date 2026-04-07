import BlogPostLayout from '../components/BlogPostLayout';

export default function RoadmapPreview({ onNavigate }: any) {
  return (
    <BlogPostLayout
      onNavigate={onNavigate}
      title="Roadmap Preview: What's Coming in Q1 2026"
      excerpt="A sneak peek at the exciting features and improvements we're working on for early next year."
      date="October 1, 2025"
      author="Product Team"
      category="Product Updates"
      readTime="6 min"
      image="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjMwNjU1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    >
      <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:text-[var(--text-primary)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-[var(--text-primary)] [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-[var(--text-secondary)] [&_strong]:text-[var(--text-primary)]">
        <p className="text-xl text-[var(--text-primary)] leading-relaxed">
          We're excited to share what we're building for Q1 2026. This roadmap is based on feedback from our partner institutions and our vision for the future of thesis management.
        </p>

        <p className="bg-[var(--bg-brand-subtle)] border-l-4 border-[var(--border-brand)] p-4 my-6 text-[var(--text-primary)]">
          <strong>Note:</strong> This roadmap represents our current plans and may change based on partner feedback, technical considerations, or evolving priorities. We'll keep you updated on any significant changes.
        </p>

        <h2>🚀 Major Features</h2>

        <h3>API Platform Launch</h3>
        <p>
          <strong>Target: January 2026</strong>
        </p>
        <p>
          We're opening up Thesisflow through a comprehensive API, enabling institutions to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Integrate with existing student information systems</li>
          <li>Build custom workflows and automations</li>
          <li>Extract data for institutional reporting</li>
          <li>Create custom dashboards and visualizations</li>
        </ul>
        <p>
          The API will be RESTful, well-documented, and include SDKs for Python, JavaScript, and R—the languages most commonly used in academic settings.
        </p>

        <h3>Advanced Analytics Suite</h3>
        <p>
          <strong>Target: February 2026</strong>
        </p>
        <p>
          Institutional administrators will gain access to powerful analytics including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Predictive completion time estimates using machine learning</li>
          <li>Bottleneck identification and recommendations</li>
          <li>Comparative analytics across departments and programs</li>
          <li>Customizable reports for accreditation and planning</li>
          <li>Automated alert systems for at-risk projects</li>
        </ul>

        <h3>Multi-language Support</h3>
        <p>
          <strong>Target: January 2026</strong>
        </p>
        <p>
          We're expanding beyond English with initial support for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Spanish</li>
          <li>German</li>
          <li>French</li>
          <li>Mandarin Chinese</li>
        </ul>
        <p>
          Additional languages will be added based on partner institution needs. The interface will automatically detect user language preferences and allow easy switching.
        </p>

        <h3>Enhanced Collaboration Tools</h3>
        <p>
          <strong>Target: March 2026</strong>
        </p>
        <p>
          Taking collaboration to the next level with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Video integration for remote thesis defenses</li>
          <li>Whiteboard functionality for brainstorming sessions</li>
          <li>Voice comments for quicker feedback</li>
          <li>Screen sharing for live document review</li>
          <li>Integrated reference management</li>
        </ul>

        <h2>🔧 Platform Improvements</h2>

        <h3>Performance Optimization</h3>
        <p>
          We're committed to maintaining fast, responsive experiences even as our platform scales:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>50% reduction in initial page load times</li>
          <li>Improved document rendering for large files</li>
          <li>Enhanced mobile app performance</li>
          <li>Better caching strategies for frequently accessed data</li>
        </ul>

        <h3>Accessibility Enhancements</h3>
        <p>
          Making Thesisflow accessible to all users:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WCAG 2.1 Level AA compliance</li>
          <li>Screen reader optimization</li>
          <li>Keyboard navigation improvements</li>
          <li>High-contrast mode and custom themes</li>
          <li>Automated accessibility testing in our development pipeline</li>
        </ul>

        <h3>Mobile App Enhancement</h3>
        <p>
          Expanding mobile capabilities to support:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Offline document access and editing</li>
          <li>Push notifications for important updates</li>
          <li>Biometric authentication</li>
          <li>Optimized UI for tablet devices</li>
        </ul>

        <h2>🔐 Security & Compliance</h2>

        <h3>SOC 2 Type II Certification</h3>
        <p>
          We're pursuing SOC 2 Type II certification to provide additional assurance to partner institutions about our security and compliance practices.
        </p>

        <h3>Advanced Compliance Tools</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Automated compliance checking for institutional policies</li>
          <li>Enhanced audit logging and reporting</li>
          <li>Data residency options for different geographic regions</li>
          <li>Improved data lifecycle management</li>
        </ul>

        <h2>🎓 Academic Features</h2>

        <h3>Plagiarism Detection Integration</h3>
        <p>
          Integration with leading plagiarism detection services to help institutions maintain academic integrity without leaving the platform.
        </p>

        <h3>Citation Management</h3>
        <p>
          Built-in citation management supporting:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>All major citation styles (APA, MLA, Chicago, IEEE, etc.)</li>
          <li>Import from reference managers (Zotero, Mendeley, EndNote)</li>
          <li>Automatic bibliography generation</li>
          <li>Citation checking and validation</li>
        </ul>

        <h3>Template Library Expansion</h3>
        <p>
          Pre-built templates for various thesis types, departments, and institutions, all customizable to meet specific requirements.
        </p>

        <h2>📊 Data & Insights</h2>

        <h3>Benchmarking Dashboard</h3>
        <p>
          Anonymous benchmarking data allowing institutions to compare their metrics against similar institutions (with all data anonymized and aggregated).
        </p>

        <h3>Custom Report Builder</h3>
        <p>
          A drag-and-drop report builder enabling administrators to create custom reports without technical knowledge.
        </p>

        <h2>🤝 Integration Ecosystem</h2>

        <h3>Learning Management System Integrations</h3>
        <p>
          Direct integrations with popular LMS platforms:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Canvas</li>
          <li>Blackboard</li>
          <li>Moodle</li>
          <li>Brightspace</li>
        </ul>

        <h3>Repository Connections</h3>
        <p>
          Seamless publishing to institutional repositories and platforms like:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>DSpace</li>
          <li>EPrints</li>
          <li>Fedora</li>
          <li>ProQuest</li>
        </ul>

        <h2>💬 We Want Your Input</h2>
        <p>
          This roadmap isn't set in stone. We're building Thesisflow in partnership with our academic community, and your priorities matter.
        </p>

        <p>
          If your institution has specific needs or if you'd like to influence our development priorities, please reach out. Early partner institutions have opportunities to:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Access beta features before general release</li>
          <li>Participate in user research and testing</li>
          <li>Influence feature prioritization</li>
          <li>Receive dedicated implementation support</li>
        </ul>

        <h2>Stay Informed</h2>
        <p>
          We'll provide monthly updates on our progress toward these goals. You can follow along through:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Our blog (you're reading it!)</li>
          <li>Monthly email newsletters</li>
          <li>Partner institution webinars</li>
          <li>Our public changelog</li>
        </ul>

        <p className="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
          "Building software for academic institutions requires balancing innovation with stability, ambition with pragmatism. We're excited about this roadmap and grateful for the partners who help shape it."
          <span className="block mt-2 not-italic text-sm">— Product Team</span>
        </p>

        <p>
          Thank you for your continued support and feedback. Here's to an exciting Q1 2026!
        </p>
      </div>
    </BlogPostLayout>
  );
}