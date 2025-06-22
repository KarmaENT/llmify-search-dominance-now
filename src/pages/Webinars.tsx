
import { Play, Calendar, Users, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "LLMEO Mastery: Zero to Hero in 90 Days",
      description: "The complete blueprint for dominating AI search. Live demo of our proprietary optimization techniques.",
      date: "December 15, 2024",
      time: "2:00 PM EST",
      duration: "60 minutes",
      presenter: "Alex Thompson, LLMEO Strategist",
      attendees: "2,847 registered",
      featured: true
    },
    {
      title: "Crisis Management in the AI Age",
      description: "How to protect and recover your brand reputation when AI platforms turn against you.",
      date: "December 22, 2024",
      time: "1:00 PM EST",
      duration: "45 minutes",
      presenter: "Sarah Chen, Crisis Specialist",
      attendees: "1,923 registered",
      featured: false
    }
  ];

  const pastWebinars = [
    {
      title: "The AI Search Revolution: Are You Ready?",
      description: "Deep dive into the seismic shift from traditional search to AI-powered discovery.",
      date: "November 28, 2024",
      views: "15,847",
      rating: 4.9,
      presenter: "Marcus Rivera, AI Expert"
    },
    {
      title: "ChatGPT Optimization Secrets Revealed",
      description: "Exclusive tactics for ranking #1 in ChatGPT recommendations across any industry.",
      date: "November 15, 2024",
      views: "22,156",
      rating: 4.8,
      presenter: "Dr. Amanda Foster, Research Lead"
    },
    {
      title: "Enterprise LLMEO: Scaling AI Search Success",
      description: "How Fortune 500 companies are implementing LLMEO at scale and crushing competitors.",
      date: "November 1, 2024",
      views: "18,392",
      rating: 4.9,
      presenter: "Alex Thompson, LLMEO Strategist"
    },
    {
      title: "Local Business LLMEO: Dominate Your Market",
      description: "Geographic AI optimization strategies that make local competitors irrelevant.",
      date: "October 18, 2024",
      views: "12,634",
      rating: 4.7,
      presenter: "Sarah Chen, Local SEO Specialist"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              LLMEO
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> Masterclasses</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Level up your AI search game with exclusive training from the industry's top LLMEO experts. 
              Knowledge this powerful shouldn't be free—but it is.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Upcoming Masterclasses
              </h2>
              <p className="text-xl text-slate-300">
                Secure your spot before your competitors do
              </p>
            </div>

            <div className="space-y-8">
              {upcomingWebinars.map((webinar, index) => (
                <div key={index} className={`rounded-2xl shadow-xl overflow-hidden ${
                  webinar.featured 
                    ? 'bg-gradient-to-r from-orange-600/20 to-orange-500/10 border-2 border-orange-500/20' 
                    : 'bg-slate-900/50 backdrop-blur-sm border border-slate-700'
                }`}>
                  {webinar.featured && (
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 text-center font-semibold">
                      🔥 Featured Masterclass - Limited Seats Available
                    </div>
                  )}
                  <div className="p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{webinar.title}</h3>
                        <p className="text-lg text-slate-300 mb-6">{webinar.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-orange-500" />
                            <div>
                              <div className="font-semibold text-white">{webinar.date}</div>
                              <div className="text-sm text-slate-400">{webinar.time}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-orange-500" />
                            <div>
                              <div className="font-semibold text-white">{webinar.duration}</div>
                              <div className="text-sm text-slate-400">Duration</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-orange-500" />
                            <div>
                              <div className="font-semibold text-white">{webinar.attendees}</div>
                              <div className="text-sm text-slate-400">Already registered</div>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-slate-400 mb-6">Presented by: <span className="font-semibold text-white">{webinar.presenter}</span></p>
                      </div>

                      <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 h-fit">
                        <h4 className="text-xl font-bold text-white mb-4 text-center">Reserve Your Spot</h4>
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-orange-500">FREE</div>
                          <div className="text-sm text-slate-400">Usually $297</div>
                        </div>
                        <Button 
                          size="lg" 
                          className={`w-full ${
                            webinar.featured 
                              ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600' 
                              : 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600'
                          }`}
                        >
                          Register Now
                        </Button>
                        <p className="text-xs text-slate-400 mt-4 text-center">
                          📧 You'll receive the Zoom link 24 hours before the session
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Replay Library
              </h2>
              <p className="text-xl text-slate-300">
                Catch up on the sessions that changed everything
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pastWebinars.map((webinar, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-700 hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl h-48 flex items-center justify-center">
                      <Play className="w-16 h-16 text-orange-500" />
                    </div>
                    <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                      {webinar.views} views
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                  <p className="text-slate-300 mb-4">{webinar.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= Math.floor(webinar.rating) ? 'text-yellow-500 fill-current' : 'text-slate-500'}`} 
                        />
                      ))}
                      <span className="text-sm text-slate-400 ml-2">{webinar.rating}</span>
                    </div>
                    <span className="text-sm text-slate-400">{webinar.date}</span>
                  </div>

                  <p className="text-sm text-slate-400 mb-6">Presented by: <span className="font-semibold text-white">{webinar.presenter}</span></p>

                  <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500/10">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Replay
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/10 rounded-2xl p-8 border border-orange-500/20 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want VIP Access to All Future Masterclasses?
                </h3>
                <p className="text-slate-300 text-lg mb-6">
                  Premium members get priority registration, exclusive Q&A sessions, and downloadable resources. 
                  Stop competing for spots—guarantee yours.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/llmeo-audit">
                    <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3">
                      Get Free Audit First
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10 px-8 py-3">
                    Explore Premium Plans
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinars;
