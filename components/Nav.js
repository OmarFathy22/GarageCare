import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import DRAWER from "./SideBar";
import { usePathname } from "next/navigation";
const Nav = () => {
  const pathname = usePathname();
  const path = pathname?.split("/")[1];
  console.log(path);
  console.log(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-[20px]
          px-[50px]
          text-lg text-gray-700
          absolute
          top-0
          right-0
          left-0
          z-50      
          sm:px-5
          
        "
    >
        <Image
          width={84}
          height={120}
          src="/logo-white.png"
          alt="Logo"
          className="max-1300:hidden"
        />

      <DRAWER isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <div className="w-full   flex justify-between items-center min-1300:hidden">
        <Link href={"/"}>
          <Image
            width={84}
            height={120}
            src="/logo-white.png"
            alt="Logo"
            className=""
          />
        </Link>
        <h1
          onClick={toggleDrawer}
          className="text-white cursor-pointer text-[30px]  p-1 rounded-full font-bold hidden max-1300:block"
        >
          <HiMenu />
        </h1>
      </div>

      <nav className="max-1300:hidden  ">
        <ul className="flex text-[white] font-bold text-[16px]">
          <li>
            <Link
              href="/"
              className="mr-[20px] bg-[--primary] py-[10px] px-[14px] rounded-[10px] text-white"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="mr-[20px]"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="mr-[20px]"
            >
              Services 
            </Link>
            <Link
              href="/contact-us"
              className="mr-[20px]"
            >
              Contact us	
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="mr-[20px]">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/sign-in" className="mr-[20px]">
              Sign in
            </Link>
          </li>
          {/* <li>
            <Link href="/airport-transfer">Airport Transfer</Link>
          </li> */}
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
