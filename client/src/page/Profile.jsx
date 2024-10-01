import React, { useState } from 'react'
import img from "../assets/10014.png"
import { PiGraduationCap } from "react-icons/pi"; 
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
const Profile = () => {
    const[isInfoEdit,setIsInfoEdit] = useState(false);
    const role = "student";
  return (
    <div
      className="bg-[#0F172A] w-full flex justify-center h-screen overflow-auto"
      style={{
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      <div className="container  flex items-center  flex-col gap-4 p-4 sm:p-0 ">
        <div className="mt-[5rem] flex flex-col gap-4">
          {/* item-1 */}
          <div className="md:w-[50rem] w-full  h-[20rem] relative ">
            <img src={img} alt="" className="w-full h-full rounded-md" />

            <div className="absolute bottom-4 right-4 ">Edit</div>
          </div>
          {/* item-2 */}
          <div className="flex flex-col gap-4  mt-4 relative">
            <div className="flex flex-col gap-2 items-center sm:w-[35rem] w-full">
              <span className="text-[#808DA1] text-base font-medium text-center ">
                যারা ধৈর্য-নিষ্ঠার সাথে চেষ্টা করে, আল্লাহ অবশ্যই তাদের সাথে
                আছেন -(আল-বাক্বারাহ ১৫৩) blood-group:A+
              </span>
              <div className="flex flex-col gap-3 mt-8 ">
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <FaChalkboardTeacher />
                  </span>
                  <span className="text-base font-medium text-[#808DA1]">
                    Mohammad Noor
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <PiGraduationCap />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    Studied at B.Sc in Computer Science & Engineering at
                    Daffodil International University
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <PiGraduationCap />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    Studied at Uttara Residential School & College, Uttara
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <PiGraduationCap />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    Went to Dewpara Gono High School. Ghatail,Tangail.
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <CiLocationOn />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    Lives in Tangail
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-3xl font-bold text-[#808DA1]">
                    <MdOutlineMail />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    mohammadnoorcse@gmail.com
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-xl font-bold text-[#808DA1]">
                    <FaPhone />
                  </span>
                  <span className="text-base font-normal text-[#808DA1]">
                    01622256788
                  </span>
                </div>
                {role === "student" && (
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-bold text-[#808DA1]">
                      <FaUserGroup />
                    </span>
                    <span className="text-base font-normal text-[#808DA1]">
                      bg-120
                    </span>
                  </div>
                )}

                <div className="flex items-start mt-4">
                  <button
                    className="px-5 py-1 rounded-md bg-[#808DA1] text-sm  text-white hover:text-[green]"
                    onClick={() => setIsInfoEdit(true)}
                  >
                    Edit Info
                  </button>
                </div>
              </div>
            </div>

            {/* edit */}
            <div
              className={
                isInfoEdit
                  ? "absolute top-0 w-full flex flex-col gap-4  bg-white shadow-md rounded-md p-4 "
                  : "hidden"
              }
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">Edit Your Information</span>
                <span
                  className="text-base font-bold cursor-pointer"
                  onClick={() => setIsInfoEdit(false)}
                >
                  X
                </span>
              </div>
              <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    type="text"
                    placeholder="Enter the name"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Versity</span>
                  <input
                    type="text"
                    placeholder="If Your study enter the varsity name other enter null"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">college</span>
                  <input
                    type="text"
                    placeholder="If Your study enter the varsity name other enter null"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">school</span>
                  <input
                    type="text"
                    placeholder="Enter the school"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Live</span>
                  <input
                    type="text"
                    placeholder="Enter the live"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Description</span>
                  <input
                    type="text"
                    placeholder="Enter descrition"
                    className="border h-[3rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    placeholder="Enter the email"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>{" "}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Number</span>
                  <input
                    type="text"
                    placeholder="Enter the Number"
                    className="border h-[2rem] rounded-md p-4 outline-none"
                  />
                </div>
                <div>
                  <button className="w-full rounded-md p-4 bg-[#FF7E84] text-base font-bold text-white">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* item-3 */}
        </div>
      </div>
    </div>
  );
}

export default Profile