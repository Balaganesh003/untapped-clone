import React from 'react';
import BrandLogo from '../assets/brand-logo-combined.svg';
import { useState } from 'react';
import Logo from '../assets/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import HomeLogo from '../assets/HomeLogo.svg';
import JobsLogo from '../assets/JobsLogo.svg';
import CompaniesLogo from '../assets/CompaniesLogo.svg';
import EventsLogo from '../assets/EventsLogo.svg';
import NotificationLogo from '../assets/Notifications.svg';
import MikeLogo from '../assets/mike.png';
import SettingsLogo from '../assets/settings.svg';
import RemoteWorkLogo from '../assets/remote-work.png';
import SideBarLinkCard from './SideBarLinkCard';
import SearchBox from './SearchBox';
import PlusLogo from '../assets/PlusLogo.svg';
import AllPostsLogo from '../assets/Community.svg';
import GeneralAdviceLogo from '../assets/general-advice.png';

const SideBar = ({ showSideBar }) => {
  const [active, setActive] = useState('Home');
  const [search, setSearch] = useState('');

  const handleClick = ({ text }) => {
    setActive(text);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div
        className={`hidden lg:block w-[17.5rem]  min-h-screen h-full flex-shrink-0 z-50 bg-white `}>
        <div className="px-5 pt-6 ">
          <div className="flex items-center justify-between  ">
            <div className="w-[100px] cursor-pointer">
              <Image src={BrandLogo} alt="Brand Logo" />
            </div>
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
            />
            <SideBarLinkCard
              logo={JobsLogo}
              isActive={active == 'Jobs'}
              text={'Jobs'}
              handleClick={handleClick}
              rounded={false}
            />
            <SideBarLinkCard
              logo={EventsLogo}
              isActive={active == 'Events'}
              text={'Events'}
              handleClick={handleClick}
              rounded={false}
            />
            <SideBarLinkCard
              logo={CompaniesLogo}
              isActive={active == 'Companies'}
              text={'Companies'}
              handleClick={handleClick}
              rounded={false}
            />
            <SideBarLinkCard
              logo={'https://xsgames.co/randomusers/avatar.php?g=pixel'}
              isActive={active == 'Balaganesh K'}
              text={'Balaganesh K'}
              handleClick={handleClick}
              rounded={true}
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
                <SearchBox search={search} setSearch={setSearch} />
              </div>
            </div>
            <SideBarLinkCard
              logo={Logo}
              text={'Team @ Untapped'}
              rounded={true}
              handleClick={handleClick}
              isActive={active == 'Team @ Untapped'}
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
            />

            <SideBarLinkCard
              logo={GeneralAdviceLogo}
              text={'General Advice'}
              rounded={false}
              handleClick={handleClick}
              isActive={active == 'General Advice'}
            />

            <SideBarLinkCard
              logo={MikeLogo}
              text={'Recruiter Announcements'}
              rounded={true}
              handleClick={handleClick}
              isActive={active == 'Recruiter Announcements'}
            />

            <SideBarLinkCard
              logo={RemoteWorkLogo}
              text={'Remote Work'}
              rounded={false}
              handleClick={handleClick}
              isActive={active == 'Remote Work'}
            />
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
    </div>
  );
};

export default SideBar;
