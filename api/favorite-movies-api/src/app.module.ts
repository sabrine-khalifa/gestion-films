// src/app.module.ts
import { Module } from '@nestjs/common';
import { FavoriteMoviesModule } from './favorite-movies.module';

@Module({
  imports: [FavoriteMoviesModule],
})
export class AppModule {}


