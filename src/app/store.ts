import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../rtk/features/todos/todoSlice";
import categoriesReducer from "../rtk/features/categories-slice/categoriesSlice";
const store = configureStore({
  reducer: {
    todoReducer,
    categoriesReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
