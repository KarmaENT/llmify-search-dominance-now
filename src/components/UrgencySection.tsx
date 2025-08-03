
import { Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UrgencySection = () => {
  return (
    <section className="py-20 section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M30%2030c0-11%209-20%2020-20s20%209%2020%2020-9%2020-20%2020-20-9-20-20zm0%2020c11%200%2020-9%2020-20s-9-20-20-20-20%209-20%2020%209%2020%2020%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Urgency Message */}
          <div className="mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-cyan-secondary text-black-primary px-6 py-3 rounded-full text-sm font-bold mb-8 glow-cyan animate-pulse">
              <Clock className="w-5 h-5 mr-2" />
              TIME-SENSITIVE OPPORTUNITY
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-foreground">
              The AI Search Window is 
              <span className="gradient-text"> Closing Fast</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              In 2019, early SEO adopters dominated search for decades. Today, early LLMEO adopters are securing 
              AI search dominance that will last even longer. <strong className="text-primary">Don't miss this window.</strong>
            </p>
          </div>

          {/* Urgency Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-dark rounded-2xl p-8">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">2,847%</div>
              <p className="text-muted-foreground">AI search growth in the last 12 months</p>
            </div>
            
            <div className="card-dark rounded-2xl p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">97</div>
              <p className="text-muted-foreground">Businesses already secured their LLMEO positions this month</p>
            </div>
            
            <div className="card-dark rounded-2xl p-8">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">3</div>
              <p className="text-muted-foreground">Remaining spots at early adopter pricing</p>
            </div>
          </div>

          {/* First-Mover Advantage */}
          <div className="bg-gradient-to-r from-primary/20 to-cyan-secondary/20 rounded-2xl p-8 md:p-12 border border-primary/30 mb-16 glow-cyan">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Why First-Mover Advantage Matters More Than Ever
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-4">Early SEO Winners (1998-2002):</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Still dominate search results 25+ years later
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Built billion-dollar businesses on search traffic
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Created insurmountable competitive moats
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-primary mb-4">Early LLMEO Winners (2024-2025):</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Will control AI search for the next decade+
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Building tomorrow's industry-leading businesses
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Establishing AI-era competitive advantages
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Secure Your Position Before Your Competitors Wake Up
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Every day you wait, another competitor secures their AI search advantage. 
              <strong className="text-primary"> The window won't stay open forever.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/llmeo-audit">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-secondary hover:from-cyan-secondary hover:to-primary text-black-primary px-10 py-4 text-xl font-bold rounded-full glow-cyan-lg btn-hover-glow"
                >
                  Claim Your Free LLMEO Audit Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              
              <div className="text-sm text-muted-foreground">
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
