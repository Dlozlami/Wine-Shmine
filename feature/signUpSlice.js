import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  phone: '',
  picture: '',
  status: 'idle',
  error: null,
}

// Thunk to post sign-up data to the server
export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Replace 'YOUR_SIGNUP_ENDPOINT' with the actual endpoint to post the data
      const response = await axios.post('YOUR_SIGNUP_ENDPOINT', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = signupSlice.actions;

export default signupSlice.reducer;
