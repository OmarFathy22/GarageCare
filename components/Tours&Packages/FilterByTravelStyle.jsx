import { useState } from "react";
import { Destination, Travel_Style } from "./data.js";
import { Collapse } from "react-collapse";
import "react-range-slider-input/dist/style.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";

import { FaStar } from "react-icons/fa6";

const Filter = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(150);
  const handleChangeMin = (eo) => {
    setMinPrice(eo.target.value);
  };
  const handleChangeMax = (eo) => {
    setMaxPrice(eo.target.value);
  };

  return (
    <div className="w-full    flex justify-center ">
      <div className=" h-fit  bg-gray-100 w-[80%] sm:w-full rounded-3xl">
        <div className="flex justify-between items-center p-5">
          <h1 className="text-[#165064] text-[20px] ">Travle Style</h1>
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
            <div className="px-5 pb-5 ">
              {Travel_Style.map((item, i) => {
                return (
                  <div key={i} className="mb-3 flex items-center gap-3">
                    <div>
                      <input
                        className="w-[20px] h-[20px]  translate-y-[3px]"
                        type="checkbox"
                        value={false}
                      />
                    </div>
                    <h1 className="capitalize">{item}</h1>
                  </div>
                );
              })}
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Filter;
