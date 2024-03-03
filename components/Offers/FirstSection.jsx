import React from 'react';
import Cover from '../Tours&Packages/Cover';
import Img from '../Img';
import MobStartScreen from '../MobStartScreen';
const cards = [
  {
    title: "Day Tours",
    img: "/Camel-Ride.png",
  },
  {
    title: "Shore Excursion",
    img: "/shore.png",
  },
  {
    title: "Packages",
    img: "/abo-simple.png",
  },
];
const FirstSection = () => {
  return (
  <div>
      <div className="flex gap-7 justify-center sm:hidden ">
      {cards.map((card) => (
        <div
          key={card.title}
          className="h-[170px] w-[250px]  rounded-3xl bg-[#11A4BC]"
        >
          <Img src={card.img} alt="image" />
          <h1 className="ml-4 mt-2 text-white ">{card.title}</h1>
        </div>
      ))}
    </div>
      <MobStartScreen
        title={"Offers"}
        subtitle={"You can choose your favorite style of traveling"}
        img={"/Camel-Ride.png"}
      
      />
  </div>
  );
}

export default FirstSection;
