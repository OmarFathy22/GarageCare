const Cta = () => {
  return (
    <div className="w-full px-[50px] mb-[100px] sm:mt-12 sm:px-[20px]">
      <div className="flex justify-between items-center py-[120px] bg-[#BDC3D1] rounded-[25px] px-[100px] sm:px-4 sm:py-5 sm:flex-col ">
        <div className="flex flex-col mr-[20px]">
          <h2 className="text-[44px] text-[#165064] font-medium mb-4 sm:mb-0 sm:text-[20px] sm:font-bold">
            Follow up our latest offers
          </h2>
          <h4 className="text-[20px] text-[#165064] mt-[13px] font-medium tracking-[3.14px] sm:text-[13px] sm:tracking-normal sm:mt-0">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT
          </h4>
        </div>



        <div className="flex sm:flex-col sm:gap-2 items-center pl-[38px] pr-[18px] w-[640px] h-[105px] bg-white rounded-[21px] sm:mx-5 sm:max-w-[300px] sm:w-fit sm:h-fit sm:mt-3 sm:rounded-md sm:px-4 sm:py-3">
          <input
            type="email"
            placeholder="E-MAIL"
            className="border border-white focus:border-white focus:outline-none w-[80%]"
          />
          <div className="h-[80%] w-full  bg-[#11A4BC] rounded-[17px] flex justify-center items-center  cursor-pointer sm:rounded-md sm:px-1 sm:py-2 ">
            <span className="text-white text-[18px]">Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
