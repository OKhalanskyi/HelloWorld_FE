import { FC } from 'react';
import { IMovie } from '@/models/IMovie.ts';
import MovieCard from '@/components/MovieCard/MovieCard.tsx';

type MovieListProps = {
  movies?: IMovie[]
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid gap-x-2 gap-y-3 md:gap-7 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        movies?.map(movie => (
          <MovieCard movie={movie} />
        ))
      }
    </div>
  );
};

export default MovieList;
