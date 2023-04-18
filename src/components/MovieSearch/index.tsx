import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerForm,
  Input,
  Label,
  Button,
  Pagination,
  MovieContainer,
  Page
} from "./styles";
import { searchMovies } from "../../services/api";
import Header from "../Header";
import Footer from "../Footer";
import Review from "../Review";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
  Plot: string;
  Ratings: string;
  userRating?: number;
  totalRatings?: number;
}

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    console.log("RESULTS:", results);
    setMovies(results);
    setTotalPages(Math.ceil(results.length / 1)); // alterado para 1 elemento por página
    setCurrentPage(1);
  };

  const handleReset = () => {
    setQuery("");
    setMovies([]);
    setCurrentPage(1);
    setTotalPages(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [movies]);

  const startIndex: number = (currentPage - 1) * 1; // alterado para 1 elemento por página
  const endIndex: number = startIndex + 1; // alterado para 1 elemento por página
  const currentMovies: Movie[] = movies.slice(startIndex, endIndex);

  return (
    <div>
      <Header />

      <Container>
        <Label htmlFor="searchInput">Search for a movie...</Label>
        <ContainerForm>
          <Input
            type="text"
            id="searchInput"
            value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(event.target.value)
            }
          />
          <Button className="search" onClick={handleSearch}>
            Search
          </Button>
          <Button className="reset" onClick={handleReset}>
            Reset
          </Button>
        </ContainerForm>
      </Container>
      {currentMovies.map((movie: Movie) => (
        <MovieContainer key={movie.imdbID}>
          <div className="movie-info">
            <h1>Movie Title: {movie.Title}</h1>
            <strong>Type: {movie.Type}</strong>
            <p>
              Year: <span>{movie.Year}</span>
            </p>
            <p>
              Describe: <span>{movie.Plot}</span>
            </p>
            <p>
              Ratings: <span>{movie.Ratings}</span>
            </p>
            <Review imdbID={movie.imdbID} rating={movie.userRating} totalRatings={movie.totalRatings} />

          </div>
          <img src={movie.Poster} alt={movie.Title} />
        </MovieContainer>
      ))}
      <Page>
      {totalPages > 1 && (
        <div>
          {Array.from(Array(totalPages).keys()).map((page: number) => (
            <Pagination
              key={page}
              onClick={() => handlePageChange(page + 1)}
              active={currentPage === page + 1}
            >
              {page + 1}
            </Pagination>
          ))}
        </div>
      )}
      </Page>
      {movies.length > 0 && <Footer />}
    </div>
  );
};

export default MovieSearch;
