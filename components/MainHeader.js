import Link from "next/link";
import { usePathname } from "next/navigation";
import {HiMenu} from 'react-icons/hi'
import { useState } from "react";
import DRAWER from "./SideBar";
import Img from "./Img";
const MainHeader = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[1];
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full h-[100px]   bg-[#165064] flex  z-100   ">
       <DRAWER isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <div className="flex  w-full px-[30px]   pr-[60px] justify-between items-center sm:pr-[20px] sm:pl-0 ">
        <Link href={"/"} className="sm:hidden">
          <Img src="/logo-white.png" className="h-[80px] w-[120px] " />
        </Link>
        <Link href={"/"} className=" min-600:hidden">
          <Img src="/logo-white.png" className="h-[80px] w-[80px] min-600:hidden  object-contain sm:block " />
        </Link>
         <h1 onClick={toggleDrawer} className="text-white cursor-pointer bg-[--primary] text-[20px] p-1 rounded-full font-bold hidden shadow-md max-1300:block"><HiMenu/></h1>
        <nav className="flex  ml-auto items-center max-1300:hidden">
          <ul className=" flex text-[#fff] font-medium text-[16px] items-center max-1300:hidden">
            <li
              className={`${
                path == '' ? "bg-[#11A4BC]" : " bg-transparent"
              } py-[10px] px-[14px] rounded-[10px]`}
            >
              <Link href="/" className="text-[16px]">
                Home
              </Link>
            </li>
            <li
              className={`${
                path == 'day-tours' ? "bg-[#11A4BC]" : " bg-transparent"
              } py-[10px] px-[14px] rounded-[10px]`}
            >
              <Link href="/day-tours" className="text-[16px]">
                Day Tours
              </Link>
            </li>
            <li
              className={`${
                path == 'nile-cruise' ? "bg-[#11A4BC]" : " bg-transparent"
              } py-[10px] px-[14px] rounded-[10px]`}
            >
              <Link href="/nile-cruise" className="text-[16px]">
              Nile Cruise 
              </Link>
            </li>
            <li
              className={`${
                path == 'shore-excurssion' ? "bg-[#11A4BC]" : " bg-transparent"
              } py-[10px] px-[14px] rounded-[10px]`}
            >
              <Link href="/shore-excurssion" className="text-[16px]">
              Shore excurssion	
              </Link>
            </li>
            <li>
              <Link href="/travel-packages" className="text-[16px]">
                <span
                  className={`${
                    path == "travel-packages"
                      ? "bg-[#11A4BC]"
                      : " bg-transparent"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Travel Packages
                </span>
              </Link>
            </li>
            {/* <li>
              <Link href="/offers">
                <span
                  className={`${
                    path == "offers" ? "bg-[#11A4BC]" : " bg-transparent"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Offers
                </span>
              </Link>
            </li> */}
            <li>
              <Link href="/travel-style" className="text-[16px]">
                <span
                  className={`${
                    path == "travel-style"
                      ? "bg-[#11A4BC]"
                      : " bg-transparent"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Travel Style
                </span>
              </Link>
            </li>
            <li>
              <Link href="/tailor-made" className="text-[16px]">
                <span
                  className={`${
                    path == "tailor-made" ? "bg-[#11A4BC]" : " bg-transparent"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Tailor made
                </span>
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-[16px]">
                <span
                  className={`${
                    path == "reviews" ? "bg-[#11A4BC]" : " bg-transparent"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Reviews
                </span>
              </Link>
            </li>
            {/* <li>
              <Link href="/airport-transfer">
                <span
                  className={`${
                    path == "airport-transfer"
                      ? "bg-[#11A4BC]"
                      : "bg-[#165064]"
                  } py-[12px] px-[13px] rounded-[10px] z-40`}
                >
                  Airport Transfer
                </span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainHeader;
