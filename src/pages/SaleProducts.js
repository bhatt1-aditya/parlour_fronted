import React, { useState } from "react";
import image1 from "../assets/images/asset 14.jpeg";
import image2 from "../assets/images/asset 15.jpeg";
import image3 from "../assets/images/asset 16.jpeg";
import image4 from "../assets/images/asset 17.jpeg";
import image5 from "../assets/images/asset 18.jpeg";
import image6 from "../assets/images/asset 19.jpeg";
import image7 from "../assets/images/asset 20.jpeg";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SaleProducts.css";
import { FaArrowRightLong } from "react-icons/fa6";
const products = [
  {
    id: "1",
    image_1: image1,
    image_2: image2,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "2",
    image_1: image3,
    image_2: image4,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    brand: "Paloma Picasso",
    rating: "3",
  },
  {
    id: "3",
    image_1: image5,
    image_2: image6,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    brand: "Paloma Picasso",
    rating: "2",
  },
  {
    id: "4",
    image_1: image7,
    image_2: image3,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    brand: "Paloma Picasso",
    rating: "5",
  },
  {
    id: "5",
    image_1: image4,
    image_2: image2,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    brand: "Paloma Picasso",
    rating: "1",
  },
];
function SaleProducts() {
  const [click, setClick] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleChange = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <div className="min-h-screen w-full  ">
      <div className="py-5  lg:px-14 px-3 h-full">
        <h1
          className="xl:text-5xl text-3xl  flex absolute font-semibold sm:text-start text-center"
          style={{ fontFamily: "Marcellus" }}
        >
          Sale This Week
        </h1>
        <Slider {...settings}>
          {products.map((category, index) => {
            return (
              <div className="relative">
                {click ? (
                  <div
                    onClick={handleChange}
                    className="absolute cursor-pointer right-5 top-[15%]"
                  >
                    <FaHeart className="  text-2xl text-red-500" />
                  </div>
                ) : (
                  <div
                    onClick={handleChange}
                    className="absolute cursor-pointer right-5 top-[15%]"
                  >
                    <CiHeart className="text-3xl" />
                  </div>
                )}
                <div
                  // onClick={handleChange}
                  className="absolute cursor-pointer left-2 top-[15%] z-50"
                >
                  <h1 className="border bg-green-500 px-3 py-1 rounded-lg text-white uppercase ">
                    New
                  </h1>
                </div>
                <div
                  key={index}
                  className="flex flex-col justify-center items-center xl:px-14 xl:pt-32 md:pt-32  px-3 sm:mt-10 mt-12 md:mt-0 xl:mt-16 lg:mt-16 lg:pt-5"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={category.image_1}
                      style={{ hover: `backgroundImage:${category.image_2}` }}
                      alt={category.title}
                      height={300}
                      width={300}
                      className="xl:scale-125 lg:scale-75 scale-95  object-scale-down transition-all duration-500 rounded-t-full border border-gray-300 "
                    />
                  </div>
                  <div className="flex flex-col text-center sm:mt-5 mt-5 md:mt-0  lg:mt-0 xl:mt-10 gap-3 xl:py-6 py-1">
                    <h1 className="sm:text-2xl lg:text-xl text-xl  hover:text-yellow-500 transition-all duration-500 text-gray-600">
                      {category.title}
                    </h1>
                    <p className="text-xl font-medium text-red-700">
                      ${category.price_1} - ${category.price_2}
                    </p>
                    <p className="text-xl  text-[#4494f2] font-thin hover:text-yellow-500 cursor-pointer transition-all duration-500">
                      {category.brand}
                    </p>
                    <p className="text-center flex gap-1 justify-center items-center">
                      <Rating />
                      {category.rating}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Link
          to="/products"
          className="px-3 py-3 bg-white border  rounded-full md:w-[40%] sm:w-[40%] w-[80%] lg:w-[30%] xl:w-[20%] text-xl  items-center gap-4 justify-center flex hover:bg-yellow-500 transition-all duration-500 mx-auto my-10"
        >
          <h1> View All Categories</h1>
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}

export default SaleProducts;
