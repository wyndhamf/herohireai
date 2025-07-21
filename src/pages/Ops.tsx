import { motion } from "framer-motion";
import { ArrowRight, Settings, BarChart, Workflow, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Ops() {
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
              Operations <span className="text-gradient font-medium">Specialists</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Streamline your business operations with experienced professionals who optimize processes and drive efficiency
            </motion.p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* What Ops Specialists Do */}
        <section className="bg-muted/5 w-full">
          <div className="container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              How Our Ops Specialists Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Workflow className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Process Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze and improve your business processes for maximum efficiency
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Turn your business data into actionable insights and strategic decisions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">System Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Set up and manage tools and systems that scale with your business
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Ensure consistent quality across all your business operations
                </p>
              </motion.div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background container px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get operations experts working on your business efficiency today
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