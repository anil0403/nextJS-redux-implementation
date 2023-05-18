import React from "react";
import { useRouter } from "next/navigation";

interface ItemsProps {
  item: string;
}

export const Items: React.FC<ItemsProps> = ({ item }) => {
  const router = useRouter();
  return (
    <li
      className="text-md font-bold hover:text-sky-500"
      onClick={() => {
        router.push(`/${item}`);
      }}
    >
      {item}
    </li>
  );
};
