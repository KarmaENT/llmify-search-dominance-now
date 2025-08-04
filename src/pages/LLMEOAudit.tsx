
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle, HelpCircle, Star, Clock, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const auditFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Please enter a valid website URL'),
  industry: z.string().min(2, 'Please specify your industry'),
  currentTraffic: z.string().min(1, 'Please select your current traffic level'),
  mainGoals: z.string().min(10, 'Please describe your main goals (minimum 10 characters)'),
  currentChallenges: z.string().min(10, 'Please describe your current challenges'),
  budget: z.string().min(1, 'Please select your budget range'),
});

type AuditFormData = z.infer<typeof auditFormSchema>;

const LLMEOAudit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const form = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      industry: '',
      currentTraffic: '',
      mainGoals: '',
      currentChallenges: '',
      budget: '',
    },
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    console.log('Audit form submission:', data);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Audit Request Submitted!",
      description: "We'll analyze your digital presence and send you a comprehensive LLMEO audit within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Target,
      title: "AI Search Visibility Analysis",
      description: "Comprehensive analysis of how your brand appears in ChatGPT, Claude, Perplexity, and other AI platforms"
    },
    {
      icon: TrendingUp,
      title: "Competitive Positioning Report",
      description: "See exactly where you stand vs competitors in AI search results and identify opportunities"
    },
    {
      icon: CheckCircle,
      title: "Custom LLMEO Strategy",
      description: "Tailored roadmap to dominate AI search in your industry with specific action items"
    },
    {
      icon: Clock,
      title: "Quick Wins Identification",
      description: "Immediate opportunities to improve your AI search presence within 30 days"
    }
  ];

  const faqData = [
    {
      question: "What exactly is LLMEO and why is it important?",
      answer: "LLMEO (Large Language Model Engine Optimization) is the practice of optimizing your digital presence to rank prominently in AI-powered search platforms like ChatGPT, Claude, Perplexity, and others. As traditional search evolves, consumers increasingly rely on AI for information discovery. LLMEO ensures your brand is recommended by AI when potential customers ask relevant questions."
    },
    {
      question: "How is LLMEO different from traditional SEO?",
      answer: "While SEO focuses on ranking in traditional search engines like Google, LLMEO optimizes for AI language models that provide direct answers and recommendations. AI platforms consider different factors like content authority, brand mentions, and contextual relevance rather than just keywords and backlinks."
    },
    {
      question: "What will I receive in my free LLMEO audit?",
      answer: "Your comprehensive audit includes: (1) Current AI search visibility analysis across major platforms, (2) Competitive positioning report, (3) Content gap analysis, (4) Brand mention assessment, (5) Quick wins recommendations, and (6) Custom LLMEO strategy outline tailored to your industry."
    },
    {
      question: "How long does the audit take to complete?",
      answer: "Our team typically completes comprehensive LLMEO audits within 24-48 hours of receiving your information. You'll receive a detailed report via email along with a summary of immediate action items you can implement."
    },
    {
      question: "Is there really no cost for this audit?",
      answer: "Yes, the audit is completely free with no strings attached. We provide this as a way to demonstrate the value of LLMEO and help businesses understand their current AI search position. There's no obligation to work with us afterward."
    },
    {
      question: "What information do you need to perform the audit?",
      answer: "We need basic information about your business, website, industry, and current goals. This helps us provide targeted insights relevant to your specific market and competitive landscape."
    },
    {
      question: "Will this audit help if I'm in a niche industry?",
      answer: "Absolutely! Niche industries often have significant opportunities in AI search since there's less competition for AI-optimized content. We'll identify specific ways to establish your authority in your niche within AI platforms."
    },
    {
      question: "How quickly can I expect to see results from LLMEO?",
      answer: "Many clients see initial improvements in AI search mentions within 30-60 days of implementing our recommendations. However, building strong AI search authority is a long-term strategy that compounds over time, similar to traditional SEO but often with faster initial results."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-8">
              ✅ FREE Professional LLMEO Audit - Limited Time
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="gradient-text"> AI Search Potential</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get a comprehensive analysis of how your brand performs in ChatGPT, Claude, Perplexity, and other AI platforms. 
              Completely free, no strings attached.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {["24-Hour Turnaround", "Competitive Analysis Included", "Custom Strategy Roadmap"].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-card backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-enhanced rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Claim Your Free LLMEO Audit
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll analyze your AI search presence within 24 hours
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL *</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Technology, Healthcare, Finance" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="currentTraffic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Website Traffic *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select traffic range</option>
                              <option value="0-1k">0 - 1,000 visitors</option>
                              <option value="1k-5k">1,000 - 5,000 visitors</option>
                              <option value="5k-25k">5,000 - 25,000 visitors</option>
                              <option value="25k-100k">25,000 - 100,000 visitors</option>
                              <option value="100k+">100,000+ visitors</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marketing Budget Range *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="">Select budget range</option>
                              <option value="under-5k">Under $5,000/month</option>
                              <option value="5k-15k">$5,000 - $15,000/month</option>
                              <option value="15k-50k">$15,000 - $50,000/month</option>
                              <option value="50k+">$50,000+/month</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mainGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Main Business Goals *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What are your primary goals for the next 12 months? (e.g., increase brand awareness, generate more leads, enter new markets)"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentChallenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Marketing Challenges *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What marketing challenges are you currently facing? What's not working with your current strategy?"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full btn-hover shadow-glow transform hover:scale-105 transition-all duration-200"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Free LLMEO Audit'}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      🔒 Your information is secure and will never be shared with third parties
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You'll Get in Your Free Audit
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive LLMEO audit provides actionable insights to dominate AI search in your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-enhanced p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-primary to-primary/70 p-3 rounded-xl shadow-lg">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Leading Businesses Choose Our LLMEO Audits
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <p className="text-gray-700">Businesses Audited</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">24hr</div>
                    <p className="text-gray-700">Average Delivery Time</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
                    <p className="text-gray-700">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about LLMEO and our free audit service
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <HelpCircle className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Contact Our LLMEO Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LLMEOAudit;
