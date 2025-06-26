import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row flex-wrap items-center justify-between px-2 sm:px-4 py-2 bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 z-50 min-h-0">
      <div className="flex items-center">
        <span className="text-base sm:text-xl font-extrabold text-gray-800 tracking-wide">ROLL A </span>
        {/*<img src={process.env.PUBLIC_URL + '/favivon.png'} alt="logo" />*/}
        <span className="text-base sm:text-xl font-extrabold text-gray-800 tracking-wide ml-1">GAME</span>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-4 w-auto">
        <button className="text-gray-600 font-semibold hover:text-gray-900 transition-colors px-2 py-1 text-sm">Log in</button>
        <button className="bg-gray-800 text-white font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-gray-700 transition-colors text-sm">Register</button>
      </div>
    </nav>
  );
};

export default Navbar; 