import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';

const initialState = {
  value: 85,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer