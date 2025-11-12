import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiWarningCircleBold } from "react-icons/pi";

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-3 py-32 text-black pl-8 gap-40">
      <div className="col-span-2">
        <div className="pb-12">
          <h1 className="font-semibold text-3xl pb-4">Project Overview</h1>
          <p className="font-normal text-lg">
            A luxury residential complex featuring eco-friendly design and
            state-of-the-art amenities. Green Valley Residences combines
            sustainable living with modern comfort, offering residents a
            harmonious blend of nature and contemporary architecture.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1 className="text-xl font-semibold">Key Features</h1>
            <ul className="pt-4">
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" />{" "}
                Eco-friendly materials and construction methods
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" />{" "}
                Rainwater harvesting system
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" />{" "}
                Energy-efficient HVAC systems
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" /> Modern
                fitness center and swimming pool
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Key Features</h1>
            <ul className="pt-4">
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" /> Solar
                panel integration for renewable energy
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" /> Green
                rooftop gardens
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" /> Smart
                home automation
              </li>
              <li className="flex items-center gap-3">
                {" "}
                <IoMdCheckmarkCircleOutline className="text-[#2E7D32]" />{" "}
                Underground parking facility
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold pt-12">
            Project Challenges & Solutions
          </h1>
          <ul className="py-5">
            <li className="flex items-center gap-3">
              <PiWarningCircleBold className="text-[#2E7D32]" />
              Implemented sustainable building practices while maintaining
              budget
            </li>
            <li className="flex items-center gap-3">
              <PiWarningCircleBold className="text-[#2E7D32]" />
              Coordinated with multiple stakeholders for green certifications
            </li>
            <li className="flex items-center gap-3">
              <PiWarningCircleBold className="text-[#2E7D32]" />
              Integrated smart technology throughout the building
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold pb-6">Project Information</h1>
        <div className="pb-16">
            
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2 text-gray-500">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2 text-gray-500">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2 text-gray-500">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2 text-gray-500">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2 text-gray-500">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
          <ul>
            <li className="flex items-center text-sm font-normal gap-2 pb-2">
              <GoPeople /> Client
            </li>
            <li className="font-semibold text-lg">
              Green Valley Development Ltd.
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center gap-3.5 bg-[#2E7D32] w-96 h-12 rounded-3xl">
          <div className="text-white">
            Start Your Project
          </div>
          <div className="text-white ">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
