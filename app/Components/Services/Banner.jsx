import React from 'react'
import photosOfbenners from "../../../public/images/services container.png";
import photosOfractangale from "../../../public/images/Rectangle.png";
import Image from 'next/image';


const Banner = () => {
  return (
    <div className="relative flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* ------------ Banner section -------- */}
      <div className="relative w-full h-[450px]">
      
      <Image
        src={photosOfbenners} 
        alt="Banner"
        fill
        className="object-cover rounded-xl"
      />

      <Image
        src={ photosOfractangale} 
        alt="Rectangle"
        fill
        className="object-cover rounded-xl opacity-60" 
      />
      
    </div>
      <div className=" text-center text-white px-4 absolute ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Our Expertise, Your Vision
        </h1>
        <p className="text-lg font-light mb-6">
          From design to delivery, we offer complete construction services <br/> that meet modern standards and sustainability goals.
        </p>
        
      </div>
    </div>
  );
  
}

export default Banner
