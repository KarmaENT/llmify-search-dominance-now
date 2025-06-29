
import { Check, ArrowRight, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const mainTiers = [
    {
      name: "LLMEO Starter",
      price: "$1,997",
      period: "/month",
      description: "Perfect for small businesses ready to dominate AI search",
      features: [
        "LLM Ranking Optimization (3 keywords)",
        "Basic LLMEO Content Creation",
        "Monthly Performance Reports",
        "ChatGPT & Claude Optimization",
        "Email Support",
        "Basic Competitor Analysis"
      ],
      cta: "Start Your AI Dominance",
      highlight: false
    },
    {
      name: "LLMEO Professional",  
      price: "$3,997",
      period: "/month",
      description: "For growing businesses serious about market leadership",
      features: [
        "LLM Ranking Optimization (10 keywords)",
        "Advanced LLMEO Content Strategy",
        "Weekly Performance Monitoring", 
        "All Major AI Platform Optimization",
        "Priority Phone & Email Support",
        "Advanced Competitive Intelligence",
        "Local Market Domination",
        "AI Persona Development (included)"
      ],
      cta: "Secure Market Leadership",
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "LLMEO Enterprise",
      price: "$7,997", 
      period: "/month",
      description: "For enterprises demanding total AI search dominance",
      features: [
        "Unlimited LLM Optimization",
        "Complete LLMEO Content Suite",
        "Daily Performance Monitoring",
        "Multi-Platform AI Dominance",
        "Dedicated Account Manager",
        "Crisis Management & Rep Shield",
        "Industry Authority Positioning",
        "Competitor Suppression Tactics",
        "Custom AI Strategy Development"
      ],
      cta: "Dominate Your Industry",
      highlight: false
    }
  ];

  const addOns = [
    { name: "AI Persona Development", price: "$297/mo", description: "Brand voice optimization for AI interactions" },
    { name: "Conversational Commerce Optimization", price: "$497/mo", description: "Voice search and chatbot integration" },
    { name: "Predictive LLMEO Analytics", price: "$197/mo", description: "Advanced dashboards and trend forecasting" },
    { name: "Crisis Management & Reputation Shield", price: "$397/mo", description: "Negative result suppression and protection" },
    { name: "Multi-Language LLMEO", price: "$297/mo per language", description: "International market optimization" },
    { name: "Industry Authority Positioning", price: "$697/mo", description: "Thought leadership and expert positioning" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Invest in Your 
              <span className="gradient-text"> AI Search Future</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Choose the LLMEO package that matches your ambition. Every plan includes our guarantee: 
              <strong className="text-primary"> Top 3 AI search rankings within 90 days or full refund.</strong>
            </p>
            
            {/* Limited Time Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              🔥 Early Adopter Pricing - Limited to First 100 Clients
            </div>
          </div>

          {/* Main Pricing Tiers */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mainTiers.map((tier, index) => (
              <div key={index} className={`relative rounded-2xl border-2 p-8 ${
                tier.highlight 
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-slate-900/50 shadow-glow scale-105' 
                  : 'border-slate-700 bg-slate-900/50 shadow-lg hover:shadow-xl'
              } transition-all duration-300 backdrop-blur-sm`}>
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-full text-sm font-bold">
                      <Crown className="w-4 h-4 inline mr-1" />
                      {tier.badge}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/subscription">
                  <Button 
                    className={`w-full py-3 text-lg font-semibold rounded-xl ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Add-On Services */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white border border-slate-700">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Premium Add-On Services
              </h3>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Enhance your LLMEO strategy with specialized services designed for maximum AI search dominance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-bold text-lg">{addon.name}</h4>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h4 className="text-2xl font-bold text-primary mb-4">
              100% Money-Back Guarantee
            </h4>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We're so confident in our LLMEO system that we guarantee top 3 AI search rankings within 90 days. 
              If we don't deliver, you get a full refund - no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
