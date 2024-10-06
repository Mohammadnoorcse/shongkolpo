import React from 'react'
import bg from "../../assets/10050.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import {Link, useLocation} from "react-router-dom"
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={
        pathname === "/deshboard"
          ? "hidden"
          : "bg-[#0F172A] w-full flex justify-center "
      }
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container  flex items-center  flex-col gap-4 p-4 mt-8">
        <div className="flex md:gap-[4rem] gap-4 flex-wrap pb-[5rem] border-b border-[#808DA1] border-opacity-[0.5] ">
          {/* item-1 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
              alt=""
              className="w-[5rem]"
            />
            <p className="text-base font-normal sm:w-[25rem] text-[#808DA1]">
              Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius
              enim eros elementum tristique. Duis cursus.
            </p>
            <div className="flex gap-4">
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
          {/* item-2 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[white]">Links</h2>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Course
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Live
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Blog
              </Link>
            </div>
          </div>
          {/* item-3 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[white]">Legal</h2>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Legal
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Tearms of Use
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Tearm & Condition
              </Link>
              <Link
                to="/"
                className="text-base font-normal  text-[#808DA1] hover:underline"
              >
                Payment Method
              </Link>
            </div>
          </div>
          {/* item-4 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[white]">Newsletter</h2>
            <p className="text-base font-normal  text-[#808DA1] sm:w-[20rem]">
              Join over{" "}
              <span className="text-[#FF7E84] font-semibold">68,000</span>{" "}
              people getting our emails Lorem ipsum dolor sit amet consectet
            </p>
            <input
              type="text"
              placeholder="Enter the Email"
              className="sm:w-[20rem] h-[3rem] bg-white p-3 rounded-md border-none outline-none"
            />
            <button className="sm:[20rem] h-[3rem] bg-[#FF7E84] text-white text-center text-base font-bold rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-sm font-normal text-[#808DA1]">
            © Copyright 2024 | metacode3 Template | All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer