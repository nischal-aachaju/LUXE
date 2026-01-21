import React from "react";
import { Star, CircleUserRound, Circle } from "lucide-react";
import { Rating } from "@smastrom/react-rating";

function RatingStar() {
  return <Rating style={{ maxWidth: 70 }} value={4.5} readOnly />;
}

const ReviewComp = () => {
  return (
    <div className=" w-full h-fit  flex flex-col justify-center items-start px-2 bg-white border-gray-400/30 border mb-2 gap-1 py-2 shrink-0">
      <span className="font-mont flex justify-center items-center font-semibold">
        Title
      </span>

      <span className="font-mont flex justify-center items-center text-[12px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima culpa
        nisi tempore error deleniti? Tempora ipsum a delectus ea numquam
      </span>

      <div className="flex  w-full font-mont justify-between px-2 border-gray-400/30 border text-white bg-black  ">
        <div className="flex justify-center items-center gap-2 ">
          <span className="text-sm font-semibold">John Doe</span>
        </div>
        <RatingStar />
      </div>
    </div>
  );
};

const Review = () => {
  return <ReviewComp />;
};

export default Review;
