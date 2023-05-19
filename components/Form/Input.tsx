"use client";
import React from "react";
interface InputProps {
  label: string;
  value: string;
  type: string;
  id: string;
  onChange: any;
  disabled?: boolean;
}
<input type="text" />;
const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  id,
  onChange,
  disabled,
}) => {
  return (
    <div className="w-full py-2 flex flex-col gap-1 items-start">
      <label className="text-md font-semibold" htmlFor={`${id}`}>
        {label}:
      </label>
      <input
        className=" outline-none ring-1 ring-inset ring-gray-300 p-2 focus:ring-2 focus:ring-sky-500 rounded-md w-full text-gray-500 text-sm font-semibold"
        id={`${id}`}
        type={`${type}`}
        value={`${value}`}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
