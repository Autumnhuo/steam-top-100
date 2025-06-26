import React, { useState, useMemo, useRef, useEffect } from 'react';
import GameCard from './GameCard';

const initialGames = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  title: `Game Title ${i + 1}`,
  imageUrl: `https://placehold.co/128x128/6366f1/white?text=Game+${i + 1}`,
  author: `Awesome Studio ${i + 1}`,
  tags: ['Action', 'Adventure', 'Indie', 'RPG'].slice(i % 4, (i % 4) + 2),
  rating: 80 + (i % 20), // 80-99%
  positiveReviews: (123456 - (i * 1234)).toLocaleString(),
  reviewSummary: 'Overwhelmingly Positive',
  price: `$${(19.99 + (i % 10) * 5).toFixed(2)}`,
  historicalLow: `$${(9.99 + (i % 10) * 2).toFixed(2)}`,
}));

const ITEMS_PER_PAGE = 10;

type SortKey = 'rank' | 'price';
type SortDirection = 'asc' | 'desc';

const GameList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({ key: 'rank', direction: 'asc' });
  const listRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const sortedGames = useMemo(() => {
    const parsePrice = (priceStr: string) => parseFloat(priceStr.replace('$', ''));

    return [...initialGames].sort((a, b) => {
      let comparison = 0;
      if (sortConfig.key === 'price') {
        comparison = parsePrice(a.price) - parsePrice(b.price);
      } else {
        comparison = a.rank - b.rank;
      }
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [sortConfig]);

  const totalPages = Math.ceil(sortedGames.length / ITEMS_PER_PAGE);

  const paginatedGames = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedGames.slice(startIndex, endIndex);
  }, [currentPage, sortedGames]);
  
  const handleSortChange = (key: SortKey) => {
    setSortConfig(currentConfig => {
      if (currentConfig.key === key) {
        return { ...currentConfig, direction: currentConfig.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div ref={listRef}>
      <div className="flex flex-col xs:flex-row justify-end mb-4 space-y-2 xs:space-y-0 xs:space-x-2 w-full overflow-x-auto">
        <button
          onClick={() => handleSortChange('rank')}
          className={`px-3 sm:px-4 py-2 font-semibold rounded-md shadow-sm transition-colors text-xs sm:text-sm ${
            sortConfig.key === 'rank' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          按排名 {sortConfig.key === 'rank' && (sortConfig.direction === 'asc' ? '升序' : '降序')}
        </button>
        <button
          onClick={() => handleSortChange('price')}
          className={`px-3 sm:px-4 py-2 font-semibold rounded-md shadow-sm transition-colors text-xs sm:text-sm ${
            sortConfig.key === 'price' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          按价格 {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? '升序' : '降序')}
        </button>
      </div>

      <div className="w-full flex flex-col gap-4 sm:gap-6">
        {paginatedGames.map((game) => (
          <GameCard
            key={game.rank}
            rank={game.rank}
            title={game.title}
            imageUrl={game.imageUrl}
            author={game.author}
            tags={game.tags}
            rating={game.rating}
            positiveReviews={game.positiveReviews}
            reviewSummary={game.reviewSummary}
            price={game.price}
            historicalLow={game.historicalLow}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-10 space-x-2 sm:space-x-4 w-full overflow-x-auto">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
        >
          上一页
        </button>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md transition-colors text-xs sm:text-sm font-medium ${
                currentPage === page
                  ? 'bg-gray-800 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default GameList; 