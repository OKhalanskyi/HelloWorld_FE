import { RootState } from '@/app/store/store.ts';

export const selectChosenMovie = (state: RootState) => state.chosenMovie.chosenMovie;
export const selectIsLoading = (state: RootState) => state.chosenMovie.isLoading;
export const selectIsError = (state: RootState) => state.chosenMovie.error;