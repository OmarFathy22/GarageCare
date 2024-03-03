import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import ContactUs from "../../components/TailorMade/ContactUs.jsx";
import Head from "next/head";
import MobStartScreen from "../../components/MobStartScreen";
export default function TailorMade() {
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
      </Head>
      <Hero
        Title={"Contact Us"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={
          "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
      <MobStartScreen
        title={"Contact Us"}
        subtitle={" CHOOSE THE PERFECT PRODUCT THAT FITS YOUR NEEDS"}
        img={
          "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />

      <ContactUs />
    </Layout>
  );
}
