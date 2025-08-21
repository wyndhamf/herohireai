import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle, Target, Calendar, FileText, Shield, Zap, Star, Building, Briefcase, Scale, Calculator, Hammer, TrendingUp, Award, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { EmailCapture } from "@/components/EmailCapture";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate text color based on scroll position
  const getHeroTextColor = () => {
    // Change to dark text when scrolled past the hero section (approximately 800px)
    if (scrollY > 800) return "text-slate-900";
    return "text-white";
  };

  const getHeroSubtextColor = () => {
    if (scrollY > 800) return "text-slate-600";
    return "text-white/70";
  };

  const getHeroSmallTextColor = () => {
    if (scrollY > 800) return "text-slate-500";
    return "text-white/60";
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background with smooth fade to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/60 via-slate-900/30 to-white" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto text-center"
          >
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight transition-colors duration-500 ${getHeroTextColor()}`}
            >
              Meet <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">Hero</span>— the AI hiring system built for modern teams.
            </motion.h1>
            
            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className={`text-xl md:text-2xl font-light leading-relaxed transition-colors duration-500 ${getHeroSubtextColor()}`}>
                Say goodbye to job boards, endless interviews, and hires that don't move the needle. Hero turns hiring into a repeatable system.
              </p>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center items-center mb-16"
            >
              <Button 
                size="xl" 
                variant="gradient"
                className="group px-8 py-4"
                onClick={() => setShowEmailCapture(true)}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
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

      {/* Problem Statement Section - Seamless transition from hero */}
      <section className="py-32 px-6 bg-gradient-to-b from-white/95 via-white to-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-red-50 border border-red-100 rounded-full text-sm font-medium text-red-600">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              The Current Reality
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-slate-900 leading-tight">
              Traditional hiring <span className="text-red-500 font-medium">wastes time</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Companies spend months sorting through unqualified candidates, 
              paying hefty recruiter fees, and still end up with mismatched hires.
            </p>
          </motion.div>


          {/* Solution Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 rounded-3xl p-12 border border-emerald-100 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-emerald-100 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Our Solution
            </div>
            <h3 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
              <span className="text-emerald-600 font-medium">Pre-vetted talent</span> ready to work
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We handle the entire process—from sourcing to screening to onboarding—
              delivering only qualified candidates who match your exact requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Capture Section */}
      <EmailCapture />

      {/* Simple Value Props - Smooth transition */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50/50 via-white to-emerald-50/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-12 text-slate-900"
          >
            Why <span className="text-blue-600 font-medium">Hero</span>?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Quality Guarantee</h3>
              <p className="text-slate-600">Hire elite talent or we keep working</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Pre-Vetted</h3>
              <p className="text-slate-600">All candidates are screened and reference-checked</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Perfect Match</h3>
              <p className="text-slate-600">Minimal time investment for the perfect hire</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simplified Guarantees Section - Enhanced gradient transition */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-50/60 via-blue-50/70 via-indigo-50/60 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-slate-900">
              Our <span className="text-emerald-600 font-medium">guarantee</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Quality Guarantee", description: "Perfectly matched hire or we keep working" },
              { title: "Free Replacement", description: "Replacement guarantee included" },
              { title: "Minimal Time Investment", description: "Streamlined process saves your time" },
              { title: "Fixed Pricing", description: "No hidden fees or percentage costs" }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover flex items-center gap-4 p-6 rounded-xl"
              >
                <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900">{guarantee.title}</h3>
                  <p className="text-slate-600 text-sm">{guarantee.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Footer - Smooth transition into primary gradient */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary via-primary-glow to-primary opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join founders who've already reclaimed their time and built world-class teams
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="xl" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/95 px-12 py-6 hover:scale-105 shadow-lg hover:shadow-xl border-0"
                onClick={() => setShowEmailCapture(true)}
              >
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">No setup fees • Flat pricing</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Quality placement guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
