import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Timer, Zap, ArrowLeft } from "lucide-react";
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

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-6 py-16 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
              className="relative max-w-lg mx-auto text-center my-8"
            >
              {/* Back arrow */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleReset}
                className="absolute top-4 left-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-200/50"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </motion.button>

              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl" />
              <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-200/40 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-200/40 rounded-full blur-lg" />
              
              {/* Main content */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-emerald-100/50">
                {/* Success icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.6
                  }}
                  className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Confetti effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 left-8 text-yellow-400 text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-6 right-12 text-blue-400 text-xl"
                >
                  🎉
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="absolute bottom-8 left-16 text-pink-400 text-lg"
                >
                  ⭐
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-semibold mb-4 text-slate-900"
                >
                  🎊 You're All Set!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-600 text-lg leading-relaxed mb-6"
                >
                  Thanks for joining! We'll reach out soon to discuss how we can help accelerate your hiring.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Response within 24 hours
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative my-8"
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};