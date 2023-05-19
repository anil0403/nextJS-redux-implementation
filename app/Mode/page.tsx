"use client";
import React, { useState } from "react";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Mode = () => {
  const [mode, setMode] = useState("white");
  return (
    <div className="mx-auto w-[80%] md:w-[50] lg:[40] relative bg-black">
      <div className="  flex flex-row gap-4 absolute right-5">
        <div
          className="flex flex-row gap-2 items-center border-2 border-black rounded-md px-2 cursor-pointer
"
        >
          <button className="p-3 text-md font-semibold text-whiterounded-md ">
            Light
          </button>
          <HiOutlineLightBulb color="black" size={30} />
        </div>
        <div
          className="flex flex-row gap-2 items-center border-2 border-black bg-black rounded-md px-2 cursor-pointer
"
        >
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
