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
      
      const response = await axios.post('Yhttp://10.255.66.152:8080/api/users', userData);
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
