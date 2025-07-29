import { motion } from "framer-motion";
import { Settings, Workflow, BarChart3, Cog, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Ops() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="hero-pattern absolute inset-0" />
          <div className="container px-4 py-24 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <Settings className="w-20 h-20 text-primary mx-auto relative z-10" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Operations <span className="text-gradient">Experts</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
              >
                Streamline your business with operations specialists who turn chaos into efficient, scalable systems
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Join the Waitlist <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">Launching Q2 2024</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specializations Grid */}
        <section className="py-20 feature-grid">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Workflow className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Process Optimization</h3>
                  <p className="text-muted-foreground">Streamline workflows and eliminate bottlenecks</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
                  <p className="text-muted-foreground">Data-driven insights and performance dashboards</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Systems Integration</h3>
                  <p className="text-muted-foreground">Connect tools and platforms for seamless operations</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-radial">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Optimize Operations?</h2>
                <p className="text-xl text-muted-foreground mb-8">Join the waitlist for operations specialists</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4">
                  Join the Waitlist
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}