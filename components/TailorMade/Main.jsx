import React from "react";
import Form from "./Form";
import Cards from "./Cards";
import Article from "./Articles";
import { Travel_Style } from "./data.js";
import { articles } from "./data.js";
import MobStartScreen from "../MobStartScreen";




const Main = () => {
  return (
    <div className="w-[80%] mx-auto my-[60px] sm:w-full">
      {/* <MobStartScreen
       img={'/Camel-Ride.png'}
        title={'Tailor Made'}
        subtitle={'start your adventure today'} 
      />
      <div className="flex justify-center items-center flex-wrap gap-10 sm:mt-12 sm:gap-y-0 ">
        {Travel_Style.map((style, i) => (
          <div key={i}>
            <Cards card={style} />
          </div>
        ))}
      </div> */}

      {/* <div className="flex sm:flex-col sm:items-center">
        <div className="w-[70%] sm:w-[80%]">
          <div className="flex flex-col gap-5">
            {articles.map((article , i) => (
              <div key={i}>
                <Article article={article}  />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[30%] sm:w-[90%]">
          <Form/>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
