
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.03%22%3E%3Cpath%20d=%22M20%2020c0%2011-9%2020-20%2020s-20-9-20-20%209-20%2020-20%2020%209%2020%2020zm0-20c11%200%2020%209%2020%2020s-9%2020-20%2020-20-9-20-20%209-20%2020-20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Urgent Alert Bar */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
              🚨 URGENT: AI Search Revolution is HERE - Don't Get Left Behind
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Dominate AI Search
              </span>
              <br />
              <span className="text-white">Before Your Competitors Do</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The world's ONLY guaranteed LLMEO (Large Language Model Engine Optimization) service. 
              While others focus on outdated SEO, we dominate the future of search.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                "Guaranteed Top AI Search Rankings",
                "ChatGPT, Claude & Perplexity Optimization", 
                "First-Mover Advantage Protection"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium text-white">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/llmeo-audit">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-glow btn-hover"
                >
                  Claim Your Free LLMEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg rounded-full btn-hover"
              >
                Book Strategy Session
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">Trusted by 500+ Forward-Thinking Businesses</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                {[1,2,3,4,5].map((_, index) => (
                  <div key={index} className="w-20 h-8 bg-slate-700 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
