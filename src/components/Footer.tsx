
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "LLM Ranking Optimization", href: "/services/llm-ranking-optimization" },
        { name: "LLMEO Content Creation", href: "/services/llmeo-content-creation" }, 
        { name: "Continuous Maintenance", href: "/services/continuous-maintenance" },
        { name: "AI Persona Development", href: "/services/ai-persona-development" },
        { name: "Crisis Management", href: "/services/crisis-management" },
        { name: "Enterprise Solutions", href: "/services/enterprise-solutions" }
      ]
    },
    {
      title: "Industries", 
      links: [
        { name: "Professional Services", href: "/industries/professional-services" },
        { name: "E-commerce", href: "/industries/e-commerce" },
        { name: "SaaS & Technology", href: "/industries/saas-technology" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Manufacturing", href: "/industries/manufacturing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "LLMEO Guide", href: "/llmeo-guide" },
        { name: "Case Studies", href: "/case-studies" }, 
        { name: "Blog", href: "/blog" },
        { name: "Webinars", href: "/webinars" },
        { name: "AI Search Trends", href: "/ai-search-trends" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company/about-us" },
        { name: "Careers", href: "/company/careers" },
        { name: "Press", href: "/company/press" },
        { name: "Partners", href: "/company/partners" },
        { name: "Privacy Policy", href: "/privacy-policy" }, 
        { name: "Terms of Service", href: "/terms-of-service" }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm">L</span>
                </div>
                <span className="text-2xl font-bold gradient-text">
                  LLMify
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                The world's first and only guaranteed LLMEO service provider. 
                Dominating AI search before your competitors do.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">support@llmify.io</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">1-800-4-LLMIFY</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">Seattle, WA 98101</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                © 2024 LLMify, Inc. All rights reserved. | LLMEO℠ is a service mark of LLMify, Inc.
              </div>
              
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Terms of Service
                </Link>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-xs max-w-3xl mx-auto leading-relaxed">
              LLMify is committed to ethical AI search optimization practices. We optimize for genuine value and relevance, 
              ensuring our clients deserve their top rankings through quality content and legitimate optimization strategies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
