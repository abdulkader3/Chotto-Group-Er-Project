'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/photos/Logo.png'
import Link from 'next/link';
import PrimaryButton from '../Ui/PrimaryButton'
import { FaBars, FaTimes } from 'react-icons/fa';




const Navber = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>

    <nav className='w-full h-[40px] md:h-[81px] flex justify-between items-center px-[20px] md:px-[150px]' >

      <div className="Logo w-[50px] h-[18px] md:w-[119px] md:h-[40px]">
        <Image src={Logo} alt='Logo' className='w-full h-full'/>
      </div>

      <ul className='hidden md:flex gap-[30px]'>

        <li className='hover:text-[#2E7D32] transition-all'>
          <Link href={"/"}> Home </Link>
        </li>

        <li className='hover:text-[#2E7D32] transition-all'>
          <Link href={"/about"}> About </Link>
        </li>

        <li className='hover:text-[#2E7D32] transition-all'>
          <Link href={"/services"}> Services </Link>
        </li>

        <li className='hover:text-[#2E7D32] transition-all'>
          <Link href={"/projects"}> Projects </Link>
        </li>

        <li className='hover:text-[#2E7D32] transition-all'>
          <Link href={"/contact"}> Contact </Link>
        </li>

      </ul>

      <div className="hidden md:block">
        <PrimaryButton Title={"Get a Quote"}/>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    </nav>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white ">
        <ul className='flex flex-col gap-0 items-end'>
          <li className='hover:text-[#2E7D32] transition-all py-3 px-5'>
            <Link href={"/"} onClick={closeMenu}> Home </Link>
          </li>

          <li className='hover:text-[#2E7D32] transition-all py-3 px-5'>
            <Link href={"/about"} onClick={closeMenu}> About </Link>
          </li>

          <li className='hover:text-[#2E7D32] transition-all py-3 px-5'>
            <Link href={"/services"} onClick={closeMenu}> Services </Link>
          </li>

          <li className='hover:text-[#2E7D32] transition-all py-3 px-5'>
            <Link href={"/projects"} onClick={closeMenu}> Projects </Link>
          </li>

          <li className='hover:text-[#2E7D32] transition-all py-3 px-5'>
            <Link href={"/contact"} onClick={closeMenu}> Contact </Link>
          </li>

          <li className='py-3 px-5'>
            <PrimaryButton Title={"Get a Quote"}/>
          </li>
        </ul>
      </div>
    )}
      
    </>
  );
}

export default Navber;
