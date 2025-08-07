
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import UrgencySection from '@/components/UrgencySection';
import Footer from '@/components/Footer';
import AffiliateTracker from '@/components/AffiliateTracker';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AffiliateTracker />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <UrgencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
