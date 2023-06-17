import React from 'react';
import BrandLogo from '@/assets/brand-logo-combined.svg';
import { useState } from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import HomeLogo from '@/assets/HomeLogo.svg';
import JobsLogo from '@/assets/JobsLogo.svg';
import CompaniesLogo from '@/assets/CompaniesLogo.svg';
import EventsLogo from '@/assets/EventsLogo.svg';
import NotificationLogo from '@/assets/notifications.svg';
import MikeLogo from '@/assets/mike.png';
import SettingsLogo from '@/assets/settings.svg';
import RemoteWorkLogo from '@/assets/remote-work.png';
import SideBarLinkCard from '@/components/SideBarLinkCard';
import SearchBox from '@/components/SearchBox';
import PlusLogo from '@/assets/PlusLogo.svg';
import AllPostsLogo from '@/assets/Community.svg';
import GeneralAdviceLogo from '@/assets/general-advice.png';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/ui-slice';

const SideBar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('Home');
  const [search, setSearch] = useState('');

  const { isSidebarOpen } = useSelector((state) => state.ui);

  const handleClick = ({ text }) => {
    setActive(text);
  };

  const targetRef = useRef();

  const handleClickOutside = (event) => {
    if (!targetRef.current.contains(event.target)) {
      dispatch(uiActions.toggleSidebar());
    }
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:block w-[17.5rem]  min-h-screen h-full flex-shrink-0 z-50 bg-white  `}>
        <div className="px-5 pt-6 ">
          <div className="flex items-center justify-between  ">
            <Link href="/">
              <div className="w-[100px] cursor-pointer">
                <Image src={BrandLogo} alt="Brand Logo" />
              </div>
            </Link>
            <div className="flex gap-4">
              <Image
                src={SettingsLogo}
                alt="settings"
                className="h-5 scale-[85%] hover:scale-[120%] cursor-pointer transition-all duration-200"
              />
              <Image
                src={NotificationLogo}
                alt="Notifications Logo"
                className="h-5 scale-[85%]  hover:scale-[120%] cursor-pointer transition-all duration-200"
              />
            </div>
          </div>
          <hr className="mt-3 mb-1 h-[1px] bg-[#f2f2f2]" />
        </div>
        <div className="pt-3 pb-[6.25rem] ">
          <div>
            <SideBarLinkCard
              handleClick={handleClick}
              logo={HomeLogo}
              isActive={active == 'Home'}
              text={'Home'}
              rounded={false}
              link={'home'}
            />
            <SideBarLinkCard
              logo={JobsLogo}
              isActive={active == 'Jobs'}
              text={'Jobs'}
              handleClick={handleClick}
              rounded={false}
              link={'jobs'}
            />
            <SideBarLinkCard
              logo={EventsLogo}
              isActive={active == 'Events'}
              text={'Events'}
              handleClick={handleClick}
              rounded={false}
              link={'events'}
            />
            <SideBarLinkCard
              logo={CompaniesLogo}
              isActive={active == 'Companies'}
              text={'Companies'}
              handleClick={handleClick}
              rounded={false}
              link={'companies'}
            />
            <SideBarLinkCard
              logo={'https://xsgames.co/randomusers/avatar.php?g=pixel'}
              isActive={active == 'Balaganesh K'}
              text={'Balaganesh K'}
              handleClick={handleClick}
              rounded={true}
              link={'balaganesh-k'}
            />
          </div>
          {/* Direct Message */}
          <div>
            <div className="px-6 pt-8 pb-3">
              <p className="text-[0.75rem] leading-[150%] tracking-[0.08rem] text-primary-text uppercase">
                Direct messages
              </p>
            </div>
            {/* search Box */}
            <div className="px-6">
              <div className="mt-3 mb-2">
                <SearchBox
                  search={search}
                  setSearch={setSearch}
                  shadow={false}
                  crossLogo={false}
                />
              </div>
            </div>
            <SideBarLinkCard
              logo={Logo}
              text={'Team @ Untapped'}
              rounded={true}
              handleClick={handleClick}
              isActive={active == 'Team @ Untapped'}
              link={'team-untapped'}
            />
          </div>
          {/* Communities */}
          <div>
            <div className="px-6 pt-8 pb-3 flex items-center justify-between">
              <p className="text-[0.75rem] leading-[150%] tracking-[0.08rem] text-primary-text uppercase">
                Communities (3)
              </p>
              <button className="text-[0.75rem] leading-[150%] tracking-[0.08rem] text-primary-text uppercase flex gap-1 items-center border border-primary-text rounded-full px-2 py-1">
                <Image
                  src={PlusLogo}
                  alt="plus logo"
                  className="w-[14px] h-[10px] mb-[2px]"
                />
                <span>Join</span>
              </button>
            </div>

            <SideBarLinkCard
              logo={AllPostsLogo}
              text={'All Posts'}
              rounded={false}
              handleClick={handleClick}
              isActive={active == 'All Posts'}
              link={'posts'}
            />

            <SideBarLinkCard
              logo={GeneralAdviceLogo}
              text={'General Advice'}
              rounded={false}
              handleClick={handleClick}
              isActive={active == 'General Advice'}
              link={'general-advice'}
            />

            <SideBarLinkCard
              logo={MikeLogo}
              text={'Recruiter Announcements'}
              rounded={true}
              handleClick={handleClick}
              isActive={active == 'Recruiter Announcements'}
              link={'recruiter-announcements'}
            />

            <SideBarLinkCard
              logo={RemoteWorkLogo}
              text={'Remote Work'}
              rounded={false}
              handleClick={handleClick}
              isActive={active == 'Remote Work'}
              link="remote-work"
            />
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}

      <div
        onClick={handleClickOutside}
        className={`lg:hidden ${
          isSidebarOpen
            ? ' transform translate-x-0'
            : 'transform -translate-x-[150%] '
        }  ease-in-out w-full min-h-screen bg-black/50 fixed top-0 left-0 z-[999]`}>
        <div
          ref={targetRef}
          className={`w-[17.5rem] ${
            isSidebarOpen
              ? 'transform translate-x-0'
              : 'transform -translate-x-[150%]'
          } min-h-screen h-full flex-shrink-0 transition-all duration-500 z-50 bg-white`}>
          {/*  */}

          <div className="cursor-pointer pt-[2rem] px-[1.25rem] pb-[0.5rem]">
            <Link href="/" onClick={() => dispatch(uiActions.toggleSidebar())}>
              <Image
                src={BrandLogo}
                alt="Hamburger Logo"
                className="w-fit h-[20px] "
              />
            </Link>
          </div>
          <div>
            <div className="px-6 pt-8 pb-3 flex items-center justify-between">
              <p className="text-[0.75rem] leading-[150%] tracking-[0.08rem] text-primary-text uppercase">
                Your Communities
              </p>
            </div>
            <div onClick={() => dispatch(uiActions.toggleSidebar())}>
              <SideBarLinkCard
                logo={AllPostsLogo}
                text={'All Posts'}
                rounded={false}
                handleClick={handleClick}
                isActive={active == 'All Posts'}
                link={'posts'}
              />
            </div>
            <div onClick={() => dispatch(uiActions.toggleSidebar())}>
              <SideBarLinkCard
                onClick={() => dispatch(uiActions.toggleSidebar())}
                logo={GeneralAdviceLogo}
                text={'General Advice'}
                rounded={false}
                handleClick={handleClick}
                isActive={active == 'General Advice'}
                link={'general-advice'}
              />
            </div>
            <div onClick={() => dispatch(uiActions.toggleSidebar())}>
              <SideBarLinkCard
                onClick={() => dispatch(uiActions.toggleSidebar())}
                logo={MikeLogo}
                text={'Recruiter Announcements'}
                rounded={true}
                handleClick={handleClick}
                isActive={active == 'Recruiter Announcements'}
                link={'recruiter-announcements'}
              />
            </div>
            <div onClick={() => dispatch(uiActions.toggleSidebar())}>
              <SideBarLinkCard
                onClick={() => dispatch(uiActions.toggleSidebar())}
                logo={RemoteWorkLogo}
                text={'Remote Work'}
                rounded={false}
                handleClick={handleClick}
                isActive={active == 'Remote Work'}
                link="remote-work"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
