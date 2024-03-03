import React from 'react';
import { Travel_Style } from './data.js';
import Link from 'next/link.js';
import Cover from '../Tours&Packages/Cover';
import Img from '../Img.js';
const Card = ({card})=> {

  return(
  <div >
      <div
      key={card.title}
      className="h-[250px] w-[200px]  rounded-[30px] bg-gray-200 sm:w-[190px]"
    >
      <Img src={card.img} alt="image" className='h-[85%] w-full rounded-t-[30px]' />
      <h1 className="text-center mt-2 text-[#165064]  uppercase">{card.title}</h1>
    </div>
  
      <Link href={`/travel-style/${card.title}?title=${card.title}`}  >
      <div  className='bg-[#11A4BC] text-white rounded-full w-full py-2 mt-3 cursor-pointer text-center '>
        View details
      </div>
      </Link>
  </div>
  )
}
const Main = () => {
  return (
  <div>
      <div className="w-[90%] mx-auto min-600:hidden">
        <h1 className="text-[--primary] text-[40px] hidden sm:block sm:mt-4 font-bold">Travel Styles</h1>
        <p className="text-[14px] text-[--secondary] font-bold hidden sm:block">You can choose your favorite style of traveling</p>
          <Cover img={"/shore.png"}/>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-7 w-[60%] mx-auto my-[60px] sm:w-full sm:gap-x-3 sm:gap-y-6'>
       {
        Array(3).fill().map(() =>( 
          Travel_Style.map((style , i)=>(
            <Card card={style} key={i}/>
          ))
        ))
       }
      </div>
  </div>
  );
}

export default Main;
