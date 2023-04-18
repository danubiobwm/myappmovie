import { useState } from 'react';
import RatingSelector from '../RatingSelector';

export interface ReviewProps {
  rating?: number;
  onRatingChange?: (value: number) => void;
}

const Review = ({ imdbID, rating, onRatingChange, totalRatings }: { imdbID: string, rating?: number, onRatingChange?: (value: number) => void, totalRatings?: number }) => {
  const [total, setTotal] = useState<number>(totalRatings || 0);

  const handleRatingChange = (value: number) => {
    if (onRatingChange) {
      onRatingChange(value);
    }
    if (totalRatings) {
      setTotal(totalRatings + 1);
    } else {
      setTotal(1);
    }
  };

  return (
    <div>
      {rating && (
        <p>Your rating: {rating} / 5 ({total} ratings)</p>
      )}
      <RatingSelector rating={rating} onRatingChange={handleRatingChange} imdbID={imdbID} />
    </div>
  );
};

export default Review;
