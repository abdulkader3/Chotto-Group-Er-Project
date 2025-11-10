import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/photos/Logo.png'
import Link from 'next/link';
import PrimaryButton from '../Ui/PrimaryButton'






const Navber = () => {
  return (
    <>

    <nav className='w-full h-[81px] flex justify-between items-center px-[150px] ' >

      <div className="Logo w-[119px] h-[40px]  ">
        <Image src={Logo} alt='Logo' className='w-full h-full'/>
      </div>

      <ul className='flex gap-[30px] '>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"#"}> Home </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"#"}> About </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"#"}> Services </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"#"}> Projects </Link>
        </li>

        <li className=' hover:text-[#2E7D32] transition-all '>
          <Link href={"#"}> Contact </Link>
        </li>

      </ul>

      <PrimaryButton Title={"Get a Quote"}/>

    </nav>
      
    </>
  );
}

export default Navber;
