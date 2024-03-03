import Img from "./Img";

const BigCard = ({ Image, Title }) => {
  return (
    <div className="flex flex-col rounded-[33px] w-full ">
      <Img src={Image} />
      <div className="flex h-[70px] w-full px-11 bg-[#11A4BC] items-center sm:px-5 sm:h-fit sm:py-2">
        <span className="text-white text-[28px] font-medium sm:text-[20px]">{Title}</span>
      </div>
      <div className="flex h-[70px] w-full px-11 bg-[#165064] items-center justify-center rounded-b-[33px] sm:justify-start sm:px-5  sm:h-fit sm:py-2">
        <span className="text-white text-[25px] font-medium sm:text-[20px] ">
          See all day tours
        </span>
      </div>
    </div>
  );
};

export default BigCard;
