import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ToturialCard = ({value,index}) => {
  
  return (
    <Link className="w-full bg-[#0B1120] text-[#808DA1]  rounded-md shadow-md flex flex-col gap-4 cursor-pointer "
     to={`/course/${value._id}`}
    >
      <img src={value.img} alt="" className="w-full h-[15rem] rounded-md" />
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-base font-medium text-ellipsis w-full text-nowrap overflow-hidden">
          {value.name}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaBookOpen />
            </span>
            <span className="text-sm">2 lessons</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaRegClock />
            </span>
            <span className="text-sm">4h 30m</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaStar />
            </span>
            <span className="text-sm">4.5</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ToturialCard