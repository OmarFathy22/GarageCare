import React from "react";
import { nationalities } from "../Tours&Packages/data";
import { WhereToGo } from "../Tours&Packages/data";

const Form = () => {
  return (
    <form className="flex flex-col items-center  ">
      <div className="flex flex-wrap justify-center gap-5  ">
        
        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full  ">
          <label className="text-[#165064] text-[16px] font-semibold">
            Full Name
          </label>
          <input
            type="text"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2"
          />
        </div>
        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full ">
          <label className="text-[#165064] text-[16px] font-semibold">
            Request Title
          </label>
          <input
            type="text"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2"
          />
        </div>
        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Email
          </label>
          <input
            type="email"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2"
          />
        </div>

        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Watsapp Number
          </label>
          <input
            type="text"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2"
          />
        </div>
        <div className="flex flex-col  w-[32.2%] max-1300:w-[48%] max-900:!w-full ">
          <label className="text-[#165064] text-[16px] font-semibold">
            Arrival Date
          </label>
          <div className="w-full ">
          <input
            min={new Date().toISOString().split("T")[0]}
            type="date"
            className="p-2 outline-none w-full max-900:!w-full rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2"
          />
          </div>
        </div>
        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Nationality
          </label>
          <select className=" p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2">
            {nationalities.map((item, i) => {
              return (
                <option key={i} value={item} className="p-2">
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col w-[32.2%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Where You Which to Go
          </label>
          <select className="p-2  outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC]  mb-2">
            {WhereToGo.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      
        <div className='flex flex-col flex-1'>
            <label className="text-[#165064] text-[16px] font-semibold">
              Extra Notes
            </label>
            <textarea
              type="text"
              className="p-2 outline-none rounded-md min-h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2 "
            />
          </div>
      </div>
      <button className="bg-[#11A4BC] mt-[20px]  text-white rounded-md hover:opacity-[0.9] trani   self-start px-7 w-fit py-3  cursor-pointer sm:mx-auto ">
        Send an Inquiry
      </button>
    </form>
  );
};

export default Form;
