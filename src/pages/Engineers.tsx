import { motion } from "framer-motion";
import { Code, Rocket, Database, Globe, Cpu, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Engineers() {
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
                  <Code className="w-20 h-20 text-primary mx-auto relative z-10" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Elite <span className="text-gradient">Engineers</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
              >
                Scale your development team with world-class engineers who ship production-ready code from day one
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

        {/* Specializations Section */}
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
                  Engineering <span className="text-gradient">Specializations</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From full-stack development to AI/ML engineering, find the perfect technical talent for your needs
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
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
                  <p className="text-muted-foreground mb-6">
                    React, Node.js, Python, and modern web technologies
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
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
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Backend Engineering</h3>
                  <p className="text-muted-foreground mb-6">
                    Scalable APIs, microservices, and cloud infrastructure
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Docker</span>
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
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI/ML Engineering</h3>
                  <p className="text-muted-foreground mb-6">
                    Machine learning models, data science, and AI integration
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TensorFlow</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PyTorch</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">OpenAI</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Engineers */}
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
                  Why Our <span className="text-gradient">Engineers</span>
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
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ship Fast</h3>
                  <p className="text-muted-foreground">
                    Pre-vetted engineers who can contribute to your codebase from day one, no ramp-up time needed
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
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Top 1% Talent</h3>
                  <p className="text-muted-foreground">
                    Rigorously screened engineers with proven track records at leading tech companies
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
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Global Scale</h3>
                  <p className="text-muted-foreground">
                    Access talented engineers from around the world, working in your timezone
                  </p>
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
                  Ready to Build the Future?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join the waitlist and be among the first to access our curated pool of elite engineers
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