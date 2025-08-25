import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import todoReducer from './slices/todoSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

export default store;
