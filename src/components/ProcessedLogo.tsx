interface ProcessedLogoProps {
  className?: string;
}

export const ProcessedLogo = ({ className = "" }: ProcessedLogoProps) => {
  return (
    <img 
      src="/lovable-uploads/06c973eb-093d-40f7-8c1f-0f4e609cfbd2.png" 
      alt="Hero Logo" 
      className={className}
    />
  );
};