
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Scale, FileText, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
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
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Service Description</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  LLMify provides Large Language Model Engine Optimization (LLMEO) services, including:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• AI search ranking optimization</li>
                  <li>• Content creation and optimization for AI systems</li>
                  <li>• Continuous monitoring and maintenance</li>
                  <li>• AI persona development and management</li>
                  <li>• Crisis management and reputation protection</li>
                  <li>• Enterprise-level optimization solutions</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">User Responsibilities</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">You agree to:</h3>
                <ul className="space-y-2 mb-6 text-slate-300">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Not engage in fraudulent or harmful activities</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-4 text-white">You agree NOT to:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Use our services for illegal or unethical purposes</li>
                  <li>• Attempt to reverse engineer or hack our systems</li>
                  <li>• Share account access with unauthorized parties</li>
                  <li>• Interfere with the proper functioning of our services</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Payment Terms</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong className="text-white">Fees:</strong> All fees are as described in your service agreement and are non-refundable unless otherwise stated</li>
                  <li>• <strong className="text-white">Billing:</strong> Services are billed monthly or annually as selected</li>
                  <li>• <strong className="text-white">Late Payments:</strong> Late payments may result in service suspension</li>
                  <li>• <strong className="text-white">Price Changes:</strong> We reserve the right to modify pricing with 30 days notice</li>
                  <li>• <strong className="text-white">Taxes:</strong> You are responsible for applicable taxes</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Service Guarantees</h2>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">LLMEO Guarantee</h3>
                <p className="mb-4 text-slate-300">
                  We guarantee improvements in your AI search visibility within 90 days of service commencement, 
                  or we will provide additional optimization at no cost. This guarantee is subject to:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Full compliance with our optimization recommendations</li>
                  <li>• Provision of necessary access and information</li>
                  <li>• No conflicting optimization efforts by third parties</li>
                  <li>• Maintenance of service throughout the guarantee period</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                Limitations of Liability
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  To the maximum extent permitted by law, LLMify shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="space-y-2 mb-4 text-slate-300">
                  <li>• Loss of profits, revenue, or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Third-party claims or actions</li>
                  <li>• Service interruptions or delays</li>
                </ul>
                <p className="text-slate-300">
                  Our total liability for any claim shall not exceed the amount paid by you for 
                  services in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Intellectual Property</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Our IP Rights</h3>
                <p className="mb-4 text-slate-300">
                  All content, software, and materials provided by LLMify remain our intellectual property. 
                  You receive a limited license to use our services as intended.
                </p>
                
                <h3 className="text-lg font-semibold mb-4 text-white">Your Content</h3>
                <p className="text-slate-300">
                  You retain ownership of content you provide to us. By using our services, you grant us 
                  a license to use, modify, and optimize your content for LLMEO purposes.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Termination</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  Either party may terminate this agreement with 30 days written notice. We may terminate 
                  immediately for breach of these terms. Upon termination:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Your access to services will be discontinued</li>
                  <li>• Outstanding fees become immediately due</li>
                  <li>• We will provide final reports and data export</li>
                  <li>• Confidentiality obligations continue</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Governing Law</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="text-slate-300">
                  These terms are governed by the laws of California, United States. Any disputes will be 
                  resolved through binding arbitration in San Francisco, CA, except for intellectual property 
                  disputes which may be brought in federal court.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  For questions about these terms or our services, contact us:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Email: legal@llmify.com</li>
                  <li>• Phone: 1-800-LLMIFY-1</li>
                  <li>• Address: LLMify Inc., San Francisco, CA</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
