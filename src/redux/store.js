import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./slices/projects";
import { authReducer } from "./slices/auth";

const store = configureStore ({
    reducer: {
        projects: projectsReducer,
        auth: authReducer,
    }
});

export default store;