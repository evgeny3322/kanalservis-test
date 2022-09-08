import {AxiosError, AxiosResponse} from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export type UserItem = {
    id: number
    title:string
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export type UsersReducerType ={
    users: Array<UserItem>
    loading: boolean
    error: AxiosError | null
}

export const fetchUsersAction = createAsyncThunk(
    `users/fetch`,
    async (_, {rejectWithValue}) => {
        try {
            const response: AxiosResponse = await api().get(`/users`);
            return response.data;
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
);

const initialState: UsersReducerType = {
    users: [],
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsersAction.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUsersAction.fulfilled.type]: (
            state,
            {payload}: PayloadAction<Array<UserItem>>
        ) => {
            state.users = payload;
            state.loading = false;
        },
        [fetchUsersAction.rejected.type]: (
            state,
            {payload}: PayloadAction<AxiosError>
        ) => {
            state.users = [];
            state.loading = false;
            state.error = payload;
        },
    },
});

export default usersSlice.reducer;
