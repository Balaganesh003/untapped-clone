import JobsAndCompanies from '@/components/JobsAndCompanies';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
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
          <div className="w-full  lg:overflow-y-scroll">
            <JobsAndCompanies />
          </div>
        </div>
      </div>
    </div>
  );
}
