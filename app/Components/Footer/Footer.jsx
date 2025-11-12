import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/photos/Logo.png'
import Link from 'next/link';
import Fb from "../../../public/photos/fb.png"
import In from "../../../public/photos/in.png"
import Insta from "../../../public/photos/insta.png"
import { GoClock } from 'react-icons/go';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { LuPhone } from 'react-icons/lu';

const Footer = () => {
  return (
    <>

    <div className="w-full min-h-[auto] md:h-[445px] bg-[#09231E] text-[#979797] flex justify-center items-center flex-col px-[20px] md:px-[150px] py-[40px] md:py-0">
        

        <div className="w-full flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-0">

          <div className="row text-[14px] md:text-[16px]">

            <div className="w-[119px] h-[40px]">
              <Link href={"/"} className=" ">
              <Image src={Logo} alt='Logo' className='w-full h-full'/>
            </Link>
            </div>

            <p className='mt-[16px] mb-[32px] text-[13px] md:text-[16px]'>Building with precision and <br/> sustainability for over 15 years.</p>


            <div className="flex gap-[15px] ">
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={Fb} alt='Link' className='w-full h-full'/>  </Link>
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={In} alt='Link' className='w-full h-full'/>  </Link>
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={Insta} alt='Link' className='w-full h-full'/>  </Link>
            </div>

            <p className='mt-[15px] text-[12px] md:text-[16px]'>Concern of Creative Business Group</p>
            


          </div>

          <div className="row">


            <div className="Quick-Links text-[14px] md:text-[16px] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Quick Links</p>

              <div className=" font-normal flex flex-col gap-[10px] text-[13px] md:text-[16px]">
                <Link href={"#"}> About Us </Link>
                <Link href={"#"}> Services </Link>
                <Link href={"#"}> Projects </Link>
                <Link href={"#"}> Contact </Link>

              </div>
            </div>
          </div>

          <div className="row hidden md:block">


            <div className="Services text-[14px] md:text-[16px] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Services</p>

              <div className=" font-normal flex flex-col gap-[10px] text-[13px] md:text-[16px]">
                <Link href={"#"}> Residential Construction </Link>
                <Link href={"#"}> Commercial Projects </Link>
                <Link href={"#"}> Industrial Development </Link>
                <Link href={"#"}> Renovation & Remodeling </Link>
                <Link href={"#"}> Design & Build </Link>

              </div>
            </div>
          </div>


          <div className="row">


            <div className="Contact Info text-[14px] md:text-[16px] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Contact Info</p>

              <div className=" font-normal flex flex-col gap-[10px] text-[12px] md:text-[16px]">
                <p className='flex gap-[8px] items-start '> <span className='text-[#2E7D32] text-[16px] md:text-[20px] flex-shrink-0'> <CiLocationOn /> </span> <span>123 Construction Ave, Dhaka, Bangladesh</span> </p>
                <p className='flex gap-[8px] items-center '> <span className='text-[#2E7D32] flex-shrink-0'> <LuPhone /> </span> +880 1234-567890 </p>
                <p className='flex gap-[8px] items-center '> <span className='text-[#2E7D32] flex-shrink-0'> <CiMail/> </span> info@buildtech.com </p>
                <p className='flex gap-[8px] items-start '> <span className='text-[#2E7D32] flex-shrink-0'> <GoClock/> </span> <span>Mon-Sat, 9:00 AM – 6:00 PM</span> </p>
                

              </div>
            </div>
          </div>

        
        </div>

        <div className="w-full h-[1px] bg-[#97979776] mt-[32px] md:mt-[80px] mb-[32px] "></div>

        <div className="w-full flex justify-center items-center">
          <p className='text-[12px] md:text-[16px] text-center'>© 2025 BuildTech Construction. All rights reserved.</p>
        </div>


    </div>
      
    </>
  );
}

export default Footer;
