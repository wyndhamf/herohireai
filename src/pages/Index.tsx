import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import { EmailCapture } from "@/components/EmailCapture";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Pin.com style */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-800 mb-8"
          >
            <Zap className="w-4 h-4" />
            The most advanced AI Recruiter in 2025!
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-emerald-600">Hero</span>, your 24/7<br />
            <span className="text-emerald-600">Recruiting Assistant</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Source candidates, send outreach, schedule interviews, and screen ATS resumes—all with your digital recruiting assistant.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold"
              onClick={() => window.location.href = '/hiring-intake'}
            >
              Start for Free
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold"
              onClick={() => setShowEmailCapture(true)}
            >
              Book a Demo
            </Button>
          </motion.div>

          {/* Feature Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-slate-400" />
              <span>Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-slate-400" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-slate-400" />
              <span>Expert Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 opacity-60"
          >
            {/* Placeholder logos - you can replace with actual client logos */}
            <div className="text-2xl font-bold text-slate-400">TECHFLOW</div>
            <div className="text-2xl font-bold text-slate-400">DATAVAULT</div>
            <div className="text-2xl font-bold text-slate-400">INNOVATE</div>
            <div className="text-2xl font-bold text-slate-400">STARTUP</div>
            <div className="text-2xl font-bold text-slate-400">GROWTH</div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Everything you need to hire <span className="text-emerald-600">faster</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI-powered platform handles every step of your recruitment process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Candidate Sourcing",
                description: "Find qualified candidates from our extensive database and partner networks."
              },
              {
                title: "Automated Outreach",
                description: "Personalized messages sent automatically to engage top talent."
              },
              {
                title: "Smart Screening",
                description: "AI-powered resume analysis and initial candidate screening."
              },
              {
                title: "Interview Scheduling",
                description: "Seamlessly coordinate interviews between candidates and your team."
              },
              {
                title: "ATS Integration",
                description: "Works with your existing ATS and hiring workflow."
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance from our expert team."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to transform your hiring?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join hundreds of companies who've already built world-class teams with Hero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold"
                onClick={() => window.location.href = '/hiring-intake'}
              >
                Start for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold"
                onClick={() => setShowEmailCapture(true)}
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button 
              onClick={() => setShowEmailCapture(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-lg z-10"
            >
              ✕
            </button>
            <EmailCapture 
              className="bg-white rounded-2xl shadow-2xl" 
              onClose={() => setShowEmailCapture(false)} 
              onSubmit={() => {
                setShowEmailCapture(false);
                setShowThankYou(true);
                setTimeout(() => setShowThankYou(false), 5000);
              }}
            />
          </div>
        </div>
      )}

      {/* Thank You Message */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-50 border border-emerald-200 rounded-lg shadow-lg p-6 max-w-md w-full mx-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-emerald-900">Thank You!</h3>
              <p className="text-sm text-emerald-700">We'll contact you shortly to discuss your hiring needs.</p>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
