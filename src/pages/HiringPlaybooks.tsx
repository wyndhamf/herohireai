import { motion } from "framer-motion";
import { BookOpen, Users, Target, CheckCircle, Clock, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HiringPlaybooks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative container px-4 py-24 overflow-hidden">
          <div className="absolute inset-0 hero-pattern" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <BookOpen className="w-20 h-20 text-primary mx-auto mb-6 relative z-10" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hiring, <span className="text-gradient">Solved for Founders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
            >
              Forget job boards and recruiter fees
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Hero matches you with top global talent—and helps you onboard fast. Built for founders who want to scale without the hiring headaches.
            </motion.p>
          </div>
        </section>

        {/* Image Block 1 - Modern Workspace */}
        <section className="relative py-16 overflow-hidden">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern workspace with MacBook showing lines of code"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Built for the Modern Founder</h3>
                  <p className="text-lg opacity-90">Technology-driven hiring that scales with your business</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Hero Exists */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Why Hero <span className="text-gradient">Exists</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-3xl text-muted-foreground mb-6 font-light">Hiring is broken.</p>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Recruiters are expensive. Job boards are noisy. And finding a great EA or operator takes weeks—even when you know exactly what you need.
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-primary"
                >
                  Hero fixes that.
                </motion.p>
              </div>
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
                <p className="text-xl font-bold mb-4">Match with high-leverage global talent</p>
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
                <p className="text-xl font-bold mb-4">Interview 1–3 vetted finalists</p>
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
                <p className="text-xl font-bold mb-4">Onboard in 30 days with a done-for-you playbook</p>
                <p className="text-muted-foreground">Get your new hire productive fast with our proven onboarding system</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Block 2 - Innovation */}
        <section className="relative py-16">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80" 
                  alt="Person holding blue light bulb symbolizing innovation"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl font-bold">Innovation in Hiring</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're revolutionizing how founders find and hire top talent. Our AI-driven approach eliminates the traditional pain points of recruitment.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-lg font-medium">Faster placement times</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-lg font-medium">Higher quality matches</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-lg font-medium">Seamless onboarding</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Hero Works */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-20"
            >
              How Hero <span className="text-gradient">Works</span>
            </motion.h2>
            
            {/* Process Steps with Images */}
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-3xl font-bold">Curated Matching</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Tell us who you need—we'll deliver fully prepped, global candidates ready to save you 20+ hours/week.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>AI-powered candidate matching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Global talent pool access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Pre-screened professionals</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80" 
                    alt="White robot near brown wall representing AI automation"
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                    alt="Monitor showing Java programming code"
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-3xl font-bold">Human Review</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Every match is reviewed by our hiring experts. No resumes. Just talent that fits.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span>Expert human validation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span>Skills verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span>Cultural fit assessment</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-3xl font-bold">Guided Onboarding</h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    We walk you and your hire through a 30/60/90 day ramp-up plan—customized to your workflow.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span>Structured onboarding timeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span>Performance milestones</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span>Ongoing support & guidance</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80" 
                    alt="Silver iMac with keyboard representing professional setup"
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Block */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center glass p-8 rounded-3xl"
              >
                <div className="text-5xl font-bold text-primary mb-4">98%</div>
                <div className="text-xl font-semibold mb-2">Success Rate</div>
                <div className="text-muted-foreground">Successful placements within 4-6 weeks</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center glass p-8 rounded-3xl"
              >
                <div className="text-5xl font-bold text-green-500 mb-4">20+</div>
                <div className="text-xl font-semibold mb-2">Hours Saved</div>
                <div className="text-muted-foreground">Per week for busy founders</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center glass p-8 rounded-3xl"
              >
                <div className="text-5xl font-bold text-purple-500 mb-4">30</div>
                <div className="text-xl font-semibold mb-2">Day Onboarding</div>
                <div className="text-muted-foreground">Complete integration process</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-20"
            >
              What You <span className="text-gradient">Get</span>
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80" 
                  alt="Modern glass building representing professional environment"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold mb-6">Complete Hiring Solution</h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  From initial matching to full integration, we handle every aspect of your hiring process so you can focus on growing your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">End-to-end hiring management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="font-medium">Quality guarantee & support</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Vetted global EA or ops hire", color: "primary" },
                { icon: Clock, title: "Calendar + inbox cleanup", color: "green-500" },
                { icon: BookOpen, title: "Delegation systems + SOP templates", color: "purple-500" },
                { icon: Target, title: "Founder onboarding dashboard", color: "blue-500" },
                { icon: Zap, title: "Performance tracking + weekly check-ins", color: "orange-500" },
                { icon: Shield, title: "Support if anything goes wrong", color: "red-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <p className="font-semibold text-lg">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Block 3 - Corporate Environment */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1200&q=80" 
                alt="Glass building from worm's eye view representing growth"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">Scale Without Limits</h3>
                  <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                    Build your dream team with Hero's proven hiring methodology and watch your business reach new heights
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Coming Soon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We're just getting started.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="text-left max-w-2xl mx-auto"
            >
              <p className="text-lg text-muted-foreground mb-4">Soon, Hero will include:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Task-to-delegate analysis (syncs with your calendar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Smart onboarding assistant for your new hire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Workflow scorecards to track time saved</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 bg-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Ready to Buy Back Your Time?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Start your Hero journey and meet your first candidate this week.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Get Started →
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}