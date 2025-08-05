import { ProcessedLogo } from "./ProcessedLogo";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-6">
          <div className="flex justify-between items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ProcessedLogo className="w-5 h-5" />
                  <h3 className="font-bold text-lg text-foreground">Hero</h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Empowering founders with world-class talent through innovative hiring solutions.
                </p>
              </div>

            <div className="flex space-x-8">
              <a href="/#top" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/#top" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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