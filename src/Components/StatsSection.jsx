// src/components/StatsSection.jsx
import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-slate-600 text-white py-12">
      <div className="container ml-[70px] flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="md:w-1/3 p-4">
          <h2 className="text-8xl font-bold text-blue-500">52B+</h2>
          <p className="mt-2 ml-14 text-2xl">Industry</p>
        </div>
        <div className="md:w-1/3 p-4">
          <h2 className="text-8xl font-bold text-blue-500">75+</h2>
          <p className="mt-2 text-2xl">Open Locations</p>
        </div>
        <div className="md:w-1/3 p-4">
          <h2 className="text-8xl font-bold text-blue-500">Global</h2>
          <p className="mt-2 ml-8 text-2xl">Leader in Float Therapy</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
