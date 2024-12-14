import React from "react";
import image1 from "../assets/images/asset 33.jpeg";
import image2 from "../assets/images/asset 34.jpeg";
import image3 from "../assets/images/asset 47.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Description() {
  return (
    <div className=" bg-[#fcf9f4]">
      <div className="lg:px-14 px-3 py-3">
        <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-0 gap-5 w-full">
          <div>
            <img src={image1} alt="missing" className="w-full" />
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <p
              className="2xl:text-3xl xl:text-3xl lg:text-2xl text-xl text-center uppercase text-gray-700"
              style={{ fontFamily: "Marcellus" }}
            >
              We created products that harness the power of 100% natural,
              effective ingredients to support your skin type.
            </p>
            <Link to="/products" className="sm:px-3 border sm:py-3 px-2 py-1 bg-white rounded-full xl:w-[50%] w-[60%] text-xl  items-center gap-4 justify-center flex hover:bg-yellow-500 transition-all duration-all">
              <h1> Discover Now</h1>
              <FaArrowRightLong />
            </Link>
          </div>
          <div>
            <img src={image2} alt="missing" />
          </div>
        </div>
      </div>
      <img src={image3} alt="missing" className="lg:flex hidden" />
    </div>
  );
}

export default Description;
