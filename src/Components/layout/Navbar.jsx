import React, { useState } from "react";
import {
  Search,
  UserRound,
  ShoppingBag,
  Moon,
  TextAlignJustify,
  X,
} from "lucide-react";
const Navbar = () => {
  const [menuBox, setMenuBox] = useState(true);
  const nav = ["New Arrivals", "Collections", "Accessories", "Editorial"];

  return (
    <div className="md:bg-amber-400 fixed top-0 h-14 bg-white  w-full z-100">
      <div className=" h-14  w-fill flex justify-between px-4 shadow-[0px_-6px_10px_0px_#525252]">
        <div className=" flex justify-center items-center w-fit ">
          <h1 className=" text-2xl font-bold font-serif text-black">LUXE</h1>
        </div>
        <div className=" flex w-26 items-center justify-between">
          <div className=" flex gap-4">
            <Search className="cursor-pointer" strokeWidth={1} />
            <ShoppingBag className="cursor-pointer" strokeWidth={1} />
          </div>
          <div
            onClick={() => {
              setMenuBox(!menuBox);
            }}
            className=" cursor-pointer h-full w-fit flex items-center"
          >
            {menuBox ? (
              <TextAlignJustify strokeWidth={1.1} />
            ) : (
              <X strokeWidth={1} size={32} />
            )}
          </div>
        </div>
        {menuBox ? null : (
          <nav className=" absolute h-13 w-full top-14 backdrop-blur-sm left-0  overflow-hidden z-100 flex items-center gap-0 ">
            {nav.map((elem) => {
              return (
                <a
                  className="bg-white/10 text-white  w-full  overflow-hidden text-shadow-[0px_0px_4px_#000000] border-y  h-14 text-center pt-5  text-[11px] font-extrabold  underline "
                  href=""
                >
                  {elem}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
