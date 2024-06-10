// src/components/MainSection.jsx
import React from "react";
import videoSrc from "../assets/vid.mp4";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlLocationPin, SlVolume1 } from "react-icons/sl";
import { TbCurrentLocation } from "react-icons/tb";
const MainSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center bg-black bg-opacity-50 text-white p-8 h-full">
        {/* Left Side */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Become a <span className="text-blue-500">Relaxation</span>{" "}
            Destination in Your Community
          </h1>
          <p className="mt-4 text-lg">
            City Cave offers a unique wellness experience, providing float
            therapy, infrared saunas, and holistic health services. By owning a
            City Cave franchise, you bring essential relaxation and rejuvenation
            to your community. Interested in creating a sanctuary for
            well-being? Learn more about this rewarding opportunity.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg mt-8 md:mt-0">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                  <IoPersonOutline />
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
                />
              </div>

              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                  <IoPersonOutline />
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
                />
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                <MdOutlineMailOutline />
              </span>
              <input
                type="text"
                placeholder="Email"
                className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                <FaPhoneVolume />
              </span>
              <input
                type="text"
                placeholder="Phone number"
                className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                <SlLocationPin />
              </span>
              <input
                type="text"
                placeholder="What location interests you to open city cave?"
                className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-white">
                <TbCurrentLocation />
              </span>
              <input
                type="text"
                placeholder="State"
                className="w-11/12 pl-12 pr-2 py-2 rounded-md bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-40 p-2 ml-[240px] rounded-md bg-blue-500 text-white font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
