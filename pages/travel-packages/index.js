import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import MobStartScreen from "../../components/MobStartScreen";
import Cover from "../../components/Tours&Packages/Cover";
import Main from "../../components/Tours&Packages/Main";
import Head from "next/head";
export default function DayTour() {
  return (
    <Layout>
        <Head>
        <title>Tours & Packages</title>
      </Head>
      <Hero
        Title={"Travel packages"}
        SubTitle={"YOU CAN CHOOSE YOUR FAVORITE STYLE OF TRAVELING"}
        Img={"/offers-bg.png"}
      />

      <div className="w-[90%]  mx-auto  sm:w-full ">
       <MobStartScreen title={"Travel packages"} subtitle={"YOU CAN CHOOSE YOUR FAVORITE STYLE OF TRAVELING"} img={"/Camel-Ride.png"}/>
        <Main/>
      </div>
    
    
    </Layout>
  );
}
