import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { QRCodeCanvas } from "qrcode.react";
import { useToast } from "@/hooks/use-toast";

const BOOK_URL = "https://calendly.com/jackie-herohire";

const BookCallRedirect: React.FC = () => {
  const { toast } = useToast();

  const openInThisTab = () => {
    try {
      (window.top ?? window).location.assign(BOOK_URL);
    } catch (e) {
      window.location.assign(BOOK_URL);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(BOOK_URL);
      toast({ title: "Link copied", description: "Paste it into your browser if it was blocked." });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl font-semibold mb-3 text-slate-900">Book a call</h1>
          <p className="text-slate-600 mb-6">
            If your browser blocks it, use one of the options below.
          </p>

          <div className="space-y-3">
            <Button className="w-full" onClick={openInThisTab}>
              Open in this tab (recommended)
            </Button>

            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full">Open in new tab</Button>
            </a>

            <Button variant="ghost" className="w-full" onClick={copyLink}>
              Copy link
            </Button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <QRCodeCanvas value={BOOK_URL} size={160} includeMargin />
            <span className="text-sm text-slate-500">Scan to book on your phone</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookCallRedirect;
