import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const TeacherCard = () => {
  return (
    <div className="w-full h-[20rem] bg-white p-4 rounded-md shadow-md flex flex-col  cursor-pointer justify-center items-center">
      <img
        src="https://bestwpware.com/react-templates/edumim/static/media/team1.5f1ef96fa74b9e258e70.png"
        alt=""
        className="w-[8rem] h-[8rem] rounded-full"
      />
      <h2 className="text-xl font-bold mt-4">Erics Widget</h2>
      <span className='text-base font-medium'>Developer</span>
      <div className="flex gap-3 items-center mt-4">
        <div className="px-3 py-2 bg-[#ffe8e8] text-[#ff7e83] rounded-md">
          <span>
            <FaFacebookF />
          </span>
        </div>
        <div className="px-3 py-2 bg-[#e9fbfa] text-[#30bead] rounded-md">
          <span>
            <FaTwitter />
          </span>
        </div>
        <div className="px-3 py-2 bg-[#eee8ff] text-[#7b7b8a] rounded-md">
          <span>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard