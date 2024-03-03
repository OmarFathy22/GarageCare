import Img from "./Img";

const BigCard = ({ Image, Title }) => {
  return (
    <div className="flex flex-col      rounded-xl    h-[300px] overflow-hidden ">
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" min-1200:TourCard h-full w-full"
      >
        <div className="bg-black w-full h-full bg-opacity-[0.3]  flex justify-center items-center">
          <h1 className="text-white text-[30px] max-1200:text-[25px] font-bold">{Title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
