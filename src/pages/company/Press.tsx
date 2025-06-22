
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Press = () => {
  const pressReleases = [
    {
      title: "LLMify Raises $10M Series A to Accelerate AI Search Optimization",
      date: "December 15, 2024",
      excerpt: "Funding will expand LLMEO services and accelerate platform development as AI search adoption explodes.",
      link: "#"
    },
    {
      title: "LLMify Launches First Guaranteed LLMEO Service",
      date: "November 20, 2024", 
      excerpt: "Industry-first guarantee promises AI search visibility improvements within 90 days or continued optimization at no cost.",
      link: "#"
    },
    {
      title: "Study: 73% of Consumers Now Use AI for Search Decisions",
      date: "October 30, 2024",
      excerpt: "LLMify research reveals massive shift toward AI-powered search and discovery, creating urgent need for optimization.",
      link: "#"
    }
  ];

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
              <Newspaper className="w-4 h-4 mr-2" />
              Press Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest News & 
              <span className="gradient-text"> Press Releases</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated on LLMify's latest developments, industry insights, and the evolution of AI search optimization.
            </p>
          </div>

          {/* Press Releases */}
          <div className="space-y-8 mb-20">
            {pressReleases.map((release, index) => (
              <div key={index} className="p-6 card-enhanced hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </div>
                <h2 className="text-2xl font-bold mb-4">{release.title}</h2>
                <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                <Button variant="outline" className="gap-2">
                  Read Full Release
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Media Contact */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For press inquiries, interviews, or media resources, contact our communications team.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              Contact Press Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
