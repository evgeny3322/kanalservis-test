import {configureStore} from "@reduxjs/toolkit";
import AuthReducer, {AuthSlice} from "./reducers/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
    auth: AuthSlice;
};

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;