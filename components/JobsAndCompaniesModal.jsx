import React from 'react';
import Image from 'next/image';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';

const JobsAndCompaniesModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform  mobile-lg:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <div
        className={`block mobile-lg:rounded-lg min-h-screen mobile-lg:min-h-fit bg-white mobile-lg:max-w-[64rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block mobile-lg:rounded-lg  bg-primary mobile-lg:max-w-[64rem] w-full  max-h-screen overflow-y-auto relative">
          <div className="h-[14rem] w-full bg-white sticky top-0 ">
            {/* CloseLogo */}
            <div
              onClick={() => setIsModalOpen(false)}
              className="p-[9px] bg-black/[15%] rounded-full absolute  top-[14px]  right-[10px] cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
              <Image
                src={CrossLogoWhite}
                alt="Cross Logo"
                className={` w-[14px] h-[14px]`}
              />
            </div>
          </div>
          <div className="h-[10rem] w-full ">modal content</div>
        </div>
      </div>
    </div>
  );
};

export default JobsAndCompaniesModal;
