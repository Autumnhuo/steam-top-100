import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 sm:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center bg-transparent gap-2 sm:gap-0">
      <div className="text-2xl sm:text-3xl font-extrabold text-blue-800 drop-shadow mb-2 sm:mb-0">Steam Top 100</div>
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search games..."
          className="bg-white text-gray-800 rounded-full px-4 sm:px-5 py-2 w-full sm:w-80 border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 focus:w-full sm:focus:w-96 shadow-md"
        />
      </div>
    </header>
  );
};

export default Header; 