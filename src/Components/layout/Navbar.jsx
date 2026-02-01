import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="fixed top-0 w-full bg-white h-14 z-100">
      <div className=" h-14  w-fill flex justify-between px-4 shadow-[0px_-6px_10px_0px_#525252]">
        <div className="flex items-center justify-center w-fit">
          <Link to="/">
            {" "}
            <h1 className="font-serif text-2xl font-bold text-black ">LUXE</h1>
          </Link>
        </div>
        <div className="flex items-center justify-between w-26">
          <div className="flex gap-4 ">
            <Search className="cursor-pointer" strokeWidth={1} />

            <Link to="/cart">
              <ShoppingBag className="cursor-pointer" strokeWidth={1} />
            </Link>
          </div>
          <div
            onClick={() => {
              setMenuBox(!menuBox);
            }}
            className="flex items-center h-full cursor-pointer w-fit"
          >
            {menuBox ? (
              <TextAlignJustify strokeWidth={1.1} />
            ) : (
              <X strokeWidth={1} size={32} />
            )}
          </div>
        </div>
        {menuBox ? null : (
          <nav className="absolute left-0 flex items-center w-full gap-0 overflow-hidden h-13 top-14 backdrop-blur-sm z-100">
            {nav.map((elem) => {
              return (
                <Link to={`/page/${elem}`}
                  className="bg-white/10 text-white  w-full  overflow-hidden text-shadow-[0px_0px_4px_#000000] border-y  h-14 text-center pt-5  text-[11px] font-extrabold  underline "
                  href=""
                >
                  {elem}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
