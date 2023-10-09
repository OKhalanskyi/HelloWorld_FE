import { FC, useCallback } from 'react';
import { Button } from '@/shared/ui-kit/button/Button.tsx';
import { useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectTotalMovies, selectTotalPages } from '@/app/store/selectors/movieSelectors.ts';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '@/api/lib/getSearchWith.ts';

const Pagination: FC = () => {
  const totalMovies = useAppSelector(selectTotalMovies)
  const totalPages = useAppSelector(selectTotalPages)

  const [searchParams, setSearchParams] = useSearchParams()
  const pageQuery = searchParams.get('page')

  const handlePrevious = useCallback(() => {
    setSearchParams(getSearchWith(searchParams, { page: String(Number(pageQuery) - 1)}))
    window.scrollTo(0, 0)
  }, [setSearchParams, searchParams, pageQuery])

  const handleNext = useCallback(() => {
    setSearchParams(getSearchWith(searchParams, { page: String(Number(pageQuery) + 1)}))
    window.scrollTo(0, 0)
  }, [setSearchParams, searchParams, pageQuery])

  return (
    <div className="flex flex-col md:flex-row md:justify-between mb-8 md:mb-10 lg:mb-20 gap-3">
      <p className="text-center dark:text-slate-200 text-slate-900">
        Showing 1 to 24 of&nbsp;
        <span className="text-amber-400">{totalMovies} &nbsp;</span>
        results
      </p>

      <div className="flex justify-between md:gap-8">
        <Button
          disabled={(Number(pageQuery) - 1) === 0}
          onClick={handlePrevious}
          className="px-7 py-2 dark:bg-slate-900 bg-[#CFE3FC] rounded-xl dark:text-slate-200 text-slate-900 enabled:hover:text-amber-400 enabled:hover:dark:text-amber-400 border border-transparent enabled:hover:dark:border-sky-200 hover:border-sky-900 disabled:opacity-50 disabled:hover:border-transparent"
        >
          Previous
        </Button>

        <Button
          disabled={Number(pageQuery) === totalPages}
          onClick={handleNext}
          className="px-7 py-2 dark:bg-slate-900 bg-[#CFE3FC] rounded-xl dark:text-slate-200 text-slate-900 enabled:hover:text-amber-400 enabled:hover:dark:text-amber-400 border border-transparent enabled:hover:dark:border-sky-200 hover:border-sky-900 disabled:opacity-50 disabled:hover:border-transparent"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;