import { Key, MoveRight } from "lucide-react";
import { useState } from "react";

import { useParams } from "react-router-dom";
const AddToCartBtn = () => {

  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setShowNotification(true);

    // auto-hide after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };





  //   localStorage.clear()
  const { id } = useParams();
  const AddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find((item) => {
      return item.id == id;
    });

    item ? item.count++ : existingCart.push({ id: Number(id), count: 1 });

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <>
    <button
      onClick={() => {
        handleAddToCart()
        AddToCart();
        
      }}
      className="w-full h-16 cursor-pointer bg-[#000000] text-white flex items-center justify-between px-5 font-mont text-sm font-medium mb-4"
    >
      <span>ADD TO CART</span>
      <span>
        <MoveRight />
      </span>
    </button>
    
     {showNotification && <AddToCartNotification />}
    </> 
  );
};

export default AddToCartBtn;


export const AddToCartNotification= ()=>{

  return (

    <div className="h-10 bg-amber-200 w-full fixed top-14 left-0 z-50 flex items-center justify-center">
      Successfully, Added to cart
    </div>
  )
};

