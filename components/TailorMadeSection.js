import Img from "./Img";
const TailorMadeSection = () => {
  return (
    <div className="grid grid-cols-5 gap-[50px]">
      <div className="flex flex-col text-center items-center">
        <Img src="/ico1.png" className="mb-9 w-[111.45px] h-[111.45px]" />
        <span className="text-[#165064] text-[24px] font-medium mb-[6px]">
          PICK
        </span>
        <span className="text-[#11a4bc] text-[20px] font-medium">
          your dream location
        </span>
      </div>
      <div className="flex flex-col text-center items-center">
        <Img src="/ico2.png" className="mb-9 w-[111.45px] h-[111.45px]" />
        <span className="text-[#165064] text-[24px] font-medium mb-[6px]">
          Decide
        </span>
        <span className="text-[#11a4bc] text-[20px] font-medium">
          your budget
        </span>
      </div>
      <div className="flex flex-col text-center items-center">
        <Img src="/ico3.png" className="mb-9 w-[111.45px] h-[111.45px]" />
        <span className="text-[#165064] text-[24px] font-medium mb-[6px]">
          Choose
        </span>
        <span className="text-[#11a4bc] text-[20px] font-medium">
          your standarad of
          <br /> accommodation & <br />
          travel style
        </span>
      </div>
      <div className="flex flex-col text-center items-center">
        <Img src="/ico4.png" className="mb-9 w-[111.45px] h-[111.45px]" />
        <span className="text-[#165064] text-[24px] font-medium mb-[6px]">
          Think
        </span>
        <span className="text-[#11a4bc] text-[20px] font-medium">
          about your
          <br />
          destination bucket list
        </span>
      </div>
      <div className="flex flex-col text-center items-center">
        <Img src="/ico5.png" className="mb-9 w-[111.45px] h-[111.45px]" />
        <span className="text-[#165064] text-[24px] font-medium mb-[6px]">
          Let
        </span>
        <span className="text-[#11a4bc] text-[20px] font-medium">
          our tailor made
          <br />
          experts do
          <br />
          the work
        </span>
      </div>
    </div>
  );
};

export default TailorMadeSection;
