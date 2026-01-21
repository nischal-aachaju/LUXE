import React from "react";
import thumbnail from "../assets/images/productpg/thumbnail_placeholder.png";
import otherimg from "../assets/images/productpg/otherimg.png";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { AddToCartBTN, SaveLaterBTN } from "../../Components/common/Buttons";

import Tags from "./Tags";
import Highlights from "./Highlight";

const BreadCrumb = () => {
  return (
    <div className="w-full h-[41.6px] px-4 py-3 text-[10px]">
      HOME / AUDIO / PULSE ELITE
    </div>
  );
};

const Imgs = () => {
  return (
    <div className="w-full h-fit  mb-8">
      <img src={thumbnail} alt="" className="w-full mb-6" />

      <div className="w-full  flex gap-1 justify-center items-center">
        <img className="w-[24%] h-21" src={otherimg} />
        <img className="w-[24%] h-21" src={otherimg} />
        <img className="w-[24%] h-21" src={otherimg} />
        <img className="w-[24%] h-21" src={otherimg} />
      </div>
    </div>
  );
};

const BasicInfo = () => {
  return (
    <div className="h-fit text&price flex flex-col pb-8 ">
      <span className="text-[8px]">AUDIOTECH PRO SERIES</span>
      <span className="text-3xl font-mont font-extrabold mb-2">
        PULSE ELITE.
      </span>
      <div className="text-2xl font-mont font-medium w-full h-13  flex items-center justify-between px-0.5  border-b-gray-400/20 border-b  ">
        <span>$399</span>
        <div className="flex flex-col gap-1 items-end">
          <span className="flex">
            <Star size={10} fill="#ffd700" color="#ffd700" strokeWidth={0.5} />
            <Star size={10} fill="#ffd700" color="#ffd700" strokeWidth={0.5} />
            <Star size={10} fill="#ffd700" color="#ffd700" strokeWidth={0.5} />
            <Star size={10} fill="#ffd700" color="#ffd700" strokeWidth={0.5} />
            <Star size={10} fill="#ffd700" color="#ffd700" strokeWidth={0.5} />
          </span>
          <span className="text-[10px]">124 verified reviews</span>
        </div>
      </div>
    </div>
  );
};

const Desc = () => {
  return (
    <div className="w-full h-fit text-sm font-light mb-6">
      Experience the next evolution of sound. The Pulse Elite features our
      proprietary acoustic engine for deeper bass and crisp highs. Designed for
      the modern audiophile who refuses to compromise on style or substance.
    </div>
  );
};

const Policy = () => {
  return (
    <div className="text-[10px] text-green-600 font-mont flex items-center gap-5">
      <span className="flex gap-1 justify-center items-center">
        <Truck size={12} color="#16A34A" />
        Free shipping
      </span>
      <span className="flex gap-1 justify-center items-center">
        <ShieldCheck color="#16A34A" size={12} />2 years warranty
      </span>
      <span className="flex gap-1 justify-center items-center">
        <RotateCcw size={12} color="#16A34A" />
        30 Day Return
      </span>
    </div>
  );
};

const Product = () => {
  return (
    <div className="bg-[#f9fafb]">
      <BreadCrumb />

      <main className="w-full h-866.25 0 px-4 ">
        <Imgs />
        <BasicInfo />
        <AddToCartBTN />
        <SaveLaterBTN />
        <Highlights />
        <Desc />
        <Tags />
        <Policy />
      </main>
    </div>
  );
};

export default Product;
