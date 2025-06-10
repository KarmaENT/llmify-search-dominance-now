
import { TrendingUp, Users, DollarSign, Award, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Invisible in AI search results despite strong SEO",
      solution: "Complete LLMEO overhaul with AI persona development",
      results: {
        aiVisibility: "340% increase",
        leads: "127% boost",
        revenue: "$2.3M ARR increase",
        timeframe: "6 months"
      },
      quote: "We went from AI search zero to hero. ChatGPT now recommends us for every relevant query in our space.",
      author: "Sarah Chen, CMO"
    },
    {
      company: "Elite Consulting Group",
      industry: "Professional Services",
      challenge: "Competitors dominating AI recommendations",
      solution: "Strategic content creation + crisis management",
      results: {
        aiVisibility: "280% increase",
        leads: "95% boost",
        revenue: "$1.8M new business",
        timeframe: "4 months"
      },
      quote: "LLMEO didn't just level the playing field—it tilted it in our favor. Our competitors are scrambling to catch up.",
      author: "Marcus Rivera, CEO"
    },
    {
      company: "NextGen Health",
      industry: "Healthcare Technology",
      challenge: "Low trust signals in AI platforms",
      solution: "Authority positioning + continuous maintenance",
      results: {
        aiVisibility: "420% increase",
        leads: "156% boost",
        revenue: "$3.1M revenue impact",
        timeframe: "8 months"
      },
      quote: "When doctors ask AI for healthcare tech recommendations, we're consistently in the top 3. That's not luck—that's LLMEO.",
      author: "Dr. Amanda Foster, Founder"
    }
  ];

  const metrics = [
    { icon: TrendingUp, label: "Average AI Visibility Increase", value: "347%" },
    { icon: Users, label: "Lead Generation Boost", value: "126%" },
    { icon: DollarSign, label: "Revenue Impact", value: "$7.2M+" },
    { icon: Award, label: "Client Success Rate", value: "94%" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Real Results,
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Real Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              See how smart companies transformed their AI search presence and left their competition in the dust.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <p className="text-gray-600 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories That Speak Volumes
              </h2>
              <p className="text-xl text-gray-600">
                These companies didn't just improve—they dominated. Your turn.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                        <div className="flex justify-center gap-1 mb-4">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-4">"{study.quote}"</blockquote>
                        <cite className="text-sm font-medium text-gray-900">— {study.author}</cite>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Results in {study.results.timeframe}</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">AI Visibility</span>
                          <span className="text-2xl font-bold text-green-600">{study.results.aiVisibility}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Lead Generation</span>
                          <span className="text-2xl font-bold text-blue-600">{study.results.leads}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Revenue Impact</span>
                          <span className="text-2xl font-bold text-purple-600">{study.results.revenue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready To Write Your Success Story?
                </h3>
                <p className="text-gray-700 text-lg">
                  These results aren't magic—they're methodical. The same strategies that transformed these businesses 
                  are waiting for you. The only question is: how long will you wait?
                </p>
              </div>
              <Link to="/llmeo-audit">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-full">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
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

export default CaseStudies;
