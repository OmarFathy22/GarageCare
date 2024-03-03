import React from 'react';
import Cover from "./Tours&Packages/Cover"

const MobStartScreen = ({title , subtitle , img}) => {
  return (
    <div className="w-[90%]  mx-auto min-900:hidden ">
        <h1 className="text-[--primary] text-[40px] sm:text-[30px] hidden max-900:block max-900:mt-4 font-bold">{title}</h1>
        <p className="text-[13px] sm:text-[10px]  text-[--secondary] font-bold uppercase pl-1 hidden max-900:block">{subtitle}</p>
          <Cover img={img}/>
      </div>
  );
}

export default MobStartScreen;
