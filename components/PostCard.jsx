import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import MoreLogo from '@/assets/MoreLogo.svg';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import RightArrow from '@/assets/GrayDownArrow.svg';
import LeftArrow from '../assets/LeftGrayArrow.svg';

const PostCard = ({ post }) => {
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

  return (
    <div className="mb-[1rem]  cursor-pointer lg:rounded border border-gray-hover">
      <div className="w-[100%] h-full flex  space-x-4 items-center bg-white md:rounded-lg">
        <div className="w-full">
          {post && post != null && (
            <div key={post.id} className=" md:rounded-lg  w-full  ">
              <div className={`px-3 md:px-6 py-6  lg:p-8 text-ellipsis`}>
                <div className="flex gap-[10px]">
                  <div className="flex flex-shrink-0 ">
                    <Image
                      src={post?.author?.imgUrl}
                      width={32}
                      height={32}
                      alt="ProfilePhoto"
                      className="w-9 h-9 rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4 w-full">
                    <div className="flex flex-col ">
                      <div className="flex gap-1">
                        <p className="text-[0.75rem] font-semibold text-primary-text hover:underline underline-primary-text leading-[130%]">
                          {post?.author?.name}
                        </p>
                        <span className="text-[0.75rem]">in</span>
                        <p className="text-[0.75rem] font-semibold text-primary-text hover:underline underline-primary-text leading-[130%]">
                          {post?.community}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex text-sm space-x-[0.3rem] items-center ">
                          <p className="flex">
                            <TimeAgo
                              date={post.createAt}
                              className=" text-secondary-text text-[0.75rem] font-normal leading-[130%]"
                            />
                          </p>
                          <div className=" bg-primary-text w-[2px] h-[2px] rounded-full"></div>
                          <p className="flex text-secondary-text text-[0.75rem] font-normal leading-[130%]">
                            252 views
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={MoreLogo}
                        alt="MoreLogo"
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mobile-lg:pl-[42px] md:pl-[44px]">
                  {/* Heading */}

                  <h1 className="text-primary-text mb-2 text-[1rem] font-semibold leading-[130%] ">
                    {post?.title}
                  </h1>
                  {/* Description */}
                  <div className="text-secondary-text leading-[1.375rem]  text-[0.875rem] font-normal break-words description max-w-[36.75rem] flex-shrink text-ellipsis">
                    {post.description && parser(post.description)}
                  </div>
                </div>

                {/* Comment Box */}
                <div className="flex gap-4 items-center pt-3">
                  <div
                    onClick={() =>
                      setIsProfileDropDownOpen(!isProfileDropDownOpen)
                    }
                    className="border border-[#e0e0e0] rounded-full cursor-pointer flex-shrink-0 p-[6px] w-fit flex gap-2 items-center active:scale-[95%] transition-all duration-200">
                    <Image
                      src={post?.author?.imgUrl}
                      width={32}
                      height={32}
                      alt="ProfilePhoto"
                      className="w-8 h-8 rounded-full border"
                    />
                    <Image
                      src={LeftArrow}
                      alt="DownArrow"
                      className={`w-3 h-3 -rotate-90 pr-1 transi duration-300 `}
                    />
                  </div>

                  <div className="w-full text-primary-text bg-primary pt-[10px] pb-[6px] rounded-lg">
                    <input
                      onFocusCapture={() => setIsCommentBoxOpen(true)}
                      onBlurCapture={() => setIsCommentBoxOpen(false)}
                      type="text"
                      placeholder="Add a comment"
                      className="w-full h-full outline-none text-[1rem] leading-[1.375rem] py-[0.1rem] px-[0.875rem] bg-transparent text-primary-text placeholder:text-primary-text"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
