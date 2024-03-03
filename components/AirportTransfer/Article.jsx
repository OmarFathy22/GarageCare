import React from 'react';
import Img from '../Img'
const Article = () => {
  return (
    <div className="w-[70%] sm:w-full">
    <div className=" w-[90%] h-[200px] flex justify-center self-start  mb-[20px] sm:hidden">
    <Img
      width={200}
      height={200}
      className="w-full h-full rounded-[70px]"
      src={"/Camel-Ride.png"}
      alt="Camel_Ride"
    />
  </div>
    <button className='rounded-lg mb-4 bg-[--primary] text-white w-full py-2 min-600:hidden'>Request transportation</button>
  <h1 className="text-[--secondary] text-[22px] font-bold sm:text-[19px] ">Private Transfers from Cairo Airport</h1>
  <h2 className="text-[--primary] text-[18px] font-semibold sm:text-[15px] sm:mb-1">Budget Airport shuttle service</h2>
  <p className="text-[--secondary] text-[14px] font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur repellat esse quia beatae non alias eligendi. Asperiores hic corrupti a saepe! Sit corrupti mollitia quasi voluptatibus illum harum tempora!
  Aspernatur amet obcaecati suscipit libero voluptatibus temporibus reprehenderit, distinctio rem nihil exercitationem illo repudiandae. Veritatis quo obcaecati numquam, mollitia corporis excepturi nemo. Quisquam maxime iste, dignissimos accusantium aspernatur a nostrum.
  Reprehenderit ullam explicabo aut excepturi. Modi facere nisi esse maxime nam velit enim quam, ipsum hic, voluptas saepe aperiam molestias corrupti, quibusdam voluptatum earum veritatis possimus quisquam unde! Vel, est?
  Consectetur minus officia ipsam nostrum maiores, at cum dolore qui dignissimos tenetur? Optio corrupti, architecto molestiae perferendis consectetur officia iure nobis sequi voluptatem reprehenderit debitis ad maiores laborum dolore ratione.
  Fugit officia ullam, ipsum iure quis tempora a corporis expedita cumque suscipit enim ipsa consequuntur molestias doloribus magnam voluptate, ipsam consectetur natus vero necessitatibus dolorem harum earum dolore. Nisi, molestias.
  Blanditiis ratione facilis, vitae voluptate quasi reiciendis labore minus eveniet, velit obcaecati explicabo dolores temporibus perspiciatis fugit numquam nobis voluptatum necessitatibus veritatis eaque nihil nostrum deleniti tempore? Minima, doloribus at!
  Aspernatur totam odio dolores labore ab itaque impedit dolorum id provident? Quae debitis, possimus quis provident non porro est nobis rerum ducimus molestias sit atque libero reiciendis quo assumenda maxime.</p>
    </div>
  );
}

export default Article;
