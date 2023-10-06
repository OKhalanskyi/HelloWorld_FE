import { FC, memo, useState } from 'react';
import Input from '@/shared/ui-kit/input/Input.tsx';
import MovieIcon from '@/shared/assets/MovieIcon.tsx';
import TvIcon from '@/shared/assets/TvIcon.tsx';

const SearchForm: FC = memo(() => {
  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue);

  return (
    <form className="flex flex-col items-center max-w-3xl gap-3">
      <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-[64px] px-10 dark:text-slate-100 text-slate-900">
        Need help finding the next movie?
      </h1>

      <div className="flex flex-col gap-4 md:gap-5">
        <label htmlFor="search-input" className="text-sm md:text-lg lg:text-xl max-w-xs md:max-w-lg text-center dark:text-sky-200 text-sky-800 cursor-pointer">
          Search for your next movie through HelloMovie’s huge movie library
        </label>

        <Input
          id="search-input"
          value={searchValue}
          onChange={setSearchValue}
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