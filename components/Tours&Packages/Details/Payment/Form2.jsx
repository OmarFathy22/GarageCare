import React from 'react';
const Col1 = () => {
  return (
    <div className="w-[260px] text-[--secondary] sm:w-full">
      <h1 className="text-[23px] font-bold text-[--primary] mt-2 uppercase">
        more information
      </h1>
      <p className="mb-3 text-[12px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, magnam!
        Aliquam nobis culpa fuga placeat? Odit sequi repellat iure minus{" "}
      </p>
      <label className="mb-1 mt-1">E-mail address</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
        type="text"
      />
      <label className="mb-1 mt-1">Phone number</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
        type="text"
      />
    </div>
  );
};
const Col2 = () => {
  return (
    <div className="w-[260px] text-[--secondary] flex flex-col  h-full sm:w-full ">
      <h1 className="text-[23px] font-bold text-[--primary] mt-2 uppercase">
        billing address
      </h1>
      <p className="mb-3 text-[12px] flex-1 ">*not required</p>
      <label className="mb-1 mt-1">Country</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
        type="text"
      />
      <label className="mb-1 mt-1">City</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
        type="text"
      />
    </div>
  );
};
const Col3 = ({handleOpen}) => {
  return (
    <div className="w-[260px] text-[--secondary] flex flex-col h-full sm:w-full">
    <div className="flex-1">
        <label className="mb-1 mt-1">Street</label>
        <input
          className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
          type="text"
        />
    </div>
    <div className="flex-1">
        <label className="mb-1 mt-1">Post number</label>
        <input
          className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none w-full"
          type="text"
        />
    </div>
    <div className="flex-1 flex items-end">
        <button onClick={handleOpen} className="bg-[#11A4BC] text-white rounded-full p-2 px-3 w-full py-2 mt-10 cursor-pointer">
          Continue
        </button>
    </div>
    </div>
  );
};
const From2 = ({handleOpen}) => {
  return (
    <div className="flex gap-10  mb-[50px] sm:flex-col">
    <Col1 />
    <Col2 />
    <Col3 handleOpen={handleOpen} />
  </div>
  );
}

export default From2;
