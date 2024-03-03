import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import FirstSection from "../../components/Offers/FirstSection";
import SecondSection from "../../components/Offers/SecondSection";
import Head from "next/head";
export default function Offers() {
  return (
  
      <Layout>
          <Head>
        <title>Offers</title>
      </Head>
        <Hero
          Title={"Offers"}
          SubTitle={"START YOUR ADVENTURE TODAY"}
          Img={"/offers-bg.png"}
        />
        <div className="mx-auto w-[80%] sm:w-full ">
          <FirstSection />
          <SecondSection />
        </div>
      </Layout>
  );
}
