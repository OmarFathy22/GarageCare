import Head from "next/head";
import Layout from "../components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import HeadingTitles from "../components/HeadingTitles";
import Cta from "../components/CtaNew";
import TestimonialCard from "../components/TestimonialCard";
import TailorMadeSection from "../components/TailorMadeSection";
import { Travel_Style } from "../components/TailorMade/data";
import BigCard from "../components/BigCardNew";
import TourCard from "../components/TourCardNew";
import Cards from "../components/TailorMade/Cards";
import MobSlider from "../components/MobSlider";
import Img from "../components/Img";
import FooterMob from "../components/FooterMob";
import Link from "next/link";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const hotelData = [
  { name: "Oil Change", image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Tire Rotation and Alignment", image: "https://images.pexels.com/photos/4022545/pexels-photo-4022545.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Brake Inspection and Service", image: "https://images.pexels.com/photos/6870320/pexels-photo-6870320.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Air Filter Replacement", image: "https://images.pexels.com/photos/250307/pexels-photo-250307.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Fluid Checks and Top-Ups", image: "https://images.pexels.com/photos/6872148/pexels-photo-6872148.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Battery Inspection and Replacement", image: "https://images.pexels.com/photos/5835363/pexels-photo-5835363.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-full  className">
        <div className="relative  flex justify-center items-center w-full   ">
          {/* <div className="absolute className top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-[50%]">
            <h1 className="text-[#728dd5bf] uppercase text-[150px] leading-[140px] text-center sm:text-[80px]">
              Explore Egypt <br/> 
            </h1>
            <h1 className="text-[#728dd5bf] text-[100px] p-0 -translate-y-5 text-center uppercase sm:text-[80px] ">Like a local</h1>
            
        </div> */}
          <div
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
            className="flex flex-col w-full    items-center justify-center h-[120vh] sm:h-[600px]  Img bg-[#FCFAFB]  "
          >
            <Image loading="lazy" src="/logo-white.png" alt="logo-white" width={2000} height={80} style={{visibility:"hidden"}} />
          </div>
        
        </div>

        {/* Start Section 2 */}
        <HeadingTitles
          title={"Why it's better to choose us"}
          subtitle={"HERE IS SOME OF WHAT SETS US APART"}
          mark={"?"}
        />

        {/* --------------- */}
        <div className="flex max-w-[1360px] px-[50px] justify-between max-1200:flex-col-reverse max-1200:gap-10 className  sm:max-w-[95%] sm:px-[20px]">
          <div className="flex flex-col min-1200:w-[60%] justify-center    sm:mt-8 sm:w-full sm:items mx-auto">
            <div className="flex items-center mb-[15px] sm:mb-1">
              <span className="px-6 py-[0.5px] bg-[--primary] text-white rounded-[15px] mr-[20px]">
                01
              </span>
              <h4 className="text-[#165064] font-medium text-[30px] sm:text-[16px]">
                BEST OFFER
              </h4>
            </div>
            <p className="text-[#B0C3C9] font-normal text-[18px] mb-[30px] sm:text-[14px] sm:mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center mb-[15px] sm:mb-1">
              <span className="px-6 py-[0.5px] bg-[--secondary] text-white rounded-[15px] mr-[20px]">
                02
              </span>
              <h4 className="text-[#165064] font-medium text-[30px] sm:text-[16px]">
                BEST OFFER
              </h4>
            </div>
            <p className="text-[#B0C3C9] font-normal text-[18px] mb-[30px] sm:text-[14px] sm:mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center mb-[15px] sm:mb-1">
              <span className="px-6 py-[0.5px] bg-[#04882ed5] text-white rounded-[15px] mr-[20px]">
                03
              </span>
              <h4 className="text-[#165064] font-medium text-[30px] sm:text-[16px]">
                BEST OFFER
              </h4>
            </div>
            <p className="text-[#B0C3C9] font-normal text-[18px] mb-[30px] sm:text-[14px] sm:mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-[30%] min-1300:min-h-[400px] max-1200:w-full sm:mt-5  max-1200:h-[300px] rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600" className="h-full w-full rounded-2xl  max-1200:h-[300px] object-cover " />
          </div>
        </div>
        {/* End Section 2 */}

        {/* Start Section 3 */}
        <HeadingTitles
          title={"Choose your destination now"}
          subtitle={" YOU CAN CHOOSE YOUR TRIP FROM DIFFERENT TRAVEL STYLES"}
        />
        {/* --------------- */}
        <div className="flex max-1200:flex-col justify-center sm:!hidden w-full gap-[40px] mb-[50px] px-[50px] max-900:flex max-900:flex-wrap max-900:justify-center max-900:mb-10 max-900:mt-6 max-900:gap-5 max-900:px-[20px]  ">
          <Link href={'/day-tours'} className="flex-1 ">
            <BigCard Image={"https://images.pexels.com/photos/4315573/pexels-photo-4315573.jpeg?auto=compress&cs=tinysrgb&w=600"} Title={"Products"} />
          </Link>
          <Link href={'/nile-cruise'} className="flex-1 ">
            <BigCard Image={"https://images.pexels.com/photos/8470886/pexels-photo-8470886.jpeg?auto=compress&cs=tinysrgb&w=600"} Title={"Services"} />
          </Link>
          <Link href={'/shore-excurssion'} className="flex-1  max-900:hidden">
            <BigCard Image={"https://images.pexels.com/photos/2965258/pexels-photo-2965258.jpeg?auto=compress&cs=tinysrgb&w=600"} Title={"Packages"} />
          </Link>
        </div>
        <div className="w-full mb-5 min-600:hidden ">
          <MobSlider settings={settings}>
          <Link href={'/day-tours'} className="px-[5%] mb-4">
            <BigCard Image={"/3.jpg"} Title={"Day Tours"} />
          </Link>
          <Link href={'/nile-cruise'} className="px-[5%] mb-4">
            <BigCard Image={"/1.jpg"} Title={"Nile Curise"} />
          </Link>
          <Link href={'/shore-excurssion'} className="px-[5%] mb-4">
            <BigCard Image={"/2.jpg"} Title={"Shore Excursion"} />
          </Link>
          </MobSlider>
        </div>
        {/* --------------- */}
        <HeadingTitles
          title={"Recommended for you"}
          subtitle={"YOU CAN CHOOSE YOUR TRIP FROM DIFFERENT TRAVEL STYLES"}
        />
        <div className="flex sm:hidden  sm:w-full flex-wrap justify-center gap-[30px] mb-[50px]  px-[50px]  sm:flex-wrap sm:gap-6 sm:px-[0px] sm:justify-center">
         {hotelData?.map((item , index) => (
          <div key={index} className="sm:w-full  w-[450px] ">
            <TourCard item={item} />
          </div>
         ))}
         
        </div>
        <div className="w-full mb-5 min-600:hidden ">
          <MobSlider settings={settings}>
          {hotelData?.map((item , index) => (
          <div key={index} className="sm:w-full mb-5 px-[5%] ">
            <TourCard item={item} />
          </div>
         ))}
          </MobSlider>
        </div>

        {/* Start Section 4 */}
        {/* <HeadingTitles title={"Tailor Made"} subtitle={"STEP BY STEP"} />
        <div className="sm:hidden">
          <TailorMadeSection />
        </div> */}
        {/* <div className="flex justify-center items-center flex-wrap gap-10 sm:mt-12 sm:gap-y-0 min-600:hidden">
          {Travel_Style.map((style, i) => (
            <div key={i}>
              <Cards card={style} />
            </div>
          ))}
        </div> */}

        {/* Start Section 3 */}
        <div className="mt-[20px]">
        <HeadingTitles
          title={"What did our customers say"}
          subtitle={"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT"}
        />
        </div>
        {/* --------------- */}
        <div className="flex justify-center mx-[5%] gap-[55px] mb-[50px]  sm:grid-cols-1 max-1200:hidden">
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="w-full mb-5 min-1200:hidden ">
          <MobSlider settings={settings}>
            <TestimonialCard />
            <TestimonialCard />
          </MobSlider>
        </div>

        {/* --------------- */}

        {/* Start Section 3 */}
        <div className="mt-[20px]">
        <HeadingTitles
          title={"Share your own moments"}
          subtitle={"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT"}
        />
        </div>
        {/* --------Insta Cards------- */}

        <div className="flex justify-center flex-wrap gap-[32px]  mb-[100px] max-1200:hidden">
          <div className="max-w-[300px]">
            <Img src="/insta.png" className="rounded-[20px] drop-shadow-lg " />
          </div>
          <div className="max-w-[300px]">
            <Img src="/insta.png" className="rounded-[20px] drop-shadow-lg " />
          </div>
          <div className="max-w-[300px]">
            <Img src="/insta.png" className="rounded-[20px] drop-shadow-lg " />
          </div>
          <div className="max-w-[300px]">
            <Img src="/insta.png" className="rounded-[20px] drop-shadow-lg " />
          </div>
          
        </div>
        <div className="w-full mb-5 min-1200:hidden  ">
          <MobSlider settings={settings}>
            {Array(4)
              .fill()
              .map((_, i) => (
                <div key={i} className="px-5 mb-4">
                  <Img
                    src="/insta.png"
                    className=" border  rounded-[20px] shadow-sm  shadow-gray-300  "
                  />
                </div>
              ))}
          </MobSlider>
        </div>
        {/* --------Insta Cards------- */}

        <div className="flex justify-center items-center">
          <Cta />
        </div>
      </div>
    </Layout>
  );
}
