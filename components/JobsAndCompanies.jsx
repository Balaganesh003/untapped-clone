import React, { useEffect } from 'react';
import FilterCard from './FilterCard';
import { useState } from 'react';
import ClockLogo from '../assets/ClockLogo.svg';
import BookmarkLogo from '../assets/BookmarkLogo.svg';
import BlackTick from '../assets/BlackTick.svg';
import Image from 'next/image';
import ListLogo from '../assets/ListLogo.svg';
import BlackDownTriangle from '../assets/BlackDownTriangle.svg';
import CrossLogoWhite from '../assets/CrossLogoWhite.svg';
import SearchLogo from '../assets/SearchLogo.svg';
import JobsCard from './JobsCard';

const JobsFilter = [
  {
    id: 1,
    name: 'Location',
  },
  {
    id: 2,
    name: 'Stage',
  },
  {
    id: 3,
    name: 'Industry',
  },
  {
    id: 4,
    name: 'Company',
  },
  {
    id: 5,
    name: 'Job Title',
  },
  {
    id: 6,
    name: 'Experience Level',
  },
  {
    id: 7,
    name: 'ERGs',
  },
  {
    id: 8,
    name: 'Values',
  },
  {
    id: 9,
    name: 'Remote Culture',
  },
  {
    id: 10,
    name: 'Benefits',
  },
  {
    id: 11,
    name: 'Salary',
  },
];

const RecommendedDropdown = [
  {
    id: 1,
    name: 'Recommended',
    logo: ListLogo,
  },
  {
    id: 2,
    name: 'Newest',
    logo: ClockLogo,
  },
  {
    id: 3,
    name: 'Applied',
    logo: BlackTick,
  },
  {
    id: 4,
    name: 'Saved',
    logo: BookmarkLogo,
  },
];

const JobsAndCompanies = () => {
  const [isRecommended, setIsRecommended] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(
    RecommendedDropdown[0]
  );
  const [searchText, setSearchText] = useState('');
  const [showClearLogo, setShowClearLogo] = useState(false);

  useEffect(() => {
    if (searchText) {
      setShowClearLogo(true);
    } else {
      setShowClearLogo(false);
    }
  }, [searchText]);

  const clearSearchText = () => {
    setSearchText('');
    setShowClearLogo(false);
  };

  return (
    <div>
      <div className="h-full w-full flex sticky top-0   bg-white  items-center  z-10 border-b border-gray-border ">
        <div className=" w-full overflow-x-auto sm:max-w-[62.5rem]  h-full mx-auto  flex items-center flex-nowrap sm:flex-wrap ">
          {JobsFilter.map((filter) => (
            <FilterCard key={filter.id} name={filter.name} />
          ))}
          <div className="px-[14.5px] ml-auto py-[6px] my-[4px] mr-[2px] border border-black rounded w-fit h-[35px] flex-shrink-0">
            <p
              onClick={() => setIsRecommended(!isRecommended)}
              className="text-[0.875rem] leading-[150%] font-medium text-primary-text captilize cursor-pointer flex items-center gap-[7px] ">
              <Image
                src={selectedDropdown.logo}
                alt="List Logo"
                className="w-[14px] h-[14px] "
              />
              <span>{selectedDropdown.name}</span>
              <Image
                src={BlackDownTriangle}
                alt="Black Down Triangle"
                className="w-[14px] h-[14px] "
              />
            </p>
            {isRecommended && (
              <div className="bg-white w-[150px] absolute top-[50px] sm:top-[90px] right-2  py-1 rounded shadow-lg ">
                <div className="">
                  {RecommendedDropdown.map((dropdown) => (
                    <div
                      onClick={() => [
                        setSelectedDropdown(dropdown),
                        setIsRecommended(false),
                      ]}
                      key={dropdown.id * 99}
                      className="flex items-center gap-[7px] px-[14px] py-[5px] cursor-pointer hover:bg-gray-hover w-full ">
                      <Image
                        src={dropdown.logo}
                        alt="Black Tick"
                        className="w-[16px] h-[16px] "
                      />
                      <span className="text-[0.875rem] leading-[22px]">
                        {dropdown.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[62.5rem] w-full min-h-screen h-full mx-auto bg-orange-100 mt-5 z-0">
        {/* Search Field */}
        <div className="w-full mobile-lg:px-3 lg:px-0 h-[50px] rounded-md relative z-0 mb-[15px]">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-full focus:outline-none bg-white px-12 border border-gray-border focus:border-black rounded-md"
          />
          <Image
            src={SearchLogo}
            alt="Search Logo"
            className="absolute top-1/2 transform -translate-y-1/2 left-4 w-[16px] h-[16px]"
          />

          <Image
            src={CrossLogoWhite}
            onClick={clearSearchText}
            alt="Cross Logo"
            className={`absolute top-1/2 transform scale-0 -translate-y-1/2 right-7 w-[16px] h-[16px] bg-black/20 p-1 rounded-full cursor-pointer ${
              showClearLogo ? 'scale-100 ' : 'scale-0 '
            } transition-all duration-300`}
          />
        </div>
        {/* Cards section */}
        <div className="p-[0.9375rem] border border-gray-border rounded bg-white h-full">
          <p className="uppercase text-[0.8125rem] leading-[1.125rem] text-secondary-text font-medium mb-[15px]">
            YOUR TOP JOB MATCHES ON UNTAPPED
          </p>
          <div className="grid grid-cols-1 mobile-lg:grid-cols-3 gap-[0.9375rem] ">
            <JobsCard />
            <JobsCard />
            <JobsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAndCompanies;
