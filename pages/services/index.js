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
        Title={"Services"}
        SubTitle={"YOU CAN CHOOSE YOUR PERFECT PRODUCT WHICH FITS YOUR NEEDS"}
        Img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}
      />

      <div className="w-[90%]  mx-auto  max-900:w-full ">
      <MobStartScreen title={"Services"} subtitle={" CHOOSE THE PERFECT PRODUCT THAT FITS YOUR NEEDS"} img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
        <Main/>
      </div>
    
    
    </Layout>
  );
}
