import React from 'react'
import { CiSearch } from "react-icons/ci";
const Attendance = () => {
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
        <div className="w-full mt-[5rem] flex flex-col gap-4">
          {/* item-1 */}
          <div className=" w-full flex items-center">
            <form action="" className="w-full flex items-center justify-center">
              <div className="sm:w-[30rem] w-full h-[3rem] border border-[#808DA1] rounded-md flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Enter the group Id"
                  className="w-full h-full bg-transparent p-4 outline-none text-[#808DA1] text-base"
                />
                <button className="text-2xl text-[#808DA1] font-bold">
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
          {/* item-2 */}
          <div className="flex flex-col justify-center items-center mt-8">
            <table className="table-auto border-collapse border border-gray-300 w-[30rem]">
              <thead>
                <tr className="border border-gray-300">
                  <th className="px-4 py-2 border border-gray-300 text-[#808DA1]">
                    Checkbox
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-[#808DA1]">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-300">
                  <td className="px-4 py-2 border border-gray-300">
                    <input type="checkbox" className="scale-[1.5] cursor-pointer" />
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-[#808DA1]">
                    John Doe
                  </td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="px-4 py-2 border border-gray-300">
                    <input type="checkbox" className="scale-[1.5] cursor-pointer" />
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-[#808DA1]">
                    Jane Smith
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance