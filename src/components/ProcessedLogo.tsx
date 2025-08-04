interface ProcessedLogoProps {
  className?: string;
}

export const ProcessedLogo = ({ className = "" }: ProcessedLogoProps) => {
  return (
    <img 
      src="/lovable-uploads/014c4ba7-5d4b-4525-afa3-5888efc64ece.png" 
      alt="Hero Logo" 
      className={className}
    />
  );
};