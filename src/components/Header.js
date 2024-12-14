import React, { useEffect, useState } from "react";
import Logo from "./Logo";

import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [navColor, setNavColor] = useState("bg-white");
  const [openMenu, setOpenMenu] = useState(false);
  const changeNavColorOnScroll = () => {
    if (window.scrollY > 80) {
      setNavColor("bg-white");
    } else {
      setNavColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeNavColorOnScroll);
    };
  }, []);
  const handleChange = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header
      className={`z-50 lg:px-14 px-3 py-3 h-28 lg:h-20 w-full  ${navColor} lg:top-0 lg:left-0 lg:fixed`}
    >
      {/* responsive for mobile phone */}
      <nav className="flex justify-between items-center">
        <div className="cursor-pointer">
          <Link to="/" className="hidden lg:block">
            {" "}
            <Logo w={140} h={50} />
          </Link>
          {openMenu ? (
            <div className="h-screen w-full bg-green-300 top-0 left-0 bottom-0 right-0 absolute z-50">
              <div>
                <ul>
                  <li className="">
                    <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group text-yellow-500 duration-500">
                      <Link to="/" className="xl:text-xl  text-lg">
                        Home
                      </Link>
                      <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                      <Link to="/products" className="xl:text-xl  text-lg">
                        Product
                      </Link>
                      <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                      <h1 className="xl:text-xl  text-lg">Pages</h1>
                      <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                      <h1 className="xl:text-xl  text-lg">Blogs</h1>
                      <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
                    </div>
                  </li>
                  <li>
                    <div className="cursor-pointer group hover:text-yellow-500 duration-500">
                      <Link to="portfolio" className="xl:text-xl  text-lg ">
                        Portfolios
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="cursor-pointer group hover:text-yellow-500 duration-500">
                      <Link to="/contact" className="xl:text-xl  text-lg ">
                        Contact Us
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                {" "}
                <RxCross1
                  className="text-3xl lg:hidden block"
                  onClick={handleChange}
                />
              </div>
            </div>
          ) : (
            <IoIosMenu
              className="text-3xl lg:hidden block"
              onClick={handleChange}
            />
          )}
        </div>
        <div>
          <ul className=" hidden lg:flex  xl:gap-10 gap-5 justify-center items-center">
            <li className="">
              <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group text-yellow-500 duration-500">
                <Link to="/" className="xl:text-xl  text-lg">
                  Home
                </Link>
                <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                <Link to="/products" className="xl:text-xl  text-lg">
                  Product
                </Link>
                <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                <h1 className="xl:text-xl  text-lg">Pages</h1>
                <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center xl:gap-3 gap-1 cursor-pointer group hover:text-yellow-500 duration-500">
                <h1 className="xl:text-xl  text-lg">Blogs</h1>
                <IoIosArrowDown className="group-hover:rotate-180 transition-all ease-linear text-lg" />
              </div>
            </li>
            <li>
              <div className="cursor-pointer group hover:text-yellow-500 duration-500">
                <Link to="portfolio" className="xl:text-xl  text-lg ">
                  Portfolios
                </Link>
              </div>
            </li>
            <li>
              <div className="cursor-pointer group hover:text-yellow-500 duration-500">
                <Link to="/contact" className="xl:text-xl  text-lg ">
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
          <Link to="/" className="lg:hidden block">
            {" "}
            <Logo w={80} h={30} />
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex justify-center items-center xl:gap-10 gap-5">
            <li>
              <div className="">
                <IoSearchSharp className="xl:text-3xl text-2xl cursor-pointer hover:text-yellow-500" />
              </div>
            </li>
            <li>
              <div>
                <FaClockRotateLeft className="xl:text-3xl text-2xl cursor-pointer hover:text-yellow-500" />
              </div>
            </li>
            <li>
              <div>
                <FaRegUser className="xl:text-3xl text-2xl cursor-pointer hover:text-yellow-500 duration-500" />
              </div>
            </li>
            <li>
              <div className="relative">
                <FaRegHeart className="xl:text-3xl text-2xl cursor-pointer hover:text-yellow-500 duration-500" />
                <div className="absolute h-6 w-6 bg-yellow-500 rounded-full flex justify-center items-center -top-3 left-4">
                  0
                </div>
              </div>
            </li>
            <li>
              <div className="relative">
                <HiOutlineShoppingBag className="text-3xl cursor-pointer hover:text-yellow-500 duration-500" />
                <div className="absolute h-6 w-6 bg-yellow-500 rounded-full flex justify-center items-center -top-3 left-4">
                  0
                </div>
              </div>
            </li>
          </ul>
          <div className="relative lg:hidden flex">
            <HiOutlineShoppingBag className="text-3xl cursor-pointer hover:text-yellow-500 duration-500" />
            <div className="absolute h-6 w-6 bg-yellow-500 rounded-full flex justify-center items-center -top-2 left-3">
              0
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full border my-2 flex lg:hidden  justify-between items-center px-3 ">
        <div className="flex gap-2  items-center w-full h-10">
          <IoSearchSharp className="text-3xl" />
          <input
            type="text"
            placeholder="Search in 20.000+ products..."
            className="w-full outline-none"
          />
        </div>
        <div>
          <h1>All</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
