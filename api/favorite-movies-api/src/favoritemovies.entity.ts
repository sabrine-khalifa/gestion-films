import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FavoriteMovie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imdbId: string;
}
