import { useState, useEffect } from "react";
import { Menu, ChevronDown, Command } from "lucide-react";
import { Link } from "react-router-dom";
import { ProcessedLogo } from "./ProcessedLogo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
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
          <Link to="/" className="flex items-center gap-2">
            <ProcessedLogo className="w-5 h-5" />
            <span className="font-bold text-base text-white">Hero</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden">  {/* Hidden desktop navigation */}
            <Link 
              to="/buyback-blueprint" 
              className="relative group px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-white/10"
            >
              <span className="relative z-10">Buyback Blueprint</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            
            {/* CTAs */}
            <div className="flex items-center gap-3 ml-4">
            <Button size="sm" variant="glass" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-white hover:bg-white/10 rounded-full transition-colors border border-white/20"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 backdrop-blur-xl border-l border-white/10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                <div className="flex flex-col h-full pt-12">
                  {/* Logo Section */}
                  <Link 
                    to="/" 
                    className="flex items-center gap-2 mb-8 px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ProcessedLogo className="w-6 h-6" />
                    <span className="font-bold text-lg text-foreground">Hero</span>
                  </Link>
                  
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-4 flex-1">
                    <Link 
                      to="/buyback-blueprint" 
                      className="px-4 py-3 text-sm font-medium text-foreground bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors border border-primary/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Buyback Blueprint
                    </Link>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-auto pb-8">
                    <Button 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      variant="default"
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