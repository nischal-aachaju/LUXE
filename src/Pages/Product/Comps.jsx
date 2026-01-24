import React from "react";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import Ratings from "../../Components/common/Ratings";

export const BreadCrumb = ({ title, category }) => {
  const prodName = title.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[41.6px] px-6 md:px-12 lg:px-20 py-3 text-[8px] font-mont font-md sm:text-[10px]">
      HOME / PRODUCTS / {category.toUpperCase()} / {prodName.toUpperCase()}
    </div>
  );
};

export const BasicInfo = ({ title, price, rating, reviews, stock }) => {
  return (
    <div className="h-fit text&price flex flex-col pb-8 ">
      <span className="text-[10px]">{stock.toUpperCase()}</span>
      <span className="mb-2 text-3xl font-extrabold font-mont">{title}</span>
      <div className="text-2xl font-mont font-medium w-full h-13  flex items-center justify-between px-0.5  border-b-gray-400/20 border-b  ">
        <span>${price}</span>
        <div className="flex flex-col items-end gap-1">
          <Ratings size="70px" value={rating} />
          <span className="text-[10px]">{reviews.length} verified reviews</span>
        </div>
      </div>
    </div>
  );
};

export const Desc = ({ desc }) => {
  return <div className="w-full mb-6 text-sm font-light h-fit">{desc}</div>;
};

export const Policy = ({ warrInfo, shipInfo, returnInfo }) => {
  return (
    <div className="flex flex-col justify-center gap-2 w-full h-fit text-[10px] text-green-600 font-mont ">
      <span className="flex items-center gap-1">
        <Truck size={12} color="#16A34A" />
        {shipInfo}
      </span>
      <span className="flex items-center gap-1">
        <ShieldCheck color="#16A34A" size={12} />
        {warrInfo}
      </span>
      <span className="flex items-center gap-1">
        <RotateCcw size={12} color="#16A34A" />
        {returnInfo}
      </span>
    </div>
  );
};
