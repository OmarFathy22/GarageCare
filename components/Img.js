import React from "react";
import Image from "next/image";
const Img = ({ src, className }) => {
  return (
    <Image
      src={src}
      className={className}
      width={2000}
      height={2000}
      alt="Travelish Image"
      sizes="100vw"
      loading="eager"
    />
  );
};

export default Img;
