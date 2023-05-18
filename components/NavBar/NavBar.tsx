"use client";
import React from "react";
import { Items } from "./Items";
const NavBar = () => {
  return (
    <div className="w-50% mx-auto">
      <ul className=" flex flex-row  flex-wrap mx-12  justify-evenly my-10 border-slate-500 border-1 shadow-xl p-5 rounded-md cursor-pointer ">
        <Items item="Home" path='/' />
        <Items item="Fetch"  path="Fetch"/>
        <Items item="Update" path="Update"/>
        <Items item="Delete" path="Delete"/>
        <Items item="Mode" path="Delete" />
      </ul>
    </div>
  );
};

export default NavBar;
