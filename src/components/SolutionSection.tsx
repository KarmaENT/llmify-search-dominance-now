
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
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Introducing 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> LLMEO</span>
            </h2>
            <div className="text-2xl text-slate-600 mb-6">
              <strong>Large Language Model Engine Optimization</strong>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              The world's first and only guaranteed optimization service for AI-powered search. 
              We position your business to dominate across all major language models and AI search platforms.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Before LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Invisible in AI search results",
                  "Competitors recommended instead of you", 
                  "Lost customers to AI-savvy businesses",
                  "Declining organic discovery",
                  "No control over AI recommendations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-red-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6">After LLMEO</h3>
              <ul className="space-y-4">
                {[
                  "Top recommendations in all AI searches",
                  "Consistent first-position rankings",
                  "Increased customer acquisition",
                  "Protected market share",
                  "Future-proof visibility strategy"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-green-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
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
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Unique Value Proposition */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Why LLMify is Your Only Choice
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We are the <strong>ONLY</strong> company in the world providing guaranteed LLMEO optimization services. 
              While others focus on outdated SEO, we dominate the future of search.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-full"
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
