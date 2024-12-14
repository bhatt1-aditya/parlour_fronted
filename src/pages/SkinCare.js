import React from "react";
import skincare from "../assets/images/asset 29.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function SkinCare() {
  return (
    <div className="">
      <div className="lg:px-14 px-3 py-10 relative">
        <img src={skincare} alt="image is missing" className=" w-full " />
        <div className="absolute sm:top-[20%] top-[35%] xl:top-[23%] left-[10%] xl:left-[20%] flex flex-col gap-5">
          <h1
            className=" sm:text-5xl md:text-6xl text-2xl xl:text-7xl lg:text-7xl  text-white"
            style={{ fontFamily: "Marcellus" }}
          >
            The Story of
            <br />
            Skincare
          </h1>
          <p
            className="text-white text-base md:text-3xl hidden sm:flex justify-center items-center gap-1"
            style={{ fontFamily: "Lato" }}
          >
            Special promotion{" "}
            <span
              className="text-yellow-500 sm:text-5xl "
              style={{ fontFamily: "Marcellus" }}
            >
              50%
            </span>
            discount
          </p>
          <Link
            to="/products"
            className="mt-4 w-[40%] px-3 py-3 bg-white rounded-full  text-xl  items-center gap-4 justify-center  md:flex hidden hover:bg-yellow-500 transition-all duration-500"
          >
            <h1> Shop Now</h1>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SkinCare;
