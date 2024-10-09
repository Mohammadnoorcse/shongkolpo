import React from 'react'
import ReactPlayer from "react-player/youtube";
import img1 from "../../assets/10014.png"
import { Link } from 'react-router-dom';
const CourseDetails = () => {
    const id = 2;
    
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
        <div className="w-full h-full flex gap-4 mt-[5rem] lg:flex-row flex-col">
          {/* left */}
          <div
            className="lg:w-[80%] w-full flex-col gap-4   "
            
          >
            {/* item-1 */}

            <div className="w-full sm:h-[35rem] h-[25rem] videocard">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                playing
                controls={true}
                muted
              />
            </div>
            {/* item-2 */}
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="text-base font-bold text-white">
                রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের সিদ্ধান্ত,
                বললেন আমরা হেরে যাইনি{" "}
              </h2>
              <p className="text-sm font-medium text-[#808DA1] text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            {/* item-3  all comment laptop desktop*/}
            <div className="lg:flex hidden flex-col gap-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-[2.5rem] h-[2.5rem]">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <form action="">
                    <input
                      type="text"
                      className="w-full bg-transparent text-[#808DA1] border-b border-opacity-[0.2] outline-none"
                    />
                  </form>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                {/* comment */}
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div
            className="lg:w-[20%] w-full  flex-col gap-4 "
           
          >
            <h2 className="text-xl font-bold text-white">All video</h2>

            <div className="mt-4 flex flex-col gap-4">
              {/* silde card */}
              <Link className="flex gap-4" to={`/course/${id}`}>
                <img
                  src={img1}
                  alt=""
                  className="w-[8rem] h-[6rem] rounded-md"
                />
                <span className="w-full h-[3.6rem] text-sm text-[#808DA1] overflow-hidden text-ellipsis text-nowrap">
                  {" "}
                  <p className="text-sm text-[#808DA1] overflow-hidden text-ellipsis whitespace-normal break-words display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                    রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের
                    সিদ্ধান্ত, বললেন আমরা হেরে যাইনি
                  </p>
                </span>
              </Link>
              {/* silde card */}
              <Link className="flex gap-4" to={`/course/${id}`}>
                <img
                  src={img1}
                  alt=""
                  className="w-[8rem] h-[6rem] rounded-md"
                />
                <span className="w-full h-[3.6rem] text-sm text-[#808DA1] overflow-hidden text-ellipsis text-nowrap">
                  {" "}
                  <p className="text-sm text-[#808DA1] overflow-hidden text-ellipsis whitespace-normal break-words display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                    রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের
                    সিদ্ধান্ত, বললেন আমরা হেরে যাইনি
                  </p>
                </span>
              </Link>
              {/* silde card */}
              <Link className="flex gap-4" to={`/course/${id}`}>
                <img
                  src={img1}
                  alt=""
                  className="w-[8rem] h-[6rem] rounded-md"
                />
                <span className="w-full h-[3.6rem] text-sm text-[#808DA1] overflow-hidden text-ellipsis text-nowrap">
                  {" "}
                  <p className="text-sm text-[#808DA1] overflow-hidden text-ellipsis whitespace-normal break-words display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                    রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের
                    সিদ্ধান্ত, বললেন আমরা হেরে যাইনি
                  </p>
                </span>
              </Link>
              {/* silde card */}
              <Link className="flex gap-4" to={`/course/${id}`}>
                <img
                  src={img1}
                  alt=""
                  className="w-[8rem] h-[6rem] rounded-md"
                />
                <span className="w-full h-[3.6rem] text-sm text-[#808DA1] overflow-hidden text-ellipsis text-nowrap">
                  {" "}
                  <p className="text-sm text-[#808DA1] overflow-hidden text-ellipsis whitespace-normal break-words display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                    রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের
                    সিদ্ধান্ত, বললেন আমরা হেরে যাইনি
                  </p>
                </span>
              </Link>
              {/* silde card */}
              <Link className="flex gap-4" to={`/course/${id}`}>
                <img
                  src={img1}
                  alt=""
                  className="w-[8rem] h-[6rem] rounded-md"
                />
                <span className="w-full h-[3.6rem] text-sm text-[#808DA1] overflow-hidden text-ellipsis text-nowrap">
                  {" "}
                  <p className="text-sm text-[#808DA1] overflow-hidden text-ellipsis whitespace-normal break-words display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
                    রিভিউ নিয়ে মিরাজের হাসি; হুট করে নয় সাকিবের অবসরের
                    সিদ্ধান্ত, বললেন আমরা হেরে যাইনি
                  </p>
                </span>
              </Link>
            </div>
            {/* all comment phone */}

            <div className="lg:hidden flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-[2.5rem] h-[2.5rem]">
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <form action="">
                    <input
                      type="text"
                      className="w-full bg-transparent text-[#808DA1] border-b border-opacity-[0.2] outline-none"
                    />
                  </form>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                {/* comment */}
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[2.5rem] h-[2.5rem]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <span className="text-sm font-normal text-[white]">
                      Mohamad Noor
                    </span>
                    <p className="text-sm font-normal text-[#808DA1] text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails