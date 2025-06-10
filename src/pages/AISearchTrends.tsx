
import { TrendingUp, BarChart3, PieChart, LineChart, ArrowUp, ArrowDown, Minus, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AISearchTrends = () => {
  const trendData = [
    {
      metric: "AI Search Usage Growth",
      value: "312%",
      change: "up",
      period: "Last 12 months",
      description: "Year-over-year growth in AI-powered search queries"
    },
    {
      metric: "Traditional Search Decline",
      value: "23%",
      change: "down",
      period: "Q3 2024",
      description: "Decrease in traditional Google searches among Gen Z users"
    },
    {
      metric: "Business Visibility Gap",
      value: "87%",
      change: "up",
      period: "Current",
      description: "Businesses with zero AI search optimization"
    },
    {
      metric: "ChatGPT Business Queries",
      value: "45%",
      change: "up",
      period: "Monthly",
      description: "Of all ChatGPT queries are business/purchase-related"
    }
  ];

  const platformStats = [
    { name: "ChatGPT", queries: "100M+ daily", growth: "+89%", dominance: "42%" },
    { name: "Claude", queries: "25M+ daily", growth: "+156%", dominance: "18%" },
    { name: "Perplexity", queries: "15M+ daily", growth: "+203%", dominance: "12%" },
    { name: "Bard/Gemini", queries: "35M+ daily", growth: "+67%", dominance: "21%" },
    { name: "Others", queries: "8M+ daily", growth: "+124%", dominance: "7%" }
  ];

  const industryTrends = [
    {
      industry: "SaaS & Technology",
      aiAdoption: "78%",
      competitionLevel: "Extreme",
      opportunity: "Medium",
      urgency: "Critical"
    },
    {
      industry: "Healthcare",
      aiAdoption: "34%",
      competitionLevel: "Low",
      opportunity: "High",
      urgency: "High"
    },
    {
      industry: "Finance & FinTech",
      aiAdoption: "56%",
      competitionLevel: "High",
      opportunity: "Medium",
      urgency: "High"
    },
    {
      industry: "E-commerce & Retail",
      aiAdoption: "67%",
      competitionLevel: "High",
      opportunity: "Medium",
      urgency: "Critical"
    },
    {
      industry: "Professional Services",
      aiAdoption: "23%",
      competitionLevel: "Low",
      opportunity: "Extreme",
      urgency: "Medium"
    },
    {
      industry: "Real Estate",
      aiAdoption: "12%",
      competitionLevel: "Very Low",
      opportunity: "Extreme",
      urgency: "Low"
    }
  ];

  const predictions = [
    {
      timeframe: "Q1 2025",
      prediction: "AI search queries will surpass traditional search in the 18-34 demographic",
      confidence: "89%",
      impact: "High"
    },
    {
      timeframe: "H1 2025",
      prediction: "60% of B2B purchase decisions will involve AI search research",
      confidence: "76%",
      impact: "Critical"
    },
    {
      timeframe: "2025",
      prediction: "Businesses without LLMEO will lose 40%+ of organic visibility",
      confidence: "84%",
      impact: "Extreme"
    },
    {
      timeframe: "2026",
      prediction: "AI search optimization budgets will exceed traditional SEO",
      confidence: "72%",
      impact: "High"
    }
  ];

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-500" />;
      case 'down': return <ArrowDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Search
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real-time data on the AI search revolution. The trends reshaping digital discovery—and what they mean for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Numbers Don't Lie
              </h2>
              <p className="text-xl text-gray-600">
                AI search isn't coming—it's here, and it's accelerating
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {trendData.map((trend, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-gray-900">{trend.value}</div>
                    {getChangeIcon(trend.change)}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{trend.metric}</h3>
                  <p className="text-sm text-gray-600 mb-2">{trend.description}</p>
                  <div className="text-xs text-gray-500">{trend.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Platform Breakdown
              </h2>
              <p className="text-xl text-gray-600">
                Where your customers are actually searching
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid gap-6">
                {platformStats.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-gray-600">{platform.queries}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{platform.dominance}</div>
                      <div className="text-sm text-green-600 font-semibold">{platform.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Landscape
              </h2>
              <p className="text-xl text-gray-600">
                Where does your industry stand in the AI search race?
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Industry</th>
                      <th className="px-6 py-4 text-center">AI Adoption</th>
                      <th className="px-6 py-4 text-center">Competition Level</th>
                      <th className="px-6 py-4 text-center">Opportunity</th>
                      <th className="px-6 py-4 text-center">Urgency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {industryTrends.map((industry, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{industry.industry}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-blue-600">{industry.aiAdoption}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            industry.competitionLevel === 'Extreme' ? 'bg-red-100 text-red-800' :
                            industry.competitionLevel === 'High' ? 'bg-orange-100 text-orange-800' :
                            industry.competitionLevel === 'Low' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {industry.competitionLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            industry.opportunity === 'Extreme' ? 'bg-green-100 text-green-800' :
                            industry.opportunity === 'High' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {industry.opportunity}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(industry.urgency)}`}>
                            {industry.urgency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Predictions */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Coming Next
              </h2>
              <p className="text-xl text-blue-100">
                Data-driven predictions for the AI search landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {predictions.map((prediction, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      {prediction.timeframe}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-blue-200">Confidence:</span>
                      <span className="text-lg font-bold text-green-400">{prediction.confidence}</span>
                    </div>
                  </div>
                  <p className="text-lg text-white mb-4">{prediction.prediction}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      prediction.impact === 'Extreme' ? 'bg-red-500/20 text-red-300 border border-red-400' :
                      prediction.impact === 'Critical' ? 'bg-orange-500/20 text-orange-300 border border-orange-400' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-400'
                    }`}>
                      Impact: {prediction.impact}
                    </span>
                    {(prediction.impact === 'Extreme' || prediction.impact === 'Critical') && (
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  The Window is Closing
                </h3>
                <p className="text-blue-100 text-lg">
                  Early movers in AI search are building insurmountable advantages. Every month you wait, 
                  the gap widens. The question isn't if you'll optimize for AI search—it's whether you'll lead or follow.
                </p>
              </div>
              <Link to="/llmeo-audit">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-4 text-lg font-semibold rounded-full">
                  Secure Your Position Now
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

export default AISearchTrends;
