import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle, Target, Star, Zap, Shield, Award } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Pinterest-inspired clean design */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-slate-900 leading-tight">
              Meet <span className="text-blue-600 font-medium">Hero</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The AI hiring system built for modern teams. Say goodbye to endless interviews and mismatched hires.
            </p>
            <Button 
              size="lg" 
              variant="default"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/hiring-intake'}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Hero Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Card className="p-6 shadow-sm border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Save Time</h3>
              <p className="text-slate-600 text-sm">Streamlined hiring process that delivers results in days, not months.</p>
            </Card>

            <Card className="p-6 shadow-sm border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Pre-Vetted Talent</h3>
              <p className="text-slate-600 text-sm">All candidates are thoroughly screened and reference-checked.</p>
            </Card>

            <Card className="p-6 shadow-sm border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Perfect Match</h3>
              <p className="text-slate-600 text-sm">Our AI matches candidates to your exact requirements.</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
              Traditional hiring <span className="text-red-500 font-medium">wastes time</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Companies spend months sorting through unqualified candidates, paying hefty recruiter fees, 
              and still end up with mismatched hires.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 text-center shadow-sm border-gray-100">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                Our Solution
              </span>
              <h3 className="text-3xl font-light mb-4 text-slate-900">
                <span className="text-emerald-600 font-medium">Pre-vetted talent</span> ready to work
              </h3>
              <p className="text-lg text-slate-600">
                We handle everything from sourcing to screening, delivering only qualified candidates 
                who match your exact requirements.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
              Why choose <span className="text-blue-600 font-medium">Hero</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to build your dream team, without the traditional hiring headaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                color: "blue",
                title: "Quality Guarantee",
                description: "Perfect hire or we keep working until you're satisfied"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                color: "emerald",
                title: "Lightning Fast",
                description: "Get qualified candidates in days, not months"
              },
              {
                icon: <Star className="w-8 h-8" />,
                color: "purple",
                title: "Elite Talent",
                description: "Access to top-tier professionals across all industries"
              },
              {
                icon: <Award className="w-8 h-8" />,
                color: "amber",
                title: "Proven Results",
                description: "95% of our placements exceed performance expectations"
              },
              {
                icon: <Users className="w-8 h-8" />,
                color: "rose",
                title: "Perfect Match",
                description: "AI-powered matching ensures cultural and skill fit"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                color: "indigo",
                title: "No Risk",
                description: "Free replacement guarantee for complete peace of mind"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full shadow-sm border-gray-100 hover:shadow-md transition-all duration-300 group">
                  <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${feature.color}-600`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
              Loved by <span className="text-blue-600 font-medium">founders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Hero transformed our hiring process. We went from 3 months to 2 weeks for quality hires.",
                author: "Sarah Chen",
                role: "CEO, TechFlow"
              },
              {
                quote: "The quality of candidates is unmatched. Every person they sent was interview-ready.",
                author: "Marcus Rodriguez",
                role: "CTO, DataVault"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 shadow-sm border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </Card>
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
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">
              Ready to transform your hiring?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join hundreds of companies who've already built world-class teams with Hero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowEmailCapture(true)}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Quality guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Free consultation</span>
              </div>
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
