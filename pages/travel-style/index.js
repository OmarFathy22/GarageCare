import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import TravelStyleComp from "../../components/TravelStyle/Main";
import Head from "next/head";
import {hotelData} from "../../components/Tours&Packages/data";
import TourCard from "../../components/TourCardNew";
import HeadingTitles from "../../components/HeadingTitles";
import BigCard from "../../components/BigCardTravelStyle";
import Link from "next/link";
import MobStartScreen from "../../components/MobStartScreen";

export default function TravelStyle() {
  return (
    <Layout>
        <Head>
        <title>Travel Style</title>
      </Head>
      <Hero
        Title={"Travel Styles"}
        SubTitle={"YOU CAN CHOOSE YOUR FAVOURITE STYLE OF TRAVELING"}
        Img={"/tarvel-style-bg.png"}
      />
      <MobStartScreen title={"Travel Style"} subtitle={"YOU CAN CHOOSE YOUR FAVORITE STYLE OF TRAVELING"} img={"/Camel-Ride.png"}/>
      <div className="w-[90%] mx-auto  ">

      <div className="mt-[40px]">
      <HeadingTitles
          title={"Recommended for you"}
          subtitle={"YOU CAN CHOOSE YOUR TRIP FROM DIFFERENT TRAVEL STYLES"}
        />
      </div>
      <div className="flex sm:mt-[20px] sm:w-full flex-wrap justify-center gap-[30px]  px-[50px] sm:flex sm:flex-wrap sm:gap-6 sm:px-[0px] sm:justify-center">
         {hotelData?.map((item , index) => (
          <div key={index} className="sm:w-full w-[400px] ">
            <TourCard item={item} />
          </div>
         ))}
        </div>

        <div className="mt-[40px] mb-[20px]">
        <HeadingTitles
          title={"Choose your destination now"}
          subtitle={" YOU CAN CHOOSE YOUR TRIP FROM DIFFERENT TRAVEL STYLES"}
        />
        </div>
        {/* --------------- */}
        <div className=" flex w-full justify-center mb-[100px] sm:mb-[30px] ">
            <Link href={'/tailor-made'} className="max-900:w-full min-900:w-[70%] ">
              <BigCard Image={"/3.jpg"} Title={"Tailor Made"} />
            </Link>
        </div>
      </div>
    </Layout>
  );
}
