import { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Features from './Features';
import Pricing from './Pricing';
import Security from './Security';
import Integrations from './Integrations';
import Updates from './Updates';
import Roadmap from './Roadmap';
import Careers from './Careers';
import Blog from './Blog';
import LaunchingThesisflow from './blog/LaunchingThesisflow';
import StateOfThesisManagement from './blog/StateOfThesisManagement';
import OctoberUpdate from './blog/OctoberUpdate';
import StreamlineSubmissions from './blog/StreamlineSubmissions';
import GDPRCompliance from './blog/GDPRCompliance';
import RoadmapPreview from './blog/RoadmapPreview';
import PressKit from './PressKit';
import Contact from './Contact';
import RequestDemo from './RequestDemo';
import Referral from './Referral';
import HelpCenter from './HelpCenter';
import Documentation from './Documentation';
import DocumentationPageView from './DocumentationPage';
import Community from './Community';
import Status from './Status';
import ContactSupport from './ContactSupport';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import CookiePolicy from './CookiePolicy';
import GDPR from './GDPR';
import Compliance from './Compliance';
import Accessibility from './Accessibility';
import Login from './Login';
import SignUp from './SignUp';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import ThemeDemo from './ThemeDemo';
import FaviconGenerator from './components/FaviconGenerator';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page based on URL
    const path = window.location.pathname.substring(1) || 'home';
    setCurrentPage(path);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    window.scrollTo(0, 0);
  };

  // Route to the correct page
  const renderPage = () => {
    // Handle documentation pages with slugs
    if (currentPage.startsWith('documentation/')) {
      const slug = currentPage.replace('documentation/', '');
      return <DocumentationPageView onNavigate={navigateTo} slug={slug} />;
    }
    
    switch (currentPage) {
      case 'about': return <About onNavigate={navigateTo} />;
      case 'features': return <Features onNavigate={navigateTo} />;
      case 'pricing': return <Pricing onNavigate={navigateTo} />;
      case 'security': return <Security onNavigate={navigateTo} />;
      case 'integrations': return <Integrations onNavigate={navigateTo} />;
      case 'updates': return <Updates onNavigate={navigateTo} />;
      case 'roadmap': return <Roadmap onNavigate={navigateTo} />;
      case 'careers': return <Careers onNavigate={navigateTo} />;
      case 'blog': return <Blog onNavigate={navigateTo} />;
      case 'launching-thesisflow': return <LaunchingThesisflow onNavigate={navigateTo} />;
      case 'state-of-thesis-management': return <StateOfThesisManagement onNavigate={navigateTo} />;
      case 'october-update': return <OctoberUpdate onNavigate={navigateTo} />;
      case 'streamline-submissions': return <StreamlineSubmissions onNavigate={navigateTo} />;
      case 'gdpr-compliance': return <GDPRCompliance onNavigate={navigateTo} />;
      case 'roadmap-preview': return <RoadmapPreview onNavigate={navigateTo} />;
      case 'press-kit': return <PressKit onNavigate={navigateTo} />;
      case 'contact': return <Contact onNavigate={navigateTo} />;
      case 'request-demo': return <RequestDemo onNavigate={navigateTo} />;
      case 'referral': return <Referral onNavigate={navigateTo} />;
      case 'help-center': return <HelpCenter onNavigate={navigateTo} />;
      case 'documentation': return <Documentation onNavigate={navigateTo} />;
      case 'community': return <Community onNavigate={navigateTo} />;
      case 'status': return <Status onNavigate={navigateTo} />;
      case 'contact-support': return <ContactSupport onNavigate={navigateTo} />;
      case 'privacy-policy': return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms-of-service': return <TermsOfService onNavigate={navigateTo} />;
      case 'cookie-policy': return <CookiePolicy onNavigate={navigateTo} />;
      case 'gdpr': return <GDPR onNavigate={navigateTo} />;
      case 'compliance': return <Compliance onNavigate={navigateTo} />;
      case 'accessibility': return <Accessibility onNavigate={navigateTo} />;
      case 'login': return <Login onNavigate={navigateTo} />;
      case 'signup': return <SignUp onNavigate={navigateTo} />;
      case 'admin-login': return <AdminLogin onNavigate={navigateTo} />;
      case 'admin-dashboard': return <AdminDashboard onNavigate={navigateTo} />;
      case 'theme-demo': return <ThemeDemo />;
      case 'favicon-generator': return <FaviconGenerator />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <ThemeProvider>
      {renderPage()}
    </ThemeProvider>
  );
}