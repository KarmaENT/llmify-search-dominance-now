
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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
            <div className="bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl p-8 border border-destructive/20">
              <h3 className="text-2xl font-bold text-destructive mb-6">Before LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Invisible in AI search results",
                  "Competitors recommended instead of you", 
                  "Lost customers to AI-savvy businesses",
                  "Declining organic discovery",
                  "No control over AI recommendations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-3 h-3 bg-destructive rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">After LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Top recommendations in all AI searches",
                  "Consistent first-position rankings",
                  "Increased customer acquisition",
                  "Protected market share",
                  "Future-proof visibility strategy"
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-enhanced hover:shadow-glow transition-all duration-300 p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Unique Value Proposition */}
          <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground shadow-glow">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why LLMify is Your Only Choice
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We are the <strong>ONLY</strong> company in the world providing guaranteed LLMEO optimization services. 
              While others focus on outdated SEO, we dominate the future of search.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold rounded-full btn-hover"
            >
              Secure Your AI Search Dominance Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
