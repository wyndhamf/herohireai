import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle, Target, Calendar, FileText, Shield, Zap, Star, Building, Briefcase, Scale, Calculator, Hammer, TrendingUp, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-slate-900" />
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
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-medium">Live Platform</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/70">Trusted by 200+ companies</span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.85] tracking-tight"
            >
              <span className="text-white">Hire</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">Elite Talent</span>
              <br />
              <span className="text-white/60 text-5xl md:text-6xl lg:text-7xl">in 4 weeks</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-6">
                Access pre-vetted global professionals without the overhead of traditional recruiting.
              </p>
              <p className="text-lg text-white/50">
                One platform. One process. Zero compromises.
              </p>
            </motion.div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-12 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={() => window.location.href = '/buyback-blueprint'}
              >
                Start Hiring Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                See How It Works
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-white/40"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>4-week guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>98% success rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Global talent pool</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-32 px-6 bg-white">
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

          {/* Problem Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="text-4xl font-bold text-red-500 mb-3">12 weeks</div>
              <p className="text-slate-600">Average time to hire for senior roles</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="text-4xl font-bold text-red-500 mb-3">30%</div>
              <p className="text-slate-600">Recruiter fees for executive placement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="text-4xl font-bold text-red-500 mb-3">89%</div>
              <p className="text-slate-600">Of job applications are unqualified</p>
            </motion.div>
          </div>

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
              Pre-vetted talent in <span className="text-emerald-600 font-medium">4 weeks</span>
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We handle the entire process—from sourcing to screening to onboarding—
              delivering only qualified candidates who match your exact requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-slate-900">
              How it <span className="text-blue-600 font-medium">works</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined process eliminates the traditional hiring headaches
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-3 tracking-wide">STEP 1</div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Define Requirements</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Tell us exactly what you need in a 30-minute consultation. We'll create a detailed role specification and candidate profile.
                </p>
                <div className="text-sm text-slate-500">
                  ⏱️ 30 minutes of your time
                </div>
              </div>
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="w-6 h-6 text-slate-300" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-3 tracking-wide">STEP 2</div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">AI-Powered Sourcing</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Our platform screens thousands of candidates using advanced AI, testing skills, cultural fit, and experience to find perfect matches.
                </p>
                <div className="text-sm text-slate-500">
                  ⚡ 2-3 weeks automated process
                </div>
              </div>
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="w-6 h-6 text-slate-300" />
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 h-full hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm font-semibold text-purple-600 mb-3 tracking-wide">STEP 3</div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-900">Interview & Hire</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Meet 2-3 pre-vetted finalists. Each comes with detailed profiles, work samples, and reference checks already completed.
              </p>
              <div className="text-sm text-slate-500 font-medium">
                🎯 1 week to final decision
              </div>
              </div>
            </motion.div>
          </div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-16 text-white shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Result</h3>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              You get a perfectly matched hire in 4 weeks, not 4 months
            </p>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold mb-3">4 weeks</div>
                <div className="text-blue-200 text-lg">Total time to hire</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-3">98%</div>
                <div className="text-blue-200 text-lg">Success rate</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-3">1 hour</div>
                <div className="text-blue-200 text-lg">Your time invested</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-slate-900">
              Complete <span className="text-blue-600 font-medium">hiring platform</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to find, evaluate, and onboard world-class talent
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* AI Screening */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-6 text-slate-900">AI-Powered Screening</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our proprietary AI evaluates candidates across 47 different criteria, including technical skills, 
                  communication abilities, and cultural alignment with your company values.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Automated skill assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Personality & culture fit analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">Work sample evaluations</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">98.3%</div>
                <div className="text-lg text-slate-600 mb-6">Accuracy in matching candidates to role requirements</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="font-semibold text-slate-900">Traditional Methods</div>
                    <div className="text-slate-600">47% accuracy</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-semibold text-blue-900">Hero AI</div>
                    <div className="text-blue-600">98.3% accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Global Talent Pool", 
                description: "Access to pre-vetted professionals across 40+ countries and time zones"
              },
              { 
                icon: Shield, 
                title: "Background Verified", 
                description: "Complete reference checks, education verification, and work history validation"
              },
              { 
                icon: TrendingUp, 
                title: "Performance Tracking", 
                description: "Monitor hire success rates and long-term performance metrics"
              },
              { 
                icon: Award, 
                title: "Quality Guarantee", 
                description: "If your hire doesn't work out in 90 days, we'll replace them for free"
              },
              { 
                icon: Clock, 
                title: "24/7 Support", 
                description: "Dedicated success manager throughout the entire hiring and onboarding process"
              },
              { 
                icon: CheckCircle, 
                title: "Onboarding Included", 
                description: "Complete 30-day onboarding program with tools, training, and integration"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Designed for Growing Teams
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            {[
              { icon: Building, label: "SaaS" },
              { icon: Briefcase, label: "FinTech" },
              { icon: Users, label: "Agencies" },
              { icon: Scale, label: "Legal & Accounting" },
              { icon: Hammer, label: "Construction & Sales" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">{industry.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Flat Fee. Predictable Results. Zero Guesswork.
          </p>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Promise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Hire in ≤ 4 Weeks", description: "Guaranteed timeline" },
              { title: "Only 60 Minutes of Your Time", description: "Minimal founder involvement" },
              { title: "Free Replacement Guarantee", description: "Risk-free hiring" },
              { title: "12-Month Backfill Insurance", description: "Long-term protection" }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-background rounded-lg border"
              >
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{guarantee.title}</h3>
                  <p className="text-muted-foreground text-sm">{guarantee.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Footer */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
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
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/buyback-blueprint'}
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
                  <span className="text-sm">4-6 week placement guarantee</span>
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
