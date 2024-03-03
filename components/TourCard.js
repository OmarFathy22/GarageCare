import Img from "./Img";
const TourCard = () => {
  return (
  <div>
      <div className="flex flex-col rounded-3xl cursor-pointer w-[250px]  sm:w-[180px] ">  
        <Img src="/thumb.png" className="rounded-t-3xl" />
        <div className="flex flex-col h-auto py-10px w-full px-6 bg-[#11A4BC] sm:px-2">
          <span className="text-white text-[15px] font-medium my-3 sm:text-[12px]">
            Day tour to Alexandria sites
          </span>
          <div className="flex justify-between mb-2">
            <span className="flex text-white text-[15px] font-medium items-center sm:text-[12px]">
              <div className="w-[10px] h-[15px] mr-1">
                <Img  src="/locationIcon.png" className={"w-full h-full"} />
              </div>
              Alexandria
            </span>
            <span className="flex text-white text-[15px] font-medium items-center sm:text-[12px]">
              <div className="w-[15px] h-[15px] mr-1">
                <Img className="w-full h-full" src="/LocationIco2.png" />
              </div>
              Day tour
            </span>
          </div>
          <div className="flex items-center mb-3">
            <h1 className="flex text-white text-[15px] font-medium items-center mr-[19px] sm:text-[12px]">
              starts from
            </h1>
            <h1 className="flex justify-center items-center py-1 px-2  bg-white rounded-[7px] text-[#165064] text-[15px] font-medium " >
              30 $
            </h1>
          </div>
        </div>
        <div className="flex  py-5  w-full px-11 bg-[#165064] items-center justify-center rounded-b-3xl sm:py-3">
          <span className="text-white text-[18px] font-medium sm:text-[14px]">View tour</span>
        </div>
      </div>
  </div>
  );
};
export default TourCard;
