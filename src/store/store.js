import {configureStore} from "@reduxjs/toolkit";
import { formReducder } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
    reducer: {
        form: formReducder,
        courses: courseReducer,
    }
});

