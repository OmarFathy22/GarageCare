import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Collapsible from "./ItineraryCollapsible";
import Reviews from "./Reviews";
import TourCard from "../TourCardNew";
import { useRouter } from "next/router";
import Image from "next/image";
import MobSlider from "../MobSlider";
import Img from "../Img";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};


const TourDetails = () => {
  const router = useRouter();
  const { pathname } = router;

  const Heightlits = [
    "Visit eight villages showcasing Polynesian",
    "Canoe ride, tattoos, spear throwing",
    "Spectacular Polynesian evening dinner",
    "Optional transportation from Waikiki",
  ];
  return (
    <div className="  min-1200:float-left    w-[70%]  justify-between mx-auto   min-1200:mx-auto gap-10 max-900:!w-[95%] min-1200:pr-[5%]    max-1200:w-full  sm:mt-0 sm:flex-col">
      {/* {About this tour} */}
      <div className="mb-[30px] ">
        <h1 className="font-bold text-[25px] mb-5">About this product</h1>
        <div className="flex flex-col gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            perferendis quisquam cupiditate similique quo labore, recusandae
            inventore molestias, aliquid repudiandae itaque doloremque, tenetur
            ipsam quas saepe laborum sint consequatur praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            perferendis quisquam cupiditate similique quo labore, recusandae
            inventore molestias, aliquid repudiandae itaque doloremque, tenetur
            ipsam quas saepe laborum sint consequatur praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            perferendis quisquam cupiditate
          </p>
        </div>
      </div>
      {/* { tour Heightlits} */}
      <div>
        <h1 className="font-bold text-[25px] mb-5">Highlights</h1>
        <ul className="flex flex-col gap-3">
          {Heightlits.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-1 ">
                <p className="bg-green-100 p-1  rounded-full text-green-600 text-[10px]">
                  <FaCheck />
                </p>
                <p>{item}</p>
              </div>
            );
          })}
        </ul>
      </div>
      <hr className="my-[30px]" />
      <div className="mb-[30px]">
        <h1 className="font-bold text-[25px] mb-5">Included / Excluded</h1>
        <div className="flex sm:flex-col sm:gap-3 gap-10">
          <ul>
            {Heightlits.map((item, i) => {
              return (
                <div key={i} className="flex items-center gap-1 mb-4 ">
                  <p className="bg-green-100 p-1  rounded-full text-green-600 text-[10px]">
                    <FaCheck />
                  </p>
                  <p>{item}</p>
                </div>
              );
            })}
          </ul>
          <ul>
            {Heightlits.map((item, i) => {
              return (
                <div key={i} className="flex items-center gap-1 mb-4 ">
                  <p className="bg-red-100 p-1  rounded-full text-red-600 text-[10px]">
                    <IoClose />
                  </p>
                  <p>{item}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[25px] mb-5 ">Itenrary</h1>
        <div className="flex gap-10  ">
          <ul className="w-full flex flex-col gap-3">
            {Array(3)
              .fill()
              .map((_, i) => {
                return (
                  <div key={i} className="w-full">
                    <Collapsible index={i} />
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
      {/* <hr className="my-[50px] "/> */}
      <div className="w-full my-[50px]  ">
        {pathname.includes("travel-packages") && (
          <div className="flex sm:flex-col  gap-7 ">
            <div>
              <Img
                src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png"
                alt="image"
                className="TourCard"
              />
            </div>
            <div>
              <Img
                src="https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Frame-3150-min.png"
                alt="image"
                className="TourCard"
              />
            </div>
          </div>
        )}
      </div>
      {/* <hr className="my-[50px] "/> */}

      <h1 className="font-bold text-[25px] mb-[30px]">Reviews</h1>
      <ul className="">
        {Array(3)
          .fill()
          .map((_, i) => {
            return <Reviews key={i} />;
          })}
      </ul>
      <div className=" flex flex-col gap-5">
        <h1 className="font-bold text-[20px]">Add Review</h1>
        <div>
          <input type="text" placeholder="title"  className="mb-3 w-full p-2 rounded-md shadow-md outline-none"/>
          <textarea placeholder="we would like to know your opinion about our service.." type="text" name="" id="" rows={5} className="w-full outline-none shadow-md p-2 rounded-md"/>
        </div>
        <button className="bg-[#11A4BC] mt-[10px]  text-white rounded-md hover:opacity-[0.9] trani   self-start px-7 w-fit py-3  cursor-pointer sm:mx-auto ">
        confirm
      </button>
      </div>
      {/* <div className=" w-[100vw]">
       <h1 className="font-bold text-[30px] mb-5">Explore other options</h1>
        <div className="w-full mb-5 min-600:hidden  !mx-auto ">
           <MobSlider settings={settings}>
           {hotelData?.map((item , index) => (
           <div key={index} className="sm:w-full mb-5 px-[5%] ">
             <TourCard item={item} />
           </div>
          ))}
           </MobSlider>
         </div>
       </div> */}
      {/* <div className="  clear-both  my-[100px]">
        <h1 className="font-bold text-[30px] mb-5">Explore other options</h1>
        <ul className="flex justify-center gap-5">
          {
            hotelData.map((item , i) => {
              return(
                <div key={i} className="w-full">
                  <TourCard item={item}/>
                </div>
              )
            })
          }
        </ul>
       </div> */}
    </div>
  );
};

export default TourDetails;
