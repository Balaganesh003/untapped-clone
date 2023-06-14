import React from 'react';

const NavBar = ({ setShowSideBar, showSideBar }) => {
  return (
    <div
      onClick={() => setShowSideBar(!showSideBar)}
      className="h-[4.75rem] w-full lg:hidden bg-red-500">
      NavBar
    </div>
  );
};

export default NavBar;
