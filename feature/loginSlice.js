import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';

const initialState = {
  name:'Dlozi',
  surname:'Mthethwa',
  email:'dlozi.mthethwa@gmail.com',
  password:'12345',
  phone:'+277603509451',
  picture:''
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