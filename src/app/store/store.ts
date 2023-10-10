import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '@/app/store/slices/movieSlice.ts';
import { chosenMovieReducer } from '@/app/store/slices/chosenMovieSlice.ts';

const rootReducer = combineReducers({
  movie: movieReducer,
  chosenMovie: chosenMovieReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];