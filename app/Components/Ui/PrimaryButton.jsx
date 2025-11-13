import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PrimaryButton = ({
    Title,
    ArroIcon,
    py,
}) => {
  return (
    <>
    <button className={`
      py-1.5 sm:py-2 md:py-3 lg:py-4
      px-3.5 sm:px-4.5 md:px-6
      text-xs sm:text-sm md:text-base
      rounded-full
      bg-[#2E7D32] 
      text-white 
      flex 
      justify-center 
      items-center 
      gap-1 sm:gap-2
      font-medium
      transition-all
      duration-300
      hover:bg-[#1e5e2f]
      active:scale-95
      whitespace-nowrap
    `}>
      {Title} 
      {ArroIcon ? <FaArrowRight className="text-xs sm:text-sm md:text-base" /> : ""} 
    </button>
    </>
  );
}

export default PrimaryButton;
