import { useState } from "react";
import { Collapse } from "react-collapse";
import "react-range-slider-input/dist/style.css";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({index}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      onClick={() => setIsOpened(!isOpened)}
      className="w-full flex cursor-pointer justify-center "
    >
      <div className=" h-fit    bg-gray-100 border-[1px] border-gray-300  rounded-xl">
        <div className="flex justify-between items-center p-5">
        <div className="flex items-center  gap-3">
          <h1 className=" py-2 px-3 gap-1 sm:text-[12px] border-[1px] border-gray-300 rounded-md bg-white">
            Day {index + 1}
          </h1>
            <h1 className="text-[#165064] text-[20px] sm:text-[15px] ">
              Lorem ipsum dolor sit dolor sit{" "}
            </h1>
        </div>
          <h1
            className={` transition-all  duration-500 ${
              isOpened && "rotate-180"
            }`}
          >
            <IoIosArrowDown className="" />
          </h1>
        </div>

        <div className="">
          <Collapse isOpened={isOpened} theme={{ collapse: "custom-collapse" }}>
            <div className="px-5 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              sunt ipsam eaque iusto at minus vitae fugiat laborum, aperiam
              molestiae repudiandae dignissimos? Sunt deleniti hic sequi? Ullam
              eum molestias tempora?
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
