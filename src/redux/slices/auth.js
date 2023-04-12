import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => { //login 
    const { data } = await axios.post('/auth/login', params);
    return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => { //register
    const { data } = await axios.post('/auth/register', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => { //getting user information
    const { data } = await axios.get('/users/me');
    return data;
});

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        ////// login //////
        [fetchUserData.pending]: (state) => {
            state.data= null;
            state.status = 'loading';
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.data= action.payload;
            state.status = 'loaded';
        },
        [fetchUserData.rejected]: (state) => {
            state.data= null;
            state.status = 'error';
        },
        ////// getting user info //////
        [fetchAuthMe.pending]: (state) => {
            state.data= null;
            state.status = 'loading';
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data= action.payload;
            state.status = 'loaded';
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data= null;
            state.status = 'error';
        },
        ////// register //////
        [fetchRegister.pending]: (state) => {
            state.data= null;
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data= action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state) => {
            state.data= null;
            state.status = 'error';
        },
    }
});

export const authReducer = authSlice.reducer;

export const isAuthSelector = (state) => Boolean(state.auth.data);

export const { logout } = authSlice.actions;