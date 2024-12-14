import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
function Products() {
  const [fetchData, setFetchData] = useState([]);
  const [click, setClick] = useState(false);

  const handleChange = () => {
    setClick(!click);
    console.log(click);
  };
  async function fetchingData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setFetchData(data.products);
      console.log(data.products[0]);
    } catch (err) {
      console.log(err);
      setFetchData([]);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <div className="lg:px-14 px-3 py-3 w-full min-h-screen my-10 mt-[112px]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 place-content-center">
          {fetchData.map((data) => (
            <div className="relative">
              {click ? (
                <div
                  onClick={handleChange}
                  className="absolute cursor-pointer right-2 top-1"
                >
                  <FaHeart className="  text-2xl text-red-500" />
                </div>
              ) : (
                <div
                  onClick={handleChange}
                  className="absolute cursor-pointer right-2"
                >
                  <CiHeart className="text-3xl" />
                </div>
              )}

              <div
                // onClick={handleChange}
                className="absolute cursor-pointer left-2 top-1"
              >
                <h1 className="border bg-green-500 px-3 py-1 rounded-lg text-white uppercase">
                  New
                </h1>
              </div>
              <div className="bg-[#e3dedb] flex justify-center items-center md:rounded-t-full md:py-20 py-10">
                <img
                  src={data.images}
                  height={300}
                  width={300}
                  alt="image is missing"
                  className="hover:scale-110 transition-all duration-300 "
                />
              </div>
              <div className="flex flex-col py-8 gap-3">
                <h1 className="text-center text-xl">{data.title}</h1>
                <p className="text-center text-red-500 text-2xl font-bold">
                  ${data.price}
                </p>
                <p className="text-center text-blue-500 text-2xl font-thin">
                  {data.brand}
                </p>
                <p className="text-center flex gap-1 justify-center items-center">
                  <Rating />
                  {data.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
