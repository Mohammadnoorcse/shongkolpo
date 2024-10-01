import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
    const [active,setAcitve] = useState('home');
    const [drop,setDrop] = useState(false);
    const [isMenu,setIsMenu] = useState(false);
    const role="teacher";
    const handleDropActive = (link)=>{
        setAcitve(link);
        setDrop(false);
        if(link==="menu"){
            setIsMenu(!isMenu);
        }
    }

    
  return (
    <div className="w-full h-[4rem] bg-[#141414]  text-[#808DA1] flex justify-center items-center fixed top-0 z-50">
      <div className="container  flex justify-between items-center">
        <div className="w-[5rem]">
          <img
            src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
            alt=""
          />
        </div>
        <div className="sm:flex gap-4 items-center hidden">
          <div>
            <Link
              className={`text-sm font-medium px-3 py-1 rounded-md  ${
                active === "home" && "bg-gray-800 text-white"
              }`}
              onClick={() => setAcitve("home")}
              to="/"
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              className={`text-sm font-medium px-3 py-1 rounded-md  ${
                active === "course" && "bg-gray-800 text-white"
              }`}
              onClick={() => setAcitve("course")}
              to="/course"
            >
              Course
            </Link>
          </div>

          <div>
            <Link
              className={`text-sm font-medium px-3 py-1 rounded-md  ${
                active === "live" && "bg-gray-800 text-white"
              }`}
              onClick={() => setAcitve("live")}
              to="/"
            >
              Live
            </Link>
          </div>

          <div>
            <Link
              className={`text-sm font-medium px-3 py-1 rounded-md  ${
                active === "blog" && "bg-gray-800 text-white"
              }`}
              onClick={() => setAcitve("blog")}
              to="/"
            >
              Blog
            </Link>
          </div>
          <div className="relative">
            {role ? (
              <div
                className={`text-sm font-medium px-3 py-1 rounded-md cursor-pointer ${
                  drop && "bg-gray-800 text-white"
                }`}
                onClick={() => setDrop(!drop)}
              >
                noor
              </div>
            ) : (
              <Link
                className={`text-sm font-medium px-3 py-1 rounded-md  ${
                  active === "sign" && "bg-gray-800 text-white"
                }`}
                onClick={() => setAcitve("sign")}
                to="/"
              >
                Signup
              </Link>
            )}

            <div
              className={
                drop
                  ? "absolute top-8 right-0 w-[8rem] h-auto  z-50 bg-[#0F172A] p-4 rounded-md flex flex-col gap-3"
                  : "hidden"
              }
            >
              {role === "admin" ? (
                <>
                  <Link
                    className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                      active === "profile" && "bg-gray-800 text-white"
                    }`}
                    onClick={() => handleDropActive("profile")}
                    to="/"
                  >
                    Deshboard
                  </Link>
                  <Link
                    className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                      active == "attendace" && "bg-gray-800 text-white"
                    }`}
                    onClick={() => handleDropActive("attendace")}
                    to="/"
                  >
                    Attendace
                  </Link>
                </>
              ) : role === "teacher" ? (
                <>
                  <Link
                    className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                      active === "profile" && "bg-gray-800 text-white"
                    }`}
                    onClick={() => handleDropActive("profile")}
                    to="/profile"
                  >
                    profile
                  </Link>
                  <Link
                    className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                      active == "attendace" && "bg-gray-800 text-white"
                    }`}
                    onClick={() => handleDropActive("attendace")}
                    to="/attendance"
                  >
                    Attendace
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                      active === "profile" && "bg-gray-800 text-white"
                    }`}
                    onClick={() => handleDropActive("profile")}
                    to="/"
                  >
                    profile
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* menu */}
        <div className="relative sm:hidden flex items-center">
          <span
            className={` font-medium  rounded-md cursor-pointer text-xl px-2 py-1  ${
              active === "menu" && "bg-gray-800 text-white"
            }`}
            onClick={() => handleDropActive("menu")}
          >
            <IoIosMenu />
          </span>
        </div>
        <div
          className={
            isMenu
              ? "absolute top-0 left-0 w-[10rem] h-screen bg-[#141414] flex flex-col gap-4  p-4 items-center sm:hidden"
              : "hidden"
          }
        >
          <div className="w-[5rem] ">
            <img
              src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
              alt=""
            />
          </div>
          <div className="flex gap-4 items-center flex-col">
            <div>
              <Link
                className={`text-sm font-medium px-5 py-1 rounded-md  ${
                  active === "home" && "bg-gray-800 text-white"
                }`}
                onClick={() => setAcitve("home")}
                to="/"
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                className={`text-sm font-medium px-3 py-1 rounded-md  ${
                  active === "course" && "bg-gray-800 text-white"
                }`}
                onClick={() => setAcitve("course")}
                to="/"
              >
                Course
              </Link>
            </div>

            <div>
              <Link
                className={`text-sm font-medium px-3 py-1 rounded-md  ${
                  active === "live" && "bg-gray-800 text-white"
                }`}
                onClick={() => setAcitve("live")}
                to="/"
              >
                Live
              </Link>
            </div>

            <div>
              <Link
                className={`text-sm font-medium px-3 py-1 rounded-md  ${
                  active === "blog" && "bg-gray-800 text-white"
                }`}
                onClick={() => setAcitve("blog")}
                to="/"
              >
                Blog
              </Link>
            </div>
            <div className="relative">
              {role ? (
                <div
                  className={`text-sm font-medium px-3 py-1 rounded-md cursor-pointer ${
                    drop && "bg-gray-800 text-white"
                  }`}
                  onClick={() => setDrop(!drop)}
                >
                  noor
                </div>
              ) : (
                <Link
                  className={`text-sm font-medium px-3 py-1 rounded-md  ${
                    active === "sign" && "bg-gray-800 text-white"
                  }`}
                  onClick={() => setAcitve("sign")}
                  to="/"
                >
                  Signup
                </Link>
              )}

              <div
                className={
                  drop
                    ? "absolute top-8  w-[7rem] h-auto  z-50 bg-[#0F172A] p-4 rounded-md flex flex-col gap-3 justify-center items-center translate-x-[50%] -translate-y-[50%]"
                    : "hidden"
                }
              >
                {role === "admin" ? (
                  <>
                    <Link
                      className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                        active === "profile" && "bg-gray-800 text-white"
                      }`}
                      onClick={() => handleDropActive("profile")}
                      to="/"
                    >
                      Deshboard
                    </Link>
                    <Link
                      className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                        active == "attendace" && "bg-gray-800 text-white"
                      }`}
                      onClick={() => handleDropActive("attendace")}
                      to="/"
                    >
                      Attendace
                    </Link>
                  </>
                ) : role === "teacher" ? (
                  <>
                    <Link
                      className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                        active === "profile" && "bg-gray-800 text-white"
                      }`}
                      onClick={() => handleDropActive("profile")}
                      to="/profile"
                    >
                      profile
                    </Link>
                    <Link
                      className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                        active == "attendace" && "bg-gray-800 text-white"
                      }`}
                      onClick={() => handleDropActive("attendace")}
                      to="/"
                    >
                      Attendace
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className={`text-sm font-medium px-3 py-1 rounded-md hover:border hover:border-[white]  ${
                        active === "profile" && "bg-gray-800 text-white"
                      }`}
                      onClick={() => handleDropActive("profile")}
                      to="/"
                    >
                      profile
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar