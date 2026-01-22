import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-90 flex flex-col px-4 mt-32 font-mont bg-gray-100 pt-4">
      <div className=" w-full h-76 grid grid-cols-2 gap-2 mb-2">
        <div className=" pr-2">
          <h1 className="text-xl font-semibold font-serif">LUXE</h1>
          <p className="text-[10px] text-gray-600">
            Refining the art of living with premium essentials curated for the
            discerning individual. Quality, elegance, and timeless design.
          </p>
        </div>
        <div className="pt-2">
          <h4 className="text-[14px] pb-2 font-semibold tracking-widest">
            SHOP
          </h4>
          <ul className="text-[10px] text-gray-600 flex flex-col gap-2">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Collections</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="pt-2">
          <h4 className="text-[14px] font-semibold tracking-widest">SUPPORT</h4>
          <ul className="text-[10px] text-gray-600 flex flex-col gap-2">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-[14px] font-semibold tracking-widest">
            STAY UPDATED
          </h4>
          <p className="text-[10px] text-gray-600">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <textarea
            className="h-9 mt-1 w-full border border-gray-600/50 bg-white"
            name=""
            id=""
          ></textarea>
          <button className=" bg-black text-white h-8 w-full font-semibold text-[10px] tracking-widest">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className=" w-full h-14 border-t border-gray-300/60 flex justify-between  text-[9px] ">
        <div className=" h-full w-1/2  flex items-center ">
          <p>© 2024 Luxe Inc. All rights reserved.</p>
        </div>
        <div className=" h-full w-1/2  flex justify-end gap-2 items-center">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
