
import { TrendingUp, AlertTriangle, Target } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    { number: "73%", label: "of consumers now use AI for search", icon: TrendingUp },
    { number: "2.4B", label: "AI search queries monthly", icon: Target },
    { number: "89%", label: "of businesses invisible in AI results", icon: AlertTriangle }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The AI Search Revolution is 
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> Already Here</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              While you're optimizing for Google, your customers are asking ChatGPT, Claude, and Perplexity for recommendations. 
              <strong className="text-orange-500"> Your business is invisible in the searches that matter most.</strong>
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:shadow-glow transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-slate-300 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Problem Amplification */}
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/10 rounded-2xl p-8 md:p-12 border-l-4 border-orange-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Every Day You Wait, Your Competitors Gain Ground
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">What's Happening Right Now:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Your competitors are being recommended by AI tools
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Potential customers can't find you in AI searches
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    You're losing market share to "AI-optimized" businesses
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">The Cost of Delay:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    First-mover advantages become impossible to overcome
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Customer acquisition costs skyrocket
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Revenue erosion accelerates monthly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
