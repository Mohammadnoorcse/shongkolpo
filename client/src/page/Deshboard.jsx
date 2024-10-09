import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import img from "../assets/10014.png"
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import DeshboardItem from '../components/deshboard/DeshboardItem';
import Teacher from '../components/deshboard/Teacher';

const Deshboard = () => {
    const [activeSidebar, setActiveSidebar] = useState("deshboard");
      const renderView = () => {
        switch (activeSidebar) {
          case "deshboard":
            return <DeshboardItem />;
          case "teacher":
            return <Teacher />;
          //   case "order":
          //     return <DashboardOrder />;
          //   case "product":
          //     return <DashboardProduct />;
          //   case "salereport":
          //     return <DashboardSaleReport />;
          //   case "messages":
          //     return <DashboardMessage />;
          //   case "setting":
          //     return <DashboardSetting />;
          default:
            return <h1>404 Not Found</h1>;
        }
      };
    
  return (
    <div
      className="bg-[#0F172A] w-full flex justify-center h-screen overflow-auto"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      <div className="container  flex items-center  flex-col gap-4 p-4 sm:p-0 ">
        <div className="w-full h-full flex gap-4">
          {/* left */}
          <div className="sm:w-[15%] w-[25%] h-full border flex justify-center">
            <div className="flex flex-col gap-4 mt-[2rem]">
              <Link to="/">
                <img
                  src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
                  alt=""
                  className="w-[4rem]"
                />
              </Link>
              <div
                className={`flex gap-2 items-center mt-[3rem] text-[#808DA1]  px-4 py-1 rounded-md cursor-pointer ${
                  activeSidebar === "teacher" && "bg-gray-800 text-white"
                }`}
                onClick={() => setActiveSidebar("teacher")}
              >
                <span className="text-xl">
                  <FaChalkboardTeacher />
                </span>
                <span>Teacher</span>
              </div>
              <div
                className={`flex gap-2 items-center  text-[#808DA1]  px-4 py-1 rounded-md cursor-pointer ${
                  activeSidebar === "student" && "bg-gray-800 text-white"
                }`}
                onClick={() => setActiveSidebar("student")}
              >
                <span className="text-xl">
                  <FaRegUser />
                </span>
                <span>Student</span>
              </div>
              <div
                className={`flex gap-2 items-center  text-[#808DA1]  px-4 py-1 rounded-md cursor-pointer ${
                  activeSidebar === "study" && "bg-gray-800 text-white"
                }`}
                onClick={() => setActiveSidebar("study")}
              >
                <span className="text-xl">
                  <SiYoutubestudio />
                </span>
                <span>Study</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="sm:w-[85%] w-[75%] border flex flex-col gap-4">
            {/* topbar */}
            <div className="w-full h-[4rem] shadow-md flex justify-between items-center">
              <div>
                <Link to="/deshboard" className="text-white text-xl font-bold ">
                  Deshboard
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <div className="sm:flex hidden">
                  <form action="">
                    <div className="w-[15rem] h-[2.3rem] border border-[#808DA1] rounded-md flex justify-center items-center">
                      <input
                        type="text"
                        placeholder="Search the value"
                        className="w-full h-full bg-transparent border-none p-2 text-[#808DA1] text-sm outline-none"
                      />
                      <button className="text-xl text-[#808DA1]">
                        <CiSearch />
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <div className="w-[2.2rem] h-[2.2rem] cursor-pointer">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* item-1 */}
            <div className="">{renderView()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deshboard