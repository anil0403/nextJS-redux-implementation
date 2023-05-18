import Form from "@/components/Form/Form";
import React from "react";

const Home = () => {
  return (
    <div className=" w-[80%] md:w-[50%] lg:w-[30%] mt-10 flex flex-col justify-center shadow-md shadow-slate-500 hover:shadow-sky-500 rounded-md mx-auto  hover:scale-110 transition-all">
      <h1 className=" text-center text-2xl font-bold text-sky-500 pt-5 ">Data Collection Form</h1>
      <Form />
    </div>
  );
};

export default Home;
