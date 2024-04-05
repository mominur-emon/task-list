import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "../features/tasks/TasksSlice";

const store = configureStore({
  reducer: {
    tasksReducer: TasksReducer,
  },
});

export default store;
