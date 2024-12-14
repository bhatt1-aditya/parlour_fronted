import React, { useState } from "react";
import Description from "./Description";
import image_1 from "../assets/images/asset 35.jpeg";
import image_2 from "../assets/images/asset 36.jpeg";
import image_3 from "../assets/images/asset 37.jpeg";
import { FaRegUser } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
// import DetailsPage from "./DetailsPage";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Blogs() {
  const BlogData = [
    {
      image: image_1,
      brand: "COSMETICS",
      category: "NAIL",
      user: " Admin",
      date: "December 4,2022",
      icon_1: <FaRegUser />,
      icon_2: <CiCalendar />,
      icon_3: <CiChat1 />,
      comment: "1",
      description: "Glowing skin is a result of proper skincare",
      about:
        "The About Love film by acclaimed director Emmanuel Adjei features soulful ...",
    },
    {
      image: image_2,
      brand: "COSMETICS",
      category: "LIPS",
      user: " Admin",
      date: "October 4,2022",
      icon_1: <FaRegUser />,
      icon_2: <CiCalendar />,
      icon_3: <CiChat1 />,
      comment: "1",
      description: "Treat your makeup like jewelry for the face",
      about:
        "The About Love film by acclaimed director Emmanuel Adjei features soulful ...",
    },
    {
      image: image_3,
      brand: "COSMETICS",
      category: "SKINCARE",
      user: " Admin",
      date: "August 4,2022",
      icon_1: <FaRegUser />,
      icon_2: <CiCalendar />,
      icon_3: <CiChat1 />,
      comment: "1",
      description: "I believe that all women are pretty without makeup",
      about:
        "The About Love film by acclaimed director Emmanuel Adjei features soulful ...",
    },
  ];

  return (
    <div>
      <div className="lg:px-14 px-3 py-20">
        <h1
          className="py-10 text-5xl text-gray-700"
          style={{ fontFamily: "Marcellus" }}
        >
          Read The Blog
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {BlogData.map((blog) => {
            return (
              <div>
                <div>
                  <img
                    src={blog.image}
                    alt="image is missing"
                    className="xl:h-[480px] xl:w-full cursor-pointer"
                  />
                </div>
                <div className="flex gap-2 py-2 pt-4 text-gray-500">
                  <h1>{blog.brand}</h1>
                  <h1>, {blog.category}</h1>
                </div>
                <div className="h-px w-full border border-gray-500"></div>
                <div className="py-5 flex justify-between items-center ">
                  <div className="flex gap-2 justify-center items-center">
                    <h1 className="text-xl text-gray-500">{blog.icon_1}</h1>
                    <p
                      className="text-gray-700 text-base "
                      style={{ fontFamily: "Lato" }}
                    >
                      By
                      <span className="hover:text-yellow-500 transition-all duration-300 cursor-pointer">
                        {blog.user}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <h1 className="text-xl text-gray-500">{blog.icon_2}</h1>
                    <p
                      className="text-gray-700 text-base hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "Lato" }}
                    >
                      {blog.date}
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <h1 className="text-xl text-gray-500">{blog.icon_3}</h1>
                    <p
                      className="text-gray-700 text-base hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                      style={{ fontFamily: "Lato" }}
                    >
                      {blog.comment} Comment
                    </p>
                  </div>
                </div>
                <div className="">
                  <h1
                    style={{ fontFamily: "Lato" }}
                    className="xl:text-3xl lg:text-2xl font-semibold text-gray-700 py-5 hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                  >
                    {blog.description}
                  </h1>
                  <p
                    style={{ fontFamily: "Lato" }}
                    className="text-xl text-gray-500"
                  >
                    {blog.about}
                  </p>
                </div>
                <div className="py-10">
                  <a
                    href="#"
                    className="text-lg underline text-gray-700 font-semibold hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                    style={{ fontFamily: "Lato" }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
