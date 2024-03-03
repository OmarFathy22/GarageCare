import React from 'react';
import {FaCheck} from 'react-icons/fa';
const Modal = ({Open , setOpen}) => {
  const handleOpen = () => {
    setOpen(false)
  }
  return (
    <div>
      {Open && (
        <div className='fixed left-0 right-0 top-0 bottom-0 h-[100vh] w-full flex justify-center items-center bg-[#333333a2] '>
        <div className='bg-white rounded-3xl flex flex-col items-center  p-10 max-w-[400px] sm:max-w-[350px] shadow-xl shadow-gray-400 '>
          <div className='bg-blue-500 flex justify-center items-center w-[100px] h-[100px] rounded-full'>
            <h1 className='text-[30px] text-white'><FaCheck/></h1>
          </div>
          <div className='my-[20px] flex flex-col gap-2'>
            <h1 className='text-[--primary] text-[25px] text-center font-bold'>Thank You</h1>
            <h1 className='text-[--secondary] text-[20px] text-center'>for booking with us</h1>
            <h1 className='text-[--secondary] text-[15px] text-center'>we'll contact you via e-mail to arrange trip details with you</h1>
          </div>
          <button onClick={handleOpen} className='bg-[--primary] text-white min-w-[150px] py-2  rounded-2xl'>done</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Modal;
