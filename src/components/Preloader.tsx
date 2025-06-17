
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add a small delay for the fade out animation
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Loading Ring */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-muted"></div>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-transparent border-t-primary animate-spin shadow-lg shadow-primary/50"></div>
          <div className="absolute top-1 left-1 w-18 h-18 rounded-full border-2 border-transparent border-t-purple-500 animate-spin animation-delay-150 shadow-lg shadow-purple-500/30"></div>
          <div className="absolute top-2 left-2 w-16 h-16 rounded-full border-2 border-transparent border-t-pink-500 animate-spin animation-delay-300 shadow-lg shadow-pink-500/30"></div>
        </div>
        
        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Softech Guru
          </h1>
          <div className="mt-4 flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

}
