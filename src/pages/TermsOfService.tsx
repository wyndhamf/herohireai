import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our service, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Description of Service</h2>
            <p>
              Our platform provides talent marketplace services connecting employers with 
              pre-screened professionals. We facilitate the hiring process through AI-powered 
              matching and vetting services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. User Responsibilities</h2>
            <p className="mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not engage in fraudulent or harmful activities</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Payment Terms</h2>
            <p>
              Payment terms vary by service package. All fees are non-refundable unless 
              otherwise specified. We reserve the right to change our pricing with 30 days notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">5. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are owned by us 
              and are protected by international copyright, trademark, patent, trade secret, 
              and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">6. Limitation of Liability</h2>
            <p>
              In no event shall our company be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">7. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the service immediately, 
              without prior notice, for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of 
              any changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              Email: legal@company.com<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;