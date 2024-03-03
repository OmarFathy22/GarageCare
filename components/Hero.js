import Image from "./Img"
const Hero = ({ Title, SubTitle, Img }) => {
  return (
    <div className="relative h-[400px] mb-[30px]  max-900:hidden w-full ">
      <div className="h-full ">
        <img alt={"image"} src={Img} className={"object-cover w-full h-full rounded-b-3xl"}/>
      </div>
      <div className="text-white absolute top-[55px] px-[150px]">
        <h1 className="text-[60px] max-1200:text-[35px] font-medium  min-1200:leading-[80px]">{Title}</h1>
        <h4 className="text-[26px] max-1200:text-[16px] font-medium ">{SubTitle}</h4>
      </div>
    </div>
  );
};

export default Hero;
