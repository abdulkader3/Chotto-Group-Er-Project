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

    <div className=" w-full h-[445px] bg-[#09231E] text-[#979797] flex justify-center items-center flex-col px-[150px] ">
        

        <div className="w-full flex justify-between ">

          <div className="row text-[16px]  ">

            <div className="w-[119px] h-[40px]">
              <Link href={"/"} className=" ">
              <Image src={Logo} alt='Logo' className='w-full h-full'/>
            </Link>
            </div>

            <p className='mt-[16px] mb-[32px] '>Building with precision and <br/> sustainability for over 15 years.</p>


            <div className="flex gap-[15px] ">
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={Fb} alt='Link' className='w-full h-full'/>  </Link>
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={In} alt='Link' className='w-full h-full'/>  </Link>
              <Link className='w-[20px] h-[20px] ' href={"#"}> <Image src={Insta} alt='Link' className='w-full h-full'/>  </Link>
            </div>

            <p className='mt-[15px] '>Concern of Creative Business Group</p>
            


          </div>

          <div className="row">


            <div className="Quick-Links text-[16lpx] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Quick Links</p>

              <div className=" font-normal flex flex-col gap-[10px] ">
                <Link href={"#"}> About Us </Link>
                <Link href={"#"}> Services </Link>
                <Link href={"#"}> Projects </Link>
                <Link href={"#"}> Contact </Link>

              </div>
            </div>
          </div>

          <div className="row">


            <div className="Services text-[16lpx] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Services</p>

              <div className=" font-normal flex flex-col gap-[10px] ">
                <Link href={"#"}> Residential Construction </Link>
                <Link href={"#"}> Commercial Projects </Link>
                <Link href={"#"}> Industrial Development </Link>
                <Link href={"#"}> Renovation & Remodeling </Link>
                <Link href={"#"}> Design & Build </Link>

              </div>
            </div>
          </div>


          <div className="row">


            <div className="Contact Info text-[16lpx] flex flex-col gap-[16px] ">

              <p className=' font-semibold text-white'>Contact Info</p>

              <div className=" font-normal flex flex-col gap-[10px] ">
                <p className='flex gap-[8px] '> <span className='text-[#2E7D32] '> <CiLocationOn /> </span> 123 Construction Ave, Dhaka, Bangladesh </p>
                <p className='flex gap-[8px] '> <span className='text-[#2E7D32] '> <LuPhone /> </span> +880 1234-567890 </p>
                <p className='flex gap-[8px] '> <span className='text-[#2E7D32] '> <CiMail/> </span> info@buildtech.com </p>
                <p className='flex gap-[8px] '> <span className='text-[#2E7D32] '> <GoClock/> </span> Mon-Sat, 9:00 AM – 6:00 PM </p>
                

              </div>
            </div>
          </div>

        
        </div>

        <div className="w-full h-[1px] bg-[#97979776] mt-[80px] mb-[32px] "></div>

        <div className="w-full flex justify-center items-center">
          <p className='text-[16px] '>© 2025 BuildTech Construction. All rights reserved.</p>
        </div>


    </div>
      
    </>
  );
}

export default Footer;
