import React, { useState } from "react";

import image_1 from "../assets/images2/asset 5.jpeg";
import image_2 from "../assets/images2/asset 6.jpeg";
import image_3 from "../assets/images2/asset 7.jpeg";
import image_4 from "../assets/images2/asset 8.jpeg";
import image_5 from "../assets/images2/asset 9.jpeg";
import image_6 from "../assets/images2/asset 10.jpeg";
import image_7 from "../assets/images2/asset 11.jpeg";
import image_8 from "../assets/images2/asset 12.jpeg";
import image_9 from "../assets/images2/asset 13.jpeg";
let portfolioImages = [
  {
    id: 1,
    category: "Design",
    image: image_1,
  },
  {
    id: 2,
    category: "Design",
    image: image_2,
  },
  {
    id: 3,
    category: "Branding",
    image: image_3,
  },
  {
    id: 4,
    category: "Photography",
    image: image_4,
  },
  {
    id: 5,
    image: image_5,
  },
  {
    id: 6,
    category: "Branding",
    image: image_6,
  },
  {
    id: 7,
    category: "Photography",
    image: image_7,
  },
  {
    id: 8,
    category: "Branding",
    image: image_8,
  },
  {
    id: 9,
    category: ["Branding", "Design", "Photography"],
    image: image_9,
  },
];
function FilterPortfolio() {
  const [Items, setItems] = useState(portfolioImages);
  const FilterPortfolio = (cateItem) => {
    const updatedItems = portfolioImages.filter((currElem) => {
      return currElem.category === cateItem;
    });
    setItems(updatedItems);
  };
  return (
    <div>
      <div className="xl:mt-48 sm:mt-20 mt-5 lg:px-14 px-3 py-3 min-h-screen ">
        <h1
          style={{ fontFamily: "Lato" }}
          className="text-4xl text-center font-bold text-gray-700"
        >
          FILTER PORTFOLIO
        </h1>
        <ul
          className=" flex flex-wrap sm:gap-14 gap-6 text-xl font-semibold justify-center items-center mt-10 text-gray-600"
          style={{ fontFamily: "Lato" }}
        >
          <li>
            <button onClick={() => setItems(portfolioImages)}>SHOW ALL</button>
          </li>
          <li>
            <button onClick={() => FilterPortfolio("Branding")}>
              BRANDING
            </button>
          </li>
          <li>
            <button onClick={() => FilterPortfolio("Design")}>DESIGN</button>
          </li>
          <li>
            <button onClick={() => FilterPortfolio("Photography")}>
              PHOTOGRAPHY
            </button>
          </li>
        </ul>

        <div className="grid lg:gap-10 gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10 ">
          {Items.map((portfolioImage) => {
            console.log(portfolioImage);
            return (
              <div className="sm:py-4 md:py-5 py-3">
                <img
                  src={portfolioImage.image}
                  alt="image is missing"
                  className="xl:h-[480px] xl:w-[480px] lg:h-[320px] lg:w-[400px] h-[300px] w-[350px] mx-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterPortfolio;
