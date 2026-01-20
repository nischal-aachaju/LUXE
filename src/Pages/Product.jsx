import React from "react";
import thumbnail from "../assets/images/productpg/thumbnail_placeholder.png";

import otherimg from "../assets/images/productpg/otherimg.png";
import { Star } from "lucide-react";

const Product = () => {
  return (
    <div>
      <div className="w-full h-[41.6px] px-4 py-3 text-[10px]">
        HOME / AUDIO / PULSE ELITE
      </div>

      <main className="w-full h-866.25 0 px-4 ">
        <div className="w-full h-fit  mb-8">
          <img src={thumbnail} alt="" srcset="" className="w-full mb-6" />

          <div className="w-full  flex gap-1 justify-center items-center">
            <img className="w-[24%] h-21" src={otherimg} />
            <img className="w-[24%] h-21" src={otherimg} />
            <img className="w-[24%] h-21" src={otherimg} />
            <img className="w-[24%] h-21" src={otherimg} />
          </div>
        </div>

        <div className="h-206  flex flex-col">
          <span className="text-[8px]">AUDIOTECH PRO SERIES</span>
          <span className="text-3xl font-mont font-extrabold mb-2">
            PULSE ELITE.
          </span>
          <div className="text-2xl font-mont font-medium w-full h-13  flex items-center justify-between px-0.5 mb-8 ">
            <span>$399</span>
            <div className="flex flex-col gap-1 items-end">
              <span className="flex">
                <Star
                  size={10}
                  fill="#ffd700"
                  color="#ffd700"
                  strokeWidth={0.5}
                />
                <Star
                  size={10}
                  fill="#ffd700"
                  color="#ffd700"
                  strokeWidth={0.5}
                />
                <Star
                  size={10}
                  fill="#ffd700"
                  color="#ffd700"
                  strokeWidth={0.5}
                />
                <Star
                  size={10}
                  fill="#ffd700"
                  color="#ffd700"
                  strokeWidth={0.5}
                />
                <Star
                  size={10}
                  fill="#ffd700"
                  color="#ffd700"
                  strokeWidth={0.5}
                />
              </span>
              <span className="text-[10px]">124 verified reviews</span>
            </div>
          </div>
          <div className="w-full h-40 "></div>
        </div>
      </main>
    </div>
  );
};

export default Product;
