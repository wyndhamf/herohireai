import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Target, Palette, BarChart3, Zap, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Marketing() {
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
                  <Megaphone className="w-20 h-20 text-primary mx-auto relative z-10" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Growth <span className="text-gradient">Marketing</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
              >
                Scale your brand with performance-driven marketers who turn creativity into measurable growth
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

        {/* Marketing Specializations */}
        <section className="py-20 feature-grid">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Marketing <span className="text-gradient">Specializations</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From performance marketing to brand strategy, connect with experts who drive real business results
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Performance Marketing</h3>
                  <p className="text-muted-foreground mb-6">
                    Paid ads, conversion optimization, and growth hacking
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Google Ads</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Facebook</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Analytics</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Creative Strategy</h3>
                  <p className="text-muted-foreground mb-6">
                    Brand identity, content creation, and visual storytelling
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Branding</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Design</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Video</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="glass card-glow rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Growth Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Data analysis, attribution modeling, and insights
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Mixpanel</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Amplitude</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SQL</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Impact */}
        <section className="py-20 bg-secondary/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Drive Real <span className="text-gradient">Impact</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ROI-Focused</h3>
                  <p className="text-muted-foreground">
                    Every campaign is optimized for measurable business outcomes and sustainable growth
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Rapid Execution</h3>
                  <p className="text-muted-foreground">
                    Launch campaigns faster with marketers who understand modern growth tactics
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Work with marketers who have scaled brands from startup to IPO
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Success <span className="text-gradient">Metrics</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our marketers consistently deliver exceptional results
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    250%
                  </div>
                  <p className="text-muted-foreground">Average ROI Increase</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    85%
                  </div>
                  <p className="text-muted-foreground">Faster Time to Market</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    40%
                  </div>
                  <p className="text-muted-foreground">Lower CAC Average</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
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
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Scale Your Brand?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join the waitlist and be first to access our network of growth marketing experts
                </p>
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