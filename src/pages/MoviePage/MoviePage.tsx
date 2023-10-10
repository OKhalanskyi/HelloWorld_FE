import { FC, useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/redux-hooks.ts';
import { fetchMovieById } from '@/app/store/asyncThunks/fetchMovieById.ts';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ChosenMovieWidget from '@/components/ChosenMovieWidget/ChosenMovieWidget.tsx';
import { Button } from '@/shared/ui-kit/button/Button.tsx';
import { getMainPath } from '@/shared/constants/getRoutes.ts';

const MoviePage: FC = () => {
  const { movieId } = useParams()
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchMovieById({ id: movieId ?? '' }))
  }, [movieId, dispatch])

  return (
    <div className="flex grow">
      <div className="flex flex-col gap-8 lg:gap-12 justify-self-center max-w-6xl my-8 self-center mx-auto">
        <ChosenMovieWidget />

        <Link
          to={{
            pathname: getMainPath(),
            search: searchParams.toString()
          }}
        >
          <Button
            className="mx-auto py-2 w-40 text-sm dark:bg-slate-900 bg-[#CFE3FC] rounded-xl dark:text-slate-200 text-slate-900 enabled:hover:text-amber-400 enabled:hover:dark:text-amber-400 border border-transparent enabled:hover:dark:border-sky-200 hover:border-sky-900"
          >
            Back To Results
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MoviePage;