import { RootState } from '@/app/store/store.ts';

export const selectMovies = (state: RootState) => state.movie.movies;

export const selectTotalPages = (state: RootState) => state.movie.totalPages;

export const selectTotalMovies = (state: RootState) => state.movie.totalMovies;
export const selectIsLoading = (state: RootState) => state.movie.isLoading;

export const selectError = (state: RootState) => state.movie.error;

export const selectSearch = (state: RootState) => state.movie.search;

export const selectLastSearch = (state: RootState) => state.movie.lastSearch;

export const selectLayoutType = (state: RootState) => state.movie.layoutType;

