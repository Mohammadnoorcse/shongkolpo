import React, { useState } from 'react'

const ChooseCard = ({value,index}) => {
     const [ismouse, setIsMouse] = useState("");
  return (
    <div
      onMouseEnter={() => setIsMouse(index)}
      onMouseLeave={() => setIsMouse("")}
      className="w-full h-[18rem] bg-white p-4 rounded-md shadow-md flex flex-col gap-4 hover:bg-[#FF7E84] hover:text-white cursor-pointer"
    >
      <span
        className={`text-3xl mt-4  ${
          ismouse === index ? "text-white" : "text-[#30C4C8]"
        }`}
      >
        {value.icon}
      </span>
      <h2 className="text-xl font-bold mt-4 ">{value.name}</h2>
      <span className="text-sm font-medium w-[18rem] text-justify">
       {value.desc}
      </span>
    </div>
  );
}

export default ChooseCard