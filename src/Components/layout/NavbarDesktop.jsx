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
    <div className=" fixed top-0 h-14 bg-white  w-full z-100">
      <div className=" h-14   flex justify-between px-4 shadow-[0px_-6px_10px_0px_#525252]">
        <div className=" flex justify-center items-center w-fit ">
          <h1 className=" text-2xl font-bold font-serif text-black">LUXE</h1>
        </div>
       <div className="h-14  w-100 flex justify-between px-4 gap-6 ">
         {nav.map((elem) => {
          return (
            <a
              className="  w-fit overflow-hiddenborder-y shrink-0  h-fit text-center pt-4   text-[14px] scale-y-95 tracking-wider uppercase
              relative
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-full
         after:origin-left after:scale-x-0
         after:bg-black
         after:transition-transform after:duration-200
         hover:after:scale-x-100
              
              "
              href=""
            >
              {elem}
            </a>
          );
        })}
       </div>
        <div className=" flex w-fit gap-8 items-center justify-between mr-10">
          
            <Search className="cursor-pointer" strokeWidth={1} />
            <ShoppingBag className="cursor-pointer" strokeWidth={1} />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
