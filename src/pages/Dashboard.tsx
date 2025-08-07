import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Crown, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Share2, 
  Copy, 
  BarChart3,
  Settings,
  Zap,
  Target,
  Brain,
  Search,
  Monitor,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Eye
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdvancedLLMEOTools from '@/components/AdvancedLLMEOTools';
import ProductionFeatures from '@/components/ProductionFeatures';

interface AffiliateStat {
  affiliate_code: string;
  total_referrals: number;
  total_earnings: number;
  commission_rate: number;
}

interface Referral {
  id: string;
  referred_user_id: string;
  commission_amount: number;
  status: string;
  created_at: string;
}

const Dashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [affiliateStats, setAffiliateStats] = useState<AffiliateStat | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch affiliate stats
      const { data: affiliateData, error: affiliateError } = await supabase
        .from('affiliates')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (affiliateError && affiliateError.code !== 'PGRST116') {
        throw affiliateError;
      }

      if (affiliateData) {
        setAffiliateStats(affiliateData);

        // Fetch referrals
        const { data: referralData, error: referralError } = await supabase
          .from('referrals')
          .select('*')
          .eq('affiliate_id', affiliateData.id)
          .order('created_at', { ascending: false });

        if (referralError) throw referralError;
        setReferrals(referralData || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyAffiliateLink = () => {
    if (affiliateStats) {
      const link = `${window.location.origin}/?ref=${affiliateStats.affiliate_code}`;
      navigator.clipboard.writeText(link);
      toast({
        title: "Link Copied!",
        description: "Your affiliate link has been copied to clipboard.",
      });
    }
  };

  const mockLLMEOData = {
    rankings: {
      chatgpt: { current: 3, previous: 7, change: 4 },
      claude: { current: 2, previous: 5, change: 3 },
      gemini: { current: 1, previous: 4, change: 3 },
      perplexity: { current: 5, previous: 8, change: 3 }
    },
    visibility: {
      total: 847,
      growth: 23,
      platforms: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity']
    },
    keywords: [
      { term: "AI marketing", rank: 2, traffic: 1240, trend: "up" },
      { term: "LLMEO services", rank: 1, traffic: 980, trend: "up" },
      { term: "AI optimization", rank: 3, traffic: 750, trend: "stable" },
      { term: "search optimization", rank: 4, traffic: 620, trend: "up" },
      { term: "AI consulting", rank: 2, traffic: 540, trend: "down" }
    ],
    alerts: [
      { type: "warning", message: "Competitor gained ranking for 'AI marketing'", time: "2h ago" },
      { type: "success", message: "Reached #1 for 'LLMEO services'", time: "4h ago" },
      { type: "info", message: "New content optimization opportunity detected", time: "6h ago" }
    ]
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Card className="card-dark p-8">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold text-white mb-4">Authentication Required</h2>
            <p className="text-slate-400 mb-6">Please sign in to access your dashboard</p>
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Dashboard Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, <span className="gradient-text">{user.email?.split('@')[0]}</span>
              </h1>
              <p className="text-slate-400">Your LLMEO command center for AI search dominance</p>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-slate-900 border border-slate-700">
                <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Monitor className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="rankings" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Rankings
                </TabsTrigger>
                <TabsTrigger value="affiliate" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Affiliate
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Tools
                </TabsTrigger>
                <TabsTrigger value="production" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Production
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="card-dark">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-400">AI Visibility Score</CardTitle>
                      <Eye className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">{mockLLMEOData.visibility.total}</div>
                      <p className="text-xs text-green-400 flex items-center mt-1">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +{mockLLMEOData.visibility.growth}% this month
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-dark">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-400">Avg. Ranking</CardTitle>
                      <Target className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">2.8</div>
                      <p className="text-xs text-green-400 flex items-center mt-1">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        Improved from 5.1
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-dark">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-400">Active Keywords</CardTitle>
                      <Search className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">{mockLLMEOData.keywords.length}</div>
                      <p className="text-xs text-slate-400 mt-1">Tracking performance</p>
                    </CardContent>
                  </Card>

                  <Card className="card-dark">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-slate-400">Affiliate Earnings</CardTitle>
                      <DollarSign className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-white">
                        ${affiliateStats?.total_earnings?.toFixed(2) || '0.00'}
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {affiliateStats?.total_referrals || 0} referrals
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* AI Platform Rankings */}
                <Card className="card-dark">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                      AI Platform Rankings
                    </CardTitle>
                    <CardDescription>Your current ranking positions across major AI platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(mockLLMEOData.rankings).map(([platform, data]) => (
                        <div key={platform} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white capitalize">{platform}</h4>
                            <Badge variant={data.current <= 3 ? "default" : "secondary"} className="bg-primary/20 text-primary">
                              #{data.current}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm">
                            <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
                            <span className="text-green-400">+{data.change} positions</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Alerts */}
                <Card className="card-dark">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      Recent Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockLLMEOData.alerts.map((alert, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-800/50">
                          <div className={`p-1 rounded-full ${
                            alert.type === 'success' ? 'bg-green-500/20' :
                            alert.type === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                          }`}>
                            {alert.type === 'success' ? 
                              <CheckCircle className="h-3 w-3 text-green-400" /> :
                              alert.type === 'warning' ?
                              <AlertTriangle className="h-3 w-3 text-yellow-400" /> :
                              <Clock className="h-3 w-3 text-blue-400" />
                            }
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-white">{alert.message}</p>
                            <p className="text-xs text-slate-400">{alert.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rankings Tab */}
              <TabsContent value="rankings" className="space-y-6">
                <Card className="card-dark">
                  <CardHeader>
                    <CardTitle className="text-white">Keyword Performance</CardTitle>
                    <CardDescription>Track your keyword rankings across AI platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockLLMEOData.keywords.map((keyword, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{keyword.term}</h4>
                            <p className="text-sm text-slate-400">Position #{keyword.rank}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-white">{keyword.traffic} views</p>
                            <div className="flex items-center text-sm">
                              {keyword.trend === 'up' ? 
                                <ArrowUp className="h-3 w-3 text-green-400 mr-1" /> :
                                keyword.trend === 'down' ?
                                <ArrowDown className="h-3 w-3 text-red-400 mr-1" /> :
                                <div className="h-3 w-3 bg-yellow-400 rounded-full mr-1" />
                              }
                              <span className={
                                keyword.trend === 'up' ? 'text-green-400' :
                                keyword.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                              }>
                                {keyword.trend}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Affiliate Tab */}
              <TabsContent value="affiliate" className="space-y-6">
                {affiliateStats && (
                  <>
                    <Card className="card-dark">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <Share2 className="w-5 h-5 mr-2 text-primary" />
                          Affiliate Program
                        </CardTitle>
                        <CardDescription>Earn 40% commission on every referral</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                          <h3 className="text-lg font-bold text-white mb-2">Your Affiliate Code</h3>
                          <div className="flex items-center space-x-2 mb-4">
                            <code className="bg-slate-900 px-3 py-2 rounded text-primary font-mono">
                              {affiliateStats.affiliate_code}
                            </code>
                            <Button size="sm" variant="outline" onClick={copyAffiliateLink}>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy Link
                            </Button>
                          </div>
                          <p className="text-sm text-slate-400">
                            Share this link: {window.location.origin}/?ref={affiliateStats.affiliate_code}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                            <h4 className="text-sm font-medium text-slate-400 mb-1">Total Referrals</h4>
                            <p className="text-2xl font-bold text-white">{affiliateStats.total_referrals}</p>
                          </div>
                          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                            <h4 className="text-sm font-medium text-slate-400 mb-1">Total Earnings</h4>
                            <p className="text-2xl font-bold text-white">${affiliateStats.total_earnings.toFixed(2)}</p>
                          </div>
                          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                            <h4 className="text-sm font-medium text-slate-400 mb-1">Commission Rate</h4>
                            <p className="text-2xl font-bold text-white">{affiliateStats.commission_rate}%</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {referrals.length > 0 && (
                      <Card className="card-dark">
                        <CardHeader>
                          <CardTitle className="text-white">Recent Referrals</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {referrals.map((referral) => (
                              <div key={referral.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                                <div>
                                  <p className="text-sm text-white">Referral #{referral.id.slice(0, 8)}...</p>
                                  <p className="text-xs text-slate-400">
                                    {new Date(referral.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <Badge variant="outline" className="text-primary border-primary/50">
                                    {referral.status}
                                  </Badge>
                                  <p className="text-sm text-white mt-1">
                                    ${referral.commission_amount?.toFixed(2) || '0.00'}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </TabsContent>

              {/* AI Tools Tab */}
              <TabsContent value="tools" className="space-y-6">
                <AdvancedLLMEOTools />
              </TabsContent>

              {/* Production Tab */}
              <TabsContent value="production" className="space-y-6">
                <ProductionFeatures />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;