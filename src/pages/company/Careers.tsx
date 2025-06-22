
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Briefcase, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior LLMEO Strategist",
      department: "Strategy",
      location: "Seattle, WA / Remote",
      type: "Full-time"
    },
    {
      title: "AI Content Specialist",
      department: "Content",
      location: "Seattle, WA / Remote", 
      type: "Full-time"
    },
    {
      title: "Client Success Manager",
      department: "Customer Success",
      location: "Seattle, WA / Remote",
      type: "Full-time"
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
              <Users className="w-4 h-4 mr-2" />
              Careers at LLMify
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shape the Future of 
              <span className="gradient-text"> AI Search</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the pioneering team that's defining how businesses succeed in the AI-first future. 
              Build your career at the forefront of the search revolution.
            </p>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="p-6 card-enhanced hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span>{position.location}</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the team that's helping businesses win in the AI-powered future.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              View All Opportunities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
