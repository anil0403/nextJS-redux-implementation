"use client";
import "../globals.css"
import React, { useState  } from "react";

import { useAppDispatch } from "@/redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import { changeColor,changeTextColor } from "@/redux/features/create/createSlice";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
const Mode = () => {
  
  const changeToWhite=()=>{
    dispatch(changeColor("white"));
    dispatch(changeTextColor("black"));
    const body = document.querySelector("body");
    (body as any).style.backgroundColor = "white";
    (body as any).style.color = "black"
  }
  const changeToBlack=()=>{
    dispatch(changeColor("black"));
    dispatch(changeTextColor("white"));
    const body = document.querySelector("body");
    (body as any).style.backgroundColor = "black";
    (body as any).style.color = "white"
  }



  const dispatch = useAppDispatch();


 
  
  
  return (
    <div className={`mx-auto w-[80%] md:w-[50] lg:w-[40] relative `}>

      <div className="  flex flex-row gap-4 absolute right-5">
        <div
          className="flex flex-row gap-2 items-center border-2 border-black rounded-md px-2 cursor-pointer
"
          onClick={changeToWhite}
        >
          <button className="p-3 text-md font-semibold text-whiterounded-md ">
            Light
          </button>
          <HiOutlineLightBulb color="black" size={30} />
        </div>
        <div
          className="flex flex-row gap-2 items-center border-2 border-black bg-black rounded-md px-2 cursor-pointer
"
          onClick={changeToBlack}
        >
          <p>hii</p>
          <button className="p-3 text-md font-semibold text-whiterounded-md text-white">
            Dark
          </button>
          <MdOutlineDarkMode
            className="bg-black rounded-md "
            color="white"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Mode;
