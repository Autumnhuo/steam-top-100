import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameList from './components/GameList';

function App() {
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <main className="max-w-4xl mx-auto pt-12 pb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">好评如潮<span className="text-gray-500 font-extrabold">TOP100</span>游戏</h2>
          <GameList />
        </main>
      </div>
    </div>
  );
}

export default App;
