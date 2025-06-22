
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Shield, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                Information We Collect
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Personal Information</h3>
                <ul className="space-y-2 mb-6 text-slate-300">
                  <li>• Name and contact information</li>
                  <li>• Email address and phone number</li>
                  <li>• Company information and website details</li>
                  <li>• Payment and billing information</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-4 text-white">Technical Information</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Website analytics and performance data</li>
                  <li>• Search query patterns and optimization metrics</li>
                  <li>• Device information and IP addresses</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <Eye className="w-6 h-6 text-orange-500" />
                How We Use Your Information
              </h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong className="text-white">Service Delivery:</strong> To provide LLMEO services and optimize your AI search presence</li>
                  <li>• <strong className="text-white">Communication:</strong> To send updates, reports, and respond to your inquiries</li>
                  <li>• <strong className="text-white">Improvement:</strong> To enhance our services and develop new features</li>
                  <li>• <strong className="text-white">Analytics:</strong> To measure performance and provide insights</li>
                  <li>• <strong className="text-white">Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Data Protection & Security</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Limited access controls and staff training</li>
                  <li>• Secure data centers and backup procedures</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Information Sharing</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">We do not sell your personal information. We may share information with:</p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Service providers who assist in delivering our services</li>
                  <li>• Legal authorities when required by law</li>
                  <li>• Business partners with your explicit consent</li>
                  <li>• Successors in the event of a business transfer</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Your Rights</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">You have the right to:</p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Access and review your personal information</li>
                  <li>• Correct inaccurate or incomplete data</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Data portability and restriction of processing</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Cookies & Tracking</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  We use cookies and similar technologies to improve your experience and analyze usage patterns. 
                  You can control cookie preferences through your browser settings.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Updates to This Policy</h2>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <p className="text-slate-300">
                  We may update this privacy policy periodically. We will notify you of significant changes 
                  via email or through our service. Continued use of our services constitutes acceptance of 
                  the updated policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
              <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg p-6">
                <p className="mb-4 text-slate-300">
                  If you have questions about this privacy policy or your personal information, contact us:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Email: privacy@llmify.com</li>
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

export default PrivacyPolicy;
