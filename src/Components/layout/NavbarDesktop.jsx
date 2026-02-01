import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  UserRound,ShoppingBag, Moon, TextAlignJustify,X,} from "lucide-react";


const Navbar = () => {
  const [menuBox, setMenuBox] = useState(true);
  const nav = ["New Arrivals", "Collections", "Accessories", "Editorial"];

  localStorage.getItem("product")
  return (
    <div className="fixed top-0 w-full bg-white h-14 z-100">
      <div className=" h-14   flex justify-between px-4 shadow-[0px_-6px_10px_0px_#525252]">
        <Link to="/"><div className="flex items-center justify-center w-fit">
          <h1 className="pt-3 font-serif text-2xl font-bold text-black ">LUXE</h1>
        </div></Link>
       <div className="flex justify-between gap-6 px-4 h-14 w-100 ">
         {nav.map((elem,idx) => {
          return (
            <Link to={`/page/${elem}`} key={idx}
              className="  w-fit overflow-hiddenborder-y shrink-0  h-fit text-center pt-4   text-[14px] scale-y-95 tracking-wider uppercase
              relative
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-0.5 after:w-full
         after:origin-left after:scale-x-0
         after:bg-black
         after:transition-transform after:duration-200
         hover:after:scale-x-100" href="">
              {elem}


            </Link>
          );
        })}
       </div>
        <div className="flex items-center justify-between gap-8 mr-10 w-fit">
          
            <Search className="cursor-pointer" strokeWidth={1} />
            <Link to="/cart"><ShoppingBag  className="cursor-pointer" strokeWidth={1} /></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
