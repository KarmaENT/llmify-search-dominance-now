
import { Search, MessageCircle, Phone, Mail, Book, HelpCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SupportCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Book,
      questions: [
        {
          question: "What is LLMEO and how does it differ from SEO?",
          answer: "LLMEO (Large Language Model Engine Optimization) optimizes your content for AI platforms like ChatGPT, Claude, and Perplexity. Unlike traditional SEO that targets search engines, LLMEO ensures AI systems recommend your brand when users ask relevant questions."
        },
        {
          question: "How quickly will I see results?",
          answer: "Most clients see initial improvements within 30-60 days. However, significant AI search dominance typically develops over 3-6 months as we establish your authority across multiple AI platforms."
        },
        {
          question: "Do I need to stop my current SEO efforts?",
          answer: "Not at all. LLMEO complements traditional SEO. Many optimization techniques benefit both traditional search engines and AI platforms. We often recommend a hybrid approach."
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: HelpCircle,
      questions: [
        {
          question: "What's included in the free LLMEO audit?",
          answer: "Your free audit includes: AI search visibility analysis, competitive positioning report, content gap assessment, brand mention evaluation, and a custom strategy roadmap. No hidden fees or obligations."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, all our plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel anytime. We're confident in our results—we don't need contracts to keep you."
        },
        {
          question: "Do you offer custom enterprise solutions?",
          answer: "Absolutely. Our Enterprise tier includes custom implementation, dedicated account management, multi-brand coordination, and enterprise-grade security. Contact us for a tailored proposal."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: MessageCircle,
      questions: [
        {
          question: "How do you measure AI search performance?",
          answer: "We track metrics including AI platform visibility, mention sentiment, recommendation frequency, brand authority scores, and conversion attribution from AI-driven traffic."
        },
        {
          question: "What AI platforms do you optimize for?",
          answer: "We optimize for all major AI platforms: ChatGPT, Claude, Perplexity, Bard/Gemini, and emerging platforms. Our strategies adapt as new AI search tools gain prominence."
        },
        {
          question: "How do you handle algorithm updates?",
          answer: "Our team monitors AI platform changes daily. We proactively adjust strategies and notify clients of significant updates. Continuous maintenance ensures sustained performance."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers from our LLMEO experts",
      availability: "Available 24/7",
      action: "Start Chat",
      primary: true
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      primary: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses within 2 hours",
      availability: "Always available",
      action: "Send Email",
      primary: false
    }
  ];

  const resources = [
    {
      title: "LLMEO Implementation Guide",
      description: "Step-by-step guide to getting started with AI search optimization",
      type: "PDF Guide"
    },
    {
      title: "AI Search Trends Report",
      description: "Latest data and insights on the AI search landscape",
      type: "Research Report"
    },
    {
      title: "Crisis Management Playbook",
      description: "How to protect your reputation in AI search results",
      type: "Strategy Guide"
    },
    {
      title: "Industry Benchmarks",
      description: "Performance standards across different industries",
      type: "Data Sheet"
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
              Support
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Get the answers you need to dominate AI search. Our experts are standing by to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 backdrop-blur-sm border-slate-600 text-white placeholder:text-slate-400 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Help Fast
              </h2>
              <p className="text-xl text-slate-300">
                Multiple ways to reach our LLMEO experts
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className={`rounded-2xl p-8 text-center border-2 ${
                  option.primary 
                    ? 'bg-gradient-to-br from-orange-600/20 to-orange-500/10 border-orange-500/20' 
                    : 'bg-slate-900/50 backdrop-blur-sm border-slate-700'
                }`}>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    option.primary 
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500' 
                      : 'bg-slate-700'
                  }`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-slate-300 mb-4">{option.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-orange-500 font-medium">{option.availability}</span>
                  </div>
                  <Button 
                    className={`w-full ${
                      option.primary 
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600' 
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-300">
                Everything you need to know about LLMEO
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Helpful Resources
              </h2>
              <p className="text-xl text-slate-300">
                Guides and reports to accelerate your LLMEO success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                    <span className="bg-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-6">{resource.description}</p>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                    Download Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status and Updates */}
      <section className="py-16 bg-gradient-to-r from-orange-600/10 to-orange-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-slate-300 mb-8">
              All LLMEO services are running smoothly. Average response time: 1.2 seconds
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">99.9%</div>
                <div className="text-slate-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">&lt; 2hr</div>
                <div className="text-slate-300">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-slate-300">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportCenter;
