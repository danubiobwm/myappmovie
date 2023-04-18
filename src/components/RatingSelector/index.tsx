import { useState } from "react";

interface RatingSelectorProps {
  rating?: number;
  onRatingChange: (value: number) => void;
  imdbID: string;
}

const RatingSelector = ({ rating, onRatingChange, imdbID }: RatingSelectorProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | undefined>(
    undefined
  );

  const handleMouseOver = (value: number) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(undefined);
  };

  const handleClick = (value: number) => {
    onRatingChange(value);
  };

  const getStarColor = (value: number) => {
    if (hoveredRating !== undefined) {
      return value <= hoveredRating ? '#FFD700' : '#d3d3d3';
    }
    return value <= (rating ?? 0) ?'#FFD700' : '#d3d3d3';
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value: number) => (
        <span
          key={value}
          className="star"
          onMouseOver={() => handleMouseOver(value)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(value)}
          style={{ color: getStarColor(value) }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingSelector;
