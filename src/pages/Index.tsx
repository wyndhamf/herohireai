import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, CheckCircle, Target, Calendar, FileText, Shield, Zap, Star, Building, Briefcase, Scale, Calculator, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                AI Recruiting Platform
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                Stop Wasting 100+ Hours Hiring
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Hero Uses AI to Fix That Fast
              </p>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                HeroHire finds, vets, and delivers A-player candidates for founders and lean teams — in one hour of your time, flat pricing, and zero hiring headaches.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                  onClick={() => window.location.href = '/buyback-blueprint'}
                >
                  Start Today (Limited Time Offer) <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Professional executive assistant working efficiently" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why HeroHire Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built for Founders. Backed by AI.
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">1-Hour Hire System™</h3>
              <p className="text-sm text-muted-foreground">Complete hiring in 60 minutes</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI-Crafted Job Descriptions</h3>
              <p className="text-sm text-muted-foreground">Plus paid campaigns</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Conversational AI</h3>
              <p className="text-sm text-muted-foreground">Intelligent screening</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Test Project Coordination</h3>
              <p className="text-sm text-muted-foreground">Finalist shortlist delivered</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">30/60/90-Day Plans</h3>
              <p className="text-sm text-muted-foreground">Complete onboarding</p>
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

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic">
                    "HeroHire saved me 3 weeks of interviewing. My new EA started organizing my life from day one."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">CEO, TechStart</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 italic">
                    "The AI screening was incredible. Only quality candidates made it to my final review."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Marcus Rodriguez</div>
                      <div className="text-sm text-muted-foreground">Founder, ScaleUp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Apply Now to Reclaim Your Time
            </h2>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
                onClick={() => window.location.href = '/buyback-blueprint'}
              >
                Start Today (Limited Time Offer) <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-4 bg-background border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2025 HeroHire.ai</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
