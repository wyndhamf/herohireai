import { useState, useEffect } from "react";
import { Command, Menu, ChevronDown } from "lucide-react";
import heroLogo from "@/assets/hero-logo.png";
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
            <img src={heroLogo} alt="Hero" className="w-8 h-8" />
            <span className="font-bold text-base">Hero</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Product Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
               <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/eas" className="w-full">EAs</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/engineers" className="w-full">Engineers</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/sdrs" className="w-full">SDRs</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/ops" className="w-full">Ops</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/marketing" className="w-full">Marketing</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/success" className="w-full">Success</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/hiring-playbooks" className="w-full">Hiring Playbooks</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/faq" className="w-full">FAQ</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">
                  <a href="/heros-mission" className="w-full">Hero's Mission</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-4">
              <Button variant="ghost" size="sm" className="text-sm">
                Login
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Product Section */}
                  <div>
                    <h3 className="font-semibold mb-3">Product</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="/eas" className="text-muted-foreground hover:text-foreground">EAs</a>
                      <a href="/engineers" className="text-muted-foreground hover:text-foreground">Engineers</a>
                      <a href="/sdrs" className="text-muted-foreground hover:text-foreground">SDRs</a>
                      <a href="/ops" className="text-muted-foreground hover:text-foreground">Ops</a>
                      <a href="/marketing" className="text-muted-foreground hover:text-foreground">Marketing</a>
                      <a href="/success" className="text-muted-foreground hover:text-foreground">Success</a>
                    </div>
                  </div>


                  {/* Mobile Resources Section */}
                  <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      
                      <a href="/hiring-playbooks" className="text-muted-foreground hover:text-foreground">Hiring Playbooks</a>
                      
                      <a href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
                    </div>
                  </div>

                  {/* Mobile About Section */}
                  <div>
                    <h3 className="font-semibold mb-3">About</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="/heros-mission" className="text-muted-foreground hover:text-foreground">Hero's Mission</a>
                    </div>
                  </div>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col gap-3 mt-6">
                    <Button variant="outline" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </Button>
                    <Button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary hover:bg-primary/90">
                      Book Demo
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