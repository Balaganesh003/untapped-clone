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
      <div className="w-full">
        {/* NavBar */}
        <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        {/* Sidebar */}
        <div className="w-full flex">
          <SideBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
          {/* Main */}
          <div className="bg-gray-400  w-full">
            <JobsAndCompanies />
          </div>
        </div>
      </div>
    </div>
  );
}
