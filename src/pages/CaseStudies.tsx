import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container px-4 py-3">
          <p className="text-center text-primary font-semibold">Coming Soon - Case Studies</p>
        </div>
      </div>
      
      <main className="pt-24">
        {/* Coming Soon Content */}
        <section className="container px-4 py-32">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl font-normal mb-6"
            >
              Case <span className="text-gradient font-medium">Studies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Our case studies are launching soon. Get ready for real success stories and proven results from our talent placements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-primary font-semibold text-lg"
            >
              Coming Soon
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}