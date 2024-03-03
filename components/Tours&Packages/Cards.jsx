import React from "react";
import TourCard from "../TourCardNewHorizental";
import TourCardMob from "../TourCardNew";
import { AiFillFire } from "react-icons/ai";
import { ImFire } from "react-icons/im";
import { BiFilterAlt } from "react-icons/bi";
import FilterModal from "../FilterModal";
import { useState } from "react";

import Link from "next/link";
const Cards = () => {
const hotelData = [
  { name: "Oil Change", image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Tire Rotation and Alignment", image: "https://images.pexels.com/photos/4022545/pexels-photo-4022545.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Brake Inspection and Service", image: "https://images.pexels.com/photos/6870320/pexels-photo-6870320.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Air Filter Replacement", image: "https://images.pexels.com/photos/250307/pexels-photo-250307.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Fluid Checks and Top-Ups", image: "https://images.pexels.com/photos/6872148/pexels-photo-6872148.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Battery Inspection and Replacement", image: "https://images.pexels.com/photos/5835363/pexels-photo-5835363.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex-1 max-900:w-full  ">
      <FilterModal isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <div className="flex justify-between items-center m-4 max-900:mx-5 max-900:mt-7 ">
        <h1 className="text-[#165064] max-1200:hidden">Our Products</h1>
        <h1
          className="text-[#165064] cursor-pointer font-bold flex items-center gap-[2px] underline min-1200:hidden"
          onClick={toggleDrawer}
        >
          <BiFilterAlt />
          Filter
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-[#ff0048]">
            <AiFillFire />
          </h1>
          <h1 className="text-[#ff0048]">show offers</h1>
          <div>
            <label class="relative inline-flex items-center cursor-pointer  translate-y-[3px]">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-[37px] h-5 bg-gray-200 rounded-full peer dark:bg-[#165064] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#ff0048]"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex  max-900:w-full flex-wrap justify-center gap-[30px] mb-[90px]  max-900:flex max-900:flex-wrap max-900:gap-6 max-900:px-[0px] max-900:justify-center">
        {hotelData?.map((item, index) => (
          <div key={index} className="max-900:w-full max-900:px-[5%] w-full  ">
            <div className="max-900:hidden">
              <TourCard item={item}  />
            </div>
            <div className="min-900:hidden">
              <TourCardMob item={item}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
