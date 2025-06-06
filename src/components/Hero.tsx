
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm0-20c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Urgent Alert Bar */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
              🚨 URGENT: AI Search Revolution is HERE - Don't Get Left Behind
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dominate AI Search
              </span>
              <br />
              <span className="text-white">Before Your Competitors Do</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
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
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Claim Your Free LLMEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              >
                Book Strategy Session
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-blue-200 mb-4">Trusted by 500+ Forward-Thinking Businesses</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                {[1,2,3,4,5].map((_, index) => (
                  <div key={index} className="w-20 h-8 bg-white/20 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
