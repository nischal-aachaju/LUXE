import React from "react";
import { MoveRight } from "lucide-react";
import { Heart } from "lucide-react";

export const AddToCartBTN = () => {
  return (
    <button className="w-full h-16 bg-[#000000] text-white flex items-center justify-between px-5 font-mont text-sm font-medium mb-4">
      <span>ADD TO CART</span>
      <span>
        <MoveRight />
      </span>
    </button>
  );
};

export const SaveLaterBTN = () => {
  return (
    <div className="flex w-full gap-2 justify-center items-center mb-6">
      <button className="w-[82%] h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-[12px] font-semibold mb-4">
        SAVE FOR LATER
      </button>
      <button className="w-[18%] h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-sm font-medium mb-4">
        <Heart />
      </button>
    </div>
  );
};

export const WriteReviewBTN = () => {
  return (
    <button className="w-full h-16 bg-[#ffffff] flex items-center justify-center px-5 font-mont border-gray-400/30 border text-[12px] font-semibold mb-4">
      SAVE FOR LATER
    </button>
  );
};
