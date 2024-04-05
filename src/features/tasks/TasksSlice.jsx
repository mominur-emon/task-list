import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    showTasks: (state) => state,
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      //get data
      const { id, description, priority, title } = action.payload;
      //check id match
      const isExistTask = state.tasks.filter((task) => task.id === id);
      //if id match update
      if (isExistTask) {
        isExistTask[0].title = title;
        isExistTask[0].description = description;
        isExistTask[0].priority = priority;
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { showTasks, addTask, deleteTask, updateTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
