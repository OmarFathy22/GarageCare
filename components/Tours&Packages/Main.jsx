import { useState } from "react";
import Cards from "./Cards";
import FilterByPrice from "./FilterByPrice";
import FilterByReviews from './FilterByReviews'
import FiterByTravleStyle from './FilterByTravelStyle'
import FilterByDestination from './FilterByDestination'
import FilterByHotDeals from './FilterByHotDeals'

const Main = () => {
  
  return (
    <div className="flex w-full  flex-row-reverse justify-center  sm:mt-2 ">    
        <Cards />
      <div className="w-[35%]  flex flex-col gap-[30px] min-1200:pt-[50px] max-1200:hidden ">
        <FilterByPrice/>
        <FilterByReviews/>
        <FilterByHotDeals/>
        {/* <FilterByDestination/> */}
        {/* <FiterByTravleStyle/> */}
        <div className="flex items-center justify-between w-[80%] mx-auto ">
                <button className="underline text-blue-400 hover:opacity-[0.9] text-[18px]">
                  clear
                </button>
                <button className="text-white bg-blue-500 hover:opacity-[0.9] p-3 px-5 rounded-full">
                  Apply
                </button>
              </div>
      </div>
    </div>
  );
};

export default Main;
