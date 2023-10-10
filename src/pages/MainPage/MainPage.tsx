import { FC, useEffect } from 'react';
import SearchForm from '@/components/SearchForm/SearchForm.tsx';
import Loader from '@/components/Loader/Loader.tsx';
import MovieWidget from '@/components/MovieWidget/MovieWidget.tsx';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectIsLoading } from '@/app/store/selectors/movieSelectors.ts';
import { useSearchParams } from 'react-router-dom';
import { movieActions } from '@/app/store/slices/movieSlice.ts';

const MainPage: FC = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsLoading)

  const [searchParams] = useSearchParams()

  const searchQuery = searchParams.get('query')

  useEffect(() => {
      dispatch(movieActions.setSearch(searchQuery ?? ''))
  }, [dispatch, searchQuery])

  return (
    <div className="flex flex-col grow justify-center items-center gap-10">
      {
        isLoading && (<Loader />)
      }
      <SearchForm />

      {
        searchQuery && <MovieWidget />
      }
    </div>
  );
};

export default MainPage;