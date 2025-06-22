
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We pioneer AI search optimization before others even recognize the opportunity."
    },
    {
      icon: Award,
      title: "Results Guaranteed",
      description: "Our clients see measurable improvements in AI search visibility within 90 days."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Every strategy is tailored to dominate your specific market and industry."
    },
    {
      icon: Zap,
      title: "Speed to Market",
      description: "First-mover advantage is everything. We get you optimized fast."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">LLMify</span>
            </Link>
            
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-white hover:bg-slate-800">
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
            <div className="inline-flex items-center bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              About LLMify
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Pioneers of the 
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> AI Search Revolution</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We saw the future of search before anyone else. While the world optimizes for yesterday's algorithms, 
              we dominate tomorrow's AI-powered discovery engines.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/10 rounded-2xl p-8 md:p-12 border-l-4 border-orange-500">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-6">
                To ensure no business gets left behind in the AI search revolution. We believe every company deserves 
                to be discovered when AI tools recommend solutions to real problems.
              </p>
              <p className="text-lg text-slate-300">
                <strong className="text-orange-500">The future of search is here.</strong> ChatGPT, Claude, Perplexity, 
                and emerging AI tools are how your customers discover businesses. We make sure they discover yours first.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:shadow-glow transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full mb-6 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-300 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The LLMify Story</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Founded in 2024 by AI search pioneers who recognized the seismic shift happening in digital discovery. 
                    While everyone else focused on traditional SEO, we built the world's first LLMEO platform.
                  </p>
                  <p>
                    Our founders saw that AI tools like ChatGPT weren't just answering questions – they were becoming 
                    the new search engines. Businesses that didn't optimize for AI search would become invisible.
                  </p>
                  <p>
                    Today, we're the only company offering guaranteed LLMEO results, protecting our clients' market 
                    share in the AI-first future.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                    <p className="text-slate-300 text-sm">Businesses Optimized</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">94%</div>
                    <p className="text-slate-300 text-sm">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">300%</div>
                    <p className="text-slate-300 text-sm">Avg. Visibility Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">45</div>
                    <p className="text-slate-300 text-sm">Days Avg. Results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Dominate AI Search?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the businesses that are already winning in the AI search revolution. 
              Don't wait for your competitors to discover LLMEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/llmeo-audit">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Get Your Free LLMEO Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
