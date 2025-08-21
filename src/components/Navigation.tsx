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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <ProcessedLogo className="w-6 h-6 text-emerald-600" />
            <span className="font-bold text-xl text-emerald-600">Hero</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/new-intake-form" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              New Intake Form
            </Link>
            <Link to="/hiring-intake" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              Hiring Intake
            </Link>
            <Link to="/ea-intake" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">
              EA Intake
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 text-slate-600 hover:bg-slate-100"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
                  <div className="flex flex-col h-full pt-12">
                    {/* Logo Section */}
                    <Link 
                      to="/" 
                      className="flex items-center gap-2 mb-8 px-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <ProcessedLogo className="w-6 h-6 text-emerald-600" />
                      <span className="font-bold text-lg text-emerald-600">Hero</span>
                    </Link>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col gap-4 px-2">
                      <Link 
                        to="/new-intake-form" 
                        className="text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        New Intake Form
                      </Link>
                      <Link 
                        to="/hiring-intake" 
                        className="text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Hiring Intake
                      </Link>
                      <Link 
                        to="/ea-intake" 
                        className="text-slate-700 hover:text-emerald-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        EA Intake
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;