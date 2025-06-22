
import { Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  const coreServices = [
    {
      icon: TrendingUp,
      title: "LLM Ranking Optimization",
      description: "Guaranteed top-tier positioning in AI search results across ChatGPT, Claude, Perplexity, and emerging platforms",
      features: ["Keyword-specific optimization", "Location-based dominance", "Cross-platform consistency"]
    },
    {
      icon: Zap,
      title: "LLMEO Content Creation",
      description: "AI-optimized content strategies that speak directly to language models and drive recommendations",
      features: ["Website content optimization", "Knowledge base development", "FAQ AI comprehension"]
    },
    {
      icon: Shield,
      title: "Continuous Maintenance",
      description: "Weekly monitoring and algorithm adaptation to maintain your competitive edge as AI evolves",
      features: ["Performance monitoring", "Algorithm adaptation", "Competitive countermeasures"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing 
              <span className="gradient-text"> LLMEO</span>
            </h2>
            <div className="text-2xl text-muted-foreground mb-6">
              <strong>Large Language Model Engine Optimization</strong>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The world's first and only guaranteed optimization service for AI-powered search. 
              We position your business to dominate across all major language models and AI search platforms.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">Before LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Invisible in AI search results",
                  "Competitors recommended instead of you", 
                  "Lost customers to AI-savvy businesses",
                  "Declining organic discovery",
                  "No control over AI recommendations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">After LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Top AI search recommendations",
                  "Consistent brand mentions across AI platforms",
                  "Increased qualified leads from AI discovery",
                  "Competitive moat against late adopters",
                  "Authority positioning in your industry"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-enhanced hover:shadow-lg transition-all duration-300 p-8">
                  <div className="bg-gradient-to-r from-primary to-primary/70 p-3 rounded-xl shadow-lg mb-6 w-fit">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
