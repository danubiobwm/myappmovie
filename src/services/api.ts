import axios from "axios";

const API_KEY = "f828adf2"; // Insira sua chave API aqui


export const searchMovies = async (query: string) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  return response.data.Search;
}

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  return response.data;
}