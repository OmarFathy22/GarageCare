import React from 'react';
import {data} from './data.js'
const Reservations = () => {
  return (
      
    <div className="w-[30%] bg-gray-200 rounded-3xl p-5 sm:w-full">
    <h1 className="text-[16px] text-[--primary] font-bold my-2">Tranfer from Cairo airport to Giza Hotels / Cairo</h1>
    <ul>
     {
       data.map((item,index)=>{
         return (
           <li key={index} className={`p-3 flex justify-between items-center gap-3 ${index % 2 == 0 ? "bg-gray-300" : "bg-white"} `}>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">{item.group}</h1>
             <h1 className="text-[10px] w-[14%] text-white bg-green-500 rounded-sm text-center">{item.price}</h1>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">Per Vehicle Per Way</h1>
           </li>
         )
       })
     }
    </ul>
    <h1 className="text-[16px] text-[--primary] font-bold my-2">Tranfer from Cairo airport to Alexandria / Suez / Port Said</h1>
    <ul>
     {
       data.map((item,index)=>{
         return (
           <li key={index} className={`p-3 flex justify-between items-center gap-3 ${index % 2 == 0 ? "bg-gray-300" : "bg-white"} `}>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">{item.group}</h1>
             <h1 className="text-[10px] w-[14%] text-white bg-green-500 rounded-sm text-center">{item.price}</h1>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">Per Vehicle Per Way</h1>
           </li>
         )
       })
     }
    </ul>
    <h1 className="text-[16px] text-[--primary] font-bold my-2">Tranfer from Cairo airport to Sharm / Hurghada / El Gouna</h1>
    <ul>
     {
       data.map((item,index)=>{
         return (
           <li key={index} className={`p-3 flex justify-between items-center gap-3 ${index % 2 == 0 ? "bg-gray-300" : "bg-white"} `}>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">{item.group}</h1>
             <h1 className="text-[10px] w-[14%] text-white bg-green-500 rounded-sm text-center">{item.price}</h1>
             <h1 className="text-[10px] w-[43%] text-[--secondary]">Per Vehicle Per Way</h1>
           </li>
         )
       })
     }
    </ul>
   </div>
  );
}

export default Reservations;
