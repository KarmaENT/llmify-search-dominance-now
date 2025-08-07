import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Zap, 
  Target, 
  Search, 
  BarChart3, 
  Eye,
  Lightbulb,
  TrendingUp,
  Shield,
  MessageSquare,
  Globe,
  Rocket
} from 'lucide-react';

const AdvancedLLMEOTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState('content-optimizer');
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const tools = [
    {
      id: 'content-optimizer',
      name: 'AI Content Optimizer',
      icon: Brain,
      description: 'Optimize content for maximum AI platform visibility',
      category: 'Content'
    },
    {
      id: 'prompt-builder',
      name: 'Prompt Strategy Builder',
      icon: Lightbulb,
      description: 'Create effective prompts for AI engagement',
      category: 'Strategy'
    },
    {
      id: 'competitor-intel',
      name: 'Competitor Intelligence',
      icon: Eye,
      description: 'Monitor competitor AI search performance',
      category: 'Analysis'
    },
    {
      id: 'ranking-predictor',
      name: 'Ranking Predictor',
      icon: TrendingUp,
      description: 'Predict future AI platform rankings',
      category: 'Analytics'
    },
    {
      id: 'reputation-shield',
      name: 'Reputation Shield',
      icon: Shield,
      description: 'Protect and enhance brand reputation',
      category: 'Protection'
    },
    {
      id: 'conversation-optimizer',
      name: 'Conversation Optimizer',
      icon: MessageSquare,
      description: 'Optimize conversational AI responses',
      category: 'Engagement'
    }
  ];

  const mockOptimizations = [
    "Add semantic keywords: 'AI-powered', 'machine learning', 'intelligent automation'",
    "Include question-based headers for voice search optimization",
    "Enhance entity recognition with proper nouns and industry terms",
    "Improve context clarity for better AI comprehension",
    "Add structured data markup suggestions"
  ];

  const mockCompetitorData = [
    { company: "AI Corp", ranking: 2, change: "+1", strength: "high" },
    { company: "Tech Solutions", ranking: 4, change: "-2", strength: "medium" },
    { company: "Digital Agency", ranking: 6, change: "0", strength: "low" },
    { company: "Innovation Labs", ranking: 8, change: "+3", strength: "medium" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <Card 
              key={tool.id} 
              className={`card-dark cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedTool === tool.id ? 'border-primary shadow-glow' : ''
              }`}
              onClick={() => setSelectedTool(tool.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <IconComponent className="w-6 h-6 text-primary" />
                  <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                </div>
                <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                <CardDescription className="text-sm">{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Tool Interface */}
      <Card className="card-dark">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            {React.createElement(tools.find(t => t.id === selectedTool)?.icon || Brain, { className: "w-5 h-5 mr-2 text-primary" })}
            {tools.find(t => t.id === selectedTool)?.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="input" className="space-y-4">
            <TabsList className="bg-slate-800 border border-slate-700">
              <TabsTrigger value="input" className="data-[state=active]:bg-primary">Input</TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-primary">Analysis</TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-primary">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="input" className="space-y-4">
              {selectedTool === 'content-optimizer' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Content to Optimize</label>
                    <Textarea
                      placeholder="Paste your content here for AI optimization..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="min-h-[200px] bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Target keyword" 
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                    <Input 
                      placeholder="Target AI platform" 
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                    <Zap className="w-4 h-4 mr-2" />
                    {loading ? 'Optimizing...' : 'Optimize Content'}
                  </Button>
                </div>
              )}

              {selectedTool === 'competitor-intel' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Competitor Analysis</label>
                    <Input 
                      placeholder="Enter competitor domain or company name" 
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Search className="w-4 h-4 mr-2" />
                    Analyze Competition
                  </Button>
                </div>
              )}

              {selectedTool === 'prompt-builder' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Business Context</label>
                    <Textarea
                      placeholder="Describe your business, target audience, and goals..."
                      className="min-h-[150px] bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Generate Prompts
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4">
              {selectedTool === 'content-optimizer' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Content Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-slate-400 mb-1">AI Readability</h4>
                      <p className="text-2xl font-bold text-green-400">87%</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-slate-400 mb-1">Semantic Density</h4>
                      <p className="text-2xl font-bold text-yellow-400">72%</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-slate-400 mb-1">Context Clarity</h4>
                      <p className="text-2xl font-bold text-blue-400">91%</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Optimization Suggestions:</h4>
                    {mockOptimizations.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTool === 'competitor-intel' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Competitor Rankings</h3>
                  <div className="space-y-3">
                    {mockCompetitorData.map((competitor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-white">{competitor.company}</h4>
                          <p className="text-sm text-slate-400">Ranking #{competitor.ranking}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`${
                              competitor.strength === 'high' ? 'border-green-500 text-green-400' :
                              competitor.strength === 'medium' ? 'border-yellow-500 text-yellow-400' :
                              'border-red-500 text-red-400'
                            }`}
                          >
                            {competitor.strength}
                          </Badge>
                          <p className="text-sm text-slate-300 mt-1">{competitor.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="results" className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Optimization Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Expected Ranking Improvement</span>
                    <span className="text-green-400 font-semibold">+3.2 positions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">AI Visibility Score</span>
                    <span className="text-primary font-semibold">94/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Implementation Time</span>
                    <span className="text-slate-300">2-3 days</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  <Rocket className="w-4 h-4 mr-2" />
                  Apply Optimizations
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedLLMEOTools;