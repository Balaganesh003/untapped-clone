import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className={`${inter.className} `}>
      <div className="w-full bg-primary">
        {/* NavBar */}
        <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        {/* Sidebar */}
        <div className="w-full flex lg:max-h-screen ">
          <div className=" w-fit overflow-y-scroll flex-shrink-0 scrollbar-hide ">
            <SideBar
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          </div>
          {/* Main */}
          <main className="w-full  lg:overflow-y-scroll">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
