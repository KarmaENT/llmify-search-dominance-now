
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Shield, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LLMRankingOptimization = () => {
  const features = [
    {
      icon: Target,
      title: "Keyword Dominance",
      description: "Strategic positioning for high-value search queries across all AI platforms"
    },
    {
      icon: TrendingUp,
      title: "Multi-Platform Optimization",
      description: "Consistent top rankings across ChatGPT, Claude, Perplexity, and emerging AI tools"
    },
    {
      icon: Shield,
      title: "Competitive Protection",
      description: "Advanced strategies to maintain your position against competitor optimization efforts"
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Dynamic optimization that adapts to algorithm changes and new AI platforms"
    }
  ];

  const benefits = [
    "Guaranteed top-3 AI search positioning within 90 days",
    "300% average increase in AI-driven leads",
    "Complete protection from competitor displacement",
    "24/7 monitoring and instant optimization updates",
    "Cross-platform consistency and brand authority",
    "Detailed performance analytics and ROI tracking"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="text-2xl font-bold gradient-text">LLMify</span>
            </Link>
            
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              LLM Ranking Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dominate Every 
              <span className="gradient-text"> AI Search Query</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship service ensures your business appears at the top of every relevant AI search result. 
              Guaranteed positioning that drives qualified leads and establishes market authority.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 card-enhanced hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How LLM Ranking Optimization Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 card-enhanced">
                <div className="text-3xl font-bold text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">AI Search Audit</h3>
                <p className="text-muted-foreground">Comprehensive analysis of your current AI search visibility across all major platforms and identification of optimization opportunities.</p>
              </div>
              <div className="text-center p-8 card-enhanced">
                <div className="text-3xl font-bold text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">Strategic Implementation</h3>
                <p className="text-muted-foreground">Custom optimization strategy deployment across your digital presence, targeting high-value queries and competitor weaknesses.</p>
              </div>
              <div className="text-center p-8 card-enhanced">
                <div className="text-3xl font-bold text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-4">Continuous Optimization</h3>
                <p className="text-muted-foreground">24/7 monitoring and real-time adjustments to maintain top rankings as AI algorithms evolve and new platforms emerge.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Guaranteed Results That Drive Growth</h2>
                <p className="text-muted-foreground mb-8">
                  Our LLM Ranking Optimization service delivers measurable results that directly impact your bottom line. 
                  Experience the power of being the first business AI tools recommend to your potential customers.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold mb-6">Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">94%</div>
                    <p className="text-muted-foreground text-sm">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">45</div>
                    <p className="text-muted-foreground text-sm">Days Avg. Results</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">300%</div>
                    <p className="text-muted-foreground text-sm">Lead Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground text-sm">Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Dominate AI Search?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let your competitors establish dominance in AI search results. 
              Start your LLM Ranking Optimization today and secure your market position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/llmeo-audit">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  Get Your Free LLMEO Audit
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMRankingOptimization;
