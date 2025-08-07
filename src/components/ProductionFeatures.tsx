import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Clock, 
  Target,
  Brain,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Users,
  Rocket
} from 'lucide-react';

const ProductionFeatures: React.FC = () => {
  const productionTools = [
    {
      category: "Crisis Management",
      icon: Shield,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      tools: [
        {
          name: "Reputation Shield",
          description: "24/7 monitoring and rapid response to negative AI responses",
          status: "active",
          metrics: { alerts: 3, resolved: 12, uptime: "99.9%" }
        },
        {
          name: "Competitor Suppression",
          description: "Strategic content positioning to outrank competitors",
          status: "active", 
          metrics: { suppressed: 8, positions: "+5.2", success: "94%" }
        }
      ]
    },
    {
      category: "Multi-Platform Dominance",
      icon: Globe,
      color: "text-blue-400", 
      bgColor: "bg-blue-500/10",
      tools: [
        {
          name: "ChatGPT Optimization",
          description: "Advanced prompt engineering for ChatGPT visibility",
          status: "optimized",
          metrics: { rank: 2, traffic: "+340%", queries: 15240 }
        },
        {
          name: "Claude Intelligence",
          description: "Anthropic Claude AI platform optimization",
          status: "optimized",
          metrics: { rank: 1, traffic: "+280%", queries: 8920 }
        },
        {
          name: "Gemini Targeting",
          description: "Google Gemini AI search optimization",
          status: "active",
          metrics: { rank: 3, traffic: "+190%", queries: 12100 }
        },
        {
          name: "Perplexity Pro",
          description: "Perplexity AI platform ranking optimization", 
          status: "active",
          metrics: { rank: 4, traffic: "+150%", queries: 6750 }
        }
      ]
    },
    {
      category: "Real-Time Analytics",
      icon: BarChart3,
      color: "text-green-400",
      bgColor: "bg-green-500/10", 
      tools: [
        {
          name: "Live Performance Dashboard",
          description: "Real-time ranking and visibility tracking",
          status: "active",
          metrics: { updates: "Every 5min", platforms: 4, keywords: 25 }
        },
        {
          name: "Predictive Analytics",
          description: "AI-powered trend prediction and opportunity identification",
          status: "learning",
          metrics: { accuracy: "91%", predictions: 47, opportunities: 12 }
        }
      ]
    },
    {
      category: "Advanced Automation",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      tools: [
        {
          name: "Content Auto-Optimization",
          description: "Automatic content updates based on AI algorithm changes",
          status: "active",
          metrics: { optimizations: 156, improvements: "+23%", automation: "85%" }
        },
        {
          name: "Smart Prompt Generation",
          description: "AI-generated prompts for maximum engagement",
          status: "generating",
          metrics: { prompts: 89, effectiveness: "+67%", generation: "24/7" }
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'optimized': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'learning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'generating': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Production-Ready <span className="gradient-text">LLMEO Suite</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Advanced tools and automation systems ensuring maximum AI search visibility and protection
        </p>
      </div>

      <div className="space-y-8">
        {productionTools.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <p className="text-slate-400">Production-level tools and monitoring</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={toolIndex} className="card-dark">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                        <Badge variant="outline" className={getStatusColor(tool.status)}>
                          {tool.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(tool.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                              {key}
                            </p>
                            <p className="text-sm font-semibold text-white">
                              {String(value)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* System Health Overview */}
      <Card className="card-dark">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-primary" />
            System Health & Performance
          </CardTitle>
          <CardDescription>Overall system status and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">System Status</h4>
              <p className="text-green-400 text-sm">All Systems Operational</p>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Performance</h4>
              <p className="text-blue-400 text-sm">+127% Improvement</p>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Uptime</h4>
              <p className="text-yellow-400 text-sm">99.97% This Month</p>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Active Users</h4>
              <p className="text-purple-400 text-sm">2,847 Optimizations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductionFeatures;