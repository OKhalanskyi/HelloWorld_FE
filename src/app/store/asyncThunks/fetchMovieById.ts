import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieById } from '@/api/movies.ts';

export const fetchMovieById = createAsyncThunk(
  'movies/fetch',
  async (options: { id: string }) => {
    return await getMovieById(options.id)
  }
)