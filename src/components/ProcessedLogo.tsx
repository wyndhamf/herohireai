import { useState, useEffect } from 'react';
import { processAndSaveLogo } from '../utils/processLogo';
import { Command } from 'lucide-react';

interface ProcessedLogoProps {
  className?: string;
}

export const ProcessedLogo = ({ className = "" }: ProcessedLogoProps) => {
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        const dataUrl = await processAndSaveLogo();
        setLogoDataUrl(dataUrl);
      } catch (err) {
        console.error('Failed to process logo:', err);
        setError('Failed to process logo');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return <Command className={className} />;
  }

  if (error || !logoDataUrl) {
    return <Command className={className} />;
  }

  return (
    <img 
      src={logoDataUrl} 
      alt="Hero Logo" 
      className={className}
      style={{ filter: 'none' }}
    />
  );
};