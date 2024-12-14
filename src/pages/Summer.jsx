import React from "react";
import image1 from "../assets/images/asset 46.jpeg";
import image2 from "../assets/images/asset 32.png";
import { FaArrowRightLong } from "react-icons/fa6";
function Summer() {
  return (
    <div className=" ">
      <div className="relative ">
        <img
          src={image1}
          alt="missing "
          className="object-scale-down  h-full"
        />
        <div className="absolute top-[50%] left-[50%]">
          <h1>Summer</h1>
          <p>Everything has beauty, but not everyone see it.</p>
          <button>Shopping Now</button>
        </div>
      </div>
    </div>
  );
}

export default Summer;
