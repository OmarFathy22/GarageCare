import Head from "next/head";
import Nav from "./Nav";
import FooterComp from "./Footer";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import FooterMob from "./FooterMob";
import Image from "next/image";
import Img from "./Img";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="relative">
      <Head>
        <title>Travelish Tours</title>
      </Head>

      {pathname == "/" ? <Nav /> : <MainHeader />}

      <main>
        <div
          className="
       
       flex flex-col
        
        bg-[#FCFAFB]
        w-full
      "
        >
          <div className="font-medium flex-1">{children}</div>
        </div>
      <FooterComp />
      <FooterMob/>
      </main>
    </div>
  );
};
export default Layout;
