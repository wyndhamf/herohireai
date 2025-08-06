import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, Users, Target, Zap, UserPlus, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Sophisticated Background with seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/80 via-blue-800/60 to-blue-600" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column - Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center lg:text-left"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[0.9] tracking-tight text-white"
                  >
                    <span className="font-normal">The</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium">Buyback Blueprint™</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl md:text-3xl font-light mb-8 text-white/90 leading-relaxed"
                  >
                    Hire a world-class Executive Assistant
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex items-center justify-center lg:justify-start gap-8 mb-8"
                  >
                    <div className="flex items-center gap-2 text-blue-400">
                      <UserPlus className="w-6 h-6" />
                      <span className="text-lg font-light">Attract</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400">
                      <TrendingUp className="w-6 h-6" />
                      <span className="text-lg font-light">Develop</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Heart className="w-6 h-6" />
                      <span className="text-lg font-light">Retain</span>
                    </div>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  >
                    To win in business, you need the right people in the right seats. We'll help you attract, develop and retain a world-class Executive Assistant - the kind who protects your time, drives outcomes and acts as a true extension of you.
                  </motion.p>
                </motion.div>

                {/* Right Column - Investment Section */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
                    <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      Limited Time Offer
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
                      <span className="text-white font-medium">Premium Access</span>
                    </h2>
                    <p className="text-white/70 mb-12 text-lg">
                      Limited to the first 10 founders and CEOs
                    </p>
                    
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-12 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full mb-8"
                      onClick={handlePayment}
                    >
                      Secure Your Spot Now
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-px h-8 bg-white/30"></div>
                      <span className="text-sm text-white/90 font-medium">OR</span>
                      <div className="w-px h-8 bg-white/30"></div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <img 
                        src="/lovable-uploads/d7f5f2fa-a1a3-4c2c-a8d5-dc2390893238.png" 
                        alt="Stripe Payment QR Code" 
                        className="w-32 h-32 rounded-lg bg-white p-2"
                      />
                      <span className="text-sm text-white font-medium">Scan to pay with Stripe</span>
                    </div>
                    
                    <div className="text-sm text-white/90 mt-6 font-medium">
                      Start transforming your business today
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Founder Impact Highlights - Seamless transition from hero */}
        <section className="py-32 px-6 bg-gradient-to-b from-blue-600 via-indigo-600 to-slate-100">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-white">
                Founder Impact <span className="font-medium">Highlights</span>
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Transform how you work and reclaim your time
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Reclaim Your Time", description: "for high-value work" },
                { icon: Target, title: "Clear inbox & calendar", description: "organized operations" },
                { icon: Users, title: "Delight clients & investors", description: "automatically—no follow-ups missed" },
                { icon: Zap, title: "Delegate once", description: "tasks become living, self-updating SOPs" },
                { icon: Shield, title: "Shield deep work", description: "EA gatekeeps all distractions" },
                { icon: CheckCircle, title: "Offload travel & events", description: "personal admin end-to-end" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees & EA Skill Stack - Smooth transition */}
        <section className="py-32 px-6 bg-gradient-to-b from-slate-100 via-white to-slate-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-slate-900">
                Our <span className="text-emerald-600 font-medium">guarantees</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Guarantees */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-semibold mb-8 text-slate-900">What we promise</h3>
                <div className="space-y-6">
                  {[
                    "Fast hiring process.",
                    "Performance Guarantee: If your EA departs or under-performs, we replace them free.",
                    "Minimal founder time investment for hire"
                  ].map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 leading-relaxed">{guarantee}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* EA Skill Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-semibold mb-8 text-slate-900">EA Skill Stack</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  Our Executive Assistant Hiring System is backed by real world results proven through Serv Recruitment Agency founder Jackie Serviss. It includes:
                </p>
                <div className="space-y-4">
                  {[
                    "Email & task prioritization",
                    "Schedule control & focus protection", 
                    "SOP creation playbook",
                    "Delegation via Loom & AI documentation",
                    "CRM hygiene & customer follow-up"
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600">{skill}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section - Smooth transition from white to dark */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-600 to-slate-800" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light text-white italic leading-tight drop-shadow-lg">
                "IF YOU DON'T HAVE AN ASSISTANT, <br />
                <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent font-medium drop-shadow-none">YOU ARE ONE."</span>
              </blockquote>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}