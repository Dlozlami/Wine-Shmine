import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';

const initialState = {
  items: 0,
  wines:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.items += 1
    },
    decrement: (state) => {
      state.items -= 1
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer