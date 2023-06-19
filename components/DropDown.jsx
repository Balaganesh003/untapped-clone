import React, { useState } from 'react';
import Image from 'next/image';
import GrayDownArrow from '@/assets/GrayDownArrow.svg';

const DropDown = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    console.log(value);
  };

  return (
    <div>
      <p className={`text-primary-text text-[0.875rem] mb-[5px] font-semibold`}>
        {label}
      </p>
      <div className="relative">
        <select
          name="options"
          id="options"
          className="w-full px-4 text-[1rem] bg-white h-12 rounded py-[0.1rem] text-primary-text border border-light-gray group focus:outline-black pr-4 appearance-none"
          value={selectedOption}
          onChange={handleOptionChange}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-[14.5px]">
              {option.label}
            </option>
          ))}
        </select>
        <Image
          src={GrayDownArrow}
          className="w-3 absolute right-5 top-5 opacity-70"
          alt="downarrow"
        />
      </div>
    </div>
  );
};

export default DropDown;
