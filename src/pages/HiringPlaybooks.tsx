import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HiringPlaybooks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-6xl font-normal mb-6"
            >
              Hiring, <span className="text-gradient font-medium">Solved for Founders</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Forget job boards and recruiter fees. Hero matches you with top global talent—and helps you onboard fast.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Built for founders who want to scale—without the hiring headaches.
            </motion.p>
          </div>
        </section>

        {/* Why Hero Exists */}
        <section className="container px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Hero Exists</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Hiring is broken.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Recruiters are expensive. Job boards are noisy. And finding a great EA or operator takes weeks—even when you know exactly what you need.
              </p>
              <p className="text-xl font-semibold text-primary mb-8">
                Hero fixes that.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-6">We help founders:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg p-6 border">
                  <p className="text-lg font-medium">Match with high-leverage global talent</p>
                </div>
                <div className="bg-background rounded-lg p-6 border">
                  <p className="text-lg font-medium">Interview 1–3 vetted finalists</p>
                </div>
                <div className="bg-background rounded-lg p-6 border">
                  <p className="text-lg font-medium">Onboard in 30 days with a done-for-you playbook</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How Hero Works */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-center mb-12"
            >
              How Hero Works
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Curated Matching</h3>
                <p className="text-muted-foreground">
                  Tell us who you need—we'll deliver fully prepped, global candidates ready to save you 20+ hours/week.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Human Review</h3>
                <p className="text-muted-foreground">
                  Every match is reviewed by our hiring experts. No resumes. Just talent that fits.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Guided Onboarding</h3>
                <p className="text-muted-foreground">
                  We walk you and your hire through a 30/60/90 day ramp-up plan—customized to your workflow.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="container px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-center mb-12"
            >
              What You Get
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Vetted global EA or ops hire",
                "Calendar + inbox cleanup",
                "Delegation systems + SOP templates",
                "Founder onboarding dashboard",
                "Performance tracking + weekly check-ins",
                "Support if anything goes wrong"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                  className="bg-background rounded-lg p-6 border flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Coming Soon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We're just getting started.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="text-left max-w-2xl mx-auto"
            >
              <p className="text-lg text-muted-foreground mb-4">Soon, Hero will include:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Task-to-delegate analysis (syncs with your calendar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Smart onboarding assistant for your new hire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">–</span>
                  <span>Workflow scorecards to track time saved</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 bg-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Ready to Buy Back Your Time?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Start your Hero journey and meet your first candidate this week.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
                Get Started →
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}