import React from "react";
import Image from "next/image";
import IconHome from "../../../public/photos/IconHome.png";
import IconPhone from "../../../public/photos/IconPhone.png";
import IconeBrocken from "../../../public/photos/IconBroken.png";
import IconTool from "../../../public/photos/IconTool.png";
import PrimaryButton from "../../../app/Components/Ui/PrimaryButton";

const Components4 = () => {
  return (
    <>
      <div className="w-full py-[40px] bg-[#F9FAFB] md:py-[100px] flex flex-col items-center px-[20px] md:px-0">
        <div className="text-center">
          <p className="text-[28px] md:text-[48px] font-bold ">What We Build</p>
          <p className="text-[14px] md:text-[16px] font-normal mt-[12px] mb-[40px] md:mb-[80px] ">
            Comprehensive construction solutions for every need{" "}
          </p>
        </div>

        <div className=" flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">



          <div className="w-full md:w-[326px] h-auto md:h-[396px] shadow rounded-[16px] overflow-hidden ">
            <div className=" backgraoundOfCard w-full h-[224px] ">
              <div className=" w-full h-full bg-gradient-to-r from-[#0000005b] via-[#00000029] to-[#0000] flex items-end p-6 ">
                <div className="w-[44px] h-[44px] ">
                  <Image src={IconHome} alt="icon" className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">
                Residential Construction
              </p>
              <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">
                Modern homes designed with comfort, style, and sustainability in
                mind.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[326px] h-auto md:h-[396px] shadow rounded-[16px] overflow-hidden ">
            <div className=" backgraoundOfCard w-full h-[224px] ">
              <div className=" w-full h-full bg-gradient-to-r from-[#0000005b] via-[#00000029] to-[#0000] flex items-end p-6 ">
                <div className="w-[44px] h-[44px] ">
                  <Image src={IconPhone} alt="icon" className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">
                Commercial Projects
              </p>
              <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">
                Business spaces that maximize efficiency and create lasting
                value.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[326px] h-auto md:h-[396px] shadow rounded-[16px] overflow-hidden ">
            <div className=" backgraoundOfCard w-full h-[224px] ">
              <div className=" w-full h-full bg-gradient-to-r from-[#0000005b] via-[#00000029] to-[#0000] flex items-end p-6 ">
                <div className="w-[44px] h-[44px] ">
                  <Image
                    src={IconeBrocken}
                    alt="icon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">
                Industrial Facilities
              </p>
              <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">
                Robust structures built to support demanding industrial
                operations.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[326px] h-auto md:h-[396px] shadow rounded-[16px] overflow-hidden ">
            <div className=" backgraoundOfCard w-full h-[224px] ">
              <div className=" w-full h-full bg-gradient-to-r from-[#0000005b] via-[#00000029] to-[#0000] flex items-end p-6 ">
                <div className="w-[44px] h-[44px] ">
                  <Image src={IconTool} alt="icon" className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">
                Renovation & Remodeling
              </p>
              <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">
                Transforming existing spaces with innovative design solutions.
              </p>
            </div>
          </div>
          
        </div>

        <div className="mt-[32px] md:mt-[48px] w-full md:w-auto flex justify-center">
          <PrimaryButton Title={"Explore More"} ArroIcon={"true"} py={"true"} />
        </div>
      </div>
    </>
  );
};

export default Components4;
