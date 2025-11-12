import PrimaryButton from "@/app/Components/Ui/PrimaryButton";
import Image from "next/image";
import React from "react";
import PhoneIcon from '../../../public/photos/HomePagePhoneIcon.png'

const HomeComp1 = () => {
  return (
    <>

          <div className="w-full h-[800px] Shanto text-white ">
            <div className="AbdulKader w-full h-full flex flex-col items-center justify-between py-[79px] ">
    
              <div className=" w-[249px] h-[44px] bg-[#ffffff1c] rounded-full flex justify-center items-center gap-2.5 ">
                <div className="carcal w-4 h-4 rounded-full bg-[#ffffff7e] "></div>
                <p className="text-[14px] font-medium ">
                  Your Vision, Our Expertise
                </p>
              </div>
    
              <div className="flex flex-col items-center ">
                <p className=" text-center text-[20px] md:text-[64px] font-bold ">Building the Future, Today</p>
    
                <p className=" text-[10px] md:text-[20px] font-normal w-[301px] md:w-[615px] text-center ">Transform your construction dreams into reality with sustainable practices and innovative design excellence.</p>
              </div>
    
              <div className="flex flex-col md:flex-row gap-4">
                <PrimaryButton Title={"Discover Our Story"} ArroIcon={"true"} py={"true"}  />
                <PrimaryButton Title={"Get Started"} ArroIcon={"true"} py={"true"}  />
              </div>
    
              <div className=" text-[10px] md:text-[16px] font-semibold text-white flex flex-col md:flex-row gap-5 ">
    
                <div className=" md:w-[370px] w-[290px] h-[75px] md:h-[88px] bg-[#ffffff28] rounded-[16px] flex gap-3 p-5 ">
    
                  <div className="icon md:w-[48px] w-[24px] md:h-[48px] h-[24px] "> <Image src={PhoneIcon} alt="Icon" className="w-full h-full"/> </div>
                  
                  <div className="">
                    <p className="text-[#D1D5DC] ">Contact Us</p>
                    <p>+880 1234 567 890</p>
                  </div>
    
                </div>
    
                <div className=" md:w-[370px] w-[290px] h-[75px] md:h-[88px] bg-[#ffffff28] rounded-[16px] flex gap-3 p-5 ">
    
                  <div className="icon md:w-[48px] w-[24px] md:h-[48px] h-[24px] "> <Image src={PhoneIcon} alt="Icon" className="w-full h-full"/> </div>
                  
                  <div className="">
                    <p className="text-[#D1D5DC] ">Contact Us</p>
                    <p>+880 1234 567 890</p>
                  </div>
    
                </div>
    
              </div>
    
            </div>
          </div>
      
    </>
  );
}

export default HomeComp1;
