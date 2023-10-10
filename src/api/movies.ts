import { client } from '@/api/lib/fetchClient.ts';
import { IMovie, IMovieWithDetails } from '@/models/IMovie.ts';

export type MoviesByQueryResponse = {
  movies: IMovie[]
  totalPages: number
  totalMovies: number
}

export const getMoviesByQuery = (query: string, page: string) => {
  return client.get<MoviesByQueryResponse>(`/movies?query=${query}&page=${page}`)
}

export const getMovieById = (id: string) => {
  return client.get<IMovieWithDetails>(`/movies/${id}`)
}