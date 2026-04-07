import BlogPostLayout from '../components/BlogPostLayout';

export default function OctoberUpdate({ onNavigate }: any) {
  return (
    <BlogPostLayout
      onNavigate={onNavigate}
      title="Building in Public: Our October Development Update"
      excerpt="A transparent look at what we shipped this month, challenges we faced, and what's coming next."
      date="October 28, 2025"
      author="Product Team"
      category="Product Updates"
      readTime="5 min"
      image="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMTM2NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    >
      <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:text-[var(--text-primary)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-[var(--text-primary)] [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-[var(--text-secondary)]">
        <p className="text-xl text-[var(--text-primary)] leading-relaxed">
          We believe in building in public and sharing our journey transparently. Here's what we accomplished in October and what we learned along the way.
        </p>

        <h2>🚀 What We Shipped</h2>

        <h3>Enhanced Workflow Builder</h3>
        <p>
          We completely redesigned our workflow builder interface based on feedback from our early partner institutions. The new drag-and-drop interface makes it much easier for administrators to configure custom approval chains without technical knowledge.
        </p>

        <h3>Real-time Collaboration Features</h3>
        <p>
          Students and supervisors can now see when others are viewing or editing documents in real-time. We've added presence indicators, live cursors, and instant synchronization to make collaboration feel seamless.
        </p>

        <h3>Advanced Analytics Dashboard</h3>
        <p>
          Administrators now have access to comprehensive analytics showing completion rates, bottlenecks, and trends across departments. The dashboard includes customizable reports and automated alerts for issues requiring attention.
        </p>

        <h3>Mobile App Beta</h3>
        <p>
          We launched a beta version of our mobile app, allowing supervisors to review and approve submissions on the go. Initial feedback has been overwhelmingly positive.
        </p>

        <h2>💪 Challenges We Faced</h2>

        <h3>Performance Optimization</h3>
        <p>
          As we onboarded larger institutions with thousands of users, we encountered performance issues with document rendering. We spent significant time optimizing our caching strategy and implementing lazy loading, resulting in 60% faster page loads.
        </p>

        <h3>SSO Integration Complexity</h3>
        <p>
          Each institution has unique authentication requirements. We worked closely with IT departments to ensure smooth SSO integration while maintaining security best practices. This took longer than expected but was worth getting right.
        </p>

        <h3>Balancing Flexibility and Simplicity</h3>
        <p>
          We struggled to find the right balance between offering powerful customization options and maintaining an intuitive interface. After several iterations and user testing sessions, we settled on a progressive disclosure approach that works well for both novice and power users.
        </p>

        <h2>📊 By the Numbers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>4 new partner institutions onboarded</li>
          <li>127 features requests and bug reports processed</li>
          <li>98.7% uptime across all services</li>
          <li>2,450+ active users on the platform</li>
          <li>15,000+ documents managed</li>
        </ul>

        <h2>🎯 What's Next</h2>
        <p>
          Looking ahead to November, our focus areas include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>API access for third-party integrations</li>
          <li>Enhanced notification customization</li>
          <li>Automated plagiarism checking integration</li>
          <li>Multi-language support (starting with Spanish and German)</li>
          <li>Advanced search and filtering capabilities</li>
        </ul>

        <h2>🙏 Community Feedback</h2>
        <p>
          We're incredibly grateful for the detailed feedback from our partner institutions. Special thanks to the teams at [Partner University A] and [Partner University B] who spent hours testing new features and providing insights.
        </p>

        <p>
          Your input directly shapes our roadmap. Keep the feedback coming—we're listening and building accordingly.
        </p>

        <p className="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
          "Building in public keeps us accountable and ensures we're solving real problems for real institutions. Transparency is core to who we are."
          <span className="block mt-2 not-italic text-sm">— Product Team</span>
        </p>

        <h2>📣 Get Involved</h2>
        <p>
          If your institution is interested in becoming an early partner or participating in our beta program, we'd love to hear from you. Early partners receive special pricing and dedicated onboarding support.
        </p>
      </div>
    </BlogPostLayout>
  );
}