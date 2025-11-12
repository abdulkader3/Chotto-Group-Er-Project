'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/photos/Logo.png'
import Link from 'next/link';
import PrimaryButton from '../Ui/PrimaryButton'
import { FaBars } from 'react-icons/fa';






const Navber = () => {

  const [navButton , setNavButton] = useState(false)

  const ButtonClictForNavber = ()=>{
    setNavButton(true)
    
  }

  return (
    <>

    <nav className='w-full h-[40px] md:h-[81px] flex justify-center md:justify-between items-center px-[150px] ' >

      <div className="Logo w-[50px] h-[18px] md:w-[119px] md:h-[40px]  ">
        <Image src={Logo} alt='Logo' className='w-full h-full'/>
      </div>

      <ul className=' hidden md:block md:flex gap-0 md:gap-[30px] '>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/"}> Home </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/about"}> About </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/services"}> Services </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/projects"}> Projects </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/contact"}> Contact </Link>
        </li>

      </ul>

      <PrimaryButton Title={"Get a Quote"}/>

      <div className=" block md:hidden">

        <div className="">
          <div onClick={ButtonClictForNavber} className=""><FaBars/></div>

           <ul className=''>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/"}> Home </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/about"}> About </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/services"}> Services </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/projects"}> Projects </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"/contact"}> Contact </Link>
        </li>

      </ul>


        </div>

      </div>

    </nav>
      
    </>
  );
}

export default Navber;
