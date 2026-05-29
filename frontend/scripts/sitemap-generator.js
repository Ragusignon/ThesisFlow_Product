// sitemap-generator.js
// This script generates a dynamic sitemap.xml based on your routes

import fs from 'fs';
import path from 'path';

const DOMAIN = process.env.DOMAIN || 'https://thesisflow.com';
const OUTPUT_PATH = './public/sitemap.xml';

// Define all routes with their metadata
const routes = [
  // Homepage
  { path: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 1.0 },
  
  // Main Pages
  { path: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.9 },
  { path: '/features', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { path: '/pricing', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { path: '/security', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { path: '/integrations', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  
  // Product Pages
  { path: '/documentation', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { path: '/roadmap', lastmod: new Date().toISOString().split('T')[0], changefreq: 'bi-weekly', priority: 0.8 },
  { path: '/updates', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.8 },
  { path: '/status', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.7 },
  
  // Blog
  { path: '/blog', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.9 },
  { path: '/blog/LaunchingThesisflow', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  { path: '/blog/StateOfThesisManagement', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  { path: '/blog/OctoberUpdate', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  { path: '/blog/StreamlineSubmissions', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  { path: '/blog/GDPRCompliance', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  { path: '/blog/RoadmapPreview', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  
  // Community & Support
  { path: '/community', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { path: '/help-center', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.7 },
  { path: '/contact-support', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.7 },
  { path: '/request-demo', lastmod: new Date().toISOString().split('T')[0], changefreq: 'never', priority: 0.8 },
  
  // Business Pages
  { path: '/careers', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { path: '/press-kit', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  { path: '/referral', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.7 },
  
  // Legal Pages
  { path: '/privacy-policy', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.5 },
  { path: '/terms-of-service', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.5 },
  { path: '/cookie-policy', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.5 },
  { path: '/gdpr', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.6 },
  { path: '/compliance', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.6 },
  { path: '/accessibility', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.6 },
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    const url = `${DOMAIN}${route.path}`;
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

function main() {
  try {
    const sitemap = generateSitemap();
    
    // Create public directory if it doesn't exist
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write sitemap file
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');
    console.log(`✅ Sitemap generated successfully at ${OUTPUT_PATH}`);
    console.log(`📍 Domain: ${DOMAIN}`);
    console.log(`📄 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
