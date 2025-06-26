import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-8 py-6 flex justify-between items-center bg-transparent">
      <div className="text-3xl font-extrabold text-blue-800 drop-shadow">Steam Top 100</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search games..."
          className="bg-white text-gray-800 rounded-full px-5 py-2 w-80 border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 focus:w-96 shadow-md"
        />
      </div>
    </header>
  );
};

export default Header; 