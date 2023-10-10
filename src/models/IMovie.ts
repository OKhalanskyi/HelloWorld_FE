import { IGenre } from '@/models/IGenre.ts';
import { IPerson } from '@/models/IPerson.ts';

export interface IMovie {
  id: number,
  title: string,
  image: string,
  rating: number,
  year: number,
  duration: number,
  genres: IGenre[]
}

export interface IMovieInfo {
  id: string
  description: string
  director: IPerson
  actors: IPerson[]
}

export interface IMovieWithDetails extends IMovie {
  movieInfo: IMovieInfo
}