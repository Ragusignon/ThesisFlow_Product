// Legal pages data management with localStorage persistence and version history

export interface LegalPageVersion {
  versionId: string;
  content: string;
  savedAt: string;
  savedBy: string;
}

export interface LegalPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  lastModified: string;
  versions: LegalPageVersion[];
}

const STORAGE_KEY = 'thesisflow_legal_pages';

// Initial legal pages data with version history
const initialLegalPages: LegalPage[] = [
  {
    id: 1,
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    lastModified: 'Nov 15, 2025',
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
    id: 2,
    slug: 'terms-of-service',
    title: 'Terms of Service',
    lastModified: 'Nov 15, 2025',
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
    id: 3,
    slug: 'gdpr',
    title: 'GDPR Compliance',
    lastModified: 'Nov 15, 2025',
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
    id: 4,
    slug: 'compliance',
    title: 'Compliance',
    lastModified: 'Nov 15, 2025',
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
    id: 5,
    slug: 'accessibility',
    title: 'Accessibility Statement',
    lastModified: 'Nov 15, 2025',
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

// Get all legal pages
export const getLegalPages = (): LegalPage[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const pages = JSON.parse(stored);
      
      // Migration: Ensure all pages have versions array
      let needsUpdate = false;
      const migratedPages = pages.map((page: any) => {
        if (!page.versions) {
          needsUpdate = true;
          return { 
            ...page, 
            versions: [
              {
                versionId: '1',
                content: page.content,
                savedAt: page.lastModified || 'Nov 15, 2025',
                savedBy: 'Administrator'
              }
            ]
          };
        }
        if (!page.lastModified) {
          needsUpdate = true;
          return { ...page, lastModified: 'Nov 15, 2025' };
        }
        return page;
      });
      
      if (needsUpdate) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedPages));
        return migratedPages;
      }
      
      return pages;
    }
    // Initialize with default data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialLegalPages));
    return initialLegalPages;
  } catch (error) {
    console.error('Error loading legal pages:', error);
    return initialLegalPages;
  }
};

// Get a single legal page by slug
export const getLegalPageBySlug = (slug: string): LegalPage | undefined => {
  const pages = getLegalPages();
  return pages.find(page => page.slug === slug);
};

// Save/update a legal page with version history
export const saveLegalPage = (page: LegalPage, content: string): void => {
  try {
    const pages = getLegalPages();
    const index = pages.findIndex(p => p.id === page.id);
    
    if (index >= 0) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
      const formattedDateTime = currentDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      
      // Create new version
      const newVersion: LegalPageVersion = {
        versionId: `${Date.now()}`,
        content: content,
        savedAt: formattedDateTime,
        savedBy: 'Administrator'
      };
      
      // Update page with new content and version
      const updatedPage = { 
        ...pages[index], 
        content: content,
        lastModified: formattedDate,
        versions: [...pages[index].versions, newVersion]
      };
      
      pages[index] = updatedPage;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
    }
  } catch (error) {
    console.error('Error saving legal page:', error);
  }
};

// Get version history for a legal page
export const getVersionHistory = (pageId: number): LegalPageVersion[] => {
  const pages = getLegalPages();
  const page = pages.find(p => p.id === pageId);
  return page?.versions || [];
};

// Restore a specific version
export const restoreVersion = (pageId: number, versionId: string): void => {
  try {
    const pages = getLegalPages();
    const pageIndex = pages.findIndex(p => p.id === pageId);
    
    if (pageIndex >= 0) {
      const page = pages[pageIndex];
      const version = page.versions.find(v => v.versionId === versionId);
      
      if (version) {
        // Create a new version from the restored content
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        });
        const formattedDateTime = currentDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        const restoredVersion: LegalPageVersion = {
          versionId: `${Date.now()}`,
          content: version.content,
          savedAt: formattedDateTime,
          savedBy: 'Administrator'
        };
        
        pages[pageIndex] = {
          ...page,
          content: version.content,
          lastModified: formattedDate,
          versions: [...page.versions, restoredVersion]
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
      }
    }
  } catch (error) {
    console.error('Error restoring version:', error);
  }
};
