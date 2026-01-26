import React from "react";
import { Star, Heart, ShoppingBag } from "lucide-react";

const DiscoveryComponent = ({ elem }) => {
  return (
    <div className="group w-full max-w-70 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
      <div className="relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
        <img
          className="w-full h-52 md:h-64 object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
          src={elem.thumbnail}
          alt={elem.title}
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hover:bg-rose-50 hover:scale-110">
            <Heart size={18} className="text-gray-600 hover:text-rose-500 transition-colors" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 delay-75 hover:bg-amber-50 hover:scale-110">
            <ShoppingBag size={18} className="text-gray-600 hover:text-amber-600 transition-colors" />
          </button>
        </div>

        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] font-semibold text-white uppercase tracking-wider bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
            Quick View
          </span>
        </div>

        {elem.discountPercentage > 10 && (
          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] font-bold text-white uppercase tracking-wide bg-gradient-to-r from-rose-500 to-pink-500 px-2.5 py-1 rounded-full shadow-sm">
              -{Math.round(elem.discountPercentage)}%
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-wider text-amber-600 font-semibold">
            {elem.category}
          </span>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full">
            <Star size={12} fill="#f59e0b" color="#f59e0b" strokeWidth={0} />
            <span className="text-[11px] font-semibold text-amber-700">
              {elem.rating}
            </span>
          </div>
        </div>

        <h5 className="text-sm md:text-[15px] font-serif font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors duration-300 min-h-[2.5rem]">
          {elem.title}
        </h5>

        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-xl font-bold text-gray-900">
            ${elem.price}
          </span>
          {elem.discountPercentage > 10 && (
            <span className="text-sm text-gray-400 line-through">
              ${Math.round(elem.price / (1 - elem.discountPercentage / 100))}
            </span>
          )}
        </div>

        <button className="w-full mt-2 py-2.5 text-center text-xs font-semibold text-white uppercase tracking-wider bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:from-gray-900 hover:to-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DiscoveryComponent;
