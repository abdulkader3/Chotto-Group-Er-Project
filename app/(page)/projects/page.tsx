import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>



      <div className="w-full h-screen bg-gray-700 flex justify-center items-center flex-col gap-10">
        <h1 className='text-7xl'>Project page</h1>
        <Link className='text-red-600 text-2xl' href={"/pagedetailes"}> pagedetailes</Link>
      </div>



      
    </>
  );
}

export default page;
