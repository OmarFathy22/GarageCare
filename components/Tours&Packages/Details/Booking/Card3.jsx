import Link from "next/link";
import React from "react";

const Card3 = () => {
  return (
    <div className="w-[260px] text-[--secondary] sm:w-full">
      <h1 className="text-[23px] font-bold text-[--primary] mt-2 uppercase">
        Requests (Optional)
      </h1>
      <p className="mb-3 text-[12px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, magnam!
        Aliquam nobis culpa fuga placeat? Odit sequi repellat iure minus{" "}
      </p>
      <label className="">Tell us</label>
      <textarea
        rows="3"
        className="w-full bg-gray-300 p-2 rounded-xl text-[--secondary] outline-none resize-none mt-2"
      ></textarea>
      <Link href={"/booking"}>
        <button className="bg-[#11A4BC] text-white rounded-full p-2 px-3 w-full py-2 mt-10 cursor-pointer">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Card3;
