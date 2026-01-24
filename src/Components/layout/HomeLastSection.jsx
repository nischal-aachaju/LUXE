import React, { useContext } from "react";
import { ApiDataContext } from "../../Context/ContextApi";
import RatingStar from "../common/Ratings";
import { Link } from "react-router-dom";
const HomeLastSection = () => {
  const limit = 10;

  const randomIdx = Math.floor(Math.random() * (limit + 1)); // Inclusive
  const data = useContext(ApiDataContext);

  const useData = data[randomIdx];
  const tags = useData.tags;
  //<Link key={e.id} to={/products/${e.id}} >View Details</Link>
  return (
    <div className="flex flex-col w-full h-screen px-4 pt-20 bg-white md:h-110 md:py-10 md:justify-center md:flex-row ">
      <div className=" h-1/2 md:h-full  w-full md:w-100 bg-gray-300/30 overflow-hidden shadow-[0px_5px_10px_2px_#0000002a] flex justify-center items-center ">
        <img className=" h-fit w-fit" src={useData.thumbnail} alt="" />
      </div>
      <div className="w-full pt-10 h-1/2 md:h-full md:w-1/2 md:pl-10">
        <div className="flex items-center gap-3 pl-2 ">
          {useData.brand && (
            <p className="h-fit w-fit px-4 py-0.5 rounded-full uppercase font-semibold tracking-wide scale-y-96 text-[14px] bg-blue-300/60  text-blue-600">
              {useData.brand}
            </p>
          )}

          <RatingStar size="70px" value={useData.rating} />
          <p className="text-sm">({useData.rating})</p>
        </div>
        <div className="flex flex-col gap-2 p-2 md:w-fit">
          <h3 className="font-serif text-4xl font-black">{useData.title}</h3>
          <p className="text-xl font-semibold">${useData.price}</p>
          <p className="text-sm md:w-2/3">{useData.description}</p>
        </div>
        <div className="flex items-center w-full h-10 gap-2 px-2">
          {tags.map((elem, idx) => {
            return (
              <p
                key={idx}
                className="px-3 text-gray-800 border rounded-full h-fit border-gray-500/50 "
              >
                {elem}
              </p>
            );
          })}
        </div>
        <div className="flex gap-5 p-2">
          <button className=" bg-[#ffbf00] h-12 w-1/2 md:w-1/3 rounded text-white font-semibold text-shadow-[0px_0px_1px_#00000088]">
            Add to Cart
          </button>

          <Link
            className="flex items-center justify-center w-1/2 h-12 font-semibold bg-white border rounded md:w-1/3"
            key={useData.id}
            to={`/products/${useData.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLastSection;
RatingStar;
