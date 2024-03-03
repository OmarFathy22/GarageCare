import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import { useRouter } from 'next/router';
import Img from '../../components/Img';

const Id = () => {
  const router = useRouter();
  const {title} = router.query;
  return (
    <Layout>
    <Hero
      Title={"Tailor made"}
      SubTitle={"START YOUR ADVENTURE TODAY"}
      Img={"/tailor-made-bg.png"}
    />
    
    <div className='w-[80%] mx-auto min-1200:translate-y-[-200px]'>
    <div className="w-[90%] mx-auto min-600:hidden">
        <h1 className="text-[--primary] text-[20px] hidden sm:block sm:mt-4 font-bold">Travel Styles</h1>
        <p className="text-[32px] mb-3 text-[--secondary] uppercase hidden sm:block">Accessible Tour</p>
      </div>
      <div className="mx-auto w-[70%] h-[300px] flex justify-center sm:w-full sm:h-[200px] ">
        <Img
          width={200}
          height={200}
          className="w-full h-full rounded-b-[70px] sm:rounded-[40px]"
          src={"/Camel-Ride.png"}
          alt="Camel_Ride"
        />
      </div>
      <div className='flex flex-col items-center gap-3 mt-10'>
        <h1 className='text-[--primary] text-[25px] font-bold'>{title}</h1>
        <p className='text-center text-[--secondary] text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel exercitationem mollitia animi. Natus, quam accusantium facere magni ad autem modi consequuntur quia repudiandae vel odit fuga exercitationem, minima non.
        Veritatis voluptas reprehenderit quas accusantium itaque repellat architecto voluptatum quos, enim quod possimus tenetur quibusdam sunt nulla, pariatur, porro minus. Sunt quos saepe ab dicta asperiores cumque voluptates esse expedita.
        Autem numquam est reprehenderit explicabo nesciunt, similique nulla blanditiis ea? Maxime provident, id accusamus perferendis ex odit eveniet, fuga fugiat quasi omnis aspernatur molestiae vitae commodi consectetur! Alias, at accusamus!
        Accusamus, repellendus vitae? Dolores iusto quidem quos ipsam odit vero quo aliquam debitis, placeat, esse ex eius, at dolor quasi quam! Optio, repellendus nisi aliquid esse illum nesciunt a qui.
        Obcaecati non, numquam architecto velit in corrupti distinctio asperiores unde saepe nihil quaerat perspiciatis ipsa totam omnis deleniti dolores veritatis reprehenderit nobis? Atque tenetur sit accusamus aut, dignissimos odit ad!
        Tempore excepturi quidem velit architecto est officiis voluptates voluptatibus illo, deserunt asperiores. Officia aliquam similique quidem vel eaque quam dolorem, eveniet ipsam a ea odit exercitationem sunt. Omnis, suscipit assumenda?
        Ipsum, ullam deleniti! Nesciunt vitae praesentium perferendis adipisci ipsam officia, voluptatum sequi eius inventore id modi aut molestiae. Voluptates voluptas rem laborum tempora incidunt temporibus fuga ullam veniam vero ea?
        Autem, quis consequatur. Sapiente consequatur voluptates nobis earum labore vitae impedit provident voluptatibus mollitia quaerat ratione eum adipisci placeat hic ut alias fuga tempora obcaecati, cupiditate consectetur officiis illum voluptatem.</p>
      </div>
    </div>
  </Layout>
  );
}

export default Id;



