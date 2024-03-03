import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Cards from "../../components/AirportTransfer/Cards";
import Article from "../../components/AirportTransfer/Article";
import Reservations from "../../components/AirportTransfer/Reservations";
import MobStartScreen from "../../components/MobStartScreen";
import Head from "next/head";

export default function AirportTransfer() {
  return (
    <Layout>
      <Head>
        <title>Airport Transfer</title>
      </Head>
      <Hero
        Title={"Airport Transfer"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={"/air-por-bg.png"}
      />
      <MobStartScreen title={"Airport Transfer"} subtitle={"start your adventure today"} img={"/shore.png"}/>
      <Cards/>
      <div className="flex w-[80%] mx-auto gap-10 mt-[70px] mb-[50px] sm:w-[90%] sm:flex-col-reverse">
        <Article/>
        <Reservations/>
      </div>
    
    </Layout>
  );
}
