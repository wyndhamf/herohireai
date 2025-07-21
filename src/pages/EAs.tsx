import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function EAs() {
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
              Executive <span className="text-gradient font-medium">Assistants</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Get a world-class Executive Assistant to handle your administrative tasks and free up your time for what matters most
            </motion.p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* What EAs Do */}
        <section className="bg-primary w-full">
          <div className="container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
              What Our EAs Can Do For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Calendar Management</h3>
                <p className="text-white/80 text-sm">
                  Schedule meetings, manage appointments, and optimize your daily schedule
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Email Management</h3>
                <p className="text-white/80 text-sm">
                  Filter, organize, and respond to emails on your behalf
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Document Preparation</h3>
                <p className="text-white/80 text-sm">
                  Create presentations, reports, and other business documents
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Travel Coordination</h3>
                <p className="text-white/80 text-sm">
                  Plan and book travel arrangements, accommodations, and itineraries
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
              Ready to Get Your EA?
            </h2>
            <p className="text-white/80 mb-8">
              Start working with a world-class Executive Assistant today
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