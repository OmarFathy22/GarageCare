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
          <Link href={"/"}>
            <Image
              width={84}
              height={120}
              src="/logo.png"
              alt="Logo"
              className=""
            />
          </Link>

          <nav className="">
            <div className="   flex-1 my-10  w-[90%] flex mx-auto   min-1200:hidden">
              <input
                placeholder="search..."
                type="text"
                className="pl-2 w-full  py-2 border-b-[3px] border-b-[#165064] rounded-md outline-none "
              />
            </div>
            <ul className="flex  text-center gap-7  text-[#165064] font-bold text-[18px] flex-col className">
              <li>
                <Link
                  href="/"
                  className={
                    pathname == "/"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={
                    path === "products"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={
                    path === "services"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={
                    path === "contact-us"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/reviews"
                  className={
                    path === "reviews"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className={
                    path === "sign-in"
                      ? "bg-[--secondary] py-2 px-3 rounded-lg text-white"
                      : ""
                  }
                >
                  Sign in
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
