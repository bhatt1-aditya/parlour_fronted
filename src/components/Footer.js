import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuPackageOpen } from "react-icons/lu";
import { SlPhone } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Logo2 from "./Logo2";
function Footer() {
  const items = [
    {
      id: 1,
      icon: <MdOutlineRocketLaunch />,
      title: "SHIPPING",
      description: "Free Shipping World Wide",
    },
    {
      id: 2,
      icon: <TfiHeadphoneAlt />,
      title: "HASSLE FREE",
      description: "24*7 Customer Support",
    },
    {
      id: 3,
      icon: <LuPackageOpen />,
      title: "SECURED",
      description: "Safe Packaging",
    },
  ];
  return (
    <div className="lg:px-14 px-3 py-3 bg-[#124841] w-full min-h-screen">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 py-16 ">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex gap-5">
              <div className="xl:text-7xl text-6xl text-yellow-500">
                {item.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-bold text-gray-400">
                  {item.title}
                </h1>
                <p className="xl:text-2xl text-xl font-bold text-white">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-gray-700 w-full"></div>
      <div className="xl:flex grid  md:grid-cols-2 gap-8 py-16 justify-between items-center ">
        <div className="cursor-pointer">
          <Logo2 h={90} w={90} />
        </div>
        <div className="flex gap-6 justify-center items-center ">
          <h1 className="text-white font-bold text-lg uppercase md:flex hidden">
            Hotline
          </h1>
          <SlPhone className="text-2xl text-yellow-500 " />
          <p className="text-white font-bold text-2xl">1-900-123-4567</p>
        </div>
        <div className="flex gap-5">
          <IoLogoInstagram className="text-2xl text-yellow-500 cursor-pointer hover:text-white" />
          <FaFacebook className="text-2xl text-yellow-500 cursor-pointer hover:text-white" />
          <FaYoutube className="text-2xl text-yellow-500 cursor-pointer hover:text-white" />
        </div>
      </div>
      <div className="border border-gray-700 w-full"></div>

      <div className="py-16 xl:flex grid lg:grid-cols-4 grid-cols-1 justify-between gap-16 w-full">
        <div className="flex flex-col lg:gap-10 gap-6 ">
          <h1 className="text-white font-bold text-2xl uppercase">
            Contact Us
          </h1>
          <ul className="text-gray-400 text-xl  gap-5 flex flex-col">
            <li className="cursor-pointer hover:text-yellow-500">About Us</li>
            <li className="cursor-pointer hover:text-yellow-500">Contact Us</li>
            <li className="cursor-pointer hover:text-yellow-500">Our Team</li>
          </ul>
        </div>
        <div className="flex flex-col lg:gap-10 gap-6 ">
          <h1 className="text-white font-bold text-2xl uppercase">Account</h1>
          <ul className="text-gray-400 text-xl  gap-5 flex flex-col">
            <li className="cursor-pointer hover:text-yellow-500">Shop</li>
            <li className="cursor-pointer hover:text-yellow-500">My Account</li>
            <li className="cursor-pointer hover:text-yellow-500">
              Tracking Orderr
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:gap-10 gap-6 ">
          <h1 className="text-white font-bold text-2xl uppercase">
            Quick Links
          </h1>
          <ul className="text-gray-400 text-xl  gap-5 flex flex-col">
            <li className="cursor-pointer hover:text-yellow-500">
              Shopping Cart
            </li>
            <li className="cursor-pointer hover:text-yellow-500">Checkout</li>
            <li className="cursor-pointer hover:text-yellow-500">Wishlist</li>
          </ul>
        </div>
        <div className="flex flex-col lg:gap-10 gap-6 ">
          <h1 className="text-white font-bold text-2xl uppercase">Services</h1>
          <ul className="text-gray-400 text-xl  gap-5 flex flex-col">
            <li className="cursor-pointer hover:text-yellow-500">Our Team</li>
            <li className="cursor-pointer hover:text-yellow-500">Portfolios</li>
            <li className="cursor-pointer hover:text-yellow-500">
              Tbay List Icons
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:gap-10 gap-6 ">
          <h1 className="text-white font-bold text-2xl uppercase xl:text-end text-start">
            Our Newlletter
          </h1>
          <ul className="text-gray-400 text-xl  gap-5 flex flex-col ">
            <li>Subscribe to us and get the latest updates</li>
            <input
              type="text"
              placeholder="Enter Your Email..."
              className="py-4 px-5 rounded-full bg-[#124841] border outline-none border-gray-400"
            />
          </ul>
        </div>
      </div>
      <div>
        <div className="text-gray-400 text-center">
          © 2024 <span className="text-yellow-500 cursor-pointer">Ruza</span>{" "}
          All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
