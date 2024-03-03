import Image from "next/image";
import Link from "next/link";
import Img from "./Img";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
export const footerIcons = [
  { icon: <FaFacebookF />, to: "" },
  { icon: <BsTwitter />, to: "" },
  { icon: <AiOutlineInstagram />, to: "" },
  { icon: <FaWhatsapp />, to: "" },
  { icon: <IoLogoTiktok />, to: "" },
  { icon: <FaPinterestP />, to: "" },
  { icon: <GrYoutube />, to: "" },
];
const Footer = () => {
  const { pathname } = useRouter();
  const path = pathname?.split("/")[1];
  return (
    <div
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center justify-center  min-h-[550px] Img bg-[#FCFAFB] min-900:hidden "
    >
      <div className="flex justify-between items-center gap-3  mb-[10px]  mt-[120px] px-[10px] w-full   ">
        <div className="flex  flex-col min-h-[250px] flex-1   justify-start items-center gap-6 Img ">
          <div className="">
            <Img src="/logo-white.png" alt="logo-white" className="w-[200px] " />
          </div>
          <div className="text-center">
            <h1 className="text-white text-[15px] font-bold">contact us via</h1>
            <span className="text-white text-[12px] font-[300]">
              info@travelishtours.com <br />
              phone +20 1002921071
            </span>
          </div>
        </div>
      
        <ul className="flex flex-col justify-center underline flex-1 text-center  items-center text-white  min-h-[250px] font-bold   xs:text-[8px] text-[12px]  gap-[10px]">
        <Link href="/" className="underline font-bold">
            Home
          </Link>
          <Link href="/travel-packages" className="underline font-bold">
            Travel Packages
          </Link>
          <Link href="/nile-cruise" className="underline font-bold">
            Nile Cruise
          </Link>
          <Link href="/shore-excurssion" className="underline font-bold">
            Shore Excurssion
          </Link>
          <Link href="/tailor-made" className="underline font-bold">
            Tailor made
          </Link>
          <Link href="/travel-style" className="underline font-bold">
            Travel Style
          </Link>
          <Link href="/reviews" className="underline font-bold ">
            Reviews
          </Link>
        </ul>
      </div>
      <h1 className="text-white text-[15px] font-bold text-center px-[10px]">
        Follow us on social media platforms
      </h1>

      <ul className="flex justify-center items-center flex-wrap gap-4 mt-4 max-w-[200px]">
        {footerIcons.map((icon, i) => (
          <li
            key={i}
            className="flex justify-center items-center text-[30px] text-white"
          >
            {icon.icon}
          </li>
        ))}
      </ul>

      {/* <div className="flex"></div> */}
      {/* <nav className="z-50 mx-auto my-[10px]">
        <ul className="flex text-white font-[300] text-[16px]">
          <li>
            <Link href="/" className="mr-[53px]">
              Social Media
            </Link>
          </li>
          <li>
            <Link href="/tours-and-packages" className="mr-[53px]">
              Why Us
            </Link>
          </li>
          <li>
            <Link href="/offers" className="mr-[53px]">
              TravelServices
            </Link>
          </li>
          <li>
            <Link href="/travel-style" className="mr-[53px]">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/tailor-made" className="mr-[53px]">
              ResponsibleTravel
            </Link>
          </li>
          <li>
            <Link href="/airport-transfer" className="mr-[53px]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/airport-transfer" className="mr-[53px]">
              Car Rental
            </Link>
          </li>
          <li>
            <Link href="/airport-transfer">Unlimited Wifi</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Footer;
