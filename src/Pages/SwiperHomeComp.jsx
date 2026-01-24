import React from "react";

const SwiperHomeComp = ({ data }) => {
  return (
    <div
      className="h-[92vh] md:h-[96vh] w-full bg-top bg-cover md:bg-top flex items-center "
      style={{ backgroundImage: `url(${data.bgImg})` }}
    >
      <div className="flex flex-col w-2/3 gap-4 pl-4 text-white h-1/3 md:h-full md:w-full md:pl-14 md:gap-10 md:justify-center">
        <div className="text-[12px] text-[#ffffff] w-fit  uppercase backdrop-blur-xs bg-black/10  border border-[#6e581b] rounded-2xl  px-2">
          {data.badge}
        </div>
        <h2 className="font-serif text-5xl font-semibold [text-shadow:0_4px_24px_rgba(0,0,0,0.65)]">
          {data.title} <br />
          <span className="italic font-normal text-shadow-black">
            {data.emphasis}
          </span>
        </h2>
        <p className="text-[12px] md:w-1/3 [text-shadow:0_4px_24px_rgba(0,0,0,0.65)]">
          {data.description}
        </p>
        <div className="flex gap-2 ">
          <button className="h-10 px-4 text-sm font-semibold text-black bg-white shrink-0 w-fit [text-shadow:0_4px_24px_rgba(0,0,0,0.65)]">
            {data.ctaPrimary}
          </button>
          <button className="h-10 px-4 text-sm font-semibold text-white border border-white shrink-0 w-fit [text-shadow:0_4px_24px_rgba(0,0,0,0.65)]">
            {data.ctaSecondary}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiperHomeComp;
