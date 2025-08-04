import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Engineers from "./pages/Engineers";
import EAs from "./pages/EAs";
import SDRs from "./pages/SDRs";
import Ops from "./pages/Ops";
import Marketing from "./pages/Marketing";
import BuybackBlueprint from "./pages/BuybackBlueprint";
import HiringPlaybooks from "./pages/HiringPlaybooks";
import FAQ from "./pages/FAQ";
import HerosMission from "./pages/HerosMission";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/engineers" element={<Engineers />} />
              <Route path="/eas" element={<EAs />} />
              <Route path="/sdrs" element={<SDRs />} />
              <Route path="/ops" element={<Ops />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/buyback-blueprint" element={<BuybackBlueprint />} />
              <Route path="/hiring-playbooks" element={<HiringPlaybooks />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/heros-mission" element={<HerosMission />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;