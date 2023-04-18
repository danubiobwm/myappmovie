import { useState } from "react";

interface ReviewProps {
  imdbID: string;
  userRating?: number;
  totalRatings?: number;
}

interface ReviewState {
  rating: number | undefined;
  totalRatings: number;
}

const Review = ({ imdbID, userRating, totalRatings }: ReviewProps) => {
  const [reviews, setReviews] = useState<{ [key: string]: ReviewState }>(() => {
    const reviewState = localStorage.getItem("reviews");
    if (reviewState) {
      return JSON.parse(reviewState);
    }
    return {};
  });

  const reviewState = reviews[`${imdbID}_rating`] ?? { rating: undefined, totalRatings: 0 };
  const { rating, totalRatings: total } = reviewState;

  const handleRatingChange = (value: number) => {
    const newReviews = {
      ...reviews,
      [`${imdbID}_rating`]: {
        rating: value,
        totalRatings: reviewState.totalRatings + 1,
      },
    };
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
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
