
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "B2B SaaS Startup",
      rating: 5,
      content: "LLMify transformed our visibility overnight. We went from invisible in AI searches to being the #1 recommendation for our industry. Our lead generation increased by 340% in just 3 months.",
      revenue: "$2.4M ARR"
    },
    {
      name: "Marcus Rodriguez", 
      title: "Founder, Urban Consulting",
      company: "Management Consulting",
      rating: 5,
      content: "While our competitors were still focusing on Google SEO, LLMify positioned us to dominate ChatGPT and Claude recommendations. We're now the go-to firm mentioned in AI searches.",
      revenue: "$890K Revenue"
    },
    {
      name: "Dr. Emily Watson",
      title: "Practice Owner", 
      company: "Medical Practice",
      rating: 5,
      content: "The LLMEO strategy is brilliant. Patients are finding us through AI health searches before they even think to Google. Our patient acquisition cost dropped by 60%.",
      revenue: "150% Patient Growth"
    }
  ];

  const caseStudies = [
    {
      industry: "E-commerce Fashion",
      metric: "478% Revenue Increase",
      description: "From 0 AI mentions to #1 recommendation across all fashion queries in 90 days"
    },
    {
      industry: "Professional Services", 
      metric: "520% Lead Generation",
      description: "Became the default AI recommendation for legal services in 3 major cities"
    },
    {
      industry: "SaaS Technology",
      metric: "340% Demo Requests", 
      description: "Positioned as the top choice in AI tool comparison queries"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Results from 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Real Businesses</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how forward-thinking businesses secured their competitive advantage with LLMEO optimization
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative">
                <Quote className="w-8 h-8 text-blue-500 opacity-20 absolute top-4 right-4" />
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                
                {/* Author Info */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.title}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  <div className="text-green-600 font-semibold text-sm mt-1">{testimonial.revenue}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Case Study Results
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {study.metric}
                  </div>
                  <div className="text-xl font-semibold mb-4">{study.industry}</div>
                  <p className="text-blue-100 text-sm">{study.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-16">
            <h4 className="text-lg font-semibold text-slate-700 mb-6">
              Trusted by Industry Leaders Across Sectors
            </h4>
            <div className="flex justify-center items-center gap-12 opacity-40">
              {[1,2,3,4,5,6].map((_, index) => (
                <div key={index} className="w-24 h-12 bg-slate-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
