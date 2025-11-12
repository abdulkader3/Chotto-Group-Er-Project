import React from "react";
import Text from "@/app/Components/contact/utill/Text";
import { FiSend } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";






const Message = () => {
  return (
    <>
      <section id="silmasubah" className="mt-[127px]">
        <div className="container">
          {/* msgpart start */}

          <div className="msg_row flex justify-between ">
            {/* left part start */}

            <div className="left_part">
              <div className="w-[648px] px-8 py-12 rounded-2xl shadow-[0_0_3px_rgba(0,0,0,0.1)]">
                <Text varaint={"h3"} className={"text-contactmessage"}>
                  Send Us a Message
                </Text>
                <form>
                  {/* name input */}
                  <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      Full Name
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full font-Inter text-sm font-normal  outline-none
                                text-contactmessagesecond"
                      />
                    </div>
                  </div>

                  {/* email input */}
                  <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      Email Address
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full font-Inter text-sm font-normal  outline-none
                                text-contactmessagesecond"
                      />
                    </div>
                  </div>

                  {/* phone input */}
                  <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      Phone Number
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <input
                        type="number"
                        placeholder="+880 1711-123456"
                        className="w-full font-Inter text-sm font-normal  outline-none
                                text-contactmessagesecond"
                      />
                    </div>
                  </div>

                  {/* messgae  input */}
                  <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      Project Details
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <textarea
                        placeholder="Tell us about your project..."
                        className="w-full h-[124px] font-Inter text-sm font-normal  outline-none
                                text-contactmessagesecond"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[49px] mt-12 rounded-[30px] bg-brand flex justify-center gap-[10px] items-center font-Inter font-medium text-sm text-white"
                  >
                    Send Message <FiSend />

                  </button>
                </form>
              </div>
            </div>

            {/* left part end */}

            {/* right part start */}

            <div className="right_part mt-[67px] w-[536px]">
              <Text varaint="h3" className="text-contactmessagesecond">
                {" "}
                Get in Touch
              </Text>

              <Text varaint="p" className="text-serpara w-full mt-6">
                Have questions about our services or want to discuss a project?
                We're here to help. Contact us through any of the methods below
                and our team will respond as soon as possible.
              </Text>

              {/* touch box */}

              <div
                className="w-full p-6 flex items-center  gap-2 shadow-[0_0_4px_rgba(0,0,0,0.1)]
                 rounded-2xl mt-[62px]"
              >
                <div className="w-12 h-12 rounded-full bg-brand opacity-10 flex justify-center items-center">
                  <MdAccessTime className="text-2xl  " />

                </div>
                <div className="">
                  <Text varaint="h4" className="text-contactmessagesecond">
                     Business Hours
                  </Text>
                  <Text varaint="h5" className="text-serpara mt-1">
                    Mon-Sat, 9:00 AM – 6:00 PM
                  </Text>
                </div>
              </div>

              <div
                className="w-full p-6 flex items-center gap-2 shadow-[0_0_4px_rgba(0,0,0,0.1)]
                 rounded-2xl mt-[62px]"
              >  
               <div className="w-12 h-12 rounded-full bg-brand opacity-10 flex justify-center items-center">
                  <HiOutlineMail  className="text-2xl  " />

                </div>
                <div className="">
                  <Text varaint="h4" className="text-contactmessagesecond">
                    Email
                  </Text>
                  <Text varaint="h5" className="text-serpara mt-1">
                    info@spacedevelopment.com
                  </Text>
                </div>
              </div>

              <div
                className="w-full p-6 flex items-center gap-2 shadow-[0_0_4px_rgba(0,0,0,0.1)]
                 rounded-2xl mt-[62px]"
              >
                <div className="w-12 h-12 rounded-full bg-brand opacity-10 flex justify-center items-center">
                  <FiPhone   className="text-2xl  " />

                </div>
                <div className="">
                  <Text varaint="h4" className="text-contactmessagesecond">
                    Contact Us
                  </Text>
                  <Text varaint="h5" className="text-serpara mt-1">
                    +880 1234 567 890
                  </Text>
                </div>
              </div>

              <div
                className="w-full p-6 flex justify-center gap-2 shadow-[0_0_4px_rgba(0,0,0,0.1)]
                 rounded-2xl mt-[62px]"
              >

                <div className="w-12 h-12 rounded-full bg-brand opacity-10 flex justify-center items-center">
                  <IoLocationOutline    className="text-2xl  " />

                </div>

                
                <div className="">
                  <Text varaint="h4" className="text-contactmessagesecond">
                    Location
                  </Text>
                  <Text varaint="h5" className="text-serpara mt-1 w-[428px]">
                    Momtaz Plaza (4th floor), House#7, Road#4 Opposite of Labaid
                    Hospital Dhaka, 1205
                  </Text>
                </div>
              </div>

              <Text varaint="h3" className="text-[20px] mt-12">Connect With Us</Text>
            </div>

            {/* right part end */}
          </div>

          {/* msgpart start */}
        </div>
      </section>
    </>
  );
};

export default Message;
