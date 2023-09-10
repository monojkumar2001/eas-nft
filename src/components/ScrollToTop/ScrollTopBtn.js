import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
const ScrollTopBtn = () => {
    const [isVisibles, setIsVisibles]=useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll =()=>{
    let heightToHidden = 250;
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

    if(winScroll > heightToHidden){
        setIsVisibles(true);
    }else{
        setIsVisibles(false);
    }
  }
  useEffect (()=>{
    window.addEventListener("scroll", listenToScroll)
  },[])
  return (
    <>
     {isVisibles && (
         <button className="scroll-up-btn" onClick={handleScroll}>
         <IoIosArrowUp />
       </button>
     )
     }
    </>
  );
};

export default ScrollTopBtn;
