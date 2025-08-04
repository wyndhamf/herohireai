import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface EmailCaptureProps {
  className?: string;
}

export const EmailCapture = ({ className = "" }: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section className={`py-24 px-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 ${className}`}>
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-3xl p-12 shadow-lg border border-emerald-100"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-slate-900">
              Check your inbox! 📧
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Your hiring blueprint is on the way. Look out for an email from our team with your personalized guide.
            </p>
            <p className="text-sm text-slate-500">
              Didn't receive it? Check your spam folder or <button className="text-blue-600 underline">contact us</button>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Download className="w-4 h-4" />
              Free Download
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Get the <span className="text-blue-600 font-medium">Elite Hiring Blueprint</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              The exact step-by-step system we use to help companies hire top 1% talent in 4 weeks or less.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "47-point candidate evaluation framework",
                "Interview scripts that reveal true potential", 
                "Salary benchmarking data for 50+ roles",
                "Red flags checklist (avoid costly mistakes)",
                "Onboarding templates for immediate impact"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-600">
                Trusted by <span className="font-semibold text-slate-900">2,847+ founders</span>
              </span>
            </div>
          </motion.div>

          {/* Right Side - Email Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Download Now (Free)
                  </h3>
                  <p className="text-slate-600">
                    Join 2,847+ smart founders who've already downloaded this blueprint
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Work Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 px-4 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Get Free Blueprint
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-slate-500">
                      No spam. Unsubscribe anytime. 
                      <br />
                      Used by teams at Google, Tesla, and 500+ startups.
                    </p>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Instant Download</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>No Credit Card</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>100% Free</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};