import React, { useContext } from "react";
import { AddToCartBTN, SaveLaterBTN } from "../../Components/common/Buttons";
import { BreadCrumb, BasicInfo, Desc, Policy } from "./Comps";

import Tags from "./Tags";
import Dimensions from "./Dimensions";
import Review from "./Review";
import Imgs from "./Images";
import { ApiDataContext } from "../../Context/ContextApi";



const Product = ({idx}) => {
  let id = {idx};
  const fullData = useContext(ApiDataContext);
  const data = fullData[id];

  const {
    title,
    description: desc,
    price,
    category,
    rating,
    tags,
    brand,
    reviews,
    warrantyInformation: warrInfo,
    shippingInformation: shipInfo,
    returnPolicy: returnInfo,
    availabilityStatus: stockInfo,
    dimensions,
    images,
    thumbnail,
  } = data;

  const { width, height, depth } = dimensions;

  return (
    <div className="bg-[#f9fafb] mt-14">
      <BreadCrumb category={category} title={title} />

      <main className="w-full h-fit 0 px-4 ">
        <Imgs images={images} thumbnail={thumbnail} bannerTag={brand} />
        <BasicInfo
          title={title}
          price={price}
          rating={rating}
          reviews={reviews}
          stock={stockInfo}
        />
        <AddToCartBTN />
        <SaveLaterBTN />
        <Dimensions width={width} height={height} depth={depth} />
        <Desc desc={desc} />
        <Tags tags={tags} />
        <Policy
          warrInfo={warrInfo}
          shipInfo={shipInfo}
          returnInfo={returnInfo}
        />
        <Review reviews={reviews} rating={rating} />
      </main>
    </div>
  );
};

export default Product;
