import { FC, FormEvent, memo } from 'react';
import Input from '@/shared/ui-kit/input/Input.tsx';
import MovieIcon from '@/shared/assets/MovieIcon.tsx';
import TvIcon from '@/shared/assets/TvIcon.tsx';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '@/api/lib/getSearchWith.ts';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { fetchMoviesByQuery } from '@/app/store/asyncThunks/fetchMoviesByQuery.ts';
import { movieActions } from '@/app/store/slices/movieSlice.ts';
import { selectSearch } from '@/app/store/selectors/movieSelectors.ts';

const SearchForm: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const search = useAppSelector(selectSearch)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    setSearchParams(getSearchWith(searchParams, { query: search, page: "1" }))

    dispatch(fetchMoviesByQuery({ query: search, page: "1" }))

    dispatch(movieActions.setLastSearch(search))

  }

  return (
    <form
      className="flex flex-col items-center max-w-3xl gap-3"
      onSubmit={onSubmit}
    >
      <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-[64px] px-10 dark:text-slate-100 text-slate-900">
        Need help finding the next movie?
      </h1>

      <div className="flex flex-col gap-4 md:gap-5">
        <label htmlFor="search-input" className="text-sm md:text-lg lg:text-xl max-w-xs md:max-w-lg text-center dark:text-sky-200 text-sky-800 cursor-pointer">
          Search for your next movie through HelloMovie’s huge movie library
        </label>

        <Input
          required
          id="search-input"
          value={search}
          onChange={(event) => dispatch(movieActions.setSearch(event.target.value))}
          className="h-16"
          placeholder="Search for your next movie"
          autoFocus
        />
      </div>

      <div className="flex text-slate-900 dark:text-slate-200 gap-8">
        <div className="flex gap-2 items-center">
          <MovieIcon />
          Movies
        </div>

        <div className="flex gap-2 items-center">
          <TvIcon />
          TV Shows
        </div>
      </div>
    </form>
  );
});

export default SearchForm;