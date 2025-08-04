
import { Calendar, User, ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The AI Search Revolution: Why Traditional SEO is Dead",
      excerpt: "ChatGPT gets 100M+ queries daily. Google's losing ground. If you're still optimizing for 2020's search, you're already behind.",
      author: "Alex Thompson",
      date: "Dec 8, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "How to Dominate ChatGPT Recommendations in 30 Days",
      excerpt: "The exact framework we use to get clients ranking #1 in AI search results. Step-by-step blueprint included.",
      author: "Sarah Chen",
      date: "Dec 5, 2024",
      category: "Strategy",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "LLMEO vs SEO: The Ultimate Showdown",
      excerpt: "Why smart companies are shifting budgets from traditional SEO to LLMEO. The data will shock you.",
      author: "Marcus Rivera",
      date: "Dec 2, 2024",
      category: "Analysis",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Case Study: How We Increased AI Visibility by 400%",
      excerpt: "Real client, real results. See the exact tactics that transformed a struggling SaaS into an AI search leader.",
      author: "Dr. Amanda Foster",
      date: "Nov 29, 2024",
      category: "Case Study",
      readTime: "10 min read",
      featured: false
    },
    {
      title: "The Future of AI Search: What's Coming in 2025",
      excerpt: "Exclusive insights into the AI search landscape. Get ahead of trends that will reshape digital marketing forever.",
      author: "Alex Thompson",
      date: "Nov 26, 2024",
      category: "Predictions",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Emergency LLMEO: What to Do When Competitors Attack",
      excerpt: "Your reputation under fire in AI search? Our crisis management playbook shows how to fight back and win.",
      author: "Sarah Chen",
      date: "Nov 23, 2024",
      category: "Crisis Management",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "Industry Insights", "Strategy", "Case Study", "Analysis", "Predictions", "Crisis Management"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The LLMEO
              <span className="gradient-text"> Intelligence Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead of the AI search curve. Insights, strategies, and intelligence that keep you winning while competitors wonder what happened.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="card-enhanced p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        Featured Article
                      </span>
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{post.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 btn-hover shadow-glow">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Latest Intelligence
              </h2>
              <p className="text-xl text-muted-foreground">
                The insights your competitors wish they had
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article key={index} className="card-enhanced overflow-hidden hover:shadow-glow transition-all duration-300">
                  <div className="bg-gradient-to-br from-muted/50 to-primary/20 h-48 flex items-center justify-center">
                    {index % 3 === 0 && <Target className="w-16 h-16 text-primary" />}
                    {index % 3 === 1 && <Zap className="w-16 h-16 text-accent" />}
                    {index % 3 === 2 && <TrendingUp className="w-16 h-16 text-primary" />}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Want Exclusive LLMEO Intelligence?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Join 10,000+ smart marketers getting insider intelligence delivered weekly. 
                  The strategies we share privately are the ones that win markets.
                </p>
              </div>
              <Link to="/llmeo-audit">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-full btn-hover shadow-glow">
                  Get Your Free LLMEO Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
