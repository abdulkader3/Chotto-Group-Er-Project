import React from 'react'

const Text = ({varaint ='p', className='', children }) => {

  const variants =[
    {
      tag:"h2" ,class:"font-Inter font-bold text-[48px]"
    },
    {
        tag:"h3" , class:"font-Inter font-semibold text-[32px]"
    },
    
    {
      tag:"h4" , class:"font-Inter font-semibold text-[18px]"
    },
    {
      tag:"h5" , class:"font-Inter font-normal text-sm"
    },
     {
        tag:"label" , class:"font-Inter font-medium text-base"
    },
    {
      tag:"p" , class:"font-Inter font-normal text-[18px]"
    }
  ]

  const tagname =variants.find((item)=> item.tag === varaint)
  const Tetxname=tagname.tag;


  return (
    <>
     <Tetxname className={`${tagname.class} ${className}`}>{children}</Tetxname>
    </>
  )
}

export default Text