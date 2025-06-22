
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Scale, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  const serviceFeatures = [
    "AI search ranking optimization",
    "Content creation and optimization for AI systems", 
    "Continuous monitoring and maintenance",
    "AI persona development and management",
    "Crisis management and reputation protection",
    "Enterprise-level optimization solutions"
  ];

  const userResponsibilities = {
    mustDo: [
      "Provide accurate and complete information",
      "Maintain the security of your account credentials", 
      "Use our services in compliance with applicable laws",
      "Respect intellectual property rights",
      "Not engage in fraudulent or harmful activities"
    ],
    mustNotDo: [
      "Use our services for illegal or unethical purposes",
      "Attempt to reverse engineer or hack our systems",
      "Share account access with unauthorized parties", 
      "Interfere with the proper functioning of our services"
    ]
  };

  const guaranteeConditions = [
    "Full compliance with our optimization recommendations",
    "Provision of necessary access and information",
    "No conflicting optimization efforts by third parties", 
    "Maintenance of service throughout the guarantee period"
  ];

  const liabilityExclusions = [
    "Loss of profits, revenue, or business opportunities",
    "Data loss or corruption",
    "Third-party claims or actions",
    "Service interruptions or delays"
  ];

  const terminationConsequences = [
    "Your access to services will be discontinued",
    "Outstanding fees become immediately due", 
    "We will provide final reports and data export",
    "Confidentiality obligations continue"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">LLMify</span>
            </Link>
            
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-white hover:bg-slate-800">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Terms of Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Please read these terms carefully before using our LLMEO services.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last updated: December 20, 2024
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
            
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <FileText className="w-6 h-6 text-orange-500" />
                Agreement to Terms
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  By accessing and using LLMify's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
                <p className="text-slate-300">
                  These terms apply to all users of the service, including browsers, vendors, customers, 
                  merchants, and content contributors.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Service Description</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  LLMify provides Large Language Model Engine Optimization (LLMEO) services, including:
                </p>
                <ul className="space-y-2 text-slate-300">
                  {serviceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">User Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-400">You agree to:</h3>
                  <ul className="space-y-2 text-slate-300">
                    {userResponsibilities.mustDo.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-400">You agree NOT to:</h3>
                  <ul className="space-y-2 text-slate-300">
                    {userResponsibilities.mustNotDo.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Payment Terms</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Billing & Fees</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• All fees are non-refundable unless otherwise stated</li>
                      <li>• Services billed monthly or annually as selected</li>
                      <li>• You are responsible for applicable taxes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Payment Policy</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Late payments may result in service suspension</li>
                      <li>• Price changes require 30 days notice</li>
                      <li>• Payment methods: Credit card, ACH, wire transfer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Guarantees */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">LLMEO Service Guarantee</h2>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Our Promise</h3>
                  <p className="mb-4 text-slate-300">
                    We guarantee improvements in your AI search visibility within 90 days of service commencement, 
                    or we will provide additional optimization at no cost.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-white">Guarantee Conditions:</h4>
                  <ul className="space-y-2 text-slate-300">
                    {guaranteeConditions.map((condition, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitations of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                Limitations of Liability
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  To the maximum extent permitted by law, LLMify shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including:
                </p>
                <ul className="space-y-2 mb-4 text-slate-300">
                  {liabilityExclusions.map((exclusion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      {exclusion}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-300 bg-orange-600/10 border border-orange-500/20 rounded p-3">
                  <strong>Total Liability Cap:</strong> Our total liability for any claim shall not exceed the amount 
                  paid by you for services in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Intellectual Property</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Our IP Rights</h3>
                  <p className="text-slate-300">
                    All content, software, and materials provided by LLMify remain our intellectual property. 
                    You receive a limited license to use our services as intended.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Your Content</h3>
                  <p className="text-slate-300">
                    You retain ownership of content you provide to us. By using our services, you grant us 
                    a license to use, modify, and optimize your content for LLMEO purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Termination</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  Either party may terminate this agreement with 30 days written notice. We may terminate 
                  immediately for breach of these terms.
                </p>
                <h4 className="font-semibold mb-3 text-white">Upon Termination:</h4>
                <ul className="space-y-2 text-slate-300">
                  {terminationConsequences.map((consequence, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      {consequence}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Governing Law</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="text-slate-300">
                  These terms are governed by the laws of Washington State, United States. Any disputes will be 
                  resolved through binding arbitration in Seattle, WA, except for intellectual property 
                  disputes which may be brought in federal court.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  For questions about these terms or our services, contact us:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-slate-300">
                  <div>
                    <strong className="text-white">Email:</strong><br />
                    support@llmify.io
                  </div>
                  <div>
                    <strong className="text-white">Phone:</strong><br />
                    1-800-4-LLMIFY
                  </div>
                  <div>
                    <strong className="text-white">Address:</strong><br />
                    Seattle, WA 98101
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
