import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categories.css";
import image1 from "../assets/images/asset 8.png";
import image2 from "../assets/images/asset 9.png";
import image3 from "../assets/images/asset 10.png";
import image4 from "../assets/images/asset 11.png";
import image5 from "../assets/images/asset 12.png";
import image6 from "../assets/images/asset 13.png";
import { Link } from "react-router-dom";
const categories = [
  { image: image1, title: "Skin Care & Skin Protection", products: "5" },
  { image: image2, title: "Cream Blush", products: "8" },
  { image: image3, title: "Hair & Body", products: "8" },
  { image: image4, title: "Skin Cleaners", products: "7" },
  { image: image5, title: "Herbal Products", products: "4" },
  { image: image6, title: "Hair Cleaners", products: "6" },
];
function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  return (
    <div className="h-screen w-full bg-[#fcf9f4] ">
      <div className="py-5  lg:px-14 px-3 ">
        <h1
          className="xl:text-5xl text-3xl  flex absolute font-semibold sm:text-start text-center"
          style={{ fontFamily: "Marcellus" }}
        >
          Shop Categories
        </h1>
        <Slider {...settings}>
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center lg:px-14 px-3 sm:mt-10 mt-12 md:mt-12 lg:mt-32 pt-5"
              >
                <Link
                  to="/products"
                  className="flex justify-center items-center"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="lg:scale-110 lg:hover:scale-125 hover:110 object-scale-down transition-all duration-500 "
                  />
                </Link>
                <div className="flex flex-col text-center sm:mt-5 mt-5 md:mt-5 lg:mt-16">
                  <h1 className="sm:text-2xl lg:text-xl text-xl font-medium hover:text-yellow-500 transition-all duration-500">
                    {category.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {category.products} products
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Categories;
