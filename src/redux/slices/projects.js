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

export const fetchDeleteProject =createAsyncThunk('projects/userProjects', async (_id) => {
    axios.delete(`/projects/${_id}`);
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
        ////// getting all projects //////
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
        ////// gettting all user projects //////
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
        ////// deleting project //////
        [fetchDeleteProject.pending]: (state, action) => {
            state.projects.items = state.projects.items.filter(obj => obj._id === action.payload);
        },
    }
});

export const projectsReducer = projectsSlice.reducer;