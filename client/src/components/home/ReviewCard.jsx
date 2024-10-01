import React from 'react'

const ReviewCard = ({value,index}) => {
  return (
    <div
      className="p-4 text-white flex gap-4 bg-[#182234] rounded-md border-[1px] border-[#808DA1] w-full"
      
    >
      <div className="w-[3rem] h-[3rem]">
        <img src={value.img} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className="w-[80%] flex flex-col gap-4">
        <div className="flex flex-col ">
          <h2 className="text-base font-normal">{value.name}</h2>
          <span className="text-[12px] font-mono">{value.type}</span>
        </div>
        <div>
          <span className="text-sm text-justify">{value.des}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard