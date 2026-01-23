import { AddToCartBTN, SaveLaterBTN } from "../../Components/common/Buttons";
import { BreadCrumb, BasicInfo, Desc, Policy } from "./Comps";
import { useEffect, useState } from "react";
import axios from "axios";

import Tags from "./Tags";
import Dimensions from "./Dimensions";
import Review from "./Review";
import Imgs from "./Images";
import LoadingPage from "../LoadingPage";

const Product = () => {
  const id = 13;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getThatProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getThatProduct();
  }, [id]);

  if (productData === null) {
    return <LoadingPage />;
  }

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
  } = productData;

  const { width, height, depth } = dimensions;

  return (
    <div className="bg-[#f9fafb] mt-14">
      <BreadCrumb category={category} title={title} />

      <main className="w-full h-fit 0 px-6 md:flex-col md:px-12 lg:px-20 ">
        <div className=" h-fit w-full md:flex justify-center  gap-8">
          <Imgs images={images} thumbnail={thumbnail} bannerTag={brand} />
          <div className="w-full h-fit md:w-[50%] max-w-124 mx-auto md:max-w-90.5 lg:max-w-117.5 ">
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
          </div>
        </div>
        <Review reviews={reviews} rating={rating} />
      </main>
    </div>
  );
};

export default Product;
