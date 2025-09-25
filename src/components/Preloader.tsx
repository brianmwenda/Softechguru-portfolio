
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Loading Ring */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-gray-200"></div>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-4 border-transparent border-t-black animate-spin shadow-lg shadow-black/50"></div>
          <div className="absolute top-1 left-1 w-18 h-18 rounded-full border-2 border-transparent border-t-black/70 animate-spin animation-delay-150 shadow-lg shadow-black/30"></div>
          <div className="absolute top-2 left-2 w-16 h-16 rounded-full border-2 border-transparent border-t-black animate-spin animation-delay-300 shadow-lg shadow-black/30"></div>
        </div>
        
        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black animate-pulse">
            Softech Guru
          </h1>
          <div className="mt-4 flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-black/70 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );

}
