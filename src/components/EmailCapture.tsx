import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Download, Mail, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface EmailCaptureProps {
  className?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className={`py-20 px-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 ${className}`}>
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg border border-emerald-100"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-slate-900">Check Your Email!</h3>
            <p className="text-lg text-slate-600 mb-6">
              Your hiring guide is on its way. We'll also send you exclusive insights on building world-class teams.
            </p>
            <p className="text-sm text-slate-500">
              Didn't receive it? Check your spam folder or contact us directly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300">
              <Download className="w-4 h-4" />
              Free Download
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Get the <span className="text-blue-400 font-medium">Hiring Playbook</span> that top companies use
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download our proven framework for identifying, attracting, and securing elite talent in any market.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "Complete candidate evaluation framework",
                "Interview scripts that reveal true potential", 
                "Negotiation tactics for competitive offers",
                "Onboarding checklist for immediate impact"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Downloaded by 12,000+ founders</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Get Instant Access
                  </h3>
                  <p className="text-blue-200">
                    Enter your email to download the complete guide
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 py-6 text-lg bg-white border-white/20 text-slate-900 placeholder-slate-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        Download Free Guide
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
                
                <p className="text-xs text-blue-200 text-center mt-4">
                  No spam. Unsubscribe anytime. Trusted by top companies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};