import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import TailorMadeComp from "../../components/TailorMade/MainNew";
import Head from "next/head";
import MobStartScreen from "../../components/MobStartScreen";
export default function TailorMade() {
  return (
    <Layout>
      <Head>
        <title>Confirm Service/Product</title>
      </Head>
      <Hero
        Title={"Confirm Booking"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}
      />
             <MobStartScreen title={"Confirm booking"} subtitle={" CHOOSE THE PERFECT PRODUCT THAT FITS YOUR NEEDS"} img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}/>


      <TailorMadeComp />
    </Layout>
  );
}
