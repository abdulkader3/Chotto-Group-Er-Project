import React from 'react';
import Image from "next/image";
import IconLeef from '../../../public/photos/icon-lef.png'
import PrimaryButton from '../../../app/Components/Ui/PrimaryButton'


const Components3 = () => {
  return (
    <>

    <div className="w-full py-[40px] bg-[#F9FAFB] md:py-[100px] flex flex-col items-center px-[20px] md:px-0">

      <div className="text-center">
        <p className="text-[28px] md:text-[48px] font-bold ">Our Core Values</p>
        <p className="text-[14px] md:text-[16px] font-normal mt-[12px] mb-[40px] md:mb-[80px] ">The principles that guide everything we do</p>
      </div>

      <div className=" flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">

        <div className="w-full md:w-[312px] h-auto md:h-[252px] p-[24px] md:p-[32px] shadow rounded-[16px] ">
            <div className="w-[48px] h-[48px] ">
              <Image src={IconLeef} alt="icon" className="w-full h-full"/>
            </div>

            <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">Sustainability</p>
            <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">Eco-friendly practices for a better tomorrow</p>
        </div>


        <div className="w-full md:w-[312px] h-auto md:h-[252px] p-[24px] md:p-[32px] shadow rounded-[16px] ">
            <div className="w-[48px] h-[48px] ">
              <Image src={IconLeef} alt="icon" className="w-full h-full"/>
            </div>

            <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">Sustainability</p>
            <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">Eco-friendly practices for a better tomorrow</p>
        </div>


        <div className="w-full md:w-[312px] h-auto md:h-[252px] p-[24px] md:p-[32px] shadow rounded-[16px] ">
            <div className="w-[48px] h-[48px] ">
              <Image src={IconLeef} alt="icon" className="w-full h-full"/>
            </div>

            <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">Sustainability</p>
            <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">Eco-friendly practices for a better tomorrow</p>
        </div>


        <div className="w-full md:w-[312px] h-auto md:h-[252px] p-[24px] md:p-[32px] shadow rounded-[16px] ">
            <div className="w-[48px] h-[48px] ">
              <Image src={IconLeef} alt="icon" className="w-full h-full"/>
            </div>

            <p className=" text-[18px] md:text-[20px] font-semibold mt-[16px]">Sustainability</p>
            <p className=" text-[14px] md:text-[16px] font-normal mt-[8px]">Eco-friendly practices for a better tomorrow</p>
        </div>


      </div>

      <div className="mt-[32px] md:mt-[48px] w-full md:w-auto flex justify-center">
        <PrimaryButton Title={"Explore More"} ArroIcon={"true"} py={"true"} />
      </div>

    </div>
      
    </>
  );
}

export default Components3;
