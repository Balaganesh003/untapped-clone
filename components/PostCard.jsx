import React, { useState } from 'react';
import Image from 'next/image';
import MoreLogo from '@/assets/MoreLogo.svg';
import parser from 'html-react-parser';
import TimeAgo from 'react-timeago';
import LeftArrow from '../assets/LeftGrayArrow.svg';
import OutlineHeart from '@/assets/OutlineHeart.svg';
import OutlineMessage from '@/assets/OutlineMessage.svg';
import OutlineBell from '@/assets/OutlineBell.svg';
import RedHeart from '@/assets/RedHeart.svg';
import YellowBell from '@/assets/YellowBell.svg';
import { postsActions } from '@/store/posts-slice';
import { useDispatch } from 'react-redux';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { id, isLiked, no_likes, comments, hasFollowed } = post;
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

  const handelLike = () => {
    dispatch(postsActions.toggleLike(id));
  };

  const handelFollow = () => {
    dispatch(postsActions.toggleFollow(id));
  };

  return (
    <div className="mb-[1rem]  cursor-pointer lg:rounded border border-gray-hover">
      <div className="w-[100%] h-full flex  space-x-4 items-center bg-white md:rounded-lg">
        <div className="w-full">
          {post && post != null && (
            <div
              key={post.id}
              className=" md:rounded-lg  w-full  divide-y-[1px] divide-gray-hover">
              <div
                className={`px-3 md:px-6 pt-6 pb-4 lg:p-8 lg:pb-4 text-ellipsis`}>
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
                  <div className="text-secondary-text leading-[1.375rem]  text-[0.875rem] font-normal break-words description max-w-[36.75rem] flex-shrink text-ellipsis ">
                    {post.description && parser(post.description)}
                  </div>
                  <div className="flex mt-4 items-center">
                    <div
                      onClick={handelLike}
                      className="p-[0.1875rem] mr-2 flex hover:scale-110 transition-all duration-100 ease-in-out-expo px-4 py-2 rounded-full border border-gray-text">
                      <Image
                        src={isLiked ? RedHeart : OutlineHeart}
                        alt="OutlineHeart"
                        className=" w-[14px] h-[1rem] cursor-pointer"
                      />

                      <span
                        className={`text-secondary-text ${
                          no_likes > 0 ? 'ml-1' : 'lg:ml-1'
                        } text-[0.75rem] font-normal leading-[130%]`}>
                        {no_likes > 0 && no_likes}
                        <span
                          className={`${
                            no_likes && 'ml-[4px]'
                          } hidden lg:inline-block`}>
                          Like
                        </span>
                      </span>
                    </div>

                    <div className="p-[0.1875rem] mr-2 flex hover:scale-110 transition-all duration-100 ease-in-out-expo px-4 py-2 rounded-full border border-gray-text">
                      <Image
                        src={OutlineMessage}
                        alt="OutlineMessage"
                        className="w-[14px] h-[1rem] cursor-pointer  "
                      />

                      <span
                        className={`text-secondary-text ${
                          comments.length > 0 ? 'ml-1' : 'lg:ml-1'
                        } text-[0.75rem] font-normal leading-[130%]`}>
                        {comments.length > 0 && comments.length}
                        <span
                          className={`${
                            comments.length && 'ml-[4px]'
                          } hidden lg:inline-block`}>
                          Comment
                        </span>
                      </span>
                    </div>

                    <div
                      onClick={handelFollow}
                      className="px-4 py-2 rounded-full border border-gray-text mr-2 flex items-center hover:scale-110 transition-all duration-100 ease-in-out-expo">
                      <Image
                        src={hasFollowed ? YellowBell : OutlineBell}
                        alt="OutlineBell"
                        className="w-[14px] h-[1rem] cursor-pointer"
                      />
                      <span className="text-secondary-text ml-1 text-[0.75rem] font-normal leading-[130%]">
                        {hasFollowed ? 'Following' : 'Follow'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Comment Box */}
                <div className="flex gap-4 items-center pt-4 pb-5 px-8">
                  <div
                    onClick={() =>
                      setIsProfileDropDownOpen(!isProfileDropDownOpen)
                    }
                    className="border border-[#e0e0e0] rounded-full cursor-pointer flex-shrink-0 p-[4px] w-fit flex gap-2 items-center active:scale-[95%] transition-all duration-200">
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
