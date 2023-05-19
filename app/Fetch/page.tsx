"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import Card from "@/components/Card/Card";
const Fetch = () => {
  const data = useAppSelector((state) => state.formdata.data);
  // console.log(data);
  return (
    <div className="bbg-sky-500">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 relative">
          {data.length &&
            data.map((item, i) => {
              console.log(item?.name);
              return (
                <Card
                  key={i + 1}
                  name={item?.name}
                  email={item?.email}
                  address={item?.address}
                  phone={item?.phone}
                  dob={item?.dob}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Fetch;
