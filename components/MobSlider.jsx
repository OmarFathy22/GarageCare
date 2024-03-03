import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({children , settings}) => {
  
    return (
      <div className="w-full flex justify-center ">
        <Slider {...settings} className=" w-full mt-6  !flex !justify-center ">
        {children}
        </Slider>
        
          
      </div>
    );
  }



export default SlickSlider;