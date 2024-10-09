import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Teacher = () => {
    const [isAdd,setIsAdd] = useState(false);
    const [series, setSeries] = useState([14, 23, 21, 17, 15, 10, 12, 17, 21]);
    const [options, setOptions] = useState({
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });
    
  return (
    <div className="flex flex-col gap-4 relative">
      {/* item-1 */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium  text-[#808DA1]">Teacher</h3>
        <button
          className={`text-[#808DA1]  px-5 rounded-md  ${
            isAdd && "bg-gray-800 text-white"
          }`}
          onClick={() => setIsAdd(true)}
        >
          Add
        </button>
      </div>
      {/* item-2 */}
      <div className="flex justify-center mt-8 ">
        <div id="chart">
          {/* Use the state directly with the functional component */}
          <ReactApexChart options={options} series={series} type="polarArea" />
        </div>
      </div>

      {/* item-3 */}
      <div className="mt-[5rem]">
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#808DA1" }}>
                  Dessert (100g serving)
                </TableCell>
                <TableCell align="right" sx={{ color: "#808DA1" }}>
                  Calories
                </TableCell>
                <TableCell align="right" sx={{ color: "#808DA1" }}>
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell align="right" sx={{ color: "#808DA1" }}>
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell align="right" sx={{ color: "#808DA1" }}>
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#808DA1" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#808DA1" }}>
                    {row.calories}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#808DA1" }}>
                    {row.fat}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#808DA1" }}>
                    {row.carbs}
                  </TableCell>
                  <TableCell align="right" sx={{ color: "#808DA1" }}>
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* item-4 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A] flex flex-col">
        <div className="flex justify-end text-white">
          <span>X</span>
        </div>
        <div>
          {/* child-1 */}
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
              alt=""
              className="w-[10rem]"
            />
          </div>
          {/* child-2 */}
          <div className=" w-full flex flex-col gap-4 justify-center items-center">
            <form
              action=""
              className=" w-full flex flex-col gap-3 justify-center items-center"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="sm:w-[30rem] w-full h-[2.3rem] p-4 bg-transparent border border-[#808DA1] rounded-md text-[#808DA1] text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="Enter the Email"
                  className="sm:w-[30rem] w-full h-[2.3rem] p-4 bg-transparent border border-[#808DA1] rounded-md text-[#808DA1] text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                  Password
                </span>
                <input
                  type="password"
                  placeholder="Enter the Password"
                  className="sm:w-[30rem] w-full h-[2.3rem] p-4 bg-transparent border border-[#808DA1] rounded-md text-[#808DA1] text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                  ConfirmPassword
                </span>
                <input
                  type="password"
                  placeholder="Enter the ConfirmPassword"
                  className="sm:w-[30rem] w-full h-[2.3rem] p-4 bg-transparent border border-[#808DA1] rounded-md text-[#808DA1] text-base"
                />
              </div>
              <div className="mt-4 bg-[#FF7E84] sm:w-[30rem] w-full h-[2.3rem] rounded-md text-white text-base font-medium cursor-pointer flex justify-center items-center hover:bg-[white] hover:text-[#FF7E84]">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher