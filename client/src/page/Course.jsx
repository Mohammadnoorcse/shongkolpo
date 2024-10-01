import React from "react";
import bg from "../assets/10045.png";
import { CiSearch } from "react-icons/ci";
import ToturialCard from "../components/home/ToturialCard";
const tutorialCard = [
  {
    _id: 1,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 2,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 3,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 4,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 5,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 6,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 7,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 8,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 9,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 10,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 11,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
  {
    _id: 12,
    img: "https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png",
    name: "Basic Fundamentals of Interior & Graphics Design",
  },
];
const Course = () => {
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
        {/* header */}
        <div className="w-full mt-[5rem] text-white flex justify-between items-center">
          <div>
            <h1 className="text-white sm:text-2xl text-xl font-bold ">
              All <span className="text-[#36B6EF]">Turtorial</span> Shongkolpo
            </h1>
          </div>
          <div className="w-[18rem] h-[2.5rem] border border-[#808DA1] rounded-md sm:flex hidden">
            <form
              action=""
              className="w-full h-full flex justify-between items-center"
            >
              <input
                type="text"
                placeholder="Enter the search"
                className="w-full h-full p-4 bg-transparent border-none outline-none text-sm text-[#808DA1]"
              />
              <button className="text-xl pr-2">
                <CiSearch />
              </button>
            </form>
          </div>
        </div>
        {/* item-1 */}
        <div className="w-full  flex justify-center items-center">
          <div
            className="grid gap-4 mt-8 w-full h-full"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
              gridTemplateRows: "Auto",
            }}
          >
            {tutorialCard.map((value, index) => (
              <ToturialCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
