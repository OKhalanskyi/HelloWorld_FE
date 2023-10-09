import { client } from '@/api/lib/fetchClient.ts';
import { IMovie } from '@/models/IMovie.ts';

export type MoviesByQueryResponse = {
  movies: IMovie[]
  totalPages: number
  totalMovies: number
}

export const getMoviesByQuery = (query: string, page: number) => {
  return client.get<MoviesByQueryResponse>(`/movies?query=${query}&page=${page}`)
}