import { useState } from "react";
import { Destination, Travel_Style } from "./data.js";
import { Collapse } from "react-collapse";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  const [destination, setDestination] = useState("Alexandria");
  const [travelStyle, setTravelStyle] = useState("accessible tour");
  const [isOpened, setIsOpened] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const handleChangeMin = (eo) => {
     setMinPrice(eo.target.value);
  };
  const handleChangeMax = (eo) => {
    if(eo.target.value === minPrice){return}
    setMaxPrice(eo.target.value);
  };
  
  return (
    <div className="w-full    flex justify-center ">
      <div className=" h-fit    bg-gray-100 w-[80%] sm:w-full rounded-3xl">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-[#165064] text-[20px] ">Price</h1>
          <h1
            className={` transition-all  duration-500 ${
              isOpened && "rotate-180"
            }`}
            onClick={() => setIsOpened(!isOpened)}
          >
            <IoIosArrowDown className="rotate-180" />
          </h1>
        </div>

        <div className="">
          <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
            <div className="px-5 pb-5">
              <div className="flex justify-between  ">
                <div className="w-[40%]  flex flex-col items-center">
                  <div className="px-2">
                    <input
                      width={"80%"}
                      value={minPrice}
                      onChange={handleChangeMin}
                      type="range"
                      id="vol"
                      name="vol"
                      min="0"
                      max="150"
                    />
                  </div>

                  <div className="w-full p-1 px-3 my-4 mb-8 flex flex-col gap-1 border-[1px] border-gray-300 rounded-md bg-white">
                    <h1>min Price</h1>
                    <p>€{minPrice}</p>
                  </div>
                </div>
                <div className="w-[40%]  flex flex-col items-center">
                  <div>
                    <input
                      width={"100%"}
                      value={maxPrice}
                      onChange={handleChangeMax}
                      type="range"
                      id="vol"
                      name="vol"
                      min="0"
                      max="150"
                    />
                  </div>

                  <div className="w-full p-1 px-3 my-4 mb-8 flex flex-col gap-1 border-[1px] border-gray-300 rounded-md bg-white">
                    <h1>max Price</h1>
                    <p>€{maxPrice}</p>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
            
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Filter;
