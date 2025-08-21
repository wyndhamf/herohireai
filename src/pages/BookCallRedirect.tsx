import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BOOK_URL = "https://calendar.app.google/Jw4zcfa5fovfv9io6";

const BookCallRedirect: React.FC = () => {
  useEffect(() => {
    // Try to navigate the top window (escapes preview iframe)
    const go = () => {
      try {
        if (window.top) {
          // @ts-ignore - location on top is allowed to set
          window.top.location.href = BOOK_URL;
          return;
        }
      } catch (e) {
        // Fallback below
      }
      window.location.href = BOOK_URL;
    };

    const t = setTimeout(go, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-semibold mb-3 text-slate-900">Opening scheduling…</h1>
          <p className="text-slate-600 mb-6">
            If nothing happens, use the button below to open the booking page.
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Open Scheduling Link</Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookCallRedirect;
