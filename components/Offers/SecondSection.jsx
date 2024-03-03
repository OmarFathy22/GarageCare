import React from "react";
import TourCard from "../../components/TourCard";
import { ImFire } from "react-icons/im";
import {BiFilterAlt} from "react-icons/bi"
const SecondSection = () => {
  return (
    <div className="flex flex-col items-center my-[70px] sm:my-[20px]">
      <h1 className="self-start ml-[7%] my-3 text-[20px] font-semibold text-[#165064] sm:hidden">
        Offers for Day tours
      </h1>
      <h1 className="text-[#165064] ml-[5%] mb-3 text-start   self-start font-bold flex items-center gap-[2px]  border-b-[2px] underline min-600:hidden"><BiFilterAlt/>Filter</h1>

      <div className="flex gap-6 flex-wrap justify-center sm:gap-3 ">
        {Array(6)
          .fill()
          .map((_, i) => (
            <div key={i} className="relative">
              <div className="  absolute right-[-20px] top-2 flex w-fit self-end  items-baseline opacity-[0.9] ">
                <h1 className="text-[#ff0048] text-[40px] text-right">
                  <ImFire />
                </h1>
                <p className="bg-[#333] text-yellow-500 h-fit rounded-md p-[2px] text-[10px] translate-x-[-30px] translate-y-[-5px] ">
                  Hot Sale
                </p>
              </div>
              <TourCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SecondSection;
