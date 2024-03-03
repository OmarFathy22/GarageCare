import { useState } from "react";
import Drawer from "react-modern-drawer";
import FilterByPrice from "../components/Tours&Packages/FilterByPrice";
import FilterByReviews from "../components/Tours&Packages/FilterByReviews";
import FilterByDestination from "../components/Tours&Packages/FilterByDestination";
import FiterByTravleStyle from "../components/Tours&Packages/FilterByTravelStyle";
import FilterByHotDeals from "../components/Tours&Packages/FilterByHotDeals";
import { IoMdClose } from "react-icons/io";


const Modal = ({ isOpen, toggleDrawer }) => {


  return (
    <>
    
      <Drawer  open={isOpen} onClose={toggleDrawer} direction="bottom"
        className="!h-[100%] filterScrollBar overflow-auto px-[5%] py-[70px] relative"
      >

        <div className="z-[100]    flex flex-col gap-[20px] justify-between items-center">
         <div className="absolute left-0 top-5 flex  items-center  px-[3%] w-full justify-between">
          <div>
            <IoMdClose onClick={toggleDrawer} className="text-[30px]  font-bold "/>
          </div>
          <div className="flex items-center justify-between gap-5 ">
                <button className="underline text-blue-400 text-[18px]">
                  clear
                </button>
                <button className="text-white bg-blue-500 p-3 px-5 rounded-full">
                  Apply
                </button>
              </div>
         </div>
        <div className="w-full mt-10 flex flex-col gap-5">
          <FilterByPrice/>
          <FilterByReviews/>
          <FilterByDestination/>
          <FiterByTravleStyle/>
          <FilterByHotDeals/>
        </div>
      
        </div>
      
      {/* <div className="flex  justify-between items-center">
              <h1 className="text-[--secondary] text-[20px] font-bold">Search filters</h1>
              <div className="flex gap-3">
                <h1 className="underline text-[--secondary]">Select All</h1>
                <h1 className="underline text-[--secondary]">Reset</h1>
              </div>
            </div>
            <div className="pl-3 flex flex-col gap-6">
              <div>
                <h1 className="text-[#11A4BC] text-[20px] font-bold mt-4 mb-2">Destination</h1>
                <ul className="flex flex-col gap-3">
                  {Destination.map((city) => (
                    <li
                      className="flex items-center font-bold gap-3 text-[15px] text-[#165064]"
                      key={city}
                    >
                      <input
                        id="city"
                        type="radio"
                        name="list-radio"
                        checked={destination === city}
                        onChange={() => {
                          setDestination(city);
                        }}
                      />
          
                      <label
                        onClick={() => {
                          setDestination(city);
                        }}
                        className="uppercase"
                      >
                        {city}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
              <h1 className="text-[#11A4BC] text-[20px] font-bold mt-0 mb-2">Travel Style</h1>
                <ul className="flex flex-col gap-3">
                  {Travel_Style.map((style) => (
                    <li
                    className="flex items-center font-bold gap-3 text-[15px] text-[#165064]"
                    key={style}
                    >
                      <input
                        id="travel-style"
                        type="radio"
                        name="list"
                        checked={travelStyle === style}
                        onChange={() => {
                          setTravelStyle(style);
                        }}
                      />
          
                      <label
                        onClick={() => {
                          setTravelStyle(style);
                        }}
                        className="uppercase"
                      >
                        {style}
                      </label>
                    </li>
                  ))}
                </ul>
                <button onClick={toggleDrawer} className='mt-5 ml-2 rounded-lg  bg-[--primary] text-white w-[90%] py-2 min-600:hidden'>Apply filter</button>

              </div>
            </div> */}
      </Drawer>
    </>
  );
};

export default Modal;
