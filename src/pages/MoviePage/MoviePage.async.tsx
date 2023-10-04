import { lazy } from 'react';

export const MoviePageAsync = lazy(
  async () => await import('./MoviePage.tsx'),
);
