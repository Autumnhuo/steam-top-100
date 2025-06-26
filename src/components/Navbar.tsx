import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold text-gray-800 tracking-wide">ROLL</span>
        <img src={process.env.PUBLIC_URL + '/favivon.png'} alt="logo" />
        <span className="text-2xl font-extrabold text-gray-800 tracking-wide">GAME</span>
      </div>
      <div className="flex items-center gap-6">
        <button className="text-gray-600 font-semibold hover:text-gray-900 transition-colors">Log in</button>
        <button className="bg-gray-800 text-white font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-gray-700 transition-colors">Register</button>
      </div>
    </nav>
  );
};

export default Navbar; 