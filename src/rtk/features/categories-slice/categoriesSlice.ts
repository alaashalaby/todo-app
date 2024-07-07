import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
interface CategoriesProps {
  categories: Category[];
}
const initialState: CategoriesProps = {
  categories: [
    { name: "work", color: "#D72C63", id: nanoid() },
    { name: "home", color: "#0D0508", id: nanoid() },
    { name: "personal", color: "#B358B6", id: nanoid() },
    { name: "shopping", color: "#FD1A4F", id: nanoid() },
  ],
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
