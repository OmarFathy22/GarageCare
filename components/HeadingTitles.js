const HeadingTitles = ({ title, subtitle, mark = "" }) => {
  return (
    <div className="flex flex-col items-center my-[50px] text-[#165064]  sm:mt-[20px] sm:mb-0 ">
      <h2 className="text-[46px] font-medium text-center mb-4 max-1200:text-[30px] sm:!text-[25px] sm:mb-0">
        {title} <span className="text-[#11A4BC]">{mark}</span>
      </h2>
      <h4 className="text-[20px] max-1200:text-[15px] text-center font-medium tracking-[3.14px] sm:!text-[12px] sm:tracking-normal">{subtitle}</h4>
    </div>
  );
};

export default HeadingTitles;
