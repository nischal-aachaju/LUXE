import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../../Context/ContextApi";

const CartProduct = ({ itemData }) => {
  const id = Number(itemData.id);

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
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200">
      <div className="flex items-center gap-4 p-3 sm:p-4">
        {/* Image */}
        <div className="h-20 w-20 sm:h-24 sm:w-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Title */}
        <div className="flex-1">
          <h2 className="font-serif font-semibold text-sm sm:text-base leading-tight">
            {product.title}
          </h2>
        </div>

        <div className="flex justify-center items-center gap-3">
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
        {/* Price */}
        <div className="font-semibold text-sm sm:text-base">
          ${product.price}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
