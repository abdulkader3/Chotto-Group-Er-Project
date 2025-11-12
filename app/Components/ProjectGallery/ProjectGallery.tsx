import Image from 'next/image'
import React from 'react'

export const ProjectGallery = () => {
  return (
    <div >
        <h1 className='text-5xl font-bold items-center'>ProjectGallery</h1>
        <p className='text-lg font-normal items-center'>Explore the visual journey of this remarkable project</p>
        <div className='flex'>
            <div>
                <div className='w-2xl h-80'><Image src='/photos/Projectgallery1.png' alt='building' width={280} height={200} className='rounded-2xl'/></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
