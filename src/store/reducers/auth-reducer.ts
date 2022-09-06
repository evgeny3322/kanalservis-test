import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthSlice ={
    auth: string
    login?: string
    password?: string
    inputLogin?: string
    inputPassword?: string
}

const initialState: AuthSlice = {
    auth: '',
    login: 'kanal',
    password: 'test',
    inputLogin: '',
    inputPassword: '',
};

export const authorizationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authorization: (state) => {
            if (
                state.inputLogin === state.login &&
                state.inputPassword === state.password
            ) {
                state.auth = 'yes';
            } else {
                state.auth = 'no';
            }
        },
        changeInputLogin: (state, action: PayloadAction<string>) => {
            state.inputLogin = action.payload;
        },
        changeInputPassword: (state, action: PayloadAction<string>) => {
            state.inputPassword = action.payload;
        },
        resetAuthorization: (state) => {
            state.auth = initialState.auth;
            state.inputLogin = initialState.inputLogin;
            state.inputPassword = initialState.inputLogin;
        },
    },
});

export const {
    authorization,
    resetAuthorization,
    changeInputLogin,
    changeInputPassword,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;