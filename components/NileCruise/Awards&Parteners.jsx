import React from 'react';

const awards = [
  "https://www.egypttoursportal.com/images/2022/11/Certificate-of-Egypt-Tours-Portal.webp",
  "https://www.egypttoursportal.com/images/2022/11/Internatioal-Travel-Awards-Egypt-Tours-Portal.webp",
  "https://www.egypttoursportal.com/images/2022/11/2022-Travel-Awards-Winner-Logo-1-min.webp",
];
const parteners = [
  "https://www.egypttoursportal.com/public/assets/images/partners/1.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/2.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/3.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/4.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/5.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/6.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/7.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/9.png",
  "https://www.egypttoursportal.com/public/assets/images/partners/10.png",
];
const AwardsParteners = () => {
  return (
    <div>
    {/* {Awards & Recognitions} */}
  <div className="mt-[20px] sm:w-[90%] sm:mx-auto">
  <h1 className="text-center text-[30px] sm:text-[22px] mb-[30px] sm:mb-[15px]">Awards & Recognitions</h1>
    <div
      style={{
        backgroundImage: `url("https://www.egypttoursportal.com/images/2022/11/awards-card-background.webp")`,
        backgroundSize:"cover",
      }}
      className=" h-[120px]  w-full flex gap-5 justify-evenly rounded-xl"
    >
      
      {awards.map((item, i) => {
        return (
          <div key={i} className="h-full flex-1   ">
            <img src={item} alt="award" className="h-full w-full object-contain" />
          </div>
        );
      })}
    </div>
  </div>
   {/* {parteners} */}
   <div className="mt-[50px] sm:mt-[30px] sm:w-[90%] sm:mx-auto">
   <h1 className="text-center text-[30px] sm:text-[22px]">Our Parteners</h1>
  <div className="  overflow-auto" style={{ whiteSpace: 'nowrap' }}>
{parteners.map((item, i) => (
<li key={i} className="!w-[200px] pb-2  mt-[40px] sm:mt-[10px] inline-block">
<img src={item} alt="award"  className="w-[150px]" />
</li>
))}
</div>
  </div>

   </div>
  );
}

export default AwardsParteners;
