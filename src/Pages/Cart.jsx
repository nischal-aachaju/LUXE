import React from "react";
import CartProduct from "../Components/layout/CartProduct";

const Cart = () => {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  let length_cart = 0;
  if (cartData == null) {
    length_cart = 0;
  } else {
    length_cart = cartData.length;
  }

  return (
    <div className="flex flex-col w-full min-h-screen pt-2 mt-12 bg-gray-200">
      <div className="flex w-full pb-10 pl-4 h-30">
        <div className="flex flex-col justify-end w-2/3 h-full ">
          <h4 className="font-serif text-2xl font-semibold">Shopping Cart</h4>
          <p>
            you have{" "}
            <span className="font-semibold text-blue-500">
              {length_cart} items
            </span>{" "}
            in your bag
          </p>
        </div>
        <div className="h-full w-1/3  text-[12px] flex items-end">
          CONTINUE SHOPPING
        </div>
      </div>
      <div className="flex flex-col w-full h-full gap-3 px-4">
        {cartData?.length > 0 ? (
          cartData.map((e, idx) => <CartProduct key={idx} itemData={e} />)
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
