import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const DRAWER = ({ isOpen, toggleDrawer }) => {
  const pathname = usePathname();
  const path = pathname?.split("/")[1];
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="!h-[200vh] z-[10000]"
      >
        <nav className="className flex flex-col items-center mt-10">
          <Link href={'/'}>
            <Image
              width={84}
              height={120}
              src="/logo.png"
              alt="Logo"
              className=""
            />
          </Link>

          <nav className="">
            <ul className="flex  text-center gap-7 mt-10 text-[#165064] font-bold text-[18px] flex-col className">
              <li>
                <Link
                  href="/"
                  className={
                    pathname == "/" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white": ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/day-tours"
                  className={
                    path === "day-tours" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white" : ""
                  }
                >
                  Day Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/nile-cruise"
                  className={
                    path === "nile-cruise" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white": ""
                  }
                >
                  Nile Cruise
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-style"
                  className={
                    path === "travel-style" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white": ""
                  }
                >
                  Travel Style
                </Link>
              </li>
              <li>
                <Link
                  href="/tailor-made"
                  className={
                    path === "tailor-made" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white":""
                  }
                >
                  Tailor made
                </Link>
              </li>
              <li>
                <Link
                  href="/shore-excurssion"
                  className={
                    path === "shore-excurssion" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white":""
                  }
                >
                  Shore Excurssion
                </Link>
              </li>
              <li>
                <Link
                  href="/travel-packages"
                  className={
                    path === "travel-packages" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white":""
                  }
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className={
                    path === "reviews" ?
                    "bg-[--secondary] py-2 px-3 rounded-lg text-white":""
                  }
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>
        </nav>
      </Drawer>
    </>
  );
};

export default DRAWER;
