
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LLMEOA from "./pages/LLMEOAudit";
import LLMEOGuide from "./pages/LLMEOGuide";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Webinars from "./pages/Webinars";
import AISearchTrends from "./pages/AISearchTrends";
import SupportCenter from "./pages/SupportCenter";
import Subscription from "./pages/Subscription";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";
import Partners from "./pages/company/Partners";
import LLMRankingOptimization from "./pages/services/LLMRankingOptimization";
import LLMEOContentCreation from "./pages/services/LLMEOContentCreation";
import ContinuousMaintenance from "./pages/services/ContinuousMaintenance";
import AIPersonaDevelopment from "./pages/services/AIPersonaDevelopment";
import CrisisManagement from "./pages/services/CrisisManagement";
import EnterpriseSolutions from "./pages/services/EnterpriseSolutions";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import ECommerce from "./pages/industries/ECommerce";
import SaaSTechnology from "./pages/industries/SaaSTechnology";
import Healthcare from "./pages/industries/Healthcare";
import RealEstate from "./pages/industries/RealEstate";
import Manufacturing from "./pages/industries/Manufacturing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="llmify-ui-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/llmeo-audit" element={<LLMEOA />} />
              <Route path="/llmeo-guide" element={<LLMEOGuide />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/ai-search-trends" element={<AISearchTrends />} />
              <Route path="/support" element={<SupportCenter />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              
              {/* Company Pages */}
              <Route path="/company/about-us" element={<AboutUs />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/company/press" element={<Press />} />
              <Route path="/company/partners" element={<Partners />} />
              
              {/* Service Pages */}
              <Route path="/services/llm-ranking-optimization" element={<LLMRankingOptimization />} />
              <Route path="/services/llmeo-content-creation" element={<LLMEOContentCreation />} />
              <Route path="/services/continuous-maintenance" element={<ContinuousMaintenance />} />
              <Route path="/services/ai-persona-development" element={<AIPersonaDevelopment />} />
              <Route path="/services/crisis-management" element={<CrisisManagement />} />
              <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
              
              {/* Industry Pages */}
              <Route path="/industries/professional-services" element={<ProfessionalServices />} />
              <Route path="/industries/e-commerce" element={<ECommerce />} />
              <Route path="/industries/saas-technology" element={<SaaSTechnology />} />
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/real-estate" element={<RealEstate />} />
              <Route path="/industries/manufacturing" element={<Manufacturing />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
