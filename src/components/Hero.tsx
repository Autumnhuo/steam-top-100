import React from 'react';

const categories = ['剧情', '射击', '角色扮演', '冒险', '策略', '解谜', '模拟', '经营'];

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-wide mb-4">
          STEAM <span className="text-blue-700">TOP 100 GAMES</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <span key={cat} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-base font-medium">
              {cat}
            </span>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="搜索你喜欢的游戏..."
              className="w-full bg-gray-100 text-gray-800 rounded-full pl-12 pr-6 py-3 text-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all duration-300"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 