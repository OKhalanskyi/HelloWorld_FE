import { IMovieWithDetails } from '@/models/IMovie.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByQuery } from '@/app/store/asyncThunks/fetchMoviesByQuery.ts';
import { fetchMovieById } from '@/app/store/asyncThunks/fetchMovieById.ts';

export interface ChosenMovieSchema {
  isLoading: boolean
  error?: string,
  chosenMovie?: IMovieWithDetails
}

const initialState: ChosenMovieSchema = {
  isLoading: false,
  error: undefined,
  chosenMovie: undefined
}

export const chosenMovieSlice = createSlice({
  name: 'chosenMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false

        state.chosenMovie = action.payload
      })
      .addCase(fetchMoviesByQuery.rejected, (state) => {
        state.isLoading = false
        state.error = 'err'
      })
  }
})

export const { actions: chosenMovieActions } = chosenMovieSlice
export const { reducer: chosenMovieReducer } = chosenMovieSlice