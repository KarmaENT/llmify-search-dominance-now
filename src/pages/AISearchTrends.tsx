
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
      <section className="pt-24 pb-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Search
              <span className="gradient-text"> Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real-time data on the AI search revolution. The trends reshaping digital discovery—and what they mean for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Numbers Don't Lie
              </h2>
              <p className="text-xl text-muted-foreground">
                AI search isn't coming—it's here, and it's accelerating
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {trendData.map((trend, index) => (
                <div key={index} className="card-enhanced p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-foreground">{trend.value}</div>
                    {getChangeIcon(trend.change)}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{trend.metric}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{trend.description}</p>
                  <div className="text-xs text-muted-foreground">{trend.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Analysis */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Platform Breakdown
              </h2>
              <p className="text-xl text-muted-foreground">
                Where your customers are actually searching
              </p>
            </div>

            <div className="card-enhanced p-8">
              <div className="grid gap-6">
                {platformStats.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{platform.name}</h3>
                        <p className="text-muted-foreground">{platform.queries}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{platform.dominance}</div>
                      <div className="text-sm text-primary font-semibold">{platform.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industry Landscape
              </h2>
              <p className="text-xl text-muted-foreground">
                Where does your industry stand in the AI search race?
              </p>
            </div>

            <div className="card-enhanced overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-primary/70 text-primary-foreground">
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
                      <tr key={index} className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/20' : 'bg-background'}`}>
                        <td className="px-6 py-4 font-semibold text-foreground">{industry.industry}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="text-lg font-bold text-primary">{industry.aiAdoption}</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            industry.competitionLevel === 'Extreme' ? 'bg-destructive/20 text-destructive' :
                            industry.competitionLevel === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            industry.competitionLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                            'bg-primary/20 text-primary'
                          }`}>
                            {industry.competitionLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            industry.opportunity === 'Extreme' ? 'bg-green-500/20 text-green-400' :
                            industry.opportunity === 'High' ? 'bg-primary/20 text-primary' :
                            'bg-yellow-500/20 text-yellow-400'
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
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Coming Next
              </h2>
              <p className="text-xl text-muted-foreground">
                Data-driven predictions for the AI search landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {predictions.map((prediction, index) => (
                <div key={index} className="card-enhanced p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="gradient-text bg-gradient-to-r from-primary to-primary/70 text-background px-4 py-2 rounded-full text-sm font-bold">
                      {prediction.timeframe}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Confidence:</span>
                      <span className="text-lg font-bold text-primary">{prediction.confidence}</span>
                    </div>
                  </div>
                  <p className="text-lg text-foreground mb-4">{prediction.prediction}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      prediction.impact === 'Extreme' ? 'bg-destructive/20 text-destructive border border-destructive/40' :
                      prediction.impact === 'Critical' ? 'bg-orange-500/20 text-orange-400 border border-orange-400/40' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-400/40'
                    }`}>
                      Impact: {prediction.impact}
                    </span>
                    {(prediction.impact === 'Extreme' || prediction.impact === 'Critical') && (
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="card-enhanced p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  The Window is Closing
                </h3>
                <p className="text-muted-foreground text-lg">
                  Early movers in AI search are building insurmountable advantages. Every month you wait, 
                  the gap widens. The question isn't if you'll optimize for AI search—it's whether you'll lead or follow.
                </p>
              </div>
              <Link to="/llmeo-audit">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full btn-hover shadow-glow">
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
