import { useState, useEffect } from "react";
import { Command, Menu, ChevronDown } from "lucide-react";
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
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-primary" />
            <span className="font-bold text-base">HeroHire</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Product Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">How It Works</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Role Coverage (EAs, SDRs, Ops, Marketing)</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Guarantees & Timeline</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pricing Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">Flat-rate</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">What's Included</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Backfill Guarantee</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">Blog</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Hiring Playbooks</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Case Studies</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">FAQ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="cursor-pointer">Hero's Mission</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Backed by Martell Ventures</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Meet the Team</DropdownMenuItem>
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
                      <a href="#" className="text-muted-foreground hover:text-foreground">How It Works</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Role Coverage</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Guarantees & Timeline</a>
                    </div>
                  </div>

                  {/* Mobile Pricing Section */}
                  <div>
                    <h3 className="font-semibold mb-3">Pricing</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="#" className="text-muted-foreground hover:text-foreground">Flat-rate</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">What's Included</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Backfill Guarantee</a>
                    </div>
                  </div>

                  {/* Mobile Resources Section */}
                  <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Hiring Playbooks</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Case Studies</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a>
                    </div>
                  </div>

                  {/* Mobile About Section */}
                  <div>
                    <h3 className="font-semibold mb-3">About</h3>
                    <div className="flex flex-col gap-2 ml-4">
                      <a href="#" className="text-muted-foreground hover:text-foreground">Hero's Mission</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Backed by Martell Ventures</a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">Meet the Team</a>
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