import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./slices/projects";

const store = configureStore ({
    reducer: {
        projects: projectsReducer
    }
});

export default store;