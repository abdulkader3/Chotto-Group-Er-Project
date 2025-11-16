import React from "react";
import Text from "@/app/Components/contact/utill/Text";
import { FiSend } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuYoutube } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import CommonCard from "../contact/utill/Commoncard"
import Inputlabel from "../contact/utill/Inputlabel"





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

                  <Inputlabel labelname={" Full Name"}  typename={"text"} placeholdername={"John Doe"}/>
            
                  {/* email input */}

                  <Inputlabel labelname={"Email Address"}  typename={"email"} placeholdername={"john@example.com"}/>

                  {/* phone input */}

                  <Inputlabel labelname={"Phone Number"}  typename={"number"} placeholdername={"+880 1711-123456"}/>
                
                  {/* messgae  input */}

                  <div className="mt-12">
                    <Text varaint="label" className="text-contactmessagesecond">
                      
                    </Text>
                    <div className="w-full mt-2 rounded-2xl pl-4 py-4 bg-inputColor focus-within:outline-[3px] focus-within:outline-[#D1D5DC]">
                      <textarea
                        placeholder="Tell us about your project..."
                        className="w-full h-[124px] font-Inter text-sm font-normal  outline-none
                                text-contactmessagesecond resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[49px] mt-12 rounded-[30px] bg-brand flex justify-center gap-2.5 items-center font-Inter font-medium text-sm text-white"
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

              {/* touch box 1*/}
              <CommonCard Icon={MdAccessTime}  tittle={" Business Hours"} info={"Mon-Sat, 9:00 AM – 6:00 PM"}/>

              {/* touch box 2*/}
              <CommonCard Icon={HiOutlineMail}  tittle={"Email"} info={"info@spacedevelopment.com"}/>

              {/* touch box 3*/}
              <CommonCard Icon={FiPhone}  tittle={"Contact Us"} info={"+880 1234 567 890"}/>


                 {/* touch box 4*/}
              <CommonCard Icon={IoLocationOutline}  tittle={"Location"} info={" Momtaz Plaza (4th floor), House#7, Road#4 Opposite of LabaidHospital Dhaka, 1205"}/>

      
              <Text varaint="h3" className="text-[20px]! mt-12">Connect With Us</Text>

              <div className="icons mt-4 flex gap-4 items-center">


                <div className="w-12 h-12 rounded-full bg-brand/10 flex justify-center items-center">
                  <FiFacebook className="text-2xl text-brand"/>
                </div>

                <div className="w-12 h-12 rounded-full bg-brand/10 flex justify-center items-center">

                <FiLinkedin className="text-2xl text-brand"/>
                </div>

                <div className="w-12 h-12 rounded-full bg-brand/10 flex justify-center items-center">
                <IoLogoInstagram className="text-2xl text-brand"/>
                </div>

                <div className="w-12 h-12 rounded-full bg-brand/10 flex justify-center items-center">
                <LuYoutube className="text-2xl text-brand"/>
                </div>


              </div>
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
