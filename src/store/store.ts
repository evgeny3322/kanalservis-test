import {configureStore} from "@reduxjs/toolkit";
import AuthReducer, {AuthType} from "./reducers/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {UsersReducerType} from "./reducers/user-reducer";
import {PostsReducerType} from "./reducers/post-reducer";
import {PhotosReducerType} from "./reducers/photo-reducer";

import UsersReducer from './reducers/user-reducer';
import PostsReducer from './reducers/post-reducer';
import PhotosReducer from './reducers/photo-reducer';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        users: UsersReducer,
        posts: PostsReducer,
        photos: PhotosReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
    auth: AuthType;
    users: UsersReducerType;
    posts: PostsReducerType;
    photos: PhotosReducerType;
};

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;