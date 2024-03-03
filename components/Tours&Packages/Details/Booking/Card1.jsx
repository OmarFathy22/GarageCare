import Img from "../../../Img";

const TourCard = () => {
  return (
  <div>
      <div className="flex flex-col pb-3  w-[260px] cursor-pointer bg-[#11A4BC] rounded-[40px] h-full sm:hidden" >  
        <Img src="/Camel-Ride.png" className="rounded-t-[40px] flex-1" />
        <div className="flex flex-col h-auto py-10px w-full px-6  ">
          <span className="text-white text-[15px] font-medium my-3">
            Day tour to Alexandria sites
          </span>
          <div className="flex justify-between mb-2">
            <span className="flex text-white text-[15px] font-medium items-center">
              <div className="w-[10px] h-[15px] mr-1">
                <Img className="" src="/locationIcon.png" />
              </div>
              Alexandria
            </span>
            <span className="flex text-white text-[15px] font-medium items-center">
              <div className="w-[15px] h-[15px] mr-1">
                <Img className="" src="/LocationIco2.png" />
              </div>
              Day tour
            </span>
          </div>
        </div>
        
      </div>


      <div>
      <div className="flex gap-1  w-full  text-[20px] font-[400] min-600:hidden ">
            <h1 className="text-[--secondary] sm:text-[--primary] sm:text-[15px] sm:font-bold">Day tours {">"}</h1>
            <h1 className="text-[--primary] sm:text-[15px] sm:font-bold">Alexandria </h1>
          </div>
          <h1 className="text-[20px] text-[--secondary]  min-600:hidden">Day tour to Alexandria sites</h1>
          <h1 className='text-center text-[--primary] font-bold min-600:hidden'>step 1 of <span className='text-gray-400'>2</span></h1>
      </div>
  </div>
  );
};
export default TourCard;
