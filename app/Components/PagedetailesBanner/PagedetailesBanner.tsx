import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const PagedetailesBanner = () => {
  return (
    <div
      className="relative h-[440px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/photos/banner05.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative">
        <h1 className="font-bold text-5xl text-white pt-80 pl-8">
          Green Valley Residences
        </h1>
        <div className="flex pt-4 pl-8 gap-6 text-white">
          <div className="flex items-center gap-1">
            <SlLocationPin />
            Dhaka
          </div>
          <div className="flex items-center gap-1">
            <IoCalendarClearOutline />
            2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagedetailesBanner;
