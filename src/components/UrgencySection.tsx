
import { Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UrgencySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm0 20c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Urgency Message */}
          <div className="mb-16">
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8">
              <Clock className="w-5 h-5 mr-2" />
              TIME-SENSITIVE OPPORTUNITY
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              The AI Search Window is 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Closing Fast</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto">
              In 2019, early SEO adopters dominated search for decades. Today, early LLMEO adopters are securing 
              AI search dominance that will last even longer. <strong className="text-yellow-400">Don't miss this window.</strong>
            </p>
          </div>

          {/* Urgency Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">2,847%</div>
              <p className="text-orange-200">AI search growth in the last 12 months</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">97</div>
              <p className="text-orange-200">Businesses already secured their LLMEO positions this month</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <p className="text-orange-200">Remaining spots at early adopter pricing</p>
            </div>
          </div>

          {/* First-Mover Advantage */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 md:p-12 border border-yellow-400/30 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-100">
              Why First-Mover Advantage Matters More Than Ever
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-yellow-200 mb-4">Early SEO Winners (1998-2002):</h4>
                <ul className="space-y-3 text-orange-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Still dominate search results 25+ years later
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Built billion-dollar businesses on search traffic
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Created insurmountable competitive moats
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-yellow-200 mb-4">Early LLMEO Winners (2024-2025):</h4>
                <ul className="space-y-3 text-orange-100">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Will control AI search for the next decade+
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Building tomorrow's industry-leading businesses
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    Establishing AI-era competitive advantages
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-100">
              Secure Your Position Before Your Competitors Wake Up
            </h3>
            <p className="text-xl text-orange-200 mb-8 max-w-3xl mx-auto">
              Every day you wait, another competitor secures their AI search advantage. 
              <strong className="text-yellow-400"> The window won't stay open forever.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-10 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Claim Your Free LLMEO Audit Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <div className="text-sm text-orange-200">
                ⚡ Free audit includes competitive AI search analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
