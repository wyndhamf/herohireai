import { useState, useEffect } from "react";
import { Menu, ChevronDown, Command } from "lucide-react";
import { ProcessedLogo } from "./ProcessedLogo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-6xl" 
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-6xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <a href="/" className="flex items-center gap-2">
            <ProcessedLogo className="w-5 h-5" />
            <span className="font-bold text-base text-white">Hero</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="/buyback-blueprint" 
              className="relative group px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10"
            >
              <span className="relative z-10">Buyback Blueprint</span>
            </a>
            
            {/* CTA Button */}
            <Button 
              size="sm" 
              variant="glass" 
              className="bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border-white/20 ml-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="glass" 
                  size="icon" 
                  className="bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border-white/20"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 backdrop-blur-xl border-l border-white/10">
                <div className="flex flex-col gap-6 mt-8">
                  <a 
                    href="/buyback-blueprint" 
                    className="text-foreground hover:text-primary transition-colors duration-300 text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Buyback Blueprint
                  </a>

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-border/20">
                    <Button 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      variant="gradient"
                      size="lg"
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;