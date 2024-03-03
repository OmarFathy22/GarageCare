import React from 'react';
import { FaStar } from "react-icons/fa";


const Reviews = () => {
  return (
    <div>
      <div className='flex gap-3 items-center'>
        <div className='w-[80px] h-[80px] rounded-full overflow-hidden'>
          <img src="https://modactivity.travelerwp.com/wp-content/uploads/2022/04/32.jpg" alt="" className='w-full h-full object-contain' />
        </div>
        <div>
          <h1>modmix</h1>
          <p>28/2/2024</p>
        </div>
      </div>
      <ul className='flex gap-1 my-3'>
        {Array(5).fill().map((_,i) => {
          return(
            <FaStar key={i} className='text-[orange] text-[20px]'/>
          )
        })}
      </ul>
      <h1 className='font-bold text-[20px] my-3 '>Another exciting adventure with Exodus</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae eligendi quasi nam earum modi sunt, ut possimus corporis aut deserunt tempore totam consectetur natus quibusdam perferendis. Tempore, ratione quod.</p>
      <hr className='my-[30px]' />
    </div>
  );
}

export default Reviews;
