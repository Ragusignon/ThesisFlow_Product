import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { Blog } from "../models/blog.model.js";

dotenv.config({ path: "./.env" });

const initialBlogPosts = [
  {
    slug: 'state-of-thesis-management',
    title: 'The Hidden Cost of 30-Year-Old Thesis Workflows',
    excerpt: "Universities worldwide are still using thesis management processes designed in the 1990s. It's time for a change.",
    author: 'Thesisflow Team',
    category: 'Research',
    date: 'Nov 14, 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1760611656615-db3fad24a314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjI1NDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Published',
    lastModified: 'Nov 14, 2025',
    featured: false,
    content: `<p class="text-xl text-[var(--text-primary)] leading-relaxed mb-6">
  Universities worldwide are grappling with the complexity of managing thesis workflows in an increasingly digital and distributed academic environment.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Current Challenges</h2>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">1. Fragmented Systems</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Most institutions rely on a patchwork of tools that don't communicate with each other. Email for notifications, shared drives for documents, spreadsheets for tracking, and paper forms for approvals create inefficiencies and opportunities for errors.
</p>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">2. Administrative Burden</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Graduate school administrators spend countless hours manually tracking submissions, chasing missing documents, and coordinating between students, supervisors, and examination committees. This administrative overhead takes away time that could be spent on higher-value activities.
</p>

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080" alt="Administrative work" class="w-full rounded-xl my-8" />

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">3. Inconsistent Quality Control</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Without standardized workflows and automated checks, the quality and consistency of thesis submissions can vary significantly across departments. This creates challenges for institutional reputation and compliance.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">The Technology Gap</h2>
<p class="text-[var(--text-secondary)] mb-4">
  While many aspects of university operations have been digitized, thesis management has often been overlooked. Generic project management tools don't address the specific needs of academic workflows.
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Multi-level approval hierarchies</li>
  <li>Academic calendar integration</li>
  <li>Compliance with institutional and regulatory requirements</li>
  <li>Integration with library systems and repositories</li>
  <li>Support for diverse thesis formats and submission requirements</li>
</ul>

<blockquote class="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
  "Institutions that invest in modern thesis management systems see measurable improvements in completion rates, reduced administrative costs, and better student satisfaction."
</blockquote>`
  },
  {
    slug: 'december-2025-version',
    title: 'December 2025 Version Release',
    excerpt: 'Exciting new features and improvements as we approach beta launch. Enhanced workflows, real-time collaboration, and institutional onboarding tools.',
    author: 'Product Team',
    category: 'Product Updates',
    date: 'Dec 1, 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080',
    status: 'Published',
    lastModified: 'Dec 1, 2025',
    featured: false,
    content: `<p class="text-xl text-[var(--text-primary)] leading-relaxed mb-6">
  We're excited to announce our December 2025 version release, marking a significant milestone in our journey toward beta launch. This release includes major enhancements based on feedback from our early partner institutions.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">What's New in December 2025</h2>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Enhanced Workflow Engine</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Our completely redesigned workflow engine now supports unlimited custom approval stages, parallel review paths, and conditional routing based on thesis metadata. Institutions can now model even the most complex review processes with ease.
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Visual workflow builder with drag-and-drop interface</li>
  <li>Automatic deadline calculation based on institutional calendars</li>
  <li>Smart reminders and escalation rules</li>
  <li>Role-based permission templates</li>
</ul>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080" alt="Workflow visualization" class="w-full rounded-xl my-8" />

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Real-Time Collaboration Tools</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Supervisors and committee members can now provide feedback directly within the platform, with threaded comments, version comparison, and tracked changes - all in real-time.
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Inline commenting with @mentions</li>
  <li>Side-by-side version comparison</li>
  <li>Document annotation tools</li>
  <li>Activity timeline for complete audit trail</li>
</ul>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Institutional Onboarding Dashboard</h3>
<p class="text-[var(--text-secondary)] mb-4">
  New institutions can now get up and running in hours instead of weeks with our guided onboarding dashboard that walks administrators through configuration, user setup, and workflow design.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Performance Improvements</h2>
<p class="text-[var(--text-secondary)] mb-4">
  We've invested heavily in performance optimization this month:
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>70% faster document upload and processing</li>
  <li>Real-time updates without page refresh</li>
  <li>Enhanced caching for improved responsiveness</li>
  <li>Optimized database queries for large institutions</li>
</ul>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080" alt="Performance metrics" class="w-full rounded-xl my-8" />

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Enhanced Security & Compliance</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Security continues to be our top priority. This release includes:
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Advanced audit logging with detailed activity tracking</li>
  <li>Enhanced encryption for data at rest and in transit</li>
  <li>Two-factor authentication for all administrative accounts</li>
  <li>GDPR-compliant data export and deletion tools</li>
  <li>Detailed compliance reports for institutional audits</li>
</ul>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Integration Capabilities</h2>
<p class="text-[var(--text-secondary)] mb-4">
  New API endpoints and webhooks enable seamless integration with:
</p>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Student information systems (SIS)</li>
  <li>Institutional repositories</li>
  <li>Single Sign-On (SSO) providers</li>
  <li>Email and calendar systems</li>
</ul>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Looking Ahead to Beta Launch</h2>
<p class="text-[var(--text-secondary)] mb-4">
  This December release represents a major step toward our beta launch. We're currently onboarding our first partner institutions and gathering valuable feedback that will shape our final pre-launch updates.
</p>

<blockquote class="text-lg italic text-[var(--text-secondary)] border-l-4 border-[var(--border-brand)] pl-4 my-8">
  "The December release demonstrates our commitment to building a world-class thesis management platform designed specifically for the needs of research institutions worldwide." - Product Team
</blockquote>

<p class="text-[var(--text-secondary)] mb-4">
  Interested in becoming a beta partner? Contact our team to learn more about early access opportunities for your institution.
</p>`
  },
  {
    slug: 'launching-thesisflow',
    title: 'Launching ThesisFlow: Modern Thesis Management',
    excerpt: "After years of research and development, we're excited to introduce ThesisFlow to universities worldwide.",
    author: 'Product Team',
    category: 'Company',
    date: 'Nov 12, 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1080',
    status: 'Published',
    lastModified: 'Nov 12, 2025',
    featured: false,
    content: `<p class="text-xl text-[var(--text-primary)] leading-relaxed mb-6">
  Today marks an important milestone: the official launch of ThesisFlow, a platform designed to modernize thesis management for academic institutions.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Why ThesisFlow?</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Through conversations with hundreds of graduate schools, we identified a critical gap in academic technology: thesis workflows remain largely manual and fragmented.
</p>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Built for Academic Institutions</h3>
<p class="text-[var(--text-secondary)] mb-4">
  ThesisFlow is purpose-built for universities, with deep understanding of academic processes, compliance requirements, and the unique needs of graduate education.
</p>

<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080" alt="Team collaboration" class="w-full rounded-xl my-8" />

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">What Makes Us Different</h2>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Institutional licensing model - designed for universities, not individuals</li>
  <li>Automated workflows replacing 30-year-old manual processes</li>
  <li>GDPR-compliant data handling</li>
  <li>Integration with existing university systems</li>
  <li>Global accessibility with multi-language support</li>
</ul>

<p class="text-[var(--text-secondary)] mb-4">
  We're starting with core thesis submission and review workflows, with plans to expand based on institutional feedback and needs.
</p>`
  },
  {
    slug: 'gdpr-compliance',
    title: 'GDPR Compliance in Academic Software',
    excerpt: 'Understanding data protection requirements for thesis management systems in European institutions.',
    author: 'Security & Compliance Team',
    category: 'Compliance',
    date: 'Nov 5, 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1080',
    status: 'Published',
    lastModified: 'Nov 5, 2025',
    featured: false,
    content: `<p class="text-xl text-[var(--text-primary)] leading-relaxed mb-6">
  GDPR compliance isn't optional for European universities or those handling EU citizen data. Here's what you need to know about data protection in thesis management.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Key GDPR Requirements</h2>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Data Minimization</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Collect only the data necessary for thesis management. Avoid storing unnecessary personal information or keeping data longer than required.
</p>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Right to Access</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Students must be able to access their personal data and understand how it's being used. Systems should provide easy export functionality.
</p>

<h3 class="text-xl text-[var(--text-primary)] mt-8 mb-3">Data Security</h3>
<p class="text-[var(--text-secondary)] mb-4">
  Implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or alteration.
</p>

<img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1080" alt="Data security" class="w-full rounded-xl my-8" />

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">ThesisFlow's Approach</h2>

<ul class="list-disc pl-6 space-y-2 text-[var(--text-secondary)] mb-6">
  <li>Data encrypted in transit and at rest</li>
  <li>Regular security audits and penetration testing</li>
  <li>Clear data retention policies</li>
  <li>Built-in tools for data export and deletion</li>
  <li>Detailed audit logs for compliance reporting</li>
</ul>

<p class="text-[var(--text-secondary)] mb-4">
  Compliance is built into every feature, not added as an afterthought.
</p>`
  },
  {
    slug: 'roadmap-preview',
    title: 'Product Roadmap Preview',
    excerpt: "A look at what's coming next for ThesisFlow based on institutional feedback.",
    author: 'Product Team',
    category: 'Product Updates',
    date: 'Nov 1, 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=1080',
    status: 'Published',
    lastModified: 'Nov 1, 2025',
    featured: false,
    content: `<p class="text-xl text-[var(--text-primary)] leading-relaxed mb-6">
  We're building ThesisFlow based on real needs from graduate schools worldwide. Here's what we're working on next.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Q1 2026: Enhanced Analytics</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Comprehensive dashboards showing submission trends, bottleneck identification, and performance metrics at department and institutional levels.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Q2 2026: Advanced Integrations</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Native integrations with popular institutional repositories, library systems, and student information systems.
</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080" alt="Analytics dashboard" class="w-full rounded-xl my-8" />

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Q3 2026: Collaboration Tools</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Enhanced features for supervisor-student collaboration, including inline commenting, version comparison, and integrated video meetings.
</p>

<h2 class="text-2xl text-[var(--text-primary)] mt-12 mb-4">Q4 2026: Mobile Experience</h2>
<p class="text-[var(--text-secondary)] mb-4">
  Full-featured mobile apps for iOS and Android, enabling review and approval workflows on the go.
</p>

<p class="text-[var(--text-secondary)] mb-4">
  Have suggestions for our roadmap? We're actively listening to institutional feedback and adjusting priorities based on real needs.
</p>`
  }
];

const seedBlogs = async () => {
    try {
        await connectDB();
        
        console.log("Starting DB seeding for blogs...");
        
        let insertedCount = 0;
        let updatedCount = 0;

        for (const post of initialBlogPosts) {
            const existing = await Blog.findOne({ slug: post.slug });
            
            if (existing) {
                await Blog.updateOne({ slug: post.slug }, { $set: post });
                updatedCount++;
                console.log(`Updated blog: ${post.title}`);
            } else {
                await Blog.create(post);
                insertedCount++;
                console.log(`Created blog: ${post.title}`);
            }
        }
        
        console.log(`Seeding completed successfully! Inserted: ${insertedCount}, Updated: ${updatedCount}`);
        process.exit(0);
    } catch (error) {
        console.error("Error seeding blogs:", error);
        process.exit(1);
    }
};

seedBlogs();
