import { FC } from 'react';
import { IMovie } from '@/models/IMovie.ts';
import { getMovieByIdPath } from '@/shared/constants/getRoutes.ts';
import Star from '@/shared/assets/Star.tsx';
import { Link } from 'react-router-dom';

type MovieCardHorizontalProps = {
  movie: IMovie,
}

const MovieCardHorizontal: FC<MovieCardHorizontalProps> = ({ movie }) => {
  const {
    title,
    rating,
    duration,
    genres,
    id,
    year,
    image
  } = movie

  const genresStr = genres.map(genre => genre.name).join(', ')

  return (
    <Link to={getMovieByIdPath(String(id))}>
      <article className='flex bg-[#CFE3FC] dark:bg-[#04060C] rounded-2xl'>
        <img
          className="w-28 h-40 rounded-l-2xl"
          src={image}
          alt={title}
        />

        <div className="flex flex-col grow px-5 py-4 justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs py-1 px-2 rounded-lg dark:bg-[#070B15] bg-[#DBEAFE] text-slate-900 dark:text-slate-200">{year}</span>

            <p className="flex items-center text-slate-800 dark:text-slate-200 text-xs gap-1 ml-auto">
              <p>IMDb:</p>

              <Star />

              <p className="text-base text-bold">{rating}</p>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h3
              className="text-sky-900 dark:text-sky-300 uppercase font-bold"
            >
              {title}
            </h3>

            <p className="flex items-center text-slate-800 dark:text-slate-200 text-xs gap-1">
              <p>{`${genresStr}`}</p>

              <span className="w-0.5 h-0.5 bg-sky-900 dark:bg-sky-300 rounded-full"></span>

              <p>{`${duration} min`}</p>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCardHorizontal;