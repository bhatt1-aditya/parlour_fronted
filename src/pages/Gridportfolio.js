import React from "react";
import image_1 from "../assets/images2/asset 5.jpeg";
import image_2 from "../assets/images2/asset 6.jpeg";
import image_3 from "../assets/images2/asset 7.jpeg";
import image_4 from "../assets/images2/asset 8.jpeg";
import image_5 from "../assets/images2/asset 9.jpeg";
import image_6 from "../assets/images2/asset 10.jpeg";
function Gridportfolio() {
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
  ];
  return (
    <div>
      <div className=" mt-5 lg:px-14 px-3 py-3 min-h-screen ">
        <h1
          style={{ fontFamily: "Lato" }}
          className="text-4xl text-center font-bold text-gray-700"
        >
          GRID PORTFOLIO
        </h1>

        <div className="grid lg:gap-10 gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-10 ">
          {portfolioImages.map((portfolioImage) => {
            console.log(portfolioImage);
            return (
              <div className="sm:py-4 md:py-5 py-3 ">
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

export default Gridportfolio;
