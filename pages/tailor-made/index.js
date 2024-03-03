import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import TailorMadeComp from "../../components/TailorMade/MainNew";
import Head from "next/head";
import MobStartScreen from "../../components/MobStartScreen";
export default function TailorMade() {
  return (
    <Layout>
      <Head>
        <title>Tailor made</title>
      </Head>
      <Hero
        Title={"Tailor made"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={"/tailor-made-bg.png"}
      />
      <MobStartScreen
        title={"Tailor Made"}
        subtitle={"YOU CAN CHOOSE YOUR FAVORITE STYLE OF TRAVELING"}
        img={"/Camel-Ride.png"}
      />

      <TailorMadeComp />
    </Layout>
  );
}
