import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";




const Footer = () => {
  return (
    <div className="h-448 absolute inset-x-0 bottom-0 w-full bg-footer-gray py-14 px-40">
            <div className="">
                <p className="text-white text-sm font-semibold">Connect with us</p>
                <div className="relative w-auto">
                    <input 
                        type="text" 
                        className="w-64 pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Email ID"
                    />
                    <button className="absolute inset-y-0 left-56 flex items-center pr-3 ">
                        <IoIosArrowRoundForward className="text-gray-500" size={30}/>
                    </button>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <FaYoutube color="white" size={25}/>
                    <FaFacebook color="white" size={25}/>
                    <FaInstagramSquare color="white" size={25}/>
                    <FaLinkedinIn color="white" size={25}/>
                    <FaTwitter color="white" size={25}/> 
                </div>
                <p className="text-white ">© Copyright 2023 Croma. All rights reserved</p>
            </div>
            <div className=""></div>
            <div className=""></div>
    </div>
  )
}

export default Footer