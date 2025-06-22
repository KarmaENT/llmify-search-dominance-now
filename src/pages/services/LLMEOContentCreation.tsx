
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Brain, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LLMEOContentCreation = () => {
  const contentTypes = [
    {
      icon: FileText,
      title: "Website Content Optimization",
      description: "Transform existing content to speak directly to AI algorithms while maintaining human readability"
    },
    {
      icon: Brain,
      title: "AI-First Knowledge Bases",
      description: "Comprehensive knowledge repositories designed for optimal AI comprehension and recommendation"
    },
    {
      icon: Lightbulb,
      title: "FAQ & Answer Optimization",
      description: "Strategic Q&A content that positions you as the authoritative answer to industry questions"
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
              <FileText className="w-4 h-4 mr-2" />
              LLMEO Content Creation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content That 
              <span className="gradient-text"> AI Understands</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized content creation and optimization services designed to maximize your visibility 
              and authority across all AI-powered search platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="p-8 card-enhanced hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary to-primary/70 p-3 rounded-xl shadow-lg mb-6 w-fit">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Create AI-Optimized Content?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts create content that drives AI recommendations and establishes your authority.
            </p>
            <Link to="/llmeo-audit">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Start Your Content Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMEOContentCreation;
