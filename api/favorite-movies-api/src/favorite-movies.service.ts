// src/favorite-movies/favorite-movies.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favorite-movie.dto';

const API_KEY = '77f33437';
const BASE_URL = 'http://www.omdbapi.com/';

@Injectable()
export class FavoriteMoviesService {
  private favoriteMovies = [];

  async create(createFavoriteMovieDto: CreateFavoriteMovieDto) {
    this.favoriteMovies.push(createFavoriteMovieDto);
    return createFavoriteMovieDto;
  }

  findAll() {
    return this.favoriteMovies;
  }

  async findOne(id: string) {
    const movie = this.favoriteMovies.find((movie) => movie.imdbId === id);
    if (!movie) {
      throw new NotFoundException(`Favorite movie with ID ${id} not found`);
    }
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.json();
  }

  update(id: string, updateFavoriteMovieDto: UpdateFavoriteMovieDto) {
    const movieIndex = this.favoriteMovies.findIndex((movie) => movie.imdbId === id);
    if (movieIndex === -1) {
      throw new NotFoundException(`Favorite movie with ID ${id} not found`);
    }
    this.favoriteMovies[movieIndex] = updateFavoriteMovieDto;
    return updateFavoriteMovieDto;
  }

  remove(id: string) {
    const movieIndex = this.favoriteMovies.findIndex((movie) => movie.imdbId === id);
    if (movieIndex === -1) {
      throw new NotFoundException(`Favorite movie with ID ${id} not found`);
    }
    this.favoriteMovies.splice(movieIndex, 1);
  }
}
