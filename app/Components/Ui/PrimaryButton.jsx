import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PrimaryButton = ({
    Title,
    ArroIcon,
    py,
}) => {
  return (
    <>

    <button className={` py-[2px] ${py ? "md:py-[16px] py-[8px]" : "md:py-[8px] py-[3px]"} flex justify-center   px-[10px] md:px-[24px] rounded-full bg-[#2E7D32] text-white flex items-center gap-2 `} > {Title} {ArroIcon ?<FaArrowRight />:"" } </button>
      
    </>
  );
}

export default PrimaryButton;
