import React, { useState } from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import ReactApexChart from "react-apexcharts";
const DeshboardItem = () => {
      const [series] = useState([
        {
          name: "TEAM A",
          type: "column",
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
          name: "TEAM B",
          type: "area",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
          name: "TEAM C",
          type: "line",
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
      ]);

      const [options] = useState({
        chart: {
          height: 350,
          type: "line",
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: "smooth",
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          },
        },
        labels: [
          "01/01/2003",
          "02/01/2003",
          "03/01/2003",
          "04/01/2003",
          "05/01/2003",
          "06/01/2003",
          "07/01/2003",
          "08/01/2003",
          "09/01/2003",
          "10/01/2003",
          "11/01/2003",
        ],
        markers: {
          size: 0,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          title: {
            text: "Points",
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            },
          },
        },
      });
  return (
    <div className="mt-[2rem] flex flex-col gap-4">
      {/* item-1 */}
      <div className="flex  items-center gap-4 ">
        <div className="w-[25rem] h-[10rem] rounded-md bg-white p-4 flex flex-col gap-4">
          <div>
            <span className="text-base font-semibold text-[#5E4E45]">
              Teacher
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-2xl">15+</span>
            </div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-[#F42C4E] flex justify-center items-center">
              <span className="text-xl text-white">
                <FaChalkboardTeacher />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-[10rem] rounded-md bg-white p-4 sm:flex flex-col gap-4 hidden">
          <div>
            <span className="text-base font-semibold text-[#5E4E45]">
              Student
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-2xl">1500+</span>
            </div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-[#5E72E4] flex justify-center items-center">
              <span className="text-xl text-white">
                <FaRegUser />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[25rem] h-[10rem] rounded-md bg-white p-4 lg:flex flex-col gap-4 hidden">
          <div>
            <span className="text-base font-semibold text-[#5E4E45]">
              Admin
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-2xl">3</span>
            </div>
            <div className="w-[3rem] h-[3rem] rounded-full bg-[#2DCE89] flex justify-center items-center">
              <span className="text-xl text-white">
                <SiYoutubestudio />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* item-2 */}
      <div className='mt-[3rem]'>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}

export default DeshboardItem