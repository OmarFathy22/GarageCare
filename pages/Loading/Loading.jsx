import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-white">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#E4523D"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;