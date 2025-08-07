import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Activity, BarChart3, TrendingUp, Users, DollarSign, Share2, 
  Copy, ExternalLink, Settings, Bell, Target, Crown, Zap,
  ArrowUpRight, ArrowDownRight, Eye, MousePointer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DashboardData {
  subscription: {
    tier: string;
    status: string;
    nextBilling: string;
  };
  affiliate: {
    code: string;
    totalReferrals: number;
    totalEarnings: number;
    monthlyEarnings: number;
  };
  analytics: {
    aiVisibility: number;
    rankingProgress: number;
    trafficGrowth: number;
    conversionRate: number;
  };
  recentActivity: Array<{
    type: string;
    message: string;
    timestamp: string;
  }>;
}

export default function Dashboard() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Check subscription status
      const { data: subData } = await supabase.functions.invoke('check-subscription');
      
      // Get affiliate data
      const { data: affiliateData } = await supabase
        .from('affiliates')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      // Get referrals count and earnings
      const { data: referralsData } = await supabase
        .from('referrals')
        .select('commission_amount, status, created_at')
        .eq('affiliate_id', affiliateData?.id);

      const totalEarnings = referralsData?.reduce((sum, ref) => sum + (ref.commission_amount || 0), 0) || 0;
      const monthlyEarnings = referralsData?.filter(ref => 
        new Date(ref.created_at).getMonth() === new Date().getMonth()
      ).reduce((sum, ref) => sum + (ref.commission_amount || 0), 0) || 0;

      setDashboardData({
        subscription: {
          tier: subData?.subscription_tier || 'None',
          status: subData?.subscribed ? 'Active' : 'Inactive',
          nextBilling: subData?.subscription_end || 'N/A'
        },
        affiliate: {
          code: affiliateData?.affiliate_code || '',
          totalReferrals: affiliateData?.total_referrals || 0,
          totalEarnings,
          monthlyEarnings
        },
        analytics: {
          aiVisibility: Math.floor(Math.random() * 40) + 60, // Mock data
          rankingProgress: Math.floor(Math.random() * 30) + 70,
          trafficGrowth: Math.floor(Math.random() * 50) + 150,
          conversionRate: Math.floor(Math.random() * 8) + 12
        },
        recentActivity: [
          { type: 'ranking', message: 'Moved to #2 for "AI optimization services"', timestamp: '2 hours ago' },
          { type: 'referral', message: 'New referral signed up using your code', timestamp: '5 hours ago' },
          { type: 'content', message: 'LLMEO content updated for 3 keywords', timestamp: '1 day ago' },
          { type: 'alert', message: 'Competitor gained visibility for target keyword', timestamp: '2 days ago' }
        ]
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyAffiliateLink = () => {
    const affiliateLink = `${window.location.origin}/auth?ref=${dashboardData?.affiliate.code}`;
    navigator.clipboard.writeText(affiliateLink);
    toast({
      title: "Link Copied!",
      description: "Your affiliate link has been copied to clipboard.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div>Failed to load dashboard data.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {user?.email?.split('@')[0]}
              </h1>
              <p className="text-muted-foreground">
                Monitor your AI search performance and affiliate earnings
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="card-dark">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Visibility Score</CardTitle>
                  <Eye className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{dashboardData.analytics.aiVisibility}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-dark">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ranking Progress</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{dashboardData.analytics.rankingProgress}%</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +8% from last week
                  </p>
                </CardContent>
              </Card>

              <Card className="card-dark">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Affiliate Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">${dashboardData.affiliate.totalEarnings}</div>
                  <p className="text-xs text-muted-foreground">
                    ${dashboardData.affiliate.monthlyEarnings} this month
                  </p>
                </CardContent>
              </Card>

              <Card className="card-dark">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{dashboardData.affiliate.totalReferrals}</div>
                  <p className="text-xs text-muted-foreground">
                    40% commission rate
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="affiliate">Affiliate Program</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="tools">Advanced Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Subscription Status */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-primary" />
                        Subscription Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Current Plan:</span>
                        <Badge variant="outline" className="border-primary text-primary">
                          {dashboardData.subscription.tier}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Status:</span>
                        <Badge variant={dashboardData.subscription.status === 'Active' ? 'default' : 'destructive'}>
                          {dashboardData.subscription.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Next Billing:</span>
                        <span className="text-sm">{dashboardData.subscription.nextBilling}</span>
                      </div>
                      <Button onClick={() => navigate('/subscription')} className="w-full">
                        Manage Subscription
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dashboardData.recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{activity.message}</p>
                              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="affiliate" className="space-y-6">
                <Card className="card-dark">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Share2 className="h-5 w-5 text-primary" />
                      Affiliate Program
                    </CardTitle>
                    <CardDescription>
                      Earn 40% recurring commission on every referral that subscribes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Affiliate Link */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Affiliate Link</label>
                      <div className="flex gap-2">
                        <div className="flex-1 p-3 bg-muted rounded-lg text-sm">
                          {window.location.origin}/auth?ref={dashboardData.affiliate.code}
                        </div>
                        <Button onClick={copyAffiliateLink} size="icon" variant="outline">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Affiliate Code */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Affiliate Code</label>
                      <div className="flex gap-2">
                        <div className="flex-1 p-3 bg-muted rounded-lg text-sm font-mono">
                          {dashboardData.affiliate.code}
                        </div>
                        <Button 
                          onClick={() => navigator.clipboard.writeText(dashboardData.affiliate.code)}
                          size="icon" 
                          variant="outline"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Commission Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">40%</div>
                        <div className="text-sm text-muted-foreground">Commission Rate</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">${dashboardData.affiliate.totalEarnings}</div>
                        <div className="text-sm text-muted-foreground">Total Earned</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{dashboardData.affiliate.totalReferrals}</div>
                        <div className="text-sm text-muted-foreground">Active Referrals</div>
                      </div>
                    </div>

                    {/* How it Works */}
                    <div className="space-y-3">
                      <h4 className="font-semibold">How It Works:</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Share your unique affiliate link with potential customers</p>
                        <p>• When someone signs up and subscribes using your link, you earn 40% commission</p>
                        <p>• You continue earning 40% for the entire duration of their subscription</p>
                        <p>• Commission is paid monthly directly to your account</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* AI Platform Performance */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle>AI Platform Performance</CardTitle>
                      <CardDescription>Your visibility across different AI platforms</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">ChatGPT</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Claude</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                            <span className="text-sm font-medium">78%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Gemini</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '71%' }}></div>
                            </div>
                            <span className="text-sm font-medium">71%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Perplexity</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '82%' }}></div>
                            </div>
                            <span className="text-sm font-medium">82%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Keyword Rankings */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle>Top Performing Keywords</CardTitle>
                      <CardDescription>Your best ranking keywords this month</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {[
                          { keyword: 'AI marketing optimization', position: 2, change: '+3' },
                          { keyword: 'LLMEO services', position: 1, change: '+1' },
                          { keyword: 'AI search ranking', position: 4, change: '+2' },
                          { keyword: 'ChatGPT optimization', position: 3, change: '-1' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div>
                              <div className="font-medium text-sm">{item.keyword}</div>
                              <div className="text-xs text-muted-foreground">Position #{item.position}</div>
                            </div>
                            <Badge variant={item.change.startsWith('+') ? 'default' : 'destructive'}>
                              {item.change}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* LLMEO Content Creator */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Content Creator
                      </CardTitle>
                      <CardDescription>
                        AI-optimized content generation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        Generate Content
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Ranking Monitor */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Ranking Monitor
                      </CardTitle>
                      <CardDescription>
                        Real-time ranking tracking
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        View Rankings
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Competitor Analysis */}
                  <Card className="card-dark">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Competitor Intel
                      </CardTitle>
                      <CardDescription>
                        Advanced competitor tracking
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        Analyze Competition
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Feature Coming Soon */}
                <Card className="card-dark">
                  <CardHeader>
                    <CardTitle>Advanced Features</CardTitle>
                    <CardDescription>
                      More powerful tools are being developed for your tier
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-dashed border-muted-foreground/30 rounded-lg text-center">
                        <h4 className="font-semibold mb-2">AI Persona Builder</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Create custom AI personalities for your brand
                        </p>
                        <Badge variant="outline">Coming Soon</Badge>
                      </div>
                      <div className="p-4 border border-dashed border-muted-foreground/30 rounded-lg text-center">
                        <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Forecast ranking changes and opportunities
                        </p>
                        <Badge variant="outline">Coming Soon</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}