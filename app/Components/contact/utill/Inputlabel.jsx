import React from 'react'
import Text from "../utill/Text"

const Inputlabel = ({labelname , typename , placeholdername}) => {
  return (
    <>
     <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      {labelname}
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <input
                        type={typename}
                        placeholder={placeholdername}
                        className="w-full font-Inter text-sm font-normal  outline-none text-contactmessagesecond"
                      />
                    </div>
                  </div>
    </>
  )
}

export default Inputlabel