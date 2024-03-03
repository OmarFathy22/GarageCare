import Img from "./Img";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";


const TourCard = ({ item  }) => {
  const router = useRouter()
  const {pathname} = router
  return (
    <Link href={`${pathname}/${item?.name}`}>
      <div   className={` w-full sm:w-full border overflow-hidden rounded-xl shadow-sm `}>
        {/* image */}
        <div
          style={{
            backgroundImage: `url(${item?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex-[1] h-[250px] w-full min-1200:TourCard"
        />
        {/* secondSection */}
        <div className="m-6 mx-4">
          {/* first part */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div key={index}>
                    <FaStar color="orange"  />
                  </div>
                ))}
            </div>
            <h1 className="font-bold">{item.name}</h1>
            <p className="text-[#555] text-[15px]">Egypt</p>
          </div>
          <hr className="my-4" />
          {/* second part */}
          <div>
            {/* first part */}
            <div className="flex gap-3">
              <div className="rounded-[3px] border-[1px] border-blue-400 bg-blue-100 px-2 py-[2px]">
                <h1 className="text-[blue]">5 / 5</h1>
              </div>
              <div>
                <span className="font-bold">Excellent</span>
                <span className="text-[#555]"> (3 Reviews)</span>
              </div>
            </div>
             {/* from  */}
             <div className="mt-3">
              <span className="text-[#555]">From:</span>
              <span className="font-bold">€150.00</span>
              <span className="text-[#555]">/night</span>
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TourCard;
