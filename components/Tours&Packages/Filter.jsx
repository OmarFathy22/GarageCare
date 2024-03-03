import { useState } from "react";
import { Destination, Travel_Style } from "./data.js";

const Filter = () => {
  const [destination, setDestination] = useState("Alexandria");
  const [travelStyle, setTravelStyle] = useState("accessible tour");
  return (
    <div className=" w-full  flex justify-center sm:hidden">
    <div className=" h-fit p-10 bg-gray-200 w-[80%] rounded-3xl">
      <h1 className="text-[#165064] text-[25px]">Filter</h1>
    <div className="pl-3 flex flex-col gap-6">
        <div>
          <h1 className="text-[#11A4BC] text-[20px]">Destination</h1>
          <ul>
            {Destination.map((city) => (
              <li className="flex items-center gap-2 text-[17px] text-[#165064]" key={city}>
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
          <h1 className="text-[#11A4BC] text-[20px]">Travel Style</h1>
          <ul className="">
            {Travel_Style.map((style) => (
              <li className="flex items-center gap-2 text-[17px] text-[#165064]" key={style}>
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
        </div>
    </div>
    </div>
  </div>
  );
}

export default Filter;
