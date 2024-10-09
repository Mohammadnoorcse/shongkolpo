import React, { useState } from "react";
import img from "../assets/10014.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";

const Blog = () => {
  const [isRead,setIsRead] = useState(false);
   
  return (
    <div
      className="bg-[#0F172A] w-full flex justify-center h-screen overflow-auto"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      <div className="container  flex items-center  flex-col gap-4 p-4 sm:p-0 mt-[5rem] ">
        {/* card */}
        <div className="bg-gray-800 md:w-[70%] w-full p-4 flex flex-col gap-4 rounded-md">
          {/* item-1 */}
          <div className="w-full flex justify-between items-center">
            <div className="flex  gap-4">
              <img
                src={img}
                alt=""
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col leading-none text-[#808DA1]">
                <h2 className="text-base font-medium">Mohammmad Noor</h2>
                <p className="text-sm">3.00pm</p>
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-[#808DA1] cursor-pointer">
                <BsThreeDotsVertical />
              </span>
            </div>
          </div>
          {/* item-2 */}
          <div>
            <span
              className={`text-sm text-white text-justify ${
                isRead ? "" : "line-clamp-5"
              } `}
              onClick={() => setIsRead(!isRead)}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
          {/* item-3 */}
          <div className="w-full flex gap-4 flex-wrap mt-4 items-center justify-center">
            <img
              src={img}
              alt=""
              className="rounded-md w-auto"
            />
            <img
              src={img}
              alt=""
              className="rounded-md w-auto"
            />
            <img
              src={img}
              alt=""
              className="rounded-md w-auto"
            />
          </div>
          {/* item-4 */}
          {/* <div className="w-full flex gap-4 flex-wrap mt-4 items-center justify-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              playing
              controls={true}
              muted
            />
          </div> */}
        </div>
        <div className="bg-gray-800 md:w-[70%] w-full p-4 flex flex-col gap-4 rounded-md">
          {/* item-1 */}
          <div className="w-full flex justify-between items-center">
            <div className="flex  gap-4">
              <img
                src={img}
                alt=""
                className="w-[2.5rem] h-[2.5rem] rounded-full"
              />
              <div className="flex flex-col leading-none text-[#808DA1]">
                <h2 className="text-base font-medium">Mohammmad Noor</h2>
                <p className="text-sm">3.00pm</p>
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-[#808DA1] cursor-pointer">
                <BsThreeDotsVertical />
              </span>
            </div>
          </div>
          {/* item-2 */}
          <div>
            <span
              className={`text-sm text-white text-justify ${
                isRead ? "" : "line-clamp-5"
              } `}
              onClick={() => setIsRead(!isRead)}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
          {/* item-3 */}
          <div className="w-full flex gap-4 flex-wrap mt-4 items-center justify-center">
            <img
              src="https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?w=1380&t=st=1727879858~exp=1727880458~hmac=bd2f029b81887d79818aeb227c8d2f135aa238064c0ec87c763971d3e4c00e3a"
              alt=""
              className="rounded-md w-auto"
            />
          </div>
          {/* item-4 */}
          {/* <div className="w-full flex gap-4 flex-wrap mt-4 items-center justify-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              playing
              controls={true}
              muted
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
