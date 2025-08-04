import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle, Target, Calendar, FileText, Shield, Zap, Star, Building, Briefcase, Scale, Calculator, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import Navigation from "@/components/Navigation";

import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-24 pb-32 px-4 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass rounded-full text-sm font-medium shadow-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                AI-Powered Hiring Platform
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Hire Top Talent 
                <span className="text-gradient block">Lightning Fast</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light"
              >
                Skip the job boards. Skip the recruiters.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
              >
                We deliver pre-vetted global talent directly to your inbox—with full onboarding support. Built for founders who value their time.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 items-start"
              >
                <Button 
                  size="lg" 
                  className="button-gradient text-lg px-10 py-6 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = '/buyback-blueprint'}
                >
                  Find Your Perfect Hire <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-medium">4-6 week guarantee</span>
                    </div>
                    <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-medium">Flat pricing</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Only 1 hour of your time required</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 glass p-4 rounded-2xl shadow-card z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">AI Screening</div>
                      <div className="text-xs text-muted-foreground">24/7 Active</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-8 glass p-4 rounded-2xl shadow-card z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">98% Match Rate</div>
                      <div className="text-xs text-muted-foreground">Quality Guaranteed</div>
                    </div>
                  </div>
                </motion.div>

                {/* Main Hero Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary-glow/20" />
                  <img 
                    src={heroImage} 
                    alt="Professional hiring process visualization" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Hero Exists Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Why Hero <span className="text-gradient">Exists</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-4">Hiring is broken.</p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Recruiters are expensive. Job boards are noisy. And finding a great EA or operator takes weeks—even when you know exactly what you need.
            </p>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-primary mt-8"
            >
              Hero fixes that.
            </motion.p>
          </motion.div>

          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12">We help founders:</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass card-glow rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Match with high-leverage global talent</h3>
              <p className="text-muted-foreground">Connect with pre-vetted professionals who understand your business needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass card-glow rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Interview 1-3 vetted finalists</h3>
              <p className="text-muted-foreground">Skip the noise and focus on quality candidates who've already been screened</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass card-glow rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Onboard in 30 days with a done-for-you playbook</h3>
              <p className="text-muted-foreground">Get your new hire productive fast with our proven onboarding system</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Impact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Time Back, Your Focus Restored
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">+20 hrs/week of freed up time</h3>
                <p className="text-muted-foreground">Focus on what matters most</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Inbox + calendar streamlined by Day 7</h3>
                <p className="text-muted-foreground">Organized from the start</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Auto-generated SOPs</h3>
                <p className="text-muted-foreground">Standardized processes</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Shielded deep work</h3>
                <p className="text-muted-foreground">Uninterrupted productivity</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 md:col-span-2 justify-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Admin, travel, and comms fully offloaded</h3>
                <p className="text-muted-foreground">Complete operational support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Hire Smarter
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Target, title: "AI job ads", description: "Optimized descriptions" },
              { icon: Zap, title: "Paid ad launch", description: "Multi-platform campaigns" },
              { icon: Users, title: "Smart screening", description: "AI-powered interviews" },
              { icon: Star, title: "Candidate scoring", description: "Intelligent ranking" },
              { icon: CheckCircle, title: "Onboarding setup", description: "Complete integration" },
              { icon: Shield, title: "Full integration", description: "Seamless workflow" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <CardContent className="pt-0">
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Bonus Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold mb-4">Bonus Included</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Talent Quality Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Team Builder Map</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>12-Month Backfill Guarantee</span>
              </div>
            </div>
          </motion.div>
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


      {/* Testimonials */}
      <TestimonialsSection />

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
