import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

// step 1 make slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,//initialstate declared above

  // property and function inside reducers
  reducers: {
    
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//step 2 to export slice
export const { addTodo, removeTodo } = todoSlice.actions;

// step 3 store need awareness of every reducer bcz it's a restrictive store only can be updated by registered Reducers
export default todoSlice.reducer;
