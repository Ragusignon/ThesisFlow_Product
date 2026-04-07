import BlogPostLayout from '../components/BlogPostLayout';

export default function GDPRCompliance({ onNavigate }: any) {
  return (
    <BlogPostLayout
      onNavigate={onNavigate}
      title="GDPR Compliance for Academic Research Platforms"
      excerpt="Understanding data protection requirements and how Thesisflow ensures institutional compliance."
      date="October 15, 2025"
      author="Security Team"
      category="Compliance"
      readTime="9 min"
      image="https://images.unsplash.com/photo-1597781914467-a5b93258e748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjMxNTU4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    >
      <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:text-[var(--text-primary)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-[var(--text-primary)] [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:text-[var(--text-secondary)] [&_strong]:text-[var(--text-primary)]">
        <p className="text-xl text-[var(--text-primary)] leading-relaxed">
          Data protection is paramount for academic institutions. Here's how Thesisflow helps universities maintain GDPR compliance while managing sensitive research data.
        </p>

        <h2>Understanding GDPR in Academic Context</h2>
        <p>
          The General Data Protection Regulation (GDPR) applies to all organizations processing personal data of EU residents, including universities. Academic institutions face unique challenges:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Managing personal data of students, faculty, and researchers</li>
          <li>Balancing transparency requirements with academic freedom</li>
          <li>Ensuring data portability while protecting intellectual property</li>
          <li>Maintaining long-term archives while respecting deletion rights</li>
        </ul>

        <h2>Key GDPR Principles</h2>

        <h3>1. Lawfulness, Fairness, and Transparency</h3>
        <p>
          Data processing must have a legal basis and users must be informed about how their data is used. Thesisflow implements:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clear privacy notices at account creation</li>
          <li>Transparent data processing agreements with institutions</li>
          <li>User-friendly privacy settings and controls</li>
        </ul>

        <h3>2. Purpose Limitation</h3>
        <p>
          Data collected for thesis management cannot be used for other purposes without consent. We ensure:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Strict separation of production and analytics data</li>
          <li>Purpose-specific data collection practices</li>
          <li>Regular audits of data usage</li>
        </ul>

        <h3>3. Data Minimization</h3>
        <p>
          We collect only data necessary for thesis management functionality. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Configurable data fields based on institutional needs</li>
          <li>Automatic deletion of unnecessary metadata</li>
          <li>Regular review of data collection practices</li>
        </ul>

        <h3>4. Accuracy</h3>
        <p>
          Users can update their personal information at any time, and we maintain processes to ensure data accuracy.
        </p>

        <h3>5. Storage Limitation</h3>
        <p>
          Data is retained only as long as necessary, with configurable retention policies that respect both GDPR requirements and institutional archiving needs.
        </p>

        <h3>6. Integrity and Confidentiality</h3>
        <p>
          Comprehensive security measures protect data from unauthorized access, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>End-to-end encryption for data in transit</li>
          <li>Encryption at rest for all stored data</li>
          <li>Multi-factor authentication</li>
          <li>Regular security audits and penetration testing</li>
          <li>Access controls and audit logging</li>
        </ul>

        <h2>User Rights Under GDPR</h2>

        <h3>Right to Access</h3>
        <p>
          Users can request copies of their personal data. Thesisflow provides self-service data export functionality for immediate access.
        </p>

        <h3>Right to Rectification</h3>
        <p>
          Users can update incorrect or incomplete data through their account settings.
        </p>

        <h3>Right to Erasure ("Right to be Forgotten")</h3>
        <p>
          While respecting institutional archiving requirements, we support data deletion requests with appropriate safeguards for legitimate interests.
        </p>

        <h3>Right to Data Portability</h3>
        <p>
          Users can export their data in standard formats (JSON, CSV, PDF) for transfer to other systems.
        </p>

        <h3>Right to Object</h3>
        <p>
          Users can object to certain types of processing, with clear processes for handling such requests.
        </p>

        <h2>How Thesisflow Ensures Compliance</h2>

        <h3>Data Processing Agreements</h3>
        <p>
          We provide comprehensive Data Processing Agreements (DPAs) that clearly define roles, responsibilities, and data handling practices.
        </p>

        <h3>Privacy by Design</h3>
        <p>
          GDPR compliance is built into our platform from the ground up, not added as an afterthought. Every feature considers data protection implications.
        </p>

        <h3>Regular Audits</h3>
        <p>
          We conduct regular internal audits and work with external security firms to verify our compliance measures.
        </p>

        <h3>Breach Notification</h3>
        <p>
          We maintain incident response procedures to ensure timely notification of any data breaches, as required by GDPR.
        </p>

        <h3>Sub-processor Management</h3>
        <p>
          We carefully vet all sub-processors and maintain transparent records of data processing relationships.
        </p>

        <h2>International Data Transfers</h2>
        <p>
          For institutions with international operations, we ensure compliance with GDPR requirements for data transfers outside the EU through:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>EU-based data centers as default</li>
          <li>Standard Contractual Clauses (SCCs) where needed</li>
          <li>Supplementary measures for additional protection</li>
        </ul>

        <h2>Supporting Institutional Compliance</h2>
        <p>
          Beyond our own compliance, we help institutions meet their GDPR obligations through:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Detailed documentation for Data Protection Impact Assessments (DPIAs)</li>
          <li>Admin tools for managing user data requests</li>
          <li>Compliance reporting and audit trails</li>
          <li>Training materials for institutional staff</li>
          <li>Dedicated compliance support</li>
        </ul>

        <p className="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
          "GDPR compliance isn't just about avoiding fines—it's about respecting the privacy rights of our academic community and building trust through transparent data practices."
          <span className="block mt-2 not-italic text-sm">— Security Team</span>
        </p>

        <h2>Conclusion</h2>
        <p>
          GDPR compliance is an ongoing commitment, not a one-time checklist. As regulations evolve and our platform grows, we remain dedicated to maintaining the highest standards of data protection.
        </p>

        <p>
          For institutions evaluating thesis management solutions, GDPR compliance should be a critical consideration. We're happy to discuss our compliance measures in detail and provide documentation to support your due diligence process.
        </p>
      </div>
    </BlogPostLayout>
  );
}