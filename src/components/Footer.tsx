import { Command, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Command className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Hero</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering founders with world-class talent in 60 minutes or less.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-8">
              <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Hero. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;