import React from "react";
import { FaStar } from "react-icons/fa";
function Rating() {
  return (
    <div className="flex gap-1 text-yellow-500">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  );
}

export default Rating;
