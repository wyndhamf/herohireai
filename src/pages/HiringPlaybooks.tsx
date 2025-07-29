import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HiringPlaybooks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container px-4 py-3">
          <p className="text-center text-primary font-semibold">Coming Soon - Hiring Playbooks</p>
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
              <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl font-normal mb-6"
            >
              Hiring <span className="text-gradient font-medium">Playbooks</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Our comprehensive hiring playbooks are launching soon. Get ready for step-by-step guides to build world-class teams.
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