import React from "react";
import FilterPortfolio from "./FilterPortfolio";
import Gridportfolio from "./Gridportfolio";
import CarouselPortfolio from "./CarouselPortfolio";

function Portfolio() {
  return (
    <div>
      <FilterPortfolio />
      <Gridportfolio />
      <CarouselPortfolio />
    </div>
  );
}

export default Portfolio;
