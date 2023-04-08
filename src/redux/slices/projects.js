import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const { data } = await axios.get('/home');
    return data;
});

export const userProjects =createAsyncThunk('projects/userProjects', async () => {
    const { data } = await axios.get('/myProjects');

    return data;
});

const initialState = {
    projects: {
        items: [],
        status: 'loading',
    },
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProjects.pending]: (state) => {
            state.projects.items = [];
            state.projects.status = 'loading';
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.projects.items = action.payload;
            state.projects.status = 'loaded';
        },
        [fetchProjects.rejected]: (state) => {
            state.projects.items = [];
            state.projects.status = 'error';
        },
        [userProjects.pending]: (state) => {
            state.projects.items = [];
            state.projects.status = 'loading';
        },
        [userProjects.fulfilled]: (state, action) => {
            state.projects.items = action.payload;
            state.projects.status = 'loaded';
        },
        [userProjects.rejected]: (state) => {
            state.projects.items = [];
            state.projects.status = 'error';
        },
    }
});

export const projectsReducer = projectsSlice.reducer;