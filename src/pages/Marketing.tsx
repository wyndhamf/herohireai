import { motion } from "framer-motion";
import { ArrowRight, Megaphone, PenTool, Share2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Marketing() {
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
              Marketing <span className="text-gradient font-medium">Professionals</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Grow your brand and reach your target audience with expert marketers who drive results across all channels
            </motion.p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* What Marketing Pros Do */}
        <section className="bg-primary w-full">
          <div className="container px-4 py-16">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
              What Our Marketing Experts Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Content Creation</h3>
                <p className="text-white/80 text-sm">
                  Create compelling content that engages your audience and drives conversions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Social Media Management</h3>
                <p className="text-white/80 text-sm">
                  Build and manage your social media presence across all platforms
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Paid Advertising</h3>
                <p className="text-white/80 text-sm">
                  Run and optimize paid campaigns across Google, Facebook, and other channels
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Analytics & Reporting</h3>
                <p className="text-white/80 text-sm">
                  Track performance and provide insights to optimize your marketing ROI
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
              Ready to Grow Your Marketing?
            </h2>
            <p className="text-white/80 mb-8">
              Get marketing experts working on your growth today
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