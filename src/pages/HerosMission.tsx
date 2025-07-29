import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HerosMission() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Mission Content */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Target className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-normal mb-8">
                Hero's <span className="text-gradient font-medium">Mission</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose prose-lg max-w-none text-center"
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                At Hero, our mission is to eliminate the friction of hiring for founders, operators, and fast-growing teams.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We're building the fastest AI-native recruiting system—designed not for HR departments, but for builders.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                By combining global talent, intelligent matching, and proven onboarding systems, we help companies hire executive assistants, operators, and specialists in days—not months.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8"
              >
                <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Hire fast. Hire right. Buy back your time.
                </p>
                <p className="text-lg text-primary font-medium">
                  That's the Hero promise.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}