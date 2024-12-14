import React from "react";
import image1 from "../assets/images/asset 30.jpeg";
import image2 from "../assets/images/asset 31.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function SkinCare2() {
  return (
    <div>
      <div className="lg:px-14 px-3 py-10 flex lg:flex-row flex-col gap-5 w-full">
        <div className=" relative">
          <img
            src={image1}
            alt="image1"
            className="object-scale-down relative"
          />
          <div className="absolute left-[5%] lg:top-[12%] sm:top-[20%] top-[10%]  2xl:w-[40%] xl:w-[40%] lg:w-[50%] md:w-[40%] sm:w-[50%] w-[70%] px-4 flex flex-col sm:gap-5 gap-1">
            <h1 className="lg:text-2xl sm:text-3xl md:text-2xl text-2xl text-white uppercase">
              <span className="text-yellow-500 ">30%</span> off Now!
            </h1>
            <p
              className="2xl:text-5xl xl:text-4xl lg:text-2xl md:text-5xl sm:text-4xl text-2xl text-white"
              style={{ fontFamily: "Marcellus" }}
            >
              Transform Your Look today
            </p>
            <Link to="/products" className="sm:px-3 sm:py-3 px-2 py-1 bg-white rounded-full  w-[50%] sm:w-[70%] lg:w-[80%] text-xl  items-center gap-4 justify-center sm:flex hidden  hover:bg-yellow-500 transition-all duration-500">
              <h1> Shop Now</h1>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={image2}
            alt="image2"
            className="object-scale-down relative"
          />
          <div className="absolute left-[5%] lg:top-[10%] sm:top-[20%] top-[10%]  2xl:w-[50%] xl:w-[40%] lg:w-[50%] md:w-[40%] sm:w-[50%] w-full px-4 flex flex-col  sm:gap-5 gap-1">
            <h1 className="lg:text-2xl sm:text-3xl text-xl uppercase text-gray-700">
              Skin care
            </h1>
            <p
              className="2xl:text-5xl xl:text-4xl lg:text-2xl md:text-5xl sm:text-4xl text-2xl text-gray-700"
              style={{ fontFamily: "Marcellus" }}
            >
              Hydra Serum
              <br />
              <span
                className="flex gap-2 text-red-700 items-end xl:py-5 py-2"
                style={{ fontFamily: "sans-serif" }}
              >
                50%<p className="uppercase text-red-500 text-2xl">off</p>
              </span>
            </p>
            <Link to="/products" className="sm:px-3 sm:py-3 px-2 py-1 bg-white rounded-full  w-[50%] sm:w-[70%] lg:w-[80%] text-xl  items-center gap-4 justify-center sm:flex hidden  hover:bg-yellow-500 transition-all duration-500">
              <h1> Shop Now</h1>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinCare2;
