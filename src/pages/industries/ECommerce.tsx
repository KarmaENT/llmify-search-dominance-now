
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Package, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ECommerce = () => {
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-commerce
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Drive Sales Through 
              <span className="gradient-text"> AI Product Discovery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optimize your e-commerce presence for AI-powered product recommendations 
              and shopping assistance across all major platforms.
            </p>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Become the AI's Favorite Recommendation</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              When customers ask AI for product recommendations, make sure your products are suggested first.
            </p>
            <Link to="/llmeo-audit">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Optimize Your E-commerce Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
