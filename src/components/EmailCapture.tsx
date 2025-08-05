import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Timer, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailCaptureProps {
  className?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      <section className={`py-16 px-6 ${className}`}>
        <div className="container mx-auto max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">You're In!</h3>
            <p className="text-slate-600">
              We'll be in touch within 24 hours to discuss your hiring needs.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-6 bg-white ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl" />
          <div className="absolute top-6 right-6 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-6 left-6 w-24 h-24 bg-purple-200/30 rounded-full blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 text-center p-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-light mb-4 text-slate-900 leading-tight"
            >
              Skip the line. <span className="text-blue-600 font-medium">Hire fast.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              Get matched with 3 pre-vetted candidates this month. No job posts, no screening calls, no wasted time.
            </motion.p>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-md mx-auto mb-8"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full py-6 text-lg border-2 border-slate-200 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-6 text-lg border-2 border-slate-200 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                />
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full py-6 text-lg border-2 border-slate-200 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Start
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-blue-600" />
                <span>Quick delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>Pre-screened candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>No setup fees</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs text-slate-500 mt-4"
            >
              Join 500+ companies who've streamlined their hiring process
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};