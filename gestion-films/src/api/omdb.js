// src/api/omdb.js
const API_KEY = '77f33437';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (title) => {
  const response = await fetch(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
