import React from 'react'
import Text from '../utill/Text'

const Commoncard = ({Icon , tittle ,info}) => {
  return (
    <>
          <div
                className="w-full p-6 flex items-center  gap-2 shadow-[0_0_4px_rgba(0,0,0,0.1)]
                 rounded-2xl mt-[62px]"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10  flex justify-center items-center">
                  <Icon className="text-2xl text-brand " />

                </div>
                <div className="">
                  <Text varaint="h4" className="text-contactmessagesecond">
                     {tittle}
                  </Text>
                  <Text varaint="h5" className="text-serpara mt-1 w-[428px]">
                    {info}
                  </Text>
                </div>
              </div>

    </>
  )
}

export default Commoncard