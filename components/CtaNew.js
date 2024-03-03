import React from 'react';
import Img from './Img';

const CtaNew = () => {
  return (
    <div className='bg-gray-100 max-1200:mt-[50px]  sm:mb-[50px] flex sm:flex-col border-[1px] rounded-xl mb-[130px] sm:h-[500px]  h-[400px] w-[90%] overflow-hidden'>
      <div className='w-[50%] sm:w-full sm:h-[50%] '>
        <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image"  className='w-full h-full'/>
      </div>

      <div className='w-[50%] sm:flex-1 sm:w-full flex   flex-col px-[10%] justify-center items-center bg-gray-100'>
        <h1 className='text-[35px] sm:text-[20px]  font-semibold text-center'>
        Get special offers, and more from us
        </h1>
        <p className='text-center text-[#555] sm:text-[13px]'>
        Subscribe to see secret deals prices drop the moment you sign up!
        </p>

        <div className='w-full flex mt-5  '>
          <div className='flex-1 '>
            <input placeholder='Email' className='px-2 sm:text-[15px] block h-full w-full outline-none border-[1px] border-gray-300 rounded-l-md ' type="e-mail" />
          </div>
          <button className='text-white bg-blue-500 py-3 sm:text-[12px]  px-2 rounded-r-md'>subscribe</button>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default CtaNew;
