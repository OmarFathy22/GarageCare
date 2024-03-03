import React from 'react';
import Card1 from '../../../components/Tours&Packages/Details/Booking/Card1';
import Card2 from '../../../components/Tours&Packages/Details/Booking/Card2';
import Card3 from '../../../components/Tours&Packages/Details/Booking/Card3';
import Layout from '../../../components/Layout';
import Hero from '../../../components/Hero';
const Book = () => {
  return (
    <Layout>
    <Hero
      Title={"Airport Transfer"}
      SubTitle={"START YOUR ADVENTURE TODAY"}
      Img={"/offers-bg.png"}
    />
    <div className='flex gap-[60px] mx-auto w-[80%] justify-center mt-2 sm:block sm:w-[90%]  sm:items-center sm:gap-[10px]'>
        <Card1 />
      

    
      <Card2 />
      <Card3 />
    </div>
    </Layout>
  );
}

export default Book;
