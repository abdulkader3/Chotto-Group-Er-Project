import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ProjectGallery = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[100px]">
      <h1 className="text-5xl font-bold items-center mb-3">ProjectGallery</h1>
      <p className="text-lg font-normal items-center mb-20 text-[#4A5565]">
        Explore the visual journey of this remarkable project
      </p>
      <div className="flex flex-col ">
        <div className="flex gap-6 mb-6">
          <div>
            <Image
              src="/photos/Projectgallery1.png"
              alt="building"
              width={280}
              height={200}
              className="rounded-2xl w-96 h-52"
            />
          </div>
          <div>
            <Image
              src="/photos/Projectgallery2.png"
              alt="building"
              width={280}
              height={200}
              className="rounded-2xl w-96 h-52"
            />
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div>
            <Image
              src="/photos/Projectgallery3.png"
              alt="building"
              width={280}
              height={200}
              className="rounded-2xl w-96 h-52"
            />
          </div>
          <div>
            <Image
              src="/photos/Projectgallery4.png"
              alt="building"
              width={280}
              height={200}
              className="rounded-2xl w-96 h-52"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-1.5 bg-white border border-black w-28 h-9 rounded-3xl hover:cursor-pointer hover:bg-black hover:text-white">
        <div className="text-sm font-normal">Load more</div>
        <div className="text-sm font-light">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};
