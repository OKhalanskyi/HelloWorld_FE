import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '@/app/store/slices/movieSlice.ts';

const rootReducer = combineReducers({
  movie: movieReducer
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