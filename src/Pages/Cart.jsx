import React from "react";
import CartProduct from "../Components/layout/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = JSON.parse(localStorage.getItem("cart"));

  
  let length_cart = 0;
  if (cartData == null) {
    length_cart = 0;
  } else {
    length_cart = cartData.length;
  }

  return (
    <div className="flex flex-col w-full min-h-fit  pt-2 mt-12 pb-3 bg-gray-200">
      <div className="flex w-full pb-10 pl-4 h-30 pt-8 justify-between  ">
        <div className="flex flex-col justify-between w-2/3 h-full ">
          <h4 className="font-serif text-2xl font-semibold">Shopping Cart</h4>
          <p>
            you have{" "}
            <span className="font-semibold text-blue-500">
              {length_cart} items
            </span>{" "}
            in your bag
          </p>
        </div>
          <Link to="/" className="h-full flex items-end  w-fit cursor-pointer text-sm mr-18 underline overflow-hidden ">CONTINUE SHOPPING</Link>
      </div>
      <div className="flex flex-col w-full h-full gap-3 px-4">
        {cartData?.length > 0 ? (
    
           cartData.map((e, idx) => {


              return <CartProduct key={idx} itemData={e} idx={idx} />
           } )
          
        ) : (
          <div className=" h-60 w-full flex justify-center items-center flex-col">
           
            <img src="src/assets/images/productpg/image1.png" alt="hello" />
            <p className=" text-3xl  uppercase mt-5">Your Cart is Empty </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
