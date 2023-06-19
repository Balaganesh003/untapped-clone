import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SearchAndDropDown from '@/components/SearchAndDropDown';
import PostCard from '@/components/PostCard';
import { useSelector } from 'react-redux';
import HamburgerLogo from '@/assets/HamBurgerLogo.svg';
import WhitePencilLogo from '@/assets/WhitePencil.svg';
import TrendingPostCard from '@/components/TrendingPostCard';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/ui-slice';
import CreatePost from '@/components/CreatePost';

const Posts = () => {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState('Hot');
  const [sortDropDown, setSortDropDown] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const [selectedCommunity, setSelectedCommunity] = useState('All Communities');

  const { posts, TrendingPostData } = useSelector((state) => state.posts);

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
            hasScrolled ? 'opacity-[100%] z-[60] ' : 'opacity-0 '
          }`}>
          <div className="mt-0 flex w-full   max-w-[66rem] text-[1rem] items-center">
            <div className="flex items-center w-full lg:w-[67%]">
              <div className="mr-6">
                <Image
                  onClick={() => dispatch(uiActions.toggleSidebar())}
                  src={HamburgerLogo}
                  alt="Hamburger Logo"
                  className="w-[14px] h-[20px] cursor-pointer"
                />
              </div>
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
        {/* Create Post */}
        <div
          className={`bg-link z-[50] cursor-pointer ${
            hasScrolled ? 'block ' : 'hidden '
          }hover:bg-create-button shadow-nav min-h-[2.5rem] min-w-[15rem] flex items-center justify-center fixed bottom-[2.5rem] left-[50%] -translate-x-1/2 rounded-full group transition-all duration-200 ease-in-out-expo`}>
          <div
            onClick={() => setIsCreatePostOpen(true)}
            className="group-hover:scale-95 flex gap-2 items-center ">
            <Image
              src={WhitePencilLogo}
              alt="White Pencil Logo"
              className="w-[1rem] h-[1rem]"
            />
            <span className="text-[0.875rem] text-white leading-[130%] font-semibold">
              Create a Post
            </span>
          </div>
        </div>
        <div className="block">
          <div
            ref={targetRef}
            className={`w-full  bg-white
          relative`}>
            <div
              className={`h-full w-full max-w-[66rem] mx-auto flex bg-white items-center z-10 `}>
              <div
                className={`sm:max-w-[66rem] lg:pb-[1.5rem] w-full mx-auto `}>
                {/* All posts */}
                <div
                  className={`lg:mt-[1.5rem] mt-[1.25rem] px-[1.25rem] lg:px-[1rem] lg:pt-[4rem] `}>
                  <div className="mr-6 pb-[1.15rem] lg:hidden">
                    <Image
                      onClick={() => dispatch(uiActions.toggleSidebar())}
                      src={HamburgerLogo}
                      alt="Hamburger Logo"
                      className="w-[14px] h-[20px] cursor-pointer"
                    />
                  </div>
                  <p className="text-[1.5rem] mobile-lg:text-[2rem] text-black font-semibold leading-[125%]">
                    All Posts
                  </p>
                  <div className="mt-1 lg:mt-2 text-primary-text text-[0.75rem] leading-[130%] font-normal flex items-center gap-[17px] divide-x-[1.5px]">
                    <div>
                      <p>690,944 members</p>
                    </div>
                    <div className="flex items-center pl-[17px]">
                      <div className="w-[6px] h-[6px] bg-dot rounded-full mr-[6px]"></div>
                      <div>955 online</div>
                    </div>
                  </div>
                </div>
                {/* Slidebar */}
                <div className="block lg:hidden w-full mt-5 border-y border-gray-hover ">
                  <div className="flex w-full  transition-all duration-300">
                    <div
                      onClick={() => setSelectedCommunity('Feed')}
                      className={`flex-1 text-center text-[0.75rem] leading-[130%] cursor-pointer p-[0.9rem] font-semibold`}>
                      Feed
                    </div>
                    <div
                      onClick={() => setSelectedCommunity('Communities')}
                      className={`flex-1 text-center text-[0.75rem] leading-[130%] p-[0.9rem] cursor-pointer font-semibold`}>
                      Communities
                    </div>
                  </div>
                  <div
                    className={`h-1 rounded-full w-full  relative before:content-[''] before:w-[50%] before:absolute ${
                      selectedCommunity == 'Feed'
                        ? 'before:left-0'
                        : 'before:right-0'
                    }  before:h-1 before:bg-black before:rounded-lg`}></div>
                </div>
                {/* All post nav */}
              </div>
            </div>
          </div>
        </div>
        {/* Post and features section */}
        <div className="max-w-[66rem] w-full min-h-screen h-full mx-auto lg:px-[1rem] mt-[3rem] z-0 flex">
          {/* {Post section} */}
          <div className=" flex-grow flex-shrink-1 basis-[66%] sm:min-w-[21.875rem] min-h-screen h-full lg:mr-[10px] w-full z-0 text-secondary-text mb-10">
            <div className="w-full h-full px-[0.5rem] lg:px-0 mb-5 z-0">
              <div className="w-full h-[2.5rem] mx-[0.5rem]">
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

              <div
                onClick={() => setIsCreatePostOpen(true)}
                className="mt-[1rem] bg-white p-[2rem] min-h-[5.8125rem] rounded-lg shadow-nav hover:scale-[101%] transform transition-all duration-200 ease-in-out-expo w-full flex cursor-pointer ">
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
                    Ask Questions or Share with Your community
                  </p>
                </div>
              </div>
            </div>
            {/* Postcard */}
            <div className="">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          {/* Trending post */}
          <div className="ml-[10px] hidden bg-white lg:flex  basis-[32%] flex-grow-0 flex-shrink-1 min-w-[14.75rem] max-w-[18.75rem]  rounded-lg overflow-hidden mb-10 h-fit border border-gray-hover">
            <div className="flex flex-col rounded-t-lg ">
              <p className="text-secondary-text px-[1.5rem] py-[1rem] border-b border-gray-hover text-[0.875rem] leading-[130%]">
                Trending
              </p>
              <div className="flex flex-col ">
                {TrendingPostData.map((post) => (
                  <TrendingPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    name={post.author.name}
                    community={post.community}
                    createAt={post.createAt}
                    no_views={post.no_views}
                    imgUrl={post.author.imgUrl}
                    no_likes={post.no_likes}
                    no_comments={post.comments.length}
                    isLiked={post.isLiked}
                    hasFollowed={post.hasFollowed}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Create post  */}
      <CreatePost
        isCreatePostOpen={isCreatePostOpen}
        setIsCreatePostOpen={setIsCreatePostOpen}
      />
    </div>
  );
};

export default Posts;
