"use client";
import "../globals.css"
import React, { useState  } from "react";

import { useAppDispatch } from "@/redux/hooks/hooks";
import { changeColor,changeTextColor } from "@/redux/features/create/createSlice";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Mode = () => {
  const [mode, setMode] = useState("white");

  const changeToWhite=()=>{

    setMode("white")
    dispatch(changeColor("white"));
    dispatch(changeTextColor("black"));
    const body = document.querySelector("body");
    (body as any).style.backgroundColor = "white";
    (body as any).style.color = "black"
  }
  const changeToBlack=()=>{
    setMode("dark")
    dispatch(changeColor("black"));
    dispatch(changeTextColor("white"));
    const body = document.querySelector("body");
    (body as any).style.backgroundColor = "black";
    (body as any).style.color = "white"
  }



  const dispatch = useAppDispatch();


 
  
  
  return (
    <div className="mx-auto w-[80%] md:w-[50] lg:w-[40] relative">
      <div className="flex flex-row gap-4 absolute right-5">
        <div
          className={`flex flex-row gap-2 items-center border-2 border-black rounded-md px-2 cursor-pointer ${
            mode === 'dark' ? 'border-white' : 'border-black'
          }`}
          onClick={changeToWhite}
        >
          <button className="p-3 text-md font-semibold rounded-md">Light</button>
          <HiOutlineLightBulb color={mode === 'white' ? 'black' : 'white'} size={30} />
        </div>
        <div
          className={`flex flex-row gap-2 items-center border-2 border-black rounded-md px-2 cursor-pointer ${
            mode === 'dark' ? 'border-white' : 'border-black'
          }`}
          onClick={changeToBlack}
        >
          <button className="p-3 text-md font-semibold rounded-md ">Dark</button>
          <MdOutlineDarkMode className="rounded-md" color={mode === 'white' ? 'black' : 'white'} size={30} />
        </div>
      </div>
    </div>
  );
};
export default Mode;
