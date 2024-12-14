import React, { useState } from "react";
import image1 from "../assets/images/asset 14.jpeg";
import image2 from "../assets/images/asset 15.jpeg";
import image3 from "../assets/images/asset 16.jpeg";
import image4 from "../assets/images/asset 17.jpeg";
import image5 from "../assets/images/asset 18.jpeg";
import image6 from "../assets/images/asset 19.jpeg";
import image7 from "../assets/images/asset 20.jpeg";
import image8 from "../assets/images/asset 21.jpeg";
import image9 from "../assets/images/asset 22.jpeg";
import image10 from "../assets/images/asset 23.jpeg";
import image11 from "../assets/images/asset 24.jpeg";
import image12 from "../assets/images/asset 25.jpeg";
import image13 from "../assets/images/asset 26.jpeg";
import image14 from "../assets/images/asset 27.jpeg";
import image15 from "../assets/images/asset 14.jpeg";
import image16 from "../assets/images/asset 15.jpeg";
import image17 from "../assets/images/asset 16.jpeg";
import image18 from "../assets/images/asset 17.jpeg";
import image19 from "../assets/images/asset 18.jpeg";
import image20 from "../assets/images/asset 19.jpeg";
import image21 from "../assets/images/asset 20.jpeg";
import image22 from "../assets/images/asset 21.jpeg";
import image23 from "../assets/images/asset 22.jpeg";
import image24 from "../assets/images/asset 23.jpeg";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const products = [
  {
    id: "1",
    image_1: image1,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "2",
    image_1: image2,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "3",
  },
  {
    id: "3",
    image_1: image3,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "2",
  },
  {
    id: "4",
    image_1: image4,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "5",
  },
  {
    id: "5",
    image_1: image5,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "6",
    image_1: image6,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "7",
    image_1: image7,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "8",
    image_1: image8,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "9",
    image_1: image9,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "10",
    image_1: image10,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "11",
    image_1: image11,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "12",
    image_1: image12,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "13",
    image_1: image13,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "14",
    image_1: image14,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "15",
    image_1: image15,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "16",
    image_1: image16,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "17",
    image_1: image17,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "18",
    image_1: image18,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "19",
    image_1: image19,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "20",
    image_1: image20,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "21",
    image_1: image21,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "22",
    image_1: image22,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Newest",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "23",
    image_1: image23,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Feature",
    brand: "Paloma Picasso",
    rating: "1",
  },
  {
    id: "24",
    image_1: image24,
    title: "Exfoliating Body Scrub",
    price_1: "290.00",
    price_2: "350.00",
    category: "Best",
    brand: "Paloma Picasso",
    rating: "1",
  },
];
function AllProducts() {
  const [click, setClick] = useState(false);
  const [items, setItems] = useState(products);
  const handleFilter = (FilterItem) => {
    const updateItem = products.filter((currElem) => {
      return currElem.category === FilterItem;
    });
    setItems(updateItem);
  };
  const handleChange = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <div className="min-h-screen w-full  ">
      <div className="py-5  lg:px-14 px-3 h-full">
        <div className="flex list-none justify-center mx-auto lg:gap-20 md:gap-10 gap-7 items-center flex-wrap ">
          <li className="">
            {" "}
            <button
              className="xl:text-5xl text-3xl  flex  font-semibold sm:text-start text-center"
              style={{ fontFamily: "Marcellus" }}
              onClick={() => handleFilter("Newest")}
            >
              Newest Products
            </button>
          </li>

          <li>
            {" "}
            <button
              className="xl:text-5xl text-3xl  flex  font-semibold sm:text-start text-center"
              style={{ fontFamily: "Marcellus" }}
              onClick={() => handleFilter("Feature")}
            >
              Featured Products
            </button>
          </li>

          <li>
            {" "}
            <button
              className="xl:text-5xl text-3xl  flex  font-semibold sm:text-start text-center"
              style={{ fontFamily: "Marcellus" }}
              onClick={() => handleFilter("Best")}
            >
              Best Selling
            </button>
          </li>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {items.map((category, index) => {
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
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
