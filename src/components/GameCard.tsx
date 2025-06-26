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
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start border border-gray-200 px-6 py-4 min-h-[150px]">
      <img src={imageUrl} alt={title} className="w-32 h-auto object-cover rounded-lg mr-6 flex-shrink-0" />
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate" title={title}>{rank}. {title}</h3>
        <p className="text-gray-500 text-sm mb-2">By {author}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center" title={`${rating}% Positive`}>
            {'★'.repeat(stars).split('').map((star, i) => <span key={i} className="text-yellow-400">{star}</span>)}
            {'☆'.repeat(5 - stars).split('').map((star, i) => <span key={i} className="text-gray-200">{star}</span>)}
          </div>
          <div className="flex items-center text-sm text-gray-500" title="Positive Reviews">
            <span role="img" aria-label="thumbs up">👍</span>
            <span className="ml-1">{positiveReviews}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 font-medium mt-1">{reviewSummary}</p>
      </div>
      <div className="text-right ml-4 flex-shrink-0">
        <p className="text-2xl font-bold text-gray-800">{price}</p>
        <p className="text-xs text-gray-400 mt-1" title="Historical Low">Lowest: {historicalLow}</p>
      </div>
    </div>
  );
};

export default GameCard; 