import { Provider } from "react-redux";
import pageReducer from 'features/paginationBeetweenPages/model'
import { postsSlice } from "features/loadPosts";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { store } from "app/store";

export const withStore = (Component: React.ComponentType) => (...props : any) => {
    return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    )
}