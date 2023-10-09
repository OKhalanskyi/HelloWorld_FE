import { createSlice } from '@reduxjs/toolkit'
import { fetchMoviesByQuery } from '@/app/store/asyncThunks/fetchMoviesByQuery.ts';
import { IMovie } from '@/models/IMovie.ts';

export interface MovieSchema {
  data?: IMovie[]
  isLoading: boolean
  error?: string
}

const initialState: MovieSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByQuery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMoviesByQuery.fulfilled, (state, action) => {
        state.isLoading = false

        const { movies } = action.payload

        state.data = movies
      })
      .addCase(fetchMoviesByQuery.rejected, (state) => {
        state.isLoading = false
        state.error = 'err'
      })
  }
})

export const { actions: movieActions } = movieSlice
export const { reducer: movieReducer } = movieSlice
