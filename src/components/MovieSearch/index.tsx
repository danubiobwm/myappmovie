import React, { useState } from "react";
import { Container, Input } from "./styles";
import { searchMovies } from "../../services/api";
import Header from "../Header";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  const handleReset = () => {
    setQuery("");
    setMovies([]);
  };
  console.log("MOVEIS:" , movies)
  return (
    <div>
      <Header />

    <Container>
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
      {movies &&
        movies.map((movie: any) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
            <p>{movie.Plot}</p>
            <p>{movie.Ratings}</p>
          </div>
        ))
    }
    </Container>

    </div>
  );
};

export default MovieSearch;
