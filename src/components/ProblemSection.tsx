
import { TrendingUp, AlertTriangle, Target } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    { number: "73%", label: "of consumers now use AI for search", icon: TrendingUp },
    { number: "2.4B", label: "AI search queries monthly", icon: Target },
    { number: "89%", label: "of businesses invisible in AI results", icon: AlertTriangle }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The AI Search Revolution is 
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"> Already Here</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              While you're optimizing for Google, your customers are asking ChatGPT, Claude, and Perplexity for recommendations. 
              <strong className="text-red-600"> Your business is invisible in the searches that matter most.</strong>
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Problem Amplification */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Every Day You Wait, Your Competitors Gain Ground
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">What's Happening Right Now:</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    Your competitors are being recommended by AI tools
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    Potential customers can't find you in AI searches
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    You're losing market share to "AI-optimized" businesses
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">The Cost of Delay:</h4>
                <ul className="space-y-3 text-slate-700">
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
