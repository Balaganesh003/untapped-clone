import SearchBox from '@/components/SearchBox';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SearchAndDropDown from '@/components/SearchAndDropDown';
import PostCard from '@/components/PostCard';
import { useSelector } from 'react-redux';

const Posts = () => {
  const targetRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('Hot');
  const [sortDropDown, setSortDropDown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHasScrolled(!entry.isIntersecting);
    });
    observer.observe(targetRef.current);
  }, []);

  return (
    <div className="bg-primary">
      <div className="">
        {/* search */}
        <div
          className={`h-[4.5rem] w-full lg:w-[calc(100%-296.5px)]  py-[1rem] px-[1.35rem] bg-white shadow-nav  fixed top-0 flex justify-center  transition-all duration-300 ease-in-out-expo ${
            hasScrolled ? 'opacity-[100%] z-[100] ' : 'opacity-0 '
          }`}>
          <div className="mt-0 flex w-full  max-w-[66rem] text-[1rem] items-center">
            <div className="flex items-center w-full lg:w-[67%]">
              {/* search and dropdown */}
              <SearchAndDropDown
                search={search}
                setSearch={setSearch}
                isHover={isHover}
                setIsHover={setIsHover}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                sortDropDown={sortDropDown}
                setSortDropDown={setSortDropDown}
              />
            </div>
          </div>
        </div>
        <div className="block">
          <div
            ref={targetRef}
            className={`w-full  bg-white
          relative`}>
            <div
              className={`h-full w-full max-w-[66rem] mx-auto flex bg-white items-center z-10 `}>
              <div className={`sm:max-w-[66rem] pb-[1.5rem] w-full mx-auto`}>
                {/* All posts */}
                <div className={`mt-[1.5rem] px-[1rem] pt-[4rem] `}>
                  <p className="text-[2rem] text-black font-semibold leading-[125%]">
                    All Posts
                  </p>
                  <div className="mt-2 text-primary-text text-[0.75rem] leading-[130%] font-normal flex items-center gap-3 divide-x-[1.5px]">
                    <div>
                      <p>690944 members</p>
                    </div>
                    <div className="flex items-center pl-3">
                      <div className="w-[6px] h-[6px] bg-dot rounded-full mr-[6px]"></div>
                      <div>955 online</div>
                    </div>
                  </div>
                </div>
                {/* All post nav */}
              </div>
            </div>
          </div>
        </div>
        {/* Post and features section */}
        <div className="max-w-[66rem] w-full min-h-screen h-full mx-auto lg:px-[1rem] mt-[3rem] z-0 flex">
          {/* {Post section} */}
          <div className=" flex-grow flex-shrink-1 basis-[66%] sm:min-w-[21.875rem] min-h-screen lg:mr-[10px] w-full z-0 text-secondary-text mb-10">
            <div className="w-full px-[1rem] lg:px-0 mb-5">
              <SearchAndDropDown
                search={search}
                setSearch={setSearch}
                isHover={isHover}
                setIsHover={setIsHover}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                sortDropDown={sortDropDown}
                setSortDropDown={setSortDropDown}
              />
              <div className="mt-[1rem] bg-white p-[2rem] min-h-[5.8125rem] rounded-lg shadow-nav hover:scale-[101%] transform transition-all duration-200 ease-in-out-expo w-full flex cursor-pointer">
                <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-gray-400 flex-shrink-0">
                  <Image
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="avatar"
                    width={54}
                    height={54}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-[1rem] flex-grow ">
                  <p className="text-[0.75rem] mb-1 text-secondary-text leading-[130%]">
                    Balaganesh K
                  </p>
                  <p className="text-[1rem] leading-[150%] text-secondary-text">
                    Ask Questions or Share your knowledge with the community
                  </p>
                </div>
              </div>
            </div>
            {/* Postcard */}
            <div>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          {/* Trending post */}
          <div className="ml-[10px] hidden lg:flex bg-blue-400 basis-[32%] flex-grow-0 flex-shrink-1 min-w-[14.75rem] max-w-[18.75rem] min-h-screen">
            Trending post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
