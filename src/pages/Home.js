import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import Counter from "./Counter";
import SkinCare from "./SkinCare";
import SkinCare2 from "./SkinCare2";
import Summer from "./Summer";
import Description from "./Description";
import Categories from "./Categories";
import SaleProducts from "./SaleProducts";
import Blogs from "./Blogs";
import AllProducts from "./AllProducts";
const endDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Counter endDate={endDate} />
      <Categories />
      <SaleProducts />
      <SkinCare />
      <AllProducts />
      <SkinCare2 />
      {/* <Summer /> */}
      <Description />
      <Blogs />
    </div>
  );
}

export default Home;
