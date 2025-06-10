
import { CheckCircle, TrendingUp, Target, Zap, Shield, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LLMEOGuide = () => {
  const services = [
    {
      icon: Target,
      title: "LLM Ranking Optimization",
      description: "Stop being invisible to AI. We position your brand at the top of ChatGPT, Claude, and Perplexity recommendations. While your competitors struggle to understand AI search, you'll dominate it.",
      features: ["AI platform ranking analysis", "Strategic keyword positioning", "Content optimization for LLMs", "Competitive displacement tactics"]
    },
    {
      icon: Zap,
      title: "LLMEO Content Creation",
      description: "Content that doesn't just rank—it converts. Our AI-optimized content strategy ensures you're the go-to authority when potential customers ask AI for recommendations.",
      features: ["Authority-building content", "AI-friendly formatting", "Topic cluster development", "Engagement optimization"]
    },
    {
      icon: TrendingUp,
      title: "Continuous Maintenance",
      description: "AI algorithms evolve daily. We stay ahead so you don't fall behind. Our ongoing optimization ensures you maintain your competitive edge as the AI landscape shifts.",
      features: ["Algorithm update monitoring", "Performance tracking", "Content refresh cycles", "Competitive intelligence"]
    },
    {
      icon: CheckCircle,
      title: "AI Persona Development",
      description: "Train AI to speak your brand language. We develop your AI persona so when customers interact with ChatGPT or Claude, your brand voice shines through authentically.",
      features: ["Brand voice optimization", "Personality development", "Response training", "Consistency protocols"]
    },
    {
      icon: Shield,
      title: "Crisis Management",
      description: "Protect your reputation before problems surface. Our proactive monitoring and rapid response protocols shield your brand from negative AI mentions and competitor attacks.",
      features: ["24/7 monitoring", "Rapid response protocols", "Negative mention suppression", "Reputation recovery"]
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Scale LLMEO across your entire organization. Custom strategies, dedicated support, and enterprise-grade security for companies serious about AI search dominance.",
      features: ["Custom implementation", "Dedicated account management", "Enterprise security", "Multi-brand coordination"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Complete
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> LLMEO Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master AI search optimization and dominate the future of digital discovery. 
              Your competitors are already losing ground—don't join them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our LLMEO Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Six game-changing services that'll make your competition wonder what hit them
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still On The Fence?
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Every day you wait is market share your competitors claim. AI search isn't coming—it's here. 
                  The question isn't whether you'll adapt, but whether you'll lead or follow.
                </p>
              </div>
              <Link to="/llmeo-audit">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-full">
                  Claim Your Free LLMEO Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LLMEOGuide;
