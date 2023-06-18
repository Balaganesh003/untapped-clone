import React from 'react';
import BlackSearchLogo from '@/assets/BlackSearchLogo.svg';
import Image from 'next/image';

const SearchDropDown = ({
  label1,
  label2,
  marginBottomLabel1,
  placeholder,
}) => {
  return (
    <div>
      <p
        className={`text-primary-text text-[0.875rem]  ${
          marginBottomLabel1 ? marginBottomLabel1 : 'mb-[10px]'
        } font-semibold`}>
        {label1}
      </p>
      {label2 && (
        <p className="text-secondary-text text-[0.875rem] font-nomarl mb-[15px]">
          {label2}
        </p>
      )}
      <div>
        <div className="relative">
          <input
            type="text"
            name="text"
            placeholder={placeholder}
            className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] pl-[0.875rem] pr-[2.5rem]  mb-[0.8125rem]  text-primary-text border border-light-gray focus:outline-black`}
          />
          <div className="absolute top-[14px] right-3 ">
            <Image
              src={BlackSearchLogo}
              alt="search"
              className="h-[1.25rem] w-[1.25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDropDown;
