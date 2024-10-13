import { createSlice, nanoid } from "@reduxjs/toolkit";
import { changeName } from "./formSlice";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    deleteCourse: (state, action) => {
      const updatedCourses = state.data.filter((course) => {
        return course.id !== action.payload;
      });
      state.data = updatedCourses;
    },
    changeSearchTerm: (state,action) => {
        state.searchTerm = action.payload;
    }
  },
});
export const { addCourse, deleteCourse, changeSearchTerm } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
