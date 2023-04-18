import  { useState } from "react";

interface ReviewProps {
  imdbID: string;
  userRating?: number;
  totalRatings?: number;
  rating: number | undefined;
  onRatingChange: (value: number) => void;
}



const Review =({ imdbID, userRating, totalRatings }: ReviewProps) => {
  const [rating, setRating] = useState<number | undefined>(userRating);
  const [total, setTotal] = useState<number>(totalRatings || 0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    if (totalRatings) {
      setTotal(totalRatings + 1);
    } else {
      setTotal(1);
    }
  };

  return (
    <div>
      {rating && (
        <p>
          Your rating: {rating} / 5 ({total} ratings)
        </p>
      )}
      <RatingSelector rating={rating} onRatingChange={handleRatingChange} />
    </div>
  );
};

interface RatingSelectorProps {
  rating?: number;
  onRatingChange: (value: number) => void;
}

const RatingSelector = ({ rating, onRatingChange }: RatingSelectorProps) => {
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
      return value <= hoveredRating ? "yellow" : "gray";
    }
    return value <= (rating ?? 0) ? "yellow" : "gray";
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

export default Review;
