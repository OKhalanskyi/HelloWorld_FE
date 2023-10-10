import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMoviesByQuery } from '@/app/store/asyncThunks/fetchMoviesByQuery.ts';
import { IMovie } from '@/models/IMovie.ts';

export interface MovieSchema {
  search: string
  lastSearch: string
  movies?: IMovie[]
  totalPages?: number
  totalMovies?: number
  isLoading: boolean
  error?: string,
  layoutType: 'vertical' | 'horizontal'
}

const initialState: MovieSchema = {
  search: '',
  lastSearch: '',
  totalPages: undefined,
  totalMovies: undefined,
  movies: undefined,
  isLoading: false,
  error: undefined,
  layoutType: 'vertical'
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setLastSearch: (state, action) => {
      state.lastSearch = action.payload
    },
    setLayoutType: (state, action: PayloadAction<'vertical' | 'horizontal'>) => {
      state.layoutType = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByQuery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMoviesByQuery.fulfilled, (state, action) => {
        state.isLoading = false

        const { movies, totalPages, totalMovies } = action.payload

        state.totalPages = totalPages
        state.totalMovies = totalMovies
        state.movies = movies
      })
      .addCase(fetchMoviesByQuery.rejected, (state) => {
        state.isLoading = false
        state.error = 'err'
      })
  }
})

export const { actions: movieActions } = movieSlice
export const { reducer: movieReducer } = movieSlice
