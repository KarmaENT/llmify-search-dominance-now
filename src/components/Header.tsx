
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from './UserProfile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { user, loading } = useAuth();

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' }
  ];

  const resourceItems = [
    { label: 'LLMEO Guide', href: '/llmeo-guide' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'AI Search Trends', href: '/ai-search-trends' },
    { label: 'Support Center', href: '/support' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LLMify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {!loading && (
              user ? (
                <UserProfile />
              ) : (
                <>
                  <Link to="/llmeo-audit">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Free Audit
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Started
                    </Button>
                  </Link>
                </>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-slate-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Resources */}
              <div className="py-2">
                <div className="text-slate-700 font-medium mb-2">Resources</div>
                <div className="pl-4 space-y-2">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block text-slate-600 hover:text-blue-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                {!loading && (
                  user ? (
                    <UserProfile />
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Link to="/llmeo-audit">
                        <Button variant="outline" className="border-blue-600 text-blue-600 w-full">
                          Free Audit
                        </Button>
                      </Link>
                      <Link to="/auth">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
