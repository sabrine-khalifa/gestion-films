// src/favorite-movies/favorite-movies.module.ts
import { Module } from '@nestjs/common';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMoviesController } from './favorite-movies.controller';

@Module({
  controllers: [FavoriteMoviesController],
  providers: [FavoriteMoviesService],
})
export class FavoriteMoviesModule {}
