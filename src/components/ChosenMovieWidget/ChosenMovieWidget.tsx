import { FC } from 'react';
import { useAppSelector } from '@/shared/hooks/redux-hooks.ts';
import { selectChosenMovie, selectIsLoading } from '@/app/store/selectors/chosenMovieSelectors.ts';
import Star from '@/shared/assets/Star.tsx';
import Loader from '@/components/Loader/Loader.tsx';


const ChosenMovieWidget: FC = ( ) => {
  const chosenMovie = useAppSelector(selectChosenMovie)

  const isLoading = useAppSelector(selectIsLoading)

  if (isLoading) {
    return <Loader />
  }

  return (
    <article className="flex flex-col md:flex-row grow relative">
      <img
        className="md:h-[512px] rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-l-2xl"
        src={chosenMovie?.image}
        alt={chosenMovie?.title}
      />

      <div
        className="absolute rounded-r-lg  top-8 bg-[#DBEAFE] dark:bg-[#070B15] text-base px-3 py-1 dark:text-slate-200 text-slate-900"
      >
        {chosenMovie?.year}
      </div>

      <div className="flex flex-col gap-3 bg-[#CFE3FC] dark:bg-[#04060C] p-3 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl md:w-full">
        <div className="flex flex-col gap-1">
          <h3
            className="text-sky-900 dark:text-sky-300 text-2xl uppercase font-bold mt-1 lg:text-3xl"
          >
            {chosenMovie?.title}
          </h3>
          <p className="text-slate-900 dark:text-slate-200 text-xs lg:text-base">{chosenMovie?.movieInfo?.description}</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 lg:flex-row justify-between">
          <div className="flex gap-2">
            {
              chosenMovie?.genres?.map(genre => (
                <div
                  key={genre.id}
                  className="h-6 text-slate-900 dark:text-slate-200 px-2 py-1 text-xs rounded-xl dark:bg-[#070B15] bg-[#DBEAFE]"
                >
                  {genre.name}
                </div>
              ))
            }
            <div className="h-6 text-xs text-amber-400 px-2 py-1 rounded-xl dark:bg-[#070B15] bg-[#DBEAFE]">{chosenMovie?.duration} min</div>
          </div>

          <p className="flex items-center text-slate-800 dark:text-slate-200 text-base gap-1">
            <p>IMDb:</p>

            <Star />

            <p className="text-base text-bold">{chosenMovie?.rating}</p>
          </p>
        </div>

        <div className="h-px bg-slate-600 my-1 md:my-2"></div>

        <div className="flex flex-col gap-3 text-xs lg:text-base">
          <p className="flex gap-3 stext-sky-800 dark:text-sky-200">
            Director:
            <span className="text-slate-900 dark:text-slate-200">
              {chosenMovie?.movieInfo?.director?.name}
            </span>
          </p>

          <p className="flex gap-5 stext-sky-800 dark:text-sky-200">
            Actors:
            <div>
              {chosenMovie?.movieInfo?.actors?.map(actor => (
                <div
                  className="text-slate-900 dark:text-slate-200"
                  key={actor.id}
                >
                  {actor.name}
                </div>
              ))}
            </div>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ChosenMovieWidget;