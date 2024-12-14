import React, { useEffect, useState } from "react";

function Counter({ endDate }) {
  const [countDown, setCountDown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const duration =
        typeof endDate === "number" ? endDate - now : endDate.getTime() - now;

      const days = String(
        Math.floor(duration / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((duration % (1000 * 60)) / 1000)
      ).padStart(2, "0");
      setCountDown({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [endDate]);
  return (
    <div className="h-full ">
      <div className="bg-[#124841] h-full py-14 flex gap-5 flex-col lg:px-14 px-3 ">
        <div className="flex justify-center items-center text-center gap-5 list-none">
          <li className="flex flex-col justify-center items-center h-20 w-20 border border-none bg-[#2a5b54]">
            <h1
              className="text-white text-2xl"
              style={{ fontFamily: "Marcellus" }}
            >
              {countDown.days}
            </h1>
            <p className="font-bold text-[#649fa0]">
              {Number(countDown.days) > 1 ? "days" : "day"}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center h-20 w-20 border border-none bg-[#2a5b54]">
            {" "}
            <h1
              className="text-white text-2xl"
              style={{ fontFamily: "Marcellus" }}
            >
              {countDown.hours}
            </h1>
            <p className="font-bold text-[#649fa0]">
              {Number(countDown.hours) > 1 ? "hours" : "hour"}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center h-20 w-20 border border-none bg-[#2a5b54]">
            {" "}
            <h1
              className="text-white text-2xl"
              style={{ fontFamily: "Marcellus" }}
            >
              {countDown.minutes}
            </h1>
            <p className="font-bold text-[#649fa0]">
              {Number(countDown.minutes) > 1 ? "minutes" : "minute"}
            </p>
          </li>
          <li className="flex flex-col justify-center items-center h-20 w-20 border border-none bg-[#2a5b54]">
            {" "}
            <h1
              className="text-white text-2xl"
              style={{ fontFamily: "Marcellus" }}
            >
              {countDown.seconds}
            </h1>
            <p className="font-bold text-[#649fa0]">
              {Number(countDown.seconds) > 1 ? "seconds" : "second"}
            </p>
          </li>
        </div>
        <p className="text-center text-white text-lg md:text-2xl">
          Affordable shopping during the cool hours!{" "}
          <a
            class="theme-color-normal text-yellow-500 hover:underline "
            href="https://ruza.thembaydev.com/shop/"
            target="_blank"
            rel="noopener"
          >
            10% extra discount
          </a>{" "}
          for your.
        </p>
      </div>
    </div>
  );
}

export default Counter;
