import React from "react";
import Form from "./Form.jsx";
import Collapsible from '../NileCruise/FAQs.jsx'
import { FaMapMarkerAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-[90%] mx-auto mb-[60px]   sm:w-full ">
      <div className="w-full sm:w-[90%] sm:mx-auto mt-[50px]">
        {/* <Form />  Map*/}
        <div className="flex justify-center items-center gap-2 text-[--primary] mb-5 font-bold text-[30px]">
          <h1>Our Location</h1>
          <h1><FaMapMarkerAlt/></h1>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.278464928228!2d31.331957923500482!3d30.04824466081852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c1380cba7ef%3A0xd541260e9e06978d!2sNasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1709435405305!5m2!1sen!2seg" width="600" height="450" style={{}} className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <hr className="my-[30px]" />
      <h1 className=" text-[30px] text-center mb-[30px] sm:text-[20px] text-[--primary]">Freqeuntly Asked Questions</h1>
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
