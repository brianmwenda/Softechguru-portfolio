import { useMemo } from "react";

type HolidayMode = "christmas" | "newyear" | "none";

export const useHolidayMode = (): HolidayMode => {
  return useMemo(() => {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed (0 = January, 11 = December)
    const day = now.getDate();

    // December 23-31: Christmas mode
    if (month === 11 && day >= 23) {
      return "christmas";
    }

    // January 1-4: New Year mode
    if (month === 0 && day >= 1 && day <= 4) {
      return "newyear";
    }

    // January 5 onwards or before December 23: No decorations
    return "none";
  }, []);
};
