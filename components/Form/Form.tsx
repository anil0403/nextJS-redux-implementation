import React from "react";
import Input from "./Input";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";

import { useRouter } from "next/navigation";
import {
  create,
  update,
  deleteCurrentData,
} from "@/redux/features/create/createSlice";

const Form = () => {
  const router = useRouter();
  const newCurrentData = useAppSelector(
    (state) => state.formdata.currentData || {}
  );
  console.log(newCurrentData);
  const isDataEmpty = Object.keys(newCurrentData).length === 0;

  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: (newCurrentData as any).name || "",
    email: (newCurrentData as any).email || "",
    address: (newCurrentData as any).address || "",
    phone: (newCurrentData as any).phone || "",
    dob: (newCurrentData as any).dob || "",
  });
  const submitHandler = (e: any) => {
    e.preventDefault();
    // console.log(formData);

    if (!isDataEmpty) {
      console.log("updating ...");
      dispatch(update(formData));
      dispatch(deleteCurrentData());
      router.push("/Fetch");
    } else {
      dispatch(create(formData));
    }
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      dob: "",
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="w-full h-full p-5 flex flex-col items-center"
    >
      <Input
        label="Full Name"
        type="text"
        id="fullName"
        value={formData.name}
        onChange={(e: any) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />

      <Input
        label="Email"
        type="email"
        id="email"
        value={formData.email}
        onChange={(e: any) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        disabled={!isDataEmpty}
      />

      <Input
        label="Address"
        type="text"
        id="address"
        value={formData.address}
        onChange={(e: any) => {
          setFormData({ ...formData, address: e.target.value });
        }}
      />
      <Input
        label="Mobile/Phone Number"
        type="phone"
        id="phone"
        value={formData.phone}
        onChange={(e: any) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
      />
      <Input
        label="Date of Birth"
        type="date"
        id="dob"
        value={formData.dob}
        onChange={(e: any) => {
          setFormData({ ...formData, dob: e.target.value });
        }}
      />
      <button className="text-md text-white font-semibold  bg-sky-500 hover:bg-sky-600 w-full py-2 mt-3 rounded-md">
        {isDataEmpty ? "Submit" : "Update"}
      </button>
    </form>
  );
};

export default Form;
