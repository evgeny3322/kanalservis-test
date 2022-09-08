import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {api} from "../../api/api";

export type PostsItem = {
    userId: number
    id: number
    title: string
    body: string
}

export type PostsReducerType = {
    posts: Array<PostsItem>
    loading: boolean
    error: AxiosError | null
}

const initialState: PostsReducerType = {
    posts: [],
    loading: false,
    error: null,
};

//thunk
export const fetchPostsAction = createAsyncThunk(
    `post/fetch`,
    async (_) => {
        try {
            const response: AxiosResponse = await api().get('/posts');
            return response.data;
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    },
);

export const usersSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPostsAction.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPostsAction.fulfilled.type]: (
            state,
            {payload}: PayloadAction<Array<PostsItem>>,
        ) => {
            state.posts = payload.filter(
                (item: PostsItem, i: number) =>
                    payload.findIndex((a: PostsItem) => a.userId === item.userId) === i,
            );
            state.loading = false;
        },
        [fetchPostsAction.rejected.type]: (
            state,
            {payload}: PayloadAction<AxiosError>,
        ) => {
            state.posts = [];
            state.loading = false;
            state.error = payload;
        },
    },
});


export default usersSlice.reducer;