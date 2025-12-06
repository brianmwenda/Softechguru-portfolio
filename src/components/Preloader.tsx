
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute w-24 h-24 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Middle pulsing ring */}
        <div className="absolute w-16 h-16 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}></div>
        
        {/* Core solid circle */}
        <div className="relative w-10 h-10 rounded-full bg-primary shadow-lg shadow-primary/50">
          {/* Inner dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
