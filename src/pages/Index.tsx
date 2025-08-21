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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailCapture(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Pin.com style */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900"
          >
            Meet <span className="text-emerald-600">Hero</span>— the AI hiring system built for modern teams.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Say goodbye to job boards, endless interviews, and hires that don't move the needle. Hero turns hiring into a repeatable system.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold"
              onClick={() => window.location.href = '/hiring-intake'}
            >
              Get Started
            </Button>
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
            
            <div className="flex justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold"
                onClick={() => window.location.href = '/hiring-intake'}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
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
