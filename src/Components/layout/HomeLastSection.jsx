import React, { useContext } from "react";
import { ApiDataContext } from "../../Context/ContextApi";
import RatingStar from "../common/Ratings";

const HomeLastSection = () => {
  const limit = 25;
  const randomIdx = Math.floor(Math.random() * (limit + 1)); // Inclusive

  const data = useContext(ApiDataContext);

  const useData = data[randomIdx];
  const tags = useData.tags;

  return (
    <div className="px-4 h-screen md:h-110 w-full bg-white pt-20 md:py-10 flex flex-col md:justify-center  md:flex-row ">
      <div className=" h-1/2 md:h-full  w-full md:w-100 bg-gray-300/30 overflow-hidden shadow-[0px_5px_10px_2px_#0000002a] flex justify-center items-center ">
        <img className=" h-fit w-fit " src={useData.thumbnail} alt="" />
      </div>
      <div className=" h-1/2 md:h-full   w-full md:w-1/2 pt-10 md:pl-10 ">
        <div className=" pl-2 flex items-center  gap-3">
          {useData.brand && (
            <p className="h-fit w-fit px-4 py-0.5 rounded-full uppercase font-semibold tracking-wide scale-y-96 text-[14px] bg-blue-300/60  text-blue-600">
              {useData.brand}
            </p>
          )}

          <RatingStar size="70px" value={useData.rating} />
          <p className="text-sm">({useData.rating})</p>
        </div>
        <div className="p-2 md:w-fit flex flex-col gap-2">
          <h3 className="text-4xl  font-black font-serif">{useData.title}</h3>
          <p className="font-semibold text-xl">${useData.price}</p>
          <p className="text-sm  md:w-2/3">{useData.description}</p>
        </div>
        <div className="px-2 h-10  w-full flex items-center gap-2">
          {tags.map((elem, idx) => {
            return (
              <p
                key={idx}
                className="px-3 h-fit rounded-full border  border-gray-500/50 text-gray-800 "
              >
                {elem}
              </p>
            );
          })}
        </div>
        <div className="p-2 flex gap-5">
          <button className=" bg-[#ffbf00] h-12 w-1/2 md:w-1/3 rounded text-white font-semibold text-shadow-[0px_0px_1px_#00000088]">
            Add to Cart
          </button>
          <button className=" bg-white border md:w-1/3 font-semibold h-12 w-1/2 rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLastSection;
RatingStar;
