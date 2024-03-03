import React from 'react';
import Img from '../Img';
const Cards = ({ card }) => {
  return (
    <div className="flex flex-col  items-center gap-2 max-w-[200px] h-[230px] mb-10 sm:h-[200px] sm:w-[150px] ">
      <Img src={card.img} alt="image" className="h-[80px] w-[80px]" />
      <h1 className="text-[#165064] text-[16]px] font-semibold sm:text-[13px]">{card.title}</h1>
      <p className="text-[#11A4BC] text-[15px] text-center font-medium">
        {card.subtitle}
      </p>
    </div>
  );
};

export default Cards;
