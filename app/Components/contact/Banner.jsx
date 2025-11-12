import React from 'react'
import Image from 'next/image'
import banner from "../../../public/contactbanner.png"
const Banner = () => {
  return (
    <>
    <section id='silmasubah' style={{ backgroundImage:`url(${banner.src})`, backgroundPosition:"center" , backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
     }} className='w-full h-[469px]'>
           {/* <div className='w-full h-full' >
            <Image src={banner} alt='errr' fill={true} />
           </div> */}
    </section>
    </>
  )
}

export default Banner