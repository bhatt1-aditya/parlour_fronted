import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdSettingsPhone } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
function ContactUs() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    poneNumber: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    alert("Data send successful");
  };
  const datas = [
    {
      id: 1,
      icon: <FaLocationDot />,
      title: "Our Store",
      data_1: "7021 Washington SQ.",
      data_2: "South New York, NY 10012",
    },
    {
      id: 2,
      icon: <MdSettingsPhone />,
      title: "Contact info",
      data_1: "Telephone: 703.172.3412",
      data_2: "E-mail: hello@example.com",
    },
    {
      id: 3,
      icon: <IoMdAlarm />,
      title: "Busness hours",
      data_1: "Monday - Sunday:",
      data_2: "09:00 am - 20:00 pm",
    },
  ];
  return (
    <div className="">
      <div className="xl:mt-48 mt-20 lg:px-14 px-3 py-3 min-h-screen">
        {/* <div className="flex flex-col gap-5  text-center h-screen"> */}
        <h1
          style={{ fontFamily: "Lato" }}
          className="text-4xl text-gray-700 text-center mb-7"
        >
          Contact
        </h1>
        <p
          style={{ fontFamily: "Lato" }}
          className="text-lg text-gray-500 font-medium text-center"
        >
          Click on your nearest store location below to set the road on Google
          Map.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0441826434!2d-118.7413908046417!3d34.02060845261755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1733535135505!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className="mt-16 mb-10"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex sm:flex-row flex-col justify-between items-center xl:mx-40 py-4 h-full">
          {datas.map((data) => {
            return (
              <li
                className="flex flex-col justify-center items-center my-5"
                style={{ fontFamily: "Lato" }}
              >
                <i className="text-yellow-500 text-4xl mb-5">{data.icon}</i>
                <h1 className="text-xl mb-5 font-medium text-gray-700">
                  {data.title}
                </h1>
                <p className="text-lg mb-2 text-gray-600">{data.data_1}</p>
                <p className="text-lg text-gray-600">{data.data_2}</p>
              </li>
            );
          })}
        </div>
        <div className="h-0 w-full border border-gray-100"></div>
        {/* </div> */}
        <div
          className="py-14 flex  text-center flex-col w-full "
          style={{ fontFamily: "Lato" }}
        >
          <h1 className="text-4xl font-semibold text-gray-700">
            Send Us a Message
          </h1>
          <p className="text-lg text-gray-500 py-4 pb-2">
            Ask us anything here
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex w-full gap-5 xl:px-56 lg:px-14 px-3">
            <div className="w-[50%]">
              <input
                type="text"
                placeholder="Your Name*"
                value={userData.username}
                name="username"
                onChange={handleChange}
                className="w-full py-4 px-5 rounded-full border border-gray-200 outline-none"
              />
            </div>
            <div className="w-[50%]">
              <input
                type="email"
                placeholder="Your Email*"
                value={userData.email}
                name="email"
                onChange={handleChange}
                className="w-full py-4 px-5 rounded-full border border-gray-200 outline-none"
              />
            </div>
          </div>
          <div className="flex w-full gap-5 xl:px-56 lg:px-14 px-3">
            <div className="w-[50%]">
              <input
                type="Number"
                placeholder="Phone Number*"
                value={userData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                className="w-full py-4 px-5 rounded-full border border-gray-200 outline-none"
              />
            </div>
            <div className="w-[50%]">
              <input
                type="text"
                placeholder="Subject*"
                value={userData.subject}
                name="subject"
                onChange={handleChange}
                className="w-full py-4 px-5 rounded-full border border-gray-200 outline-none"
              />
            </div>
          </div>
          <div className="w-full xl:px-56 lg:px-14 px-3">
            <textarea
              className="border  px-5 py-4 col-span-6 rounded-lg row-span-6 border-gray-200 outline-none w-full h-[229px]"
              value={userData.message}
              name="message"
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="xl:px-56 lg:px-14 px-3 py-5 mb-5">
            {" "}
            <button
              to="/products"
              className=" flex  items-center gap-5 text-gray-700 bg-yellow-500 2xl:py-4 py-4  2xl:px-10 rounded-full font-bold xl:px-56 lg:px-14 px-3 "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
