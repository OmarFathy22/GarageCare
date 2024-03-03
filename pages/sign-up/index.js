import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import TailorMadeComp from "../../components/TailorMade/MainNew";
import Head from "next/head";
import MobStartScreen from "../../components/MobStartScreen";
import Link from "next/link";
export default function TailorMade() {
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <Hero
        Title={"Sign up"}
        SubTitle={"START YOUR ADVENTURE TODAY"}
        Img={
          "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
      <MobStartScreen
        title={"Sign up"}
        subtitle={" START YOUR ADVENTURE TODAY"}
        img={
          "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />

      <form className="w-[90%] mx-auto  flex flex-col mt-[50px] items-center">
        <div className="flex flex-col w-[50%] max-1200:w-[70%] sm:!w-[90%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Name
          </label>
          <input
            type="text"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2"
          />
        </div>
        <div className="flex flex-col w-[50%] max-1200:w-[70%] sm:!w-[90%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Whatsapp Number
          </label>
          <input
            type="number"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2"
          />
        </div>
        <div className="flex flex-col w-[50%] max-1200:w-[70%] sm:!w-[90%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Email
          </label>
          <input
            type="email"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2"
          />
        </div>
        <div className="flex flex-col w-[50%] max-1200:w-[70%] sm:!w-[90%] max-1300:w-[48%] max-900:!w-full">
          <label className="text-[#165064] text-[16px] font-semibold">
            Password
          </label>
          <input
            type="password"
            className="p-2 outline-none rounded-md h-[60px] bg-gray-100 border-[1px] focus:border-[#11A4BC] mb-2"
          />
        </div>
        <button className="bg-[#11A4BC] mt-[20px] mx-auto  text-white rounded-md hover:opacity-[0.9] trani   self-start px-7 w-fit py-3  cursor-pointer sm:mx-auto ">
          sign up
        </button>

        <h1 className="mt-3">
          Already have an Email? <Link href={"/sign-in"} className="underline text-[--secondary] ">Sign in</Link>
        </h1>
      </form>
    </Layout>
  );
}
