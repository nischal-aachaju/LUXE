import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../../Context/ContextApi";

const CartProduct = ({ itemData, idx }) => {
  const id = itemData.id;

  const [count, setCount] = useState(Number(itemData.count));

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find((item) => {
      return item.id === id;
    });

    item.count = count;

    localStorage.setItem("cart", JSON.stringify(existingCart));
  }, [count, id]);

  const data = useContext(ApiDataContext);

  const product = data.find((e) => e.id == id);

  const itemDelete = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = existingCart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Item deleted:", id);
window.location.reload();

 
  };
 

  return (
    <div className="w-full h-full bg-white rounded-2xl border border-gray-200 flex justify-evenly items-center gap-4 p-3 sm:p-4">
      {/* Image */}
      <div className="h-20 w-20 sm:h-24 sm:w-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title */}
      <div className="flex-1 h-full  w-20 ">
        <h2 className="font-serif w-fit font-semibold text-sm sm:text-base leading-tight">
          {product.title}
        </h2>
      </div>

      <div className="flex justify-center mr-12  items-center gap-3">
        <div className="font-semibold text-sm sm:text-base mx-5">
          Price: ${product.price}
        </div>
        <div className="font-semibold text-sm sm:text-base mx-5">
          Total Price: ${count * product.price}
        </div>

        <button
          className="px-1 border rounded w-6 flex justify-center pb-1"
          onClick={() => {
            setCount((prev) => Math.max(1, prev - 1));
          }}
        >
          -
        </button>
        {count}
        <button
          className="px-1 border rounded w-6 pb-1"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
      <div
        onClick={() => {
          itemDelete()
          itemDelete()
        }}
        className=" cursor-pointer rounded-2xl bg-red-600 text-center mr-2 hover:bg-red-500 text-white w-20 h-full "
      >
        Delete
      </div>
      {/* Price */}
    </div>
  );
};

export default CartProduct;
