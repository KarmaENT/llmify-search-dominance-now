
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from './UserProfile';
import { ThemeToggle } from './ThemeToggle';

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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-2xl font-bold gradient-text">
              LLMify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-muted-foreground hover:text-foreground font-medium transition-colors animated-underline"
              >
                {item.label}
              </a>
            ))}
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                Resources
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-xl border border-border py-2 z-50 animate-fade-in"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {loading ? (
              <div className="w-8 h-8 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
            ) : user ? (
              <UserProfile />
            ) : (
              <>
                <Link to="/llmeo-audit">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 btn-hover">
                    Free Audit
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" className="text-muted-foreground border-border hover:bg-accent btn-hover">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 btn-hover shadow-lg">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Resources */}
              <div className="py-2">
                <div className="text-foreground font-medium mb-2">Resources</div>
                <div className="pl-4 space-y-2">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block text-muted-foreground hover:text-foreground py-1 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Auth Section */}
              <div className="pt-4 border-t border-border">
                {loading ? (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                  </div>
                ) : user ? (
                  <UserProfile />
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link to="/llmeo-audit">
                      <Button variant="outline" className="border-primary text-primary w-full">
                        Free Audit
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button variant="outline" className="text-muted-foreground border-border w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button className="bg-primary text-primary-foreground w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
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
