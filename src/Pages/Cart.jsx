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
    <div className="flex flex-col w-full min-h-[20rem] pt-2 mt-12 pb-3 bg-gray-200">
      {/* Header */}
      <div className="flex flex-col gap-4 w-full pb-6 sm:pb-10 px-4 pt-6 sm:pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-2/3">
          <h4 className="font-serif text-xl sm:text-2xl font-semibold">
            Shopping Cart
          </h4>
          <p className="text-sm sm:text-base">
            you have{" "}
            <span className="font-semibold text-blue-500">
              {length_cart} items
            </span>{" "}
            in your bag
          </p>
        </div>

        <Link
          to="/"
          className="w-fit cursor-pointer text-sm sm:text-base underline"
        >
          CONTINUE SHOPPING
        </Link>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col w-full h-full gap-3 px-4">
        {cartData?.length > 0 ? (
          cartData.map((e, idx) => {
            return <CartProduct key={idx} itemData={e} idx={idx} />;
          })
        ) : (
          <div className="min-h-[15rem] w-full flex justify-center items-center flex-col text-center px-4">
            <img
              src="src/assets/images/productpg/image1.png"
              alt="hello"
              className="w-40 sm:w-56 md:w-64 h-auto"
            />
            <p className="text-xl sm:text-2xl md:text-3xl uppercase mt-5">
              Your Cart is Empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
