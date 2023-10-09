import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesByQuery } from '@/api/movies.ts';

export const fetchMoviesByQuery = createAsyncThunk(
  'movies/fetch',
  async (options: { query: string, page: number }) => {
    return await getMoviesByQuery(options.query, options.page)
  }
)