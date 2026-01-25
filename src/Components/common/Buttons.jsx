import React from "react";

import { Heart } from "lucide-react";


export const SaveLaterBTN = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2 mb-6">
      <button className="w-[82%] h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-[12px] font-semibold mb-4">
        SAVE FOR LATER
      </button>

      {/* ICON BUTTON */}
      <button
        className="
        w-[18%] h-16 bg-white border border-gray-400/30
        flex items-center justify-center

        transition-all duration-200 ease-out
        hover:-translate-y-[0.5px]
        hover:scale-[1.05]
        hover:bg-black/5
        active:scale-95 cursor-pointer
      "
      >
        <Heart className="transition-transform duration-200 ease-out hover:scale-110" />
      </button>
    </div>
  );
};

export const WriteReviewBTN = () => {
  return (
    <button
      className="
      w-full h-16 bg-white border border-gray-400/30
      flex items-center justify-center px-5
      font-mont text-[12px] font-semibold mb-4

      transition-colors duration-200 ease-out
      hover:bg-black/5
      active:bg-black/10 cursor-pointer
    "
    >
      WRITE A REVIEW
    </button>
  );
};
