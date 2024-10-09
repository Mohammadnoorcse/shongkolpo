import React from 'react'

const Register = () => {
  return (
    <div className="bg-[#0F172A] w-full h-screen flex justify-center ">
      <div className="container flex flex-col justify-center items-center gap-4 p-4  ">
        <div className="flex justify-center items-center">
          <img
            src="https://www.shongkolpo.com/_next/image?url=%2Ftrans-logo.png&w=3840&q=75"
            alt=""
            className="w-[10rem]"
          />
        </div>
        {/* item-2 */}
        <div className=" w-full flex flex-col gap-4 justify-center items-center">
          <form
            action=""
            className=" w-full flex flex-col gap-3 justify-center items-center"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                Email
              </span>
              <input
                type="text"
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
            <div className="flex flex-col gap-2">
              <span className="text-[17px] text-[#808DA1] font-normal tracking-normal">
                What type of account?
              </span>

              <select className="sm:w-[30rem] w-full h-[2.3rem] p-4 bg-transparent border border-[#808DA1] rounded-md text-[#808DA1]  text-base">
                <option value="student">
                  Student
                </option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div className="mt-4 bg-[#FF7E84] sm:w-[30rem] w-full h-[2.3rem] rounded-md text-white text-base font-medium cursor-pointer flex justify-center items-center hover:bg-[white] hover:text-[#FF7E84]">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register