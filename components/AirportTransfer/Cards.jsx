import React from "react";
import { Destination } from "../../components/Tours&Packages/data";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import MobSlider from "../MobSlider";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 2,
  speed: 500,
  arrows: false,
  
};
const Card = ({ city }) => {
  return (
    <div className="bg-[--primary] text-white flex gap-3 items-center justify-center h-[100px]  w-[200px] px-4 rounded-xl sm:w-[160px] sm:h-[70px]">
      <h1 className="text-[50px]">
        <PiAirplaneTakeoffFill />
      </h1>
      <div className="text-[13px] sm:text-[10px]">
        <h1>{city}</h1>
        <h1 className="text-[20px] sm:text-[17px]">Airport</h1>
      </div>
    </div>
  );
};
const Cards = () => {
  return (
    <div>
      <ul className="flex w-[70%] justify-center flex-wrap mx-auto gap-3 sm:w-full sm:mt-6 sm:hidden">
        {Destination.map((item, index) => {
          return (
            <li key={index} className="flex justify-center items-center gap-3">
              <Card city={item} />
            </li>
          );
        })}
      </ul>

      <div className="min-600:hidden  mx-auto ">
        <MobSlider settings={settings}>
          {Destination.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-center items-center gap-3"
              >
                <Card city={item} />
              </li>
            );
          })}
        </MobSlider>
      </div>
    </div>
  );
};

export default Cards;
