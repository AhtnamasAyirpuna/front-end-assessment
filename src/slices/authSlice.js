import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === 'traveler@demo.com' && password === 'wanderlust123') {
        state.isAuthenticated = true;
      } else {
        alert('Invalid credentials!');
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
