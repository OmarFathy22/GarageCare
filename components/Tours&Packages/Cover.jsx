import React from "react";
import Img from "../Img";
const Hero = ({img}) => {
  return (
    <div>
    
      <div className="mx-auto w-[70%] h-[300px] flex justify-center max-900:h-[200px] max-900:w-full max-900:mt-4">
        <img
          width={200}
          height={200}
          className="w-full h-full rounded-[70px] max-900:rounded-[40px] "
          src={img}
          alt="Camel_Ride"
        />
      </div>
    </div>
  );
};

export default Hero;
