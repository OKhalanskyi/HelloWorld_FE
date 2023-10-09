import { FC } from 'react';
import { IMovie } from '@/models/IMovie.ts';
import Star from '@/shared/assets/Star.tsx';
import { Link } from 'react-router-dom';
import { getMovieByIdPath } from '@/shared/constants/getRoutes.ts';

type MovieCardProps = {
  movie: IMovie
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
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
      <article className="flex flex-col gap-1 relative">
        <div
          className="leading-6 absolute rounded-r-lg h-6 top-8 bg-[#DBEAFE] dark:bg-[#070B15] text-xs px-2 dark:text-slate-200 text-slate-900"
        >
          {year}
        </div>

        <img
          className="h-60 md:h-80 lg:h-96 rounded-2xl"
          src={image}
          alt={title}
        />

        <h3
          className="text-sky-900 dark:text-sky-300 text-center uppercase font-bold mt-1"
        >
          {title}
        </h3>

        <p className="hidden md:flex items-center text-slate-800 dark:text-slate-200 text-xs mx-auto gap-1">
          <p>{`${genresStr}`}</p>

          <span className="w-0.5 h-0.5 bg-sky-900 dark:bg-sky-300 rounded-full"></span>

          <p>{`${duration} min`}</p>
        </p>

        <p className="flex items-center text-slate-800 dark:text-slate-200 text-xs mx-auto gap-1">
          <p className="hidden md:block">IMDb:</p>

          <Star />

          <p className="text-base text-bold">{rating}</p>
        </p>
      </article>
    </Link>
  );
};

export default MovieCard;