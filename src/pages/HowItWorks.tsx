import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-background container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-normal mb-6"
            >
              How <span className="text-gradient font-medium">HeroHire</span> Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Get world-class talent in 60 minutes or less with our streamlined hiring process
            </motion.p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Process Steps */}
        <section className="bg-primary w-full">
          <div className="container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">1. Tell Us What You Need</h3>
                <p className="text-white/80">
                  Share your requirements, and we'll match you with pre-vetted professionals from our talent pool.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">2. Get Matched in 60 Minutes</h3>
                <p className="text-white/80">
                  Our AI-powered matching system connects you with the perfect candidate within an hour.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">3. Start Working Together</h3>
                <p className="text-white/80">
                  Begin collaborating immediately with your new team member, backed by our guarantee.
                </p>
              </motion.div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary container px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Join the companies already scaling with HeroHire
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}