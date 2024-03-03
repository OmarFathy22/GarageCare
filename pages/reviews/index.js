import Hero from "../../components/Hero";
import { Testimonials } from "../../components/Tours&Packages/data";
import Layout from "../../components/Layout";
import Head from "next/head";
import AwardsParteners from "../../components/NileCruise/Awards&Parteners";
import HeadingTitles from "../../components/HeadingTitles";
import { FaQuoteLeft } from "react-icons/fa";
import MobStartScreen from "../../components/MobStartScreen";


export default function TravelStyle() {
  return (
    <Layout>
        <Head>
        <title>Reviews</title>
      </Head>
      <Hero
        Title={"Reviews"}
        SubTitle={"SEE WHAT OUR CUSTOMERS SAY ABOUT US"}
        Img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}
      />
         <MobStartScreen title={"Reviews"} subtitle={"See what our customers say about us"} img={"https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
       <div className="w-[90%] mx-auto mb-[100px]">

        <div className="mt-[40px]">
          <AwardsParteners/>
        </div>
        <HeadingTitles
          title={"Reviews"}
          subtitle={"See what our customers say about us"}
        />
         <div className="flex flex-col gap-[100px] max-900:gap-[30px] max-900:mt-[30px]">
          {
            Testimonials.map((item , i) => {
              return(
                <div key={i} className={`flex max-900:flex-col ${i % 2 == 1 && "flex-row-reverse"} justify-between max-900:gap-3 gap-10`}>
                  <div className="flex-1  min-1200:h-[400px] h-[450px] ">
                    <img src={item.img} alt="img" className="w-full h-full object-cover " />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-[30px] font-bold ">{item.CompanyTitle}</h1>
                    <p className="text-[16px] mb-[20px] max-900:mb-[12px]">{item.CompanySpecialization}</p>

                    <p>{item.description}</p>
                    <p><FaQuoteLeft className="mt-[20px] mb-[10px]"/></p>
                    <p>{item.Qoute}</p>

                    <h1 className="mt-[20px]">{item?.Name}</h1>
                    <p className="text-[12px]">{item?.Award}</p>
                  </div>
                </div>
              )
            })
          }
         </div>

       </div>
    </Layout>
  );
}
