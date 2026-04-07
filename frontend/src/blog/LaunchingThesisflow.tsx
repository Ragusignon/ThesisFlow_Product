import BlogPostLayout from '../components/BlogPostLayout';

export default function LaunchingThesisflow({ onNavigate }: any) {
  return (
    <BlogPostLayout
      onNavigate={onNavigate}
      title="Launching Thesisflow: Revolutionizing Academic Research Management"
      excerpt="Today marks a significant milestone in academic research management. Learn about our journey, vision, and the problem we're solving for universities worldwide."
      date="November 6, 2025"
      author="Thesisflow Team"
      category="Company"
      readTime="8 min"
      image="https://images.unsplash.com/photo-1699978786249-fa3ad6cf051d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2MzE1NTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    >
      <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:text-[var(--text-primary)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-[var(--text-secondary)]">
        <p className="text-xl text-[var(--text-primary)] leading-relaxed">
          Today, we're thrilled to announce the official launch of Thesisflow—a comprehensive platform designed to transform how universities and academic institutions manage thesis workflows.
        </p>

        <h2>The Problem We're Solving</h2>
        <p>
          During my time as a researcher at Aalto University and IIT Madras, I witnessed firsthand the challenges that students, supervisors, and administrators face in managing thesis projects. The process is often fragmented across multiple tools—email chains for communication, cloud storage for documents, spreadsheets for tracking progress, and manual processes for approvals.
        </p>

        <p>
          This fragmentation creates several critical issues:
        </p>

        <ul>
          <li>Loss of institutional knowledge when researchers graduate</li>
          <li>Inconsistent formatting and quality control across departments</li>
          <li>Administrative burden on faculty and staff</li>
          <li>Difficulty in tracking progress and ensuring timely completions</li>
          <li>Challenges in maintaining compliance with institutional and regulatory requirements</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          Thesisflow is built on the belief that academic institutions deserve better tools. We envision a future where:
        </p>

        <ul>
          <li>Every thesis project has a clear, trackable workflow from inception to publication</li>
          <li>Collaboration between students and supervisors is seamless and transparent</li>
          <li>Institutional knowledge is preserved and accessible</li>
          <li>Compliance and quality standards are automatically maintained</li>
          <li>Administrators have real-time visibility into program health and progress</li>
        </ul>

        <h2>Why Now?</h2>
        <p>
          The shift to remote and hybrid work during the pandemic exposed the limitations of traditional thesis management approaches. Universities worldwide are now looking for digital solutions that can support distributed teams while maintaining academic rigor.
        </p>

        <p>
          Moreover, there's growing pressure on institutions to demonstrate research outcomes, maintain compliance with data protection regulations like GDPR, and improve student completion rates. Thesisflow addresses all these needs in a single, integrated platform.
        </p>

        <h2>Built for Institutions, Not Individuals</h2>
        <p>
          A crucial aspect of our approach is that Thesisflow is a B2B product. We work exclusively with universities, academic publishers, and research institutions. This focus allows us to:
        </p>

        <ul>
          <li>Ensure proper institutional oversight and governance</li>
          <li>Integrate with existing university systems and workflows</li>
          <li>Maintain compliance with institutional policies</li>
          <li>Provide dedicated support and training for implementation</li>
          <li>Scale solutions to serve entire departments or universities</li>
        </ul>

        <h2>What's Next?</h2>
        <p>
          We're currently working with early partner institutions to refine our platform based on real-world feedback. If your institution is interested in modernizing thesis management, we'd love to hear from you.
        </p>

        <p>
          This is just the beginning. Over the coming months, we'll be sharing more about our development process, the challenges we're solving, and the innovative approaches we're taking to build the future of academic research management.
        </p>

        <p className="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
          "Our goal is not just to digitize existing processes, but to fundamentally reimagine how academic institutions can support their researchers while maintaining the highest standards of quality and compliance."
          <span className="block mt-2 not-italic text-sm">— Founder, MIGRI Technologies</span>
        </p>

        <p>
          Thank you for joining us on this journey. We're excited to work with forward-thinking institutions to shape the future of academic research management.
        </p>
      </div>
    </BlogPostLayout>
  );
}