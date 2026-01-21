import React, { useState } from "react";
import { Star, CircleUserRound, Circle } from "lucide-react";
import Ratings from "../../Components/common/Ratings";

export function RatingStar({ size, value }) {
  return <Rating style={{ maxWidth: size }} value={value} readOnly />;
}

const ReviewComp = ({ rating }) => {
  return (
    <div className=" w-full h-fit  flex flex-col justify-center items-start shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-gray-400/30  border mb-2 gap-1.5 pt-2 pb-4 px-5 shrink-0">
      <div className="flex  w-full font-mont justify-between">
        <div className="flex justify-center items-center gap-2 ">
          <CircleUserRound size={16} color="#525252" />
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold text-green-700">
              {rating.person}
            </span>
          </div>
        </div>
        <Ratings size="60px" value={rating.value} />
      </div>

      <span className="font-mont flex justify-center items-center text-[12px] font-semibold">
        {rating.title}
      </span>

      <span className="font-mont flex justify-center items-center text-[10px] text-gray-600">
        {rating.desc}
      </span>
    </div>
  );
};

const Review = () => {
  const defaultCount = 3;

  const [viewAll, setViewAll] = useState(false);

  const reviews = [
    {
      person: "Alex H.",
      title: "Rlly good build",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni autem dolores, culpa impedit cum nemo ad distinctio veritatis aperiam aliquid!",
      value: "1.6",
    },
    {
      person: "Samantha R.",
      title: "Solid quality",
      desc: "Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
      value: "2.4",
    },
    {
      person: "Daniel K.",
      title: "Worth the price",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      value: "3.1",
    },
    {
      person: "Alex H.",
      title: "Rlly good build",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni autem dolores, culpa impedit cum nemo ad distinctio veritatis aperiam aliquid!",
      value: "1.6",
    },
    {
      person: "Samantha R.",
      title: "Solid quality",
      desc: "Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
      value: "2.4",
    },
    {
      person: "Daniel K.",
      title: "Worth the price",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      value: "3.1",
    },
  ];

  const visibleReviews = viewAll ? reviews : reviews.slice(0, defaultCount);

  const canToggle = reviews.length > defaultCount;

  return (
    <div className="w-full h-fit mt-16 mb-8 flex flex-col">
      <div className="w-full flex flex-col h-fit  mb-8 ">
        <div className=" text-3xl font-mont font-semibold">REVIEWS</div>
        <div className="flex gap-4">
          <span className=" text-4xl font-mont font-bold flex justify-center items-center">
            4.8
          </span>
          <div className="">
            <Ratings size="80px" value="4.8" />
            <span className="text-[8px] font-mont">Based on 124 reviews</span>
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
