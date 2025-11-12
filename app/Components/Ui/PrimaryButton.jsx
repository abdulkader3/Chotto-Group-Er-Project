import React from 'react';

const PrimaryButton = ({
    Title
}) => {
  return (
    <>

    <button className=' py-[2px] md:py-[8px]  px-[10px] md:px-[24px] bg-[#2E7D32] rounded-[20px] text-white ' > {Title} </button>
      
    </>
  );
}

export default PrimaryButton;
