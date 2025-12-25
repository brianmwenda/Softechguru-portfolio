import { Snowflake, Gift, Star, PartyPopper, Sparkles } from "lucide-react";

interface HolidayBannerProps {
  mode: "christmas" | "newyear";
}

const HolidayBanner = ({ mode }: HolidayBannerProps) => {
  if (mode === "christmas") {
    return (
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-700 via-red-600 to-green-700 py-1.5 sm:py-2 px-4 overflow-hidden">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <Snowflake className="w-4 h-4 text-white animate-spin-slow hidden sm:block" />
          <Gift className="w-4 h-4 text-yellow-300 animate-bounce hidden sm:block" />
          <span className="text-white font-medium text-sm sm:text-base flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="animate-pulse">🎄 Merry Christmas & Happy Holidays! 🎅</span>
            <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
          </span>
          <Gift className="w-4 h-4 text-yellow-300 animate-bounce hidden sm:block" />
          <Snowflake className="w-4 h-4 text-white animate-spin-slow hidden sm:block" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 py-1.5 sm:py-2 px-4 overflow-hidden">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse hidden sm:block" />
        <PartyPopper className="w-4 h-4 text-pink-300 animate-bounce hidden sm:block" />
        <span className="text-white font-medium text-sm sm:text-base flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span className="animate-pulse">🎆 Happy New Year 2025! 🎉</span>
          <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
        </span>
        <PartyPopper className="w-4 h-4 text-pink-300 animate-bounce hidden sm:block" />
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse hidden sm:block" />
      </div>
    </div>
  );
};

export default HolidayBanner;
