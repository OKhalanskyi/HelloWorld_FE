import { FC, useEffect } from 'react';
import Toolbar from '@/components/Toolbar/Toolbar.tsx';
import MovieList from '@/components/MovieList/MovieList.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectLastSearch, selectMovies } from '@/app/store/selectors/movieSelectors.ts';
import Pagination from '@/components/Pagination/Pagination.tsx';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '@/app/store/asyncThunks/fetchMoviesByQuery.ts';

const MovieWidget: FC = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)
  const lastSearch = useAppSelector(selectLastSearch)

  const [searchParams] = useSearchParams()

  const searchQuery = searchParams.get('query')
  const pageQuery = searchParams.get('page')

  useEffect(() => {
    dispatch(fetchMoviesByQuery({ query: searchQuery || '', page: pageQuery || '1' }))
  }, [dispatch, searchQuery, pageQuery])

  if (movies?.length === 0) {
    return (
      <div className="text-amber-400 max-w-xs md:max-w-lg text-center bg-[#CFE3FC] dark:bg-[#04060C] w-full rounded-xl py-8 text-base md:text-lg lg:text-xl">
        No results found for &nbsp;
        <span>{`"${lastSearch}"`}</span>
      </div>
    )
  }

  return (
    <div className="flex max-w-6xl flex-col gap-8 w-full">
      <Toolbar />

      <MovieList movies={movies}/>

      <Pagination />
    </div>
  );
};

export default MovieWidget;