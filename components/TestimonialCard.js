import Img from "./Img";
const TestimonialCard = () => {
  return (
    <div className="flex flex-col bg-white  border shadow-md  shadow-gray-300  rounded-[41px] px-[50px] py-[42px] sm:px-5  sm:w-[90%] sm:mx-auto sm:mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-[75px] h-[75px] rounded-[15px] sm:w-[50px] sm:h-[50px]"
          />
          <div className="flex flex-col  ml-[28px] sm:ml-3">
            <span className="text-[#165064] font-medium text-[20px] sm:text-[15px]">
              Emanuil jack
            </span>
            <span className="text-[#BDC3D1] text-[16px] sm:text-[12px]">
              Los anglous , USA
            </span>
          </div>
        </div>

        <div className="flex gap-1">
          <Img src="/star.svg" className="sm:w-[15px] sm:h-[15px] h-[30px] w-[30px]" />
          <Img src="/star.svg" className="sm:w-[15px] sm:h-[15px] h-[30px] w-[30px]" />
          <Img src="/star.svg" className="sm:w-[15px] sm:h-[15px] h-[30px] w-[30px]" />
          <Img src="/star.svg" className="sm:w-[15px] sm:h-[15px] h-[30px] w-[30px]" />
          <Img src="/star.svg" className="sm:w-[15px] sm:h-[15px] h-[30px] w-[30px]" />
        </div>
      </div>
      <p className="mt-[38px] text-[#BDC3D1] text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmodtempor incididunt ut labore et dolore magna aliqua Lorem ipsum
      </p>
    </div>
  );
};

export default TestimonialCard;
