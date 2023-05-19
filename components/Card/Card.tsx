"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/navigation";
import { createCurrentData } from "@/redux/features/create/createSlice";
// import { createCurrent } from "@/redux/features/current/currentSlice";

interface CardProps {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: string;
}

const Card: React.FC<CardProps> = ({ name, email, phone, address, dob }) => {


  const router = useRouter();
  const dispatch = useAppDispatch();
  const editHandler = () => {
    const currentData = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      dob: dob,
    };
    dispatch(createCurrentData(currentData));
    router.push("/");
  };
  return (
    <div className="group p-5 bg-white rounded-md shadow-md shadow-sky-500  text-sm font-semibold ">
      <h1>
        Name : <span>{name}</span>
      </h1>
      <p>
        Email : <span>{email}</span>
      </p>
      <p>
        Address: <span>{address}</span>
      </p>
      <p>
        Phone : <span>{phone}</span>
      </p>
      <p>
        DOB : <span>{dob}</span>
      </p>

      <div className=" w-full flex flex-row justify-between mt-5 group">
        <button
          onClick={editHandler}
          className="bg-sky-500 p-2 rounded-md text-white hover:bg-sky-700"
        >
          Edit
        </button>
        <button
          onClick={() => {}}
          className="bg-red-600 p-2 rounded-md text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
