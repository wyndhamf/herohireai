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
import Success from "./pages/Success";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;