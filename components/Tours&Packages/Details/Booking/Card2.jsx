import React from 'react';

const Card2 = () => {
  return (
    <div>
      <h1 className='text-[23px] font-bold text-[--primary] mb-2'>Tour Date</h1>
      <form className="flex flex-col pb-3 w-[260px] text-[--secondary] sm:w-full" >
        <label className='mb-1'>Arrive Date</label>
         <input className='bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none' type="date" />  
        <label className='mb-1 mt-3'>Departure Date</label>
         <input className='bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none' type="date" /> 
         <h1 className='text-[23px] font-bold text-[--primary] mt-2'>Travelers</h1>
         <label className='mb-1 mt-1'>How many adults</label>
         <input className='bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none' min={0}  type="number" /> 
         <label className='mb-1 mt-3'>How many children</label>
         <input className='bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none' min={0}  type="number" /> 

      </form>
  </div>
  );
}

export default Card2;
