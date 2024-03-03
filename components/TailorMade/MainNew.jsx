import React from "react";
import Form from "./Form.jsx";
import Collapsible from '../../components/NileCruise/FAQs.jsx'
const Main = () => {
  return (
    <div className="w-[90%] mx-auto mb-[60px]   sm:w-full ">
      <div className="w-full sm:w-[90%] sm:mx-auto mt-[50px]">
        <Form />
      </div>

      <hr className="my-[30px]" />
      <h1 className=" text-[30px] text-center mb-[30px] sm:text-[20px]">Freqeuntly Asked Questions</h1>
      <ul className="w-full flex flex-col gap-3">
            {
              Array(3).fill().map((_ , i) => {
                return(
                  <div key={i} className="w-full sm:w-[90%] sm:mx-auto">
                    <Collapsible index={i}/>
                     
                    
                  </div>
                )
              })
            }
          </ul>

    </div>
  );
};

export default Main;
