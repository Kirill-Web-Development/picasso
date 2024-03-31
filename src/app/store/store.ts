import { Provider } from "react-redux";
import pageReducer from 'features/paginationBeetweenPages/model'
import { postsSlice } from "features/loadPosts";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const {jsonPlaceholderApi} = postsSlice;

const rootReducer = combineReducers({
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    page: pageReducer,
  });

export type StateType = ReturnType<typeof rootReducer>
  
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
  });