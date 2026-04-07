import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import { LegalPage } from "../models/legalPage.model.js";

// Load environment variables securely
dotenv.config({ path: "./.env" });

const initialLegalPages = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'Nov 15, 2025',
    published: true,
    content: `<p>This Privacy Policy describes how MIGRI Technologies Pvt Ltd ("we," "us," or "our") collects, uses, and shares information about you when you use our ThesisFlow platform.</p>

<h2>Information We Collect</h2>

<h3>Information You Provide</h3>
<p>When your institution licenses ThesisFlow, we collect information that you provide directly, including:</p>
<ul>
  <li>Account information (name, email address, institutional affiliation)</li>
  <li>Thesis submissions and related documents</li>
  <li>Communications with support and other users within your institution</li>
  <li>Feedback and correspondence</li>
</ul>

<h3>Automatically Collected Information</h3>
<p>We automatically collect certain information when you use ThesisFlow:</p>
<ul>
  <li>Usage data (features accessed, time spent, actions taken)</li>
  <li>Device and browser information</li>
  <li>IP address and location data</li>
  <li>Cookies and similar tracking technologies</li>
</ul>

<h2>How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ul>
  <li>Provide, maintain, and improve ThesisFlow</li>
  <li>Process thesis submissions and facilitate review workflows</li>
  <li>Communicate with you about the service</li>
  <li>Ensure security and prevent fraud</li>
  <li>Comply with legal obligations</li>
  <li>Analyze usage patterns to enhance user experience</li>
</ul>

<h2>Information Sharing</h2>
<p>We do not sell your personal information. We share information only in the following circumstances:</p>
<ul>
  <li><strong>Within Your Institution:</strong> With authorized users at your institution as necessary for thesis management</li>
  <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our platform</li>
  <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
</ul>

<h2>Data Security</h2>
<p>We implement appropriate technical and organizational measures to protect your information, including encryption, access controls, and regular security assessments.</p>

<h2>Your Rights</h2>
<p>Depending on your location, you may have rights regarding your personal information, including:</p>
<ul>
  <li>Access to your personal information</li>
  <li>Correction of inaccurate information</li>
  <li>Deletion of your information</li>
  <li>Data portability</li>
  <li>Objection to processing</li>
</ul>

<h2>Contact Us</h2>
<p>For questions about this Privacy Policy, contact us at: <a href="mailto:privacy@thesisflow.com">privacy@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
    versions: [
      {
        versionId: '1',
        content: `<p>This Privacy Policy describes how MIGRI Technologies Pvt Ltd ("we," "us," or "our") collects, uses, and shares information about you when you use our ThesisFlow platform.</p>

<h2>Information We Collect</h2>

<h3>Information You Provide</h3>
<p>When your institution licenses ThesisFlow, we collect information that you provide directly, including:</p>
<ul>
  <li>Account information (name, email address, institutional affiliation)</li>
  <li>Thesis submissions and related documents</li>
  <li>Communications with support and other users within your institution</li>
  <li>Feedback and correspondence</li>
</ul>

<h3>Automatically Collected Information</h3>
<p>We automatically collect certain information when you use ThesisFlow:</p>
<ul>
  <li>Usage data (features accessed, time spent, actions taken)</li>
  <li>Device and browser information</li>
  <li>IP address and location data</li>
  <li>Cookies and similar tracking technologies</li>
</ul>

<h2>How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ul>
  <li>Provide, maintain, and improve ThesisFlow</li>
  <li>Process thesis submissions and facilitate review workflows</li>
  <li>Communicate with you about the service</li>
  <li>Ensure security and prevent fraud</li>
  <li>Comply with legal obligations</li>
  <li>Analyze usage patterns to enhance user experience</li>
</ul>

<h2>Information Sharing</h2>
<p>We do not sell your personal information. We share information only in the following circumstances:</p>
<ul>
  <li><strong>Within Your Institution:</strong> With authorized users at your institution as necessary for thesis management</li>
  <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our platform</li>
  <li><strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
</ul>

<h2>Data Security</h2>
<p>We implement appropriate technical and organizational measures to protect your information, including encryption, access controls, and regular security assessments.</p>

<h2>Your Rights</h2>
<p>Depending on your location, you may have rights regarding your personal information, including:</p>
<ul>
  <li>Access to your personal information</li>
  <li>Correction of inaccurate information</li>
  <li>Deletion of your information</li>
  <li>Data portability</li>
  <li>Objection to processing</li>
</ul>

<h2>Contact Us</h2>
<p>For questions about this Privacy Policy, contact us at: <a href="mailto:privacy@thesisflow.com">privacy@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
        savedAt: 'Nov 15, 2025 10:00 AM',
        savedBy: 'Administrator'
      }
    ]
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    lastUpdated: 'Nov 15, 2025',
    published: true,
    content: `<p>These Terms of Service govern your institution's use of ThesisFlow, provided by MIGRI Technologies Pvt Ltd.</p>

<h2>1. Acceptance of Terms</h2>
<p>By accessing or using ThesisFlow, your institution agrees to be bound by these Terms of Service and all applicable laws and regulations.</p>

<h2>2. Institutional Licensing</h2>
<p>ThesisFlow is licensed to academic institutions, not individual users.</p>

<h2>3. User Responsibilities</h2>
<p>Users of ThesisFlow agree to use the service responsibly and in compliance with all applicable laws.</p>

<h2>Contact</h2>
<p>For questions, contact us at: <a href="mailto:legal@thesisflow.com">legal@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
    versions: [
      {
        versionId: '1',
        content: `<p>These Terms of Service govern your institution's use of ThesisFlow, provided by MIGRI Technologies Pvt Ltd.</p>

<h2>1. Acceptance of Terms</h2>
<p>By accessing or using ThesisFlow, your institution agrees to be bound by these Terms of Service and all applicable laws and regulations.</p>

<h2>2. Institutional Licensing</h2>
<p>ThesisFlow is licensed to academic institutions, not individual users.</p>

<h2>3. User Responsibilities</h2>
<p>Users of ThesisFlow agree to use the service responsibly and in compliance with all applicable laws.</p>

<h2>Contact</h2>
<p>For questions, contact us at: <a href="mailto:legal@thesisflow.com">legal@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
        savedAt: 'Nov 15, 2025 10:00 AM',
        savedBy: 'Administrator'
      }
    ]
  },
  {
    slug: 'gdpr',
    title: 'GDPR Compliance',
    lastUpdated: 'Nov 15, 2025',
    published: true,
    content: `<p>ThesisFlow is designed to help academic institutions comply with the General Data Protection Regulation (GDPR) when managing thesis workflows.</p>

<h2>Our Commitment to GDPR</h2>
<p>As a data processor for European institutions, we take GDPR compliance seriously.</p>

<h2>Contact Our DPO</h2>
<p>For GDPR-related questions, contact our Data Protection Officer at: <a href="mailto:dpo@thesisflow.com">dpo@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
    versions: [
      {
        versionId: '1',
        content: `<p>ThesisFlow is designed to help academic institutions comply with the General Data Protection Regulation (GDPR) when managing thesis workflows.</p>

<h2>Our Commitment to GDPR</h2>
<p>As a data processor for European institutions, we take GDPR compliance seriously.</p>

<h2>Contact Our DPO</h2>
<p>For GDPR-related questions, contact our Data Protection Officer at: <a href="mailto:dpo@thesisflow.com">dpo@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
        savedAt: 'Nov 15, 2025 10:00 AM',
        savedBy: 'Administrator'
      }
    ]
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    lastUpdated: 'Nov 15, 2025',
    published: true,
    content: `<p>ThesisFlow maintains comprehensive compliance with international standards and regulations to support academic institutions worldwide.</p>

<h2>Security & Certification</h2>
<p>We maintain SOC 2 Type II certification and ISO 27001 certification.</p>

<h2>Questions?</h2>
<p>For compliance inquiries, contact: <a href="mailto:compliance@thesisflow.com">compliance@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
    versions: [
      {
        versionId: '1',
        content: `<p>ThesisFlow maintains comprehensive compliance with international standards and regulations to support academic institutions worldwide.</p>

<h2>Security & Certification</h2>
<p>We maintain SOC 2 Type II certification and ISO 27001 certification.</p>

<h2>Questions?</h2>
<p>For compliance inquiries, contact: <a href="mailto:compliance@thesisflow.com">compliance@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
        savedAt: 'Nov 15, 2025 10:00 AM',
        savedBy: 'Administrator'
      }
    ]
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    lastUpdated: 'Nov 15, 2025',
    published: true,
    content: `<p>MIGRI Technologies Pvt Ltd is committed to ensuring digital accessibility for all users, including those with disabilities.</p>

<h2>Conformance Status</h2>
<p>ThesisFlow conforms to WCAG 2.1 Level AA standards.</p>

<h2>Feedback</h2>
<p>We welcome feedback on the accessibility of ThesisFlow. Contact us at: <a href="mailto:accessibility@thesisflow.com">accessibility@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
    versions: [
      {
        versionId: '1',
        content: `<p>MIGRI Technologies Pvt Ltd is committed to ensuring digital accessibility for all users, including those with disabilities.</p>

<h2>Conformance Status</h2>
<p>ThesisFlow conforms to WCAG 2.1 Level AA standards.</p>

<h2>Feedback</h2>
<p>We welcome feedback on the accessibility of ThesisFlow. Contact us at: <a href="mailto:accessibility@thesisflow.com">accessibility@thesisflow.com</a></p>

<p><em>Last updated: November 15, 2025</em></p>`,
        savedAt: 'Nov 15, 2025 10:00 AM',
        savedBy: 'Administrator'
      }
    ]
  }
];

const seedLegalPages = async () => {
    try {
        await connectDB();
        
        console.log("Starting DB seeding for legal pages...");
        
        let insertedCount = 0;
        let updatedCount = 0;

        for (const page of initialLegalPages) {
            // Upsert the legal page based on slug
            const existing = await LegalPage.findOne({ slug: page.slug });
            
            if (existing) {
                await LegalPage.updateOne({ slug: page.slug }, { $set: page });
                updatedCount++;
                console.log(`Updated legal page: ${page.title}`);
            } else {
                await LegalPage.create(page);
                insertedCount++;
                console.log(`Created legal page: ${page.title}`);
            }
        }
        
        console.log(`Seeding completed successfully! Inserted: ${insertedCount}, Updated: ${updatedCount}`);
        process.exit(0);
    } catch (error) {
        console.error("Error seeding legal pages:", error);
        process.exit(1);
    }
};

seedLegalPages();
