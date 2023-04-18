import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "./styles";
import { Movie } from "../MovieSearch";

interface Props {
  movie: Movie;
  favorites: Movie[];
  onFavoriteToggle: (movie: Movie) => void;
}

const FavoriteButton: React.FC<Props> = ({ movie, favorites, onFavoriteToggle }) => {
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleToggle = () => {
    onFavoriteToggle(movie);
  };

  return (
    <Button onClick={handleToggle} isFavorite>
      {isFavorite ? 'Favorite' : 'Add to Favorites'}
      {isFavorite ? <FaHeart color="#ff0000" /> : <FaRegHeart color="#333" />}
    </Button>
  );
};

export default FavoriteButton;
