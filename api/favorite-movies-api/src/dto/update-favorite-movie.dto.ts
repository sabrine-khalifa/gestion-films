// src/favorite-movies/dto/create-favorite-movie.dto.ts
export class CreateFavoriteMovieDto {
    imdbId: string;
    title: string;
  }
  
  // src/favorite-movies/dto/update-favorite-movie.dto.ts
  export class UpdateFavoriteMovieDto {
    imdbId?: string;
    title?: string;
  }
  