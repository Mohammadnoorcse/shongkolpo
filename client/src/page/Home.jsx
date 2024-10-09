import React, { useState } from "react";
import bg from "../assets/10043.png"; 
import bg1 from "../assets/10045.png"; 
import { MdOutlineMail } from "react-icons/md";
import img1 from "../assets/10003.png"
import img2 from "../assets/10012.png"
import img3 from "../assets/10013.png"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import ChooseCard from "../components/home/ChooseCard";
import ToturialCard from "../components/home/ToturialCard";
import ReviewCard from "../components/home/ReviewCard";
import TeacherCard from "../components/home/TeacherCard";
const chooseCard = [
  {
    icon: <FaEarthAfrica />,
    name: "Learn More Anywhere",
    desc: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection",
  },
  {
    icon: <FaLaptop />,
    name: "Expert Instructor",
    desc: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection",
  },
  {
    icon: <FaHandshake />,
    name: "24/7 Strong Support",
    desc: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection",
  },
  {
    icon: <FaHandshake />,
    name: "24/7 Strong Support",
    desc: "Learn from anywhere in world on desktop, mobile or tablet with an Internet connection",
  },
];

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
];
const reviewCard = [
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: "dada bangladesh e emon creator ache ami jantam nah. vabtam traversy media, academind, neso academy, etc ei gular moto better quality keu dite parbe nah bangladesh e kintu dada aponar video quality thik oder thekeo beshi efficient. ami abar o gorbito aponar moto contain creator ache amar desh e. ei video dekhe flex-box er concept ekdom clear. salute dada",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: " Sotti dada apnar video te animation use korar jonno aro valo kore bujha jai r aitar jonno apnar onek kosto korte hoi. (Olpo kicudin video editing niye kaj korcilam taijani avabe akta video edit korte kotota gham jhorate hoi). Best wishes dada.",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: "ভাই আপনার ভিডিও আর অন্য চ্যানেল এর ভিডিও, বােঝানাের প্রসেস সম্পূর্ণ আলাদা। জাস্ট মাইন্ড ব্লোয়িং। ভাই আপনার কাছ থেকে এমন ভিডিও আশা করি সবসময় আমরা।",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: "এক কথায় এই প্লে লিস্ট টি ওয়াও, ১ম যে ১৭ মিনিটের ভিডিওটি ছিল ব্যাসিক হলেও ১৭ মিনিটে ১৭ মিনিট ই লাইফে কাজে লাগবে, এবং ভালো কিছু জিনিস শিখতে পেরেছি, আশা করি দিন দিন জটিল সমস্যা সমাধান নিয়ে এগিয়ে আসলে আমরা ও হাল ছাড়ব না কারন এক্সপ্লোর করে ই যাচ্ছি আমরা আর চোখের সামনে সেটাই কেন যেন চলে এসে। সবচেয়ে জোস একটা প্লে লিস্ট বলব আমি এই সিরিজ কে ",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: " quality thik oder thekeo beshi efficient. ami abar o gorbito aponar moto contain creator ache amar desh e. ei video dekhe flex-box er concept ekdom clear. salute dada",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: " quality thik oder thekeo beshi efficient. ami abar o gorbito aponar moto contain creator ache amar desh e. ei video dekhe flex-box er concept ekdom clear. salute dada",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: "Your node js videos have been very helpful to me. This is far better than any paid course in terms of content quality. This video series has been really beneficial to me. And, your theme. I looked through a lot of themes and tried them all, but I never found one that I liked. However, this theme is so well-suited to my setup that I can't uninstall it.Thank you very much for your efforts.. You can't satisfy everyone, so simply ignore them",
  },
  {
    img: "https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafe-Uddaraj-Official.7899d465.jpg&w=48&q=75",
    name: "Rafe Uddaraj Official",
    type: "commented on Youtube",
    des: "Dear Sumit, I had to reach out with a massive appreciation and to say that I am in awe of your teaching, communication, visual and technical skills and knowledge. This is a truly a fantastic video, so well constructed and perfectly delivered. Just amazing! I am neither a native Bangla speaker nor very technical (UK based Sylheti, and dabble a little in web development), but this video was just perfect, I really enjoyed it - huge thanks",
  },
 
];
const Home = () => {
 
 

  return (
    <>
      <div
        className="bg-[#0F172A] w-full h-screen flex justify-center "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container  flex sm:items-center p-4 relative">
          <div className="flex flex-col gap-4 lg:ml-40 ml-0 mt-[10rem] sm:mt-0">
            <div className="flex flex-col gap-1 ">
              <div className="flex">
                {"Classical".split("").map((value, index) => (
                  <span
                    key={index}
                    className="text-5xl font-bold text-[#808DA1] tracking-tight"
                  >
                    {value}
                  </span>
                ))}
              </div>
              <div className="flex">
                {"Education For".split("").map((value, index) => (
                  <span
                    key={index}
                    className={`text-5xl font-bold text-[#808DA1] tracking-tight ${
                      index === 9 ? "mr-2" : ""
                    }`}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <div className="flex">
                {"The Future".split("").map((value, index) => (
                  <span
                    key={index}
                    className={`text-5xl font-bold text-[#808DA1] tracking-tight ${
                      index === 3 ? "mr-2" : ""
                    }`}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:flex gap-2 flex-col hidden">
              <p className="text-base font-normal tracking-normal sm:w-[25rem] text-[#808DA1]">
                It is long established fact that reader distracted by the
                readable content.
              </p>
              <form action="">
                <div className="sm:w-[25rem] w-auto h-[4rem] border border-[#808DA1] mt-4 rounded-md flex justify-between items-center p-2 gap-2">
                  <span className="text-2xl text-[#808DA1]">
                    <MdOutlineMail />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your mail"
                    className="w-full bg-transparent p-2 border-none outline-none text-[#808DA1]"
                  />
                  <button className="px-3 p-1 text-[#808DA1] bg-[#2A2234] rounded-md">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 ">
            <img src={img1} alt="" className="xl:w-auto xl:h-auto w-[30rem]" />
          </div>
        </div>
      </div>
      {/* section section */}
      <div
        className="bg-[#0F172A] w-full  flex justify-center "
        // style={{
        //   backgroundImage: `url(${bg1})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="container  flex items-center  flex-col gap-4 p-4 ">
          {/* item-1 */}
          <div className="flex gap-4 w-full sm:h-[40rem] flex-col md:flex-row  ">
            <div className="md:w-[50%] w-full relative ">
              <div className="absolute md:top-[10%] md:left-[20%] top-[5rem] sm:left-[30%] left-[15%] w-[18rem] h-[15rem] ">
                <img src={img2} alt="" className="w-full h-full rounded-md" />
              </div>
              <div className="absolute md:top-[35%] md:left-[35%] top-[15rem] sm:left-[40%] left-[20%]  w-[18rem] h-[15rem] hidden md:flex">
                <img src={img3} alt="" className="w-full h-full rounded-md" />
              </div>
            </div>
            <div className="md:w-[50%] w-full  mt-[25rem] md:mt-5 md:pt-8  flex flex-col gap-4 p-4">
              <div className="flex flex-col">
                <span className="text-base font-semibold text-[#30BEB5] tracking-tighter">
                  About Shongkolpo
                </span>
                <h4 className="mt-4 text-3xl font-bold text-[#808DA1] flex flex-col tracking-normal">
                  The Place Where You Can
                  <span>Achieve</span>
                </h4>
              </div>
              <p className="text-base text-[#808DA1] text-justify lg:w-[25rem] ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex gap-4 items-center">
                  <div className="w-[3rem] h-[3rem] rounded-full bg-[#E3F9F6] flex justify-center items-center">
                    <img
                      src="https://bestwpware.com/react-templates/edumim/static/media/light.b64b29246594a9da972137e5b35e8e8f.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-[#808DA1]">
                      Our Mission
                    </h3>
                    <p className="text-base text-[#808DA1] text-justify lg:w-[22rem] ">
                      There are many variations of passages of the Lorem Ipsum
                      available.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-[3rem] h-[3rem] rounded-full bg-[#E3F9F6] flex justify-center items-center">
                    <img
                      src="https://bestwpware.com/react-templates/edumim/static/media/target.dcb7469324750a00248815cd116e89ae.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-[#808DA1]">
                      Our Vission
                    </h3>
                    <p className="text-base text-[#808DA1] text-justify lg:w-[22rem] ">
                      There are many variations of passages of the Lorem Ipsum
                      available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* item-2 */}
          <div className="flex flex-col w-full gap-4 py-4 max-[767px]:mt-[13rem] max-[640px]:mt-[0rem]">
            <div className="flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold ">
                Why <span className="text-[#36B6EF]">Choose</span> Shongkolpo
              </h1>
            </div>

            <div className="w-full  flex justify-center items-center">
              <div
                className="grid gap-4 mt-8 w-full h-full"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
                  gridTemplateRows: "Auto",
                }}
              >
                {chooseCard.map((value, index) => (
                  <ChooseCard key={index} value={value} index={index} />
                ))}
              </div>
            </div>
          </div>
          {/* item-3 */}
          <div className="flex flex-col w-full gap-4 py-4 max-[767px]:mt-[13rem] max-[640px]:mt-[0rem] mt-8">
            <div className="flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold ">
                Choose Our Top <span className="text-[#36B6EF]">Courses</span>
              </h1>
            </div>

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
          {/* item-4 */}
          <div className="flex flex-col w-full gap-4 py-4 max-[767px]:mt-[13rem] max-[640px]:mt-[0rem] mt-12">
            <div className="flex items-center justify-center flex-col gap-4 ">
              <img
                src="https://learnwithsumit.com/_next/static/media/peep1.f4841716.svg"
                alt=""
                className="w-[10rem]"
              />
              <h1 className="text-white text-3xl font-bold ">
                <span className="text-[#36B6EF]">লার্নাররা </span>
                আমাদের সম্পর্কে যা ভাবেন
              </h1>
            </div>

            <div
              className="grid gap-4 mt-12 w-full h-full"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
                gridTemplateRows: "Auto",
              }}
            >
              {reviewCard.map((value, index) => (
                <ReviewCard key={index} value={value} index={index} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="px-3 py-2 bg-[#35B6EF] text-white font-bold text-sm rounded-[1rem]">
                আরো কমেন্ট দেখুন
              </button>
            </div>
          </div>
          {/* item-5 */}
          <div className="flex flex-col w-full gap-4 py-4 max-[767px]:mt-[13rem] max-[640px]:mt-[0rem] mt-8">
            <div className="flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold ">
                Our Expert <span className="text-[#36B6EF]">Instructors</span>
              </h1>
            </div>

            <div className="w-full  flex justify-center items-center mt-8">
              <div
                className="grid gap-4 mt-8 w-full h-full"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
                  gridTemplateRows: "Auto",
                }}
              >
                {/* {tutorialCard.map((value, index) => (
                  <ToturialCard key={index} value={value} index={index} />
                ))} */}
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
