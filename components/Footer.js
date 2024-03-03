import Image from "next/image";
import Link from "next/link";
import Img from "./Img";
import { footerIcons } from "./FooterMob";

const Footer = () => {
  return (
    <div className="flex flex-col  bg-[#FCFAFB] relative flex-1  pt-[50px] max-900:hidden">
      <Img src="/footer.png" alt="hero" className="w-full h-full  absolute bottom-0 " />

      <div className="flex items-center w-full mx-auto  pt-[50px]  z-50 min-h-[500px]  ">
      <div className="flex-1 min-h-[300px]  flex justify-center">
      <Img
          src="/logo-white.png"
          alt="logo-white"
          className="w-[200px] object-contain "
        />
      </div>

        <div className="flex flex-col  flex-1 min-h-[300px] gap-[10px]  text-[20px] justify-center items-center text-white font-medium  mx-auto ">
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
        </div>

        <div className="z-50  ml-auto items-center justify-center flex-1 min-h-[300px]  flex flex-col">
          <span className="text-white text-[20px] font-bold">contact us via</span>
          <span className="text-white text-[20px] font-[300]">
            info@travelishtours.com <br />
            phone +20 1002921071
          </span>
          <span className="text-white text-[20px] mt-[21px] max-1200:text-[15px] text-center font-bold mx-[20px]">
            Follow us on social media platforms
          </span>
          <ul className="flex justify-center items-center flex-wrap gap-4 mt-4 ">
        {footerIcons.map((icon, i) => (
          <li
            key={i}
            className="flex justify-center items-center text-[30px] text-white"
          >
            {icon.icon}
          </li>
        ))}
      </ul>
        </div>
      </div>
      <div className="flex"></div>
      <nav className="z-50 mx-auto my-[10px]">
        <ul className="flex text-white font-[300] max-1200:text-[12px] text-[16px]">
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
      </nav>
    </div>
  );
};

export default Footer;