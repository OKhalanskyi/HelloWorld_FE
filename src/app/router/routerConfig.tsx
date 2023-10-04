import { RouteObject } from 'react-router-dom';
import { getMainPath, getMovieByIdPath } from '@/shared/constants/getRoutes.ts';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage.tsx';
import { MainPage } from '@/pages/MainPage';
import { MoviePage } from '@/pages/MoviePage';


export const routerConfig: RouteObject[] = [
  {
    path: getMainPath(),
    element: <MainPage />,
  },
  {
    path: getMovieByIdPath(':movieId'),
    element: <MoviePage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];