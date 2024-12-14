import React, { useState } from "react";
import { NavItems } from "./NavItems";
export function DropDown() {
  const [dropDown, setDropDown] = useState(true);
  return (
    <ul
      className={
        dropDown ? "hidden" : "w-[10rem] absolute text-start top-20 block"
      }
      onClick={() => setDropDown(!dropDown)}
    >
      {NavItems.map((item) => {
        return (
          <li
            key={item.id}
            className="bg-white cursor-pointer block w-[100%] h-[100%] p-2 px-5"
            onClick={() => setDropDown(false)}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
