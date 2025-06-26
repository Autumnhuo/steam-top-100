import React from 'react';

interface GameCardProps {
  rank: number;
  title: string;
  imageUrl: string;
  author: string;
  tags: string[];
  rating: number; // e.g. 95 for 95% positive reviews
  positiveReviews: string; // e.g. "1,234,567"
  reviewSummary: string; // e.g. "Overwhelmingly Positive"
  price: string; // e.g. "$29.99"
  historicalLow: string; // e.g. "$19.99"
}

const GameCard: React.FC<GameCardProps> = ({ rank, title, imageUrl, author, tags, rating, positiveReviews, reviewSummary, price, historicalLow }) => {
  const stars = Math.round(rating / 20); // Convert 0-100 scale to 0-5 stars

  return (
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-row items-center border border-gray-200 px-2 sm:px-6 py-1 sm:py-4 min-h-0">
      <img src={imageUrl} alt={title} className="w-32 h-16 sm:w-48 sm:h-24 object-cover rounded-lg flex-shrink-0 mr-2 sm:mr-6" />
      <div className="flex-1 flex flex-col justify-center w-full min-w-0">
        <div className="flex flex-row items-center justify-between w-full">
          <h3 className="text-sm sm:text-xl font-bold text-gray-800 truncate" title={title}>{rank}. {title}</h3>
          <div className="text-right flex-shrink-0 ml-2 sm:ml-4">
            <p className="text-sm sm:text-2xl font-bold text-gray-800 leading-tight">{price}</p>
            <p className="text-xs text-gray-400 mt-0.5" title="Historical Low">{historicalLow}</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm mb-0.5 leading-tight truncate">By {author}</p>
        <div className="flex flex-wrap gap-1 mb-0.5">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 mb-0.5">
          <div className="flex items-center" title={`${rating}% Positive`}>
            {'★'.repeat(stars).split('').map((star, i) => <span key={i} className="text-yellow-400 text-xs sm:text-base">{star}</span>)}
            {'☆'.repeat(5 - stars).split('').map((star, i) => <span key={i} className="text-gray-200 text-xs sm:text-base">{star}</span>)}
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-500" title="Positive Reviews">
            <span role="img" aria-label="thumbs up">👍</span>
            <span className="ml-1">{positiveReviews}</span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5 leading-tight truncate">{reviewSummary}</p>
      </div>
    </div>
  );
};

export default GameCard; 