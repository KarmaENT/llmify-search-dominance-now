
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "LLM Ranking Optimization",
        "LLMEO Content Creation", 
        "Continuous Maintenance",
        "AI Persona Development",
        "Crisis Management",
        "Enterprise Solutions"
      ]
    },
    {
      title: "Industries", 
      links: [
        "Professional Services",
        "E-commerce",
        "SaaS & Technology",
        "Healthcare",
        "Real Estate",
        "Manufacturing"
      ]
    },
    {
      title: "Resources",
      links: [
        "LLMEO Guide",
        "Case Studies", 
        "Blog",
        "Webinars",
        "AI Search Trends",
        "Support Center"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Partners",
        "Privacy Policy", 
        "Terms of Service"
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  LLMify
                </span>
              </div>
              <p className="text-slate-400 mb-6 text-sm">
                The world's first and only guaranteed LLMEO service provider. 
                Dominating AI search before your competitors do.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">hello@llmify.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">1-800-LLMIFY-1</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">Global HQ, San Francisco</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © 2024 LLMify, Inc. All rights reserved. | LLMEO℠ is a service mark of LLMify, Inc.
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-xs max-w-3xl mx-auto">
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
