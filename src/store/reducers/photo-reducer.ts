import {AxiosError, AxiosResponse} from 'axios';
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export type PhotosItem = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type PhotosReducerType = {
    photos: Array<PhotosItem>
    loading: boolean
    error: AxiosError | null
}

export const fetchPhotosAction = createAsyncThunk(
    `photos/fetch`,
    async (id: number) => {
        try {
            const response: AxiosResponse = await api().get(`/photos/${id}`);
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

const initialState: PhotosReducerType = {
    photos: [],
    loading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPhotosAction.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPhotosAction.fulfilled.type]: (
            state,
            {payload}: PayloadAction<PhotosItem>,
        ) => {
            const arr = state.photos.concat(payload);
            state.photos = arr.filter(
                (item: PhotosItem, i: number) =>
                    arr.findIndex((a: PhotosItem) => a.id === item.id) === i,
            );
            state.loading = false;
        },
        [fetchPhotosAction.rejected.type]: (
            state,
            {payload}: PayloadAction<AxiosError>,
        ) => {
            state.photos = [];
            state.loading = false;
            state.error = payload;
        },
    },
});

export default usersSlice.reducer;