
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContinuousMaintenance = () => {
  const maintenanceFeatures = [
    {
      icon: Activity,
      title: "24/7 Performance Monitoring",
      description: "Real-time tracking of your AI search rankings across all major platforms"
    },
    {
      icon: Settings,
      title: "Algorithm Adaptation",
      description: "Instant optimization adjustments as AI platforms evolve and update"
    },
    {
      icon: AlertTriangle,
      title: "Competitive Response",
      description: "Proactive countermeasures against competitor optimization efforts"
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
              <Settings className="w-4 h-4 mr-2" />
              Continuous Maintenance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Never Lose Your 
              <span className="gradient-text"> Competitive Edge</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ongoing optimization and maintenance services that ensure your AI search dominance 
              remains unshakeable as technology evolves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {maintenanceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="p-8 card-enhanced hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary to-primary/70 p-3 rounded-xl shadow-lg mb-6 w-fit">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6">Maintain Your AI Search Dominance</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay ahead of algorithm changes and competitor moves with our continuous maintenance services.
            </p>
            <Link to="/llmeo-audit">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Learn More About Maintenance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousMaintenance;
