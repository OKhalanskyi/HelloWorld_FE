import { FC } from 'react';
import { IMovie } from '@/models/IMovie.ts';
import MovieCard from '@/components/MovieCard/MovieCard.tsx';
import { useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectLayoutType } from '@/app/store/selectors/movieSelectors.ts';
import * as classNames from 'classnames';
import MovieCardHorizontal from '@/components/MovieCard/MovieCardHorizontal.tsx';

type MovieListProps = {
  movies?: IMovie[]
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const layoutType = useAppSelector(selectLayoutType)

  return (
    <div className={classNames('grid gap-x-2 gap-y-3 md:gap-7 lg:gap-8', {
      'grid-cols-2 md:grid-cols-3 lg:grid-cols-4': layoutType === 'vertical',
      'grid-cols-1 md:grid-cols-2': layoutType === 'horizontal'
    })}>
      {
        movies?.map(movie => (
          layoutType === 'vertical' ? (
            <MovieCard movie={movie} />
          ) : (
            <MovieCardHorizontal movie={movie} />
          )
        ))
      }
    </div>
  );
};

export default MovieList;
