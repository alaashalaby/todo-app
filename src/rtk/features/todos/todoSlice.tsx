import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const getTodosFromLocalStorage = (): Todo[] => {
  try {
    const todosInLocalStorage = localStorage.getItem("todos");
    return todosInLocalStorage ? JSON.parse(todosInLocalStorage) : [];
  } catch (error) {
    console.error("Failed to get todos from local storage:", error);
    return [];
  }
};
const initialState = {
  todos: getTodosFromLocalStorage() as Todo[],
  filter: "All",
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, setFilter } =
  todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
