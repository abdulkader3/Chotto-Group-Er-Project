import React from 'react';
import PrimaryButton from '../Ui/PrimaryButton';
import Image from 'next/image';
import BigImage from '../../../public/photos/Home2ndSectionOne.png'

const HomeComp2 = () => {
  return (
    <>
    <div className="w-full min-h-screen py-6 sm:py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-28 items-center px-4 sm:px-6 md:px-8">
            <div className="w-full lg:w-auto">
                <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full lg:w-[506px]'>Crafting Sustainable Spaces for the Future</p>

                <p className='text-sm sm:text-base md:text-lg lg:text-base font-normal w-full lg:w-[560px] mt-4 sm:mt-6 md:mt-8 lg:mt-6 mb-6 sm:mb-8 md:mb-12 lg:mb-12'>BuildTech is dedicated to delivering exceptional construction solutions that blend innovation, sustainability, and craftsmanship. Our approach combines cutting-edge techniques with environmentally conscious practices to create spaces that inspire and endure.</p>

                <PrimaryButton Title={"Discover Our Story"} ArroIcon={"true"} py={"true"} />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto">
                <div className="big-image w-full lg:w-[648px] h-48 sm:h-64 md:h-80 lg:h-80">
                    <Image src={BigImage} alt='BigImage' className='w-full h-full object-cover rounded-lg' />
                </div>

                <div className="TowImage w-full lg:w-[648px] h-auto flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-6">
                    <div className="w-full sm:w-1/2 h-40 sm:h-48 md:h-56 lg:h-52">
                        <Image src={BigImage} alt='BigImage' className='w-full h-full object-cover rounded-lg' />
                    </div>

                    <div className="w-full sm:w-1/2 h-40 sm:h-48 md:h-56 lg:h-52">
                        <Image src={BigImage} alt='BigImage' className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default HomeComp2;
