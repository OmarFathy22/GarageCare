import React from "react";
import Layout from "../../../Layout";
import Hero from "../../../Hero";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { useState } from "react";
import Modal from "../../../Modal";
const Main = () => {
  const [Open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Layout>
      <Hero
        Title={"Airport Transfer"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={"/offers-bg.png"}
      />
      <Modal
        Open={Open}
        setOpen={setOpen}
        title={"Thank You"}
        subtitle={"for booking with us"}
        button={"done"}
      />

      <div className="mx-auto w-[80%] flex flex-col items-center sm:w-[90%] sm:block ">
        <div className="flex justify-between w-full items-center my-[30px] mb-[50px] sm:hidden">
          <h1 className="text-[20px] font-bold text-[--primary] mb-2">
            continue booking for Day tour to Alexandria sites
          </h1>
          <button
            onClick={handleOpen}
            className="bg-[#11A4BC] text-white rounded-lg p-2 px-5 w-fit py-4 mt-3 cursor-pointer flex items-center gap-2"
          >
            <h1>trip final price</h1>
            <h1 className="font-bold text-[25px]">190$</h1>
          </button>
        </div>
        <div>
          <div className="flex gap-1  w-full  text-[20px] font-[400] sm:mt-5 min-600:hidden ">
            <h1 className="text-[--secondary] sm:text-[--primary] sm:text-[15px] sm:font-bold">
              Day tours {">"}
            </h1>
            <h1 className="text-[--primary] sm:text-[15px] sm:font-bold">
              Alexandria{" "}
            </h1>
          </div>
          <h1 className="text-[20px] text-[--secondary]  min-600:hidden">
            Day tour to Alexandria sites
          </h1>
          <h1 className="text-center text-[--primary] font-bold min-600:hidden">
            step 2 of 2
          </h1>
        </div>

        <form className="flex gap-7 sm:flex-col">
          {Array(4)
            .fill()
            .map((_, i) => (
              <Form1 key={i} index={i + 1} />
            ))}
        </form>

        <div className="flex gap-1 my-[50px] ">
          {Array(4)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className={`w-[100px] h-[6px] rounded-full ${
                  i === 0 ? "bg-[--primary]" : "bg-gray-400"
                }`}
              />
            ))}
        </div>
        <Form2 handleOpen={handleOpen} />

      </div>
    </Layout>
  );
};

export default Main;
