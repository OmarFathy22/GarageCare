import React from "react";
import Layout from "../../../components/Layout";
import Hero from "../../../components/Hero";
import { useState } from "react";
import TourCard from "../../../components/TourCardNew";

import AwardsParteners from "../../../components/NileCruise/Awards&Parteners";
import TourDetails from "../../../components/NileCruise/TourDetails";
import MobSlider from "../../../components/MobSlider";

import { FaStar } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const settings2 = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "-35px",
  slidesToShow: 2,
  speed: 500,
  arrows: false,
};

const Images = ["/Camel-Ride.png", "/shore.png", "/thumb.png", "/shore.png"];
const features = [
  "Trip Discrption",
  "Inclusions",
  "Exclusion",
  "Payment",
  "child policy",
  "Group quote request",
  "booking confirmation & vouchers",
];
const hotelData = [
  { name: "Ocean Breeze Resort", image: "/hotel1.jpg" },
  { name: "Mountain Vista Inn", image: "/hotel2.jpg" },
  { name: "Sunset Bay Hotel", image: "/hotel3.jpg" },
  { name: "Riverfront Lodge", image: "/hotel4.jpg" },
  // { name: "Starlight Grand Hotel", image: "/hotel5.jpg" },
  // { name: "Golden Sands Resort", image: "/hotel6.jpg" },
];

const Id = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const handleAdults = (PlusOrMinus) => {
    if (!PlusOrMinus) {
      if (adults === 0) {
        return;
      } else {
        setAdults(adults - 1);
      }
    } else {
      if (adults === 9) {
        return;
      } else {
        setAdults(adults + 1);
      }
    }
  };
  const handleChild = (PlusOrMinus) => {
    if (!PlusOrMinus) {
      if (child === 0) {
        return;
      } else {
        setChild(child - 1);
      }
    } else {
      if (child === 9) {
        return;
      } else {
        setChild(child + 1);
      }
    }
  };
  const handleOpen = (params) => {
    setIsOpen(true);
  }
  const handleOnClose = (params) => {
    setIsOpen(false);
  }
  const CheckOut = (params) => {
    return (
      <div className="w-full flex justify-center items-center  h-[90vh]">
        <button onClick={handleOnClose} className="text-[30px] absolute top-3 left-3">
          <IoMdClose />
        </button>
        <div className=" w-[90%] mx-auto   sm:w-full sm:px-[5%]">
          <div className="bg-white border-[1px] border-gray-300  p-10  rounded-2xl">
            {/* {header} */}
            <div className="flex justify-between items-center">
              <div>
                <div>
                  <span className=" opacity-0">From: </span>
                  <span className=" line-through text-gray-400 text-[20px]">
                    €1000
                  </span>
                </div>
                <div>
                  <span>From: </span>
                  <span className="text-[20px] font-bold">€900</span>
                </div>
              </div>
              <div>
                <span>
                  <FaStar className="text-[orange] inline -translate-y-[1px] mr-1 " />
                </span>
                <span className="font-bold mr-1">5</span>
                <span className="text-gray-500"> (Reviews)</span>
              </div>
            </div>
            {/* {center} */}
            <div className="bg-white border-[1px] my-5 border-gray-300    rounded-2xl">
              <div className="flex justify-between items-center  p-4 border-b-[1px]">
                <div className="">
                  <p className="text-[15px]">Date</p>
                  <p className="text-[15px] text-gray-500">28/2/2024</p>
                </div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <div className="flex justify-between items-center  p-4 border-b-[1px]">
                <div className="">
                  <p className="text-[15px]">Adults</p>
                  <p className="text-[15px] text-gray-500">Over 18+</p>
                </div>
                <div className="flex items-center justify-between w-[130px] ">
                  <div
                    onClick={() => {
                      handleAdults();
                    }}
                  >
                    <CiCircleMinus className="text-[#555] text-[40px] inline -translate-y-[1px] mr-3 cursor-pointer " />
                  </div>
                  <div className="font-bold mr-1 ">{adults}</div>
                  <div
                    onClick={() => {
                      handleAdults(1);
                    }}
                  >
                    <CiCirclePlus className="cursor-pointer text-[#555] text-[40px] inline -translate-y-[1px] ml-3 " />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  p-4 ">
                <div className="">
                  <p className="text-[15px]">children</p>
                  <p className="text-[15px] text-gray-500">Under 12</p>
                </div>
                <div>
                  <div className="flex items-center justify-between w-[130px] ">
                    <div
                      onClick={() => {
                        handleChild(0);
                      }}
                    >
                      <CiCircleMinus className="text-[#555] text-[40px] inline -translate-y-[1px] mr-3  cursor-pointer " />
                    </div>
                    <div className="font-bold mr-1 ">{child}</div>
                    <div
                      onClick={() => {
                        handleChild(1);
                      }}
                    >
                      <CiCirclePlus className="cursor-pointer text-[#555] text-[40px] inline -translate-y-[1px] ml-3 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {footer} */}
            <div className="flex justify-between">
              <h1 className="font-bold">Total</h1>
              <h1 className="font-bold">€900</h1>
            </div>
            <button className="bg-blue-500 text-white text-center py-3 font-bold w-full rounded-full mt-5">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
        <Hero
        Title={"Nile Cruise"}
        SubTitle={"YOU CAN CHOOSE YOUR FAVORITE STYLE OF TRAVELING"}
        Img={"/offers-bg.png"}
      />

      <div className=" w-[85%]  mx-auto  sm:w-full ">
        {isOpen && (
          <div className="h-[100vh] fixed z-[10000000000] top-0 right-0 left-0 bg-white">
            <CheckOut />
          </div>
        )}
        <div className="h-[10vh] min-1200:hidden w-full flex justify-between items-center px-[20px]  bg-white border-t-[1px] -shadow-sm fixed z-[10000000000] bottom-0 right-0 left-0">
          <div>
            <div>
              <span className="text-gray-500">From: </span>
              <span className="text-[17px] font-bold">€0,00</span>
            </div>
            <div>
              <span>
                <FaStar className="text-[orange] inline -translate-y-[1px] mr-1 " />
              </span>
              <span className="font-bold mr-1">5</span>
              <span className="text-gray-500"> (Reviews)</span>
            </div>
          </div>
          <button onClick={handleOpen} className="text-white bg-blue-500 p-3 px-5 rounded-full">
            Check
          </button>
        </div>
        <AwardsParteners />
        <div className="mt-[100px] sm:mt-[30px]">
          <TourDetails />
          <div className="max-1200:hidden min-1200:float-right top-0 min-1200:sticky py-[50px]    w-[30%]     sm:w-full sm:px-[5%]">
            <div className="bg-white border-[1px] border-gray-300  p-10  rounded-2xl">
              {/* {header} */}
              <div className="flex justify-between items-center">
                <div>
                  <div>
                    <span className=" opacity-0">From: </span>
                    <span className=" line-through text-gray-400 text-[20px]">
                      €1000
                    </span>
                  </div>
                  <div>
                    <span>From: </span>
                    <span className="text-[20px] font-bold">€900</span>
                  </div>
                </div>
                <div>
                  <span>
                    <FaStar className="text-[orange] inline -translate-y-[1px] mr-1 " />
                  </span>
                  <span className="font-bold mr-1">5</span>
                  <span className="text-gray-500"> (Reviews)</span>
                </div>
              </div>
              {/* {center} */}
              <div className="bg-white border-[1px] my-5 border-gray-300    rounded-2xl">
                <div className="flex justify-between items-center  p-4 border-b-[1px]">
                  <div className="">
                    <p className="text-[15px]">Date</p>
                    <p className="text-[15px] text-gray-500">28/2/2024</p>
                  </div>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="flex justify-between items-center  p-4 border-b-[1px]">
                  <div className="">
                    <p className="text-[15px]">Adults</p>
                    <p className="text-[15px] text-gray-500">Over 18+</p>
                  </div>
                  <div className="flex items-center justify-between w-[130px] ">
                    <div
                      onClick={() => {
                        handleAdults();
                      }}
                    >
                      <CiCircleMinus className="text-[#555] text-[40px] inline -translate-y-[1px] mr-3 cursor-pointer " />
                    </div>
                    <div className="font-bold mr-1 ">{adults}</div>
                    <div
                      onClick={() => {
                        handleAdults(1);
                      }}
                    >
                      <CiCirclePlus className="cursor-pointer text-[#555] text-[40px] inline -translate-y-[1px] ml-3 " />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center  p-4 ">
                  <div className="">
                    <p className="text-[15px]">children</p>
                    <p className="text-[15px] text-gray-500">Under 12</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between w-[130px] ">
                      <div
                        onClick={() => {
                          handleChild(0);
                        }}
                      >
                        <CiCircleMinus className="text-[#555] text-[40px] inline -translate-y-[1px] mr-3  cursor-pointer " />
                      </div>
                      <div className="font-bold mr-1 ">{child}</div>
                      <div
                        onClick={() => {
                          handleChild(1);
                        }}
                      >
                        <CiCirclePlus className="cursor-pointer text-[#555] text-[40px] inline -translate-y-[1px] ml-3 " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {footer} */}
              <div className="flex justify-between">
                <h1 className="font-bold">Total</h1>
                <h1 className="font-bold">€900</h1>
              </div>
              <button className="bg-blue-500 text-white text-center py-3 font-bold w-full rounded-full mt-5">
                Book Now
              </button>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>

        <div className=" mb-[100px] mt-[50px] max-1200:hidden">
          <h1 className="font-bold text-[30px] mb-5">Explore other options</h1>
          <ul className="flex justify-center gap-5 ">
            {hotelData.map((item, i) => {
              return (
                <div key={i} className="w-full">
                  <TourCard item={item} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full my-10 min-1200:hidden   ">
        <h1 className="font-bold text-[30px]  text-center">
          Explore other options
        </h1>
        <MobSlider ider settings={settings}>
          {hotelData?.map((item, index) => (
            <div key={index} className="sm:w-full mb-5 px-[5%] ">
              <TourCard item={item} />
            </div>
          ))}
        </MobSlider>
      </div>
    </Layout>
  );
};

export default Id;
