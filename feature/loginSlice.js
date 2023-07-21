import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';

const initialState = {
  name:'',
  surname:'',
  email:'',
  password:'',
  phone:'',
  
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
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = loginSlice.actions

export default loginSlice.reducer