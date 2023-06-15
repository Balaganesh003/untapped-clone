import React from 'react';
import SearchLogo from '@/assets/SearchLogo.svg';
import Image from 'next/image';

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-[38px] px-11 leading-[150%] text-sm bg-primary rounded-full border-[1px] border-[#f2f2f2] focus:outline-none focus:border-primary-text "
      />
      <div className="absolute top-3 left-3 w-5 h-4 flex items-center justify-center">
        <Image src={SearchLogo} alt="Search Logo" />
      </div>
    </div>
  );
};

export default SearchBox;
