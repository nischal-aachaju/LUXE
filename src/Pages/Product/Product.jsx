import React from "react";
import { AddToCartBTN, SaveLaterBTN } from "../../Components/common/Buttons";
import { BreadCrumb, Imgs, BasicInfo, Desc, Policy } from "./Comps";

import Tags from "./Tags";
import Highlights from "./Highlight";
import Review from "./Review";

const Product = () => {
  return (
    <div className="bg-[#f9fafb] mt-14">
      <BreadCrumb />

      <main className="w-full h-fit 0 px-4 ">
        <Imgs />
        <BasicInfo />
        <AddToCartBTN />
        <SaveLaterBTN />
        <Highlights />
        <Desc />
        <Tags />
        <Policy />
        <Review />
      </main>
    </div>
  );
};

export default Product;
