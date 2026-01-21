import React, { useState } from "react";
import { Star, CircleUserRound, Circle } from "lucide-react";
import Ratings from "../../Components/common/Ratings";


const ReviewComp = ({ rating }) => {
  return (
    <div className=" w-full h-fit  flex flex-col justify-center items-start shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-gray-400/30  border mb-2 gap-1.5 pt-2 pb-4 px-5 shrink-0">
      <div className="flex  w-full font-mont justify-between">
        <div className="flex justify-center items-center gap-2 ">
          <CircleUserRound size={16} color="#525252" />
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-green-700">
              {rating.reviewerName}
            </span>
          </div>
        </div>
        <Ratings size="60px" value={rating.rating} />
      </div>

      <span className=" font-mont flex justify-center items-center text-[10px] text-gray-600">
        {formatDate(rating.date)}
      </span>

      <span className="font-mont flex justify-center items-center text-[12px] font-md">
        {rating.comment}
      </span>
    </div>
  );
};

const Review = ({ reviews, rating }) => {
  const defaultCount = 2;

  const [viewAll, setViewAll] = useState(false);

  const visibleReviews = viewAll ? reviews : reviews.slice(0, defaultCount);

  const canToggle = reviews.length > defaultCount;

  return (
    <div className="w-full h-fit mt-16 mb-8 flex flex-col">
      <div className="w-full flex flex-col h-fit  mb-8 ">
        <div className=" text-3xl font-mont font-semibold">REVIEWS</div>
        <div className="flex gap-4">
          <span className=" text-4xl font-mont font-bold flex justify-center items-center text-yellow-500">
            {rating}
          </span>
          <div className="">
            <Ratings size="80px" value={rating} />
            <span className="text-[8px] font-mont">
              Based on {reviews.length} reviews
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col gap-2">
        {visibleReviews.map((review, idx) => {
          return <ReviewComp rating={review} key={idx} />;
        })}
      </div>

      {canToggle && (
        <button
          className="mt-4 w-fit px-1 py-0.5 font-semibold underline mb-6  font-mont text-sm"
          onClick={() => {
            setViewAll(!viewAll);
          }}
        >
          {viewAll ? "View Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default Review;

// Created by AI

function formatDate(isoString) {
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";

  const day = d.getUTCDate(); // use UTC to avoid timezone shift
  const year = d.getUTCFullYear();

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const month = months[d.getUTCMonth()];

  return `${day} ${month} ${year}`;
}
