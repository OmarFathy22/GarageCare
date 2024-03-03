import React from 'react';

const Form = ({ index }) => {
  return (
    <div className="flex flex-col pb-3 w-[260px] text-[--secondary] sm:w-full">
      <h1 className="text-[23px] font-bold text-[--primary] mt-2">
        Adult 0{index}
      </h1>
      <label className="mb-1 mt-1">First Name</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none"
        type="text"
      />
      <label className="mb-1 mt-1">Last Name</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none"
        type="text"
      />
      <label className="mb-1 mt-3">Date of birth</label>
      <input
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none"
        type="date"
      />
      <label className="mb-1 mt-1">Sex</label>
      <select
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none"
        name=""
        id=""
      >
        <option value="sex">sex</option>
      </select>
      <label className="mb-1 mt-3">Select Nationality</label>
      <select
        className="bg-gray-300 p-2 rounded-lg text-[--secondary] outline-none "
        name=""
        id=""
      >
        <option value="nationality">nationality</option>
      </select>
    </div>
  );
};

export default Form;
