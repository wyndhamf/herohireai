import { motion } from "framer-motion";
import { ArrowRight, Target, Phone, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SDRs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container px-4 py-3">
          <p className="text-center text-primary font-semibold">Coming Soon - SDRs</p>
        </div>
      </div>
      
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
              Sales Development <span className="text-gradient font-medium">Representatives</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Scale your sales pipeline with expert SDRs who generate qualified leads and book meetings for your sales team
            </motion.p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/buyback-blueprint'}
            >
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* What SDRs Do */}
        <section className="bg-primary w-full">
          <div className="container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
              What Our SDRs Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Lead Generation</h3>
                <p className="text-white/80 text-sm">
                  Research and identify high-quality prospects that match your ideal customer profile
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Email Outreach</h3>
                <p className="text-white/80 text-sm">
                  Craft personalized email campaigns that get responses and drive engagement
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Cold Calling</h3>
                <p className="text-white/80 text-sm">
                  Make strategic cold calls to prospects and qualify leads for your sales team
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Pipeline Management</h3>
                <p className="text-white/80 text-sm">
                  Track and nurture leads through your sales funnel using your preferred CRM
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
              Ready to Scale Your Sales?
            </h2>
            <p className="text-white/80 mb-8">
              Get expert SDRs working on your pipeline today
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/buyback-blueprint'}
            >
              Start Today (Claim 1/10 initial spots) <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}