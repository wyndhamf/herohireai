import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Users, Target, Zap, UserPlus, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QRCodeSVG } from "qrcode.react";

export default function BuybackBlueprint() {
  const handlePayment = async () => {
    try {
      const response = await fetch('/functions/v1/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      if (data.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-background container px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  <span className="font-normal">The</span> <span className="text-gradient font-medium">Buyback Blueprint™</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-xl font-semibold mb-4"
                >
                  Hire a world-class Executive Assistant in 60 minutes!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-center lg:justify-start gap-8 mb-6"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <UserPlus className="w-6 h-6" />
                    <span className="text-lg font-medium">Attract</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-lg font-medium">Develop</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Heart className="w-6 h-6" />
                    <span className="text-lg font-medium">Retain</span>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-base text-muted-foreground"
                >
                  To win in business, you need the right people in the right seats. We'll help you attract, develop and retain a world-class Executive Assistant - the kind who protects your time, drives outcomes and acts as a true extension of you, so you can stay locked in on growth.
                </motion.p>
              </div>

              {/* Right Column - Investment Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Limited Time Offer: <span className="text-primary">$10,000 USD</span>
                </h2>
                <p className="text-white/80 mb-8 text-base">
                  (limited to the first 10 founders and CEOs)
                </p>
                
                <div className="mb-6">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-base px-6 py-3 w-full"
                    onClick={handlePayment}
                  >
                    Secure Your Spot Now
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Impact Highlights */}
        <section className="bg-primary w-full">
          <div className="container px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
                Founder Impact Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Gain 20+ hrs/week for high-value work
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Achieve clear inbox & a friction-free calendar by Day 7
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Delight clients & investors automatically—no follow-ups missed
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Delegate once—tasks become living, self-updating SOPs
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Shield deep work—EA gatekeeps all distractions
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-center bg-white/10 rounded-lg p-6"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">
                    Offload travel, events & personal admin end-to-end
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees & EA Skill Stack */}
        <section className="bg-background container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Guarantees */}
              <div>
                <h2 className="text-3xl font-semibold mb-8">Guarantees</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Hire in ≤ 4 weeks.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong>Performance Guarantee:</strong> If your EA departs or under-performs in the first 6 months, we replace them free.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Total founder time investment for hire: 1 hour of interviewing top candidates
                    </p>
                  </div>
                </div>
              </div>

              {/* EA Skill Stack */}
              <div>
                <h2 className="text-3xl font-semibold mb-8">EA Skill Stack</h2>
                <p className="text-muted-foreground mb-6">
                  Our Executive Assistant Hiring System is backed by real world results proven through Serv Recruitment Agency founder Jackie Serviss. It includes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Email & task prioritization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Schedule control & focus protection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">SOP creation playbook</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Delegation via Loom & AI documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">CRM hygiene & customer follow-up</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-secondary/80 container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-white italic">
              "IF YOU DON'T HAVE AN ASSISTANT, YOU ARE ONE."
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}