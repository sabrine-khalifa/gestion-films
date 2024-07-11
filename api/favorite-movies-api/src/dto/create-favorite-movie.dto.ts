import { IsString } from 'class-validator';

export class CreateFavoriteMovieDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly imdbId: string;
}
