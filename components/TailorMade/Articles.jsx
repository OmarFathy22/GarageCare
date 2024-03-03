import React from 'react';
const Articles = ({ article }) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <h1 className="text-[#11A4BC] text-[22px] font-semibold text-center">
        {article.title}
      </h1>
      <p className="text-[#165064] text-[15px] text-center font-medium">
        {article.subtitle}
      </p>
    </div>
  );
};


export default Articles;
