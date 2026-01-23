import React from "react";
import { Star } from "lucide-react";
const DiscoveryComponent = ({elem}) => {

    
  return (
    <div className="h-50 w-40  md:w-auto md:aspect-square  mt-20 shrink-0 ">
      <img
        className=" h-50  md:h-60 bg-white border  border-gray-300/80"
        src={elem.thumbnail}
        alt=""
      />
      <div className="h-20 w-full flex flex-col pt-2">
        <h5 className="text-[14px] font-serif">{elem.title}</h5>
        <div className=" flex ">
          <div className="  w-1/2">
            <p className="text-[12px] uppercase">{elem.category}</p>
            <div>
              <p className="text-[13px] font-bold">${elem.price}</p>
            </div>
          </div>

          <div className=" w-1/2 h-full flex justify-end text-[14px] gap-1 pr-2">
            <Star size={18} fill="#ffd700" color="#000" strokeWidth={0.2} />
            <p>{elem.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default DiscoveryComponent;
