import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { Documentation } from "../models/documentation.model.js";

// Load environment variables
dotenv.config({ path: "./.env" });

const defaultDocPages = [
  {
    title: 'Getting Started with ThesisFlow',
    slug: 'getting-started',
    category: 'Getting Started',
    excerpt: 'Learn the basics of ThesisFlow and get your institution set up in minutes.',
    content: `<h2>Welcome to ThesisFlow</h2>
<p>ThesisFlow is a modern thesis management system designed for universities and research institutions. This guide will help you get started.</p>

<h3>What is ThesisFlow?</h3>
<p>ThesisFlow replaces 30-year-old thesis review workflows with modern, automated processes. It helps institutions manage thesis submissions, reviews, and approvals efficiently.</p>

<h3>Key Features</h3>
<ul>
<li>Automated workflow management</li>
<li>Real-time collaboration</li>
<li>Document version control</li>
<li>Integrated review system</li>
<li>Comprehensive reporting</li>
</ul>

<h3>System Requirements</h3>
<p>ThesisFlow is a cloud-based solution that works on:</p>
<ul>
<li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
<li>Desktop and mobile devices</li>
<li>No special software installation required</li>
</ul>

<h3>Next Steps</h3>
<p>Continue to the User Guide to learn how to navigate the system and submit your first thesis.</p>`,
    lastUpdated: '2025-11-15',
    published: true,
    order: 1
  },
  {
    title: 'Submitting Your First Thesis',
    slug: 'submitting-thesis',
    category: 'User Guide',
    excerpt: 'Step-by-step guide to submitting a thesis for review.',
    content: `<h2>How to Submit a Thesis</h2>
<p>This guide walks you through the thesis submission process from start to finish.</p>

<h3>Before You Begin</h3>
<p>Make sure you have:</p>
<ul>
<li>Your thesis document in PDF format</li>
<li>All required metadata (title, abstract, keywords)</li>
<li>Your advisor's approval</li>
</ul>

<h3>Submission Steps</h3>
<ol>
<li>Log in to your ThesisFlow account</li>
<li>Navigate to "Submit New Thesis"</li>
<li>Fill in the required information</li>
<li>Upload your thesis document</li>
<li>Review and submit</li>
</ol>

<h3>After Submission</h3>
<p>Once submitted, your thesis will be routed to reviewers. You'll receive email notifications at each stage of the review process.</p>`,
    lastUpdated: '2025-11-15',
    published: true,
    order: 2
  },
  {
    title: 'Admin Dashboard Overview',
    slug: 'admin-dashboard',
    category: 'Admin Guide',
    excerpt: 'Complete guide to using the ThesisFlow admin dashboard.',
    content: `<h2>Admin Dashboard Guide</h2>
<p>The admin dashboard gives you complete control over your institution's thesis workflow.</p>

<h3>Dashboard Sections</h3>
<ul>
<li><strong>Blog Posts:</strong> Manage announcements and updates</li>
<li><strong>Documentation:</strong> Edit help documentation</li>
<li><strong>Legal Pages:</strong> Update terms, privacy, and policies</li>
<li><strong>Newsletter:</strong> Manage email subscribers</li>
<li><strong>Demo Requests:</strong> Track institutional demo requests</li>
<li><strong>Contact Messages:</strong> Respond to inquiries</li>
<li><strong>Referrals:</strong> Manage institutional referrals</li>
<li><strong>Trash:</strong> Restore deleted items (6-month retention)</li>
</ul>

<h3>User Management</h3>
<p>Admins can create and manage user accounts, assign roles, and control permissions.</p>

<h3>Workflow Configuration</h3>
<p>Customize review workflows, approval stages, and notification settings to match your institution's requirements.</p>`,
    lastUpdated: '2025-11-15',
    published: true,
    order: 3
  },
  {
    title: 'Frequently Asked Questions',
    slug: 'faq',
    category: 'FAQ',
    excerpt: 'Answers to common questions about ThesisFlow.',
    content: `<h2>Frequently Asked Questions</h2>

<h3>General Questions</h3>

<h4>Q: Who can use ThesisFlow?</h4>
<p>A: ThesisFlow is licensed to universities and research institutions. Individual scholars cannot purchase licenses directly - your institution must adopt the system.</p>

<h4>Q: How much does ThesisFlow cost?</h4>
<p>A: Pricing is customized based on institution size and requirements. Contact us for a demo and pricing quote.</p>

<h4>Q: Is my data secure?</h4>
<p>A: Yes, we use industry-standard encryption and security practices. All data is stored securely and backed up regularly.</p>

<h3>Technical Questions</h3>

<h4>Q: What file formats are supported?</h4>
<p>A: ThesisFlow supports PDF, DOCX, and LaTeX files. PDFs are recommended for final submissions.</p>

<h4>Q: Can I integrate ThesisFlow with our existing systems?</h4>
<p>A: Yes, ThesisFlow offers API integration capabilities. Contact our technical team for details.</p>

<h4>Q: What happens if I need help?</h4>
<p>A: We provide email support, documentation, and video tutorials. Premium support packages are available for institutions.</p>`,
    lastUpdated: '2025-11-15',
    published: true,
    order: 4
  },
  {
    title: 'Troubleshooting Common Issues',
    slug: 'troubleshooting',
    category: 'Troubleshooting',
    excerpt: 'Solutions to common problems and error messages.',
    content: `<h2>Troubleshooting Guide</h2>

<h3>Upload Issues</h3>

<h4>Problem: File upload fails</h4>
<p><strong>Solution:</strong></p>
<ul>
<li>Check your internet connection</li>
<li>Ensure file size is under 50MB</li>
<li>Try a different browser</li>
<li>Clear your browser cache</li>
</ul>

<h4>Problem: PDF doesn't display correctly</h4>
<p><strong>Solution:</strong></p>
<ul>
<li>Ensure your PDF is not password-protected</li>
<li>Try re-exporting your PDF from the source application</li>
<li>Use PDF/A format for best compatibility</li>
</ul>

<h3>Login Issues</h3>

<h4>Problem: Can't log in</h4>
<p><strong>Solution:</strong></p>
<ul>
<li>Check your username and password</li>
<li>Use the "Forgot Password" link</li>
<li>Ensure your account is activated</li>
<li>Contact your institution's admin if issues persist</li>
</ul>

<h3>Notification Issues</h3>

<h4>Problem: Not receiving email notifications</h4>
<p><strong>Solution:</strong></p>
<ul>
<li>Check your spam/junk folder</li>
<li>Add noreply@thesisflow.com to your contacts</li>
<li>Verify your email address in settings</li>
<li>Check notification preferences</li>
</ul>

<h3>Still Need Help?</h3>
<p>If you're still experiencing issues, please contact our support team with:</p>
<ul>
<li>A description of the problem</li>
<li>Steps to reproduce the issue</li>
<li>Any error messages you see</li>
<li>Your browser and operating system</li>
</ul>`,
    lastUpdated: '2025-11-15',
    published: true,
    order: 5
  }
];

const seedDocumentation = async () => {
    try {
        await connectDB();
        
        console.log("Starting DB seeding for documentation...");
        
        let insertedCount = 0;
        let updatedCount = 0;

        for (const doc of defaultDocPages) {
            // Upsert the documentation page based on slug
            const existing = await Documentation.findOne({ slug: doc.slug });
            
            if (existing) {
                await Documentation.updateOne({ slug: doc.slug }, { $set: doc });
                updatedCount++;
                console.log(`Updated documentation: ${doc.title}`);
            } else {
                await Documentation.create(doc);
                insertedCount++;
                console.log(`Created documentation: ${doc.title}`);
            }
        }
        
        console.log(`Seeding completed successfully! Inserted: ${insertedCount}, Updated: ${updatedCount}`);
        process.exit(0);
    } catch (error) {
        console.error("Error seeding documentation:", error);
        process.exit(1);
    }
};

seedDocumentation();
