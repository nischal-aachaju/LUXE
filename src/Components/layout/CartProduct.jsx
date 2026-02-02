import React, { useContext, useEffect, useState } from "react";
import { ApiDataContext } from "../../Context/ContextApi";

const CartProduct = ({ itemData }) => {
  const id = itemData.id;
  const [count, setCount] = useState(Number(itemData.count));

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find((item) => item.id === id);
    if (!item) return;

    item.count = count;
    localStorage.setItem("cart", JSON.stringify(existingCart));
  }, [count, id]);

  const data = useContext(ApiDataContext);
  const product = data.find((e) => e.id == id);

  const itemDelete = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  if (!product) return null;

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 p-3 sm:p-4">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-4">

          <div className="h-20 w-20 sm:h-24 sm:w-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>


          <h2 className="font-serif font-semibold text-sm sm:text-base leading-tight">
            {product.title}
          </h2>
        </div>


        <div className="flex flex-col gap-1 sm:flex-row sm:gap-6 md:justify-end md:text-right">
          <div className="font-semibold text-sm sm:text-base">
            Price: ${product.price}
          </div>
          <div className="font-semibold text-sm sm:text-base">
            Total: ${(count * product.price).toFixed(2)}
          </div>
        </div>

        {/* Right: qty controls + delete */}
        <div className="flex items-center justify-between gap-3 sm:justify-start md:justify-end">
          {/* Qty */}
          <div className="flex items-center gap-3">
            <button
              className="px-2 border rounded w-8 h-8 flex items-center justify-center"
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>

            <span className="min-w-6 text-center font-medium">{count}</span>

            <button
              className="px-2 border rounded w-8 h-8 flex items-center justify-center"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Delete */}
          <button
            onClick={itemDelete}
            className="cursor-pointer rounded-xl bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-sm sm:text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
