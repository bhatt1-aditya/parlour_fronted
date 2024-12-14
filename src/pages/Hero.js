import React from "react";
import image1 from "../assets/images/asset 5.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className=" flex relative bg-[#fcf9f4] ">
        <div className="sm:h-screen  w-full  flex  gap-1 sm:-translate-x-12 2xl:translate-y-0 xl:translate-y-[10%] lg:translate-y-[32.5%] md:translate-y-[43.8%] sm:translate-y-[66.3%] translate-y-[21%]">
          <img
            src={image1}
            alt="image is missing"
            className=" 2xl:h-[89%] xl:h-[80%] lg:h-[60%] md:h-[50%] sm:h-[30%] h-[70%] flex scale-125  object-scale-down transparent"
          />
        </div>

        <div
          className="sm:flex   justify-center items-start flex-col absolute 2xl:top-56 xl:top-56 lg:top-52  md:top-16 sm:top-16 top-2 2xl:right-28 xl:right-16 lg:right-24 md:right-8  sm:right-8 right-[2%] xl:gap-6 gap-5 sm:text-start text-center  "
          style={{ fontFamily: "Marcellus" }}
        >
          <h1 className="2xl:text-7xl xl:text-[80px] lg:text-[65px] md:text-6xl sm:text-5xl text-xl uppercase w-full 2xl:leading-tight xl:leading-tight lg:leading-snug md:leading-tight sm:leading-tight leading-normal text-center sm:text-start text-gray-700">
            Unique forms <br />
            give you
          </h1>
          <p className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl 2xl:leading-normal xl:leading-normal lg:leading-normal md:leading-snug sm:leading-normal text-gray-600">
            We measure everything against a rigorous <br />
            set fo criteria to ensure
          </p>
          <Link
            to="/products"
            className=" sm:flex hidden items-center gap-5 text-gray-700 bg-yellow-500 2xl:py-6 py-4 px-5 2xl:px-10 rounded-full font-bold"
          >
            Shopping Now
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
