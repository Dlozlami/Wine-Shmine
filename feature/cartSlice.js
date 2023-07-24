// cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  itemsList: [],
  itemsLength: 0,
  total: 0,
  subtotal: 0,
  VAT: 0.15,
};

// Async thunk to buy carts
export const buy = createAsyncThunk('carts/buy', async (args, { rejectWithValue, getState }) => {
  console.log('hello')
  try {
    //const { itemsList } = getState().carts;
    
    // Create a list of all wine_ids from itemsList
    //const cartIds = itemsList.map((item) => {item[0],item[1].wine_id});
    const cartIds =[
      [1,{priceInCents: 9800, name:'Raka Sauvignon Blanc 2022'}],
      [2,{priceInCents: 5550, name:'De Wetshof Limestone Hill Chardonnay 2023'}],
      [1,{priceInCents: 5800, name:'Backsberg Fifth Generation Hillside Sauvignon Blanc 2022'}]
      ]
    const response = await axios.post('http://localhost:8080/checkout', { cartIds });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItemToList(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.itemsList.findIndex((item) => item[1].wine_id === newItem.wine_id);

      if (existingItemIndex !== -1) {
        state.itemsList[existingItemIndex][0] += 1; // Increase quantity
      } else {
        state.itemsList.push([1, newItem]); // Add new item with quantity 1
      }

      state.itemsLength = state.itemsList.length;
      updateSubtotalAndTotal(state);
    },
    removeItemFromList(state, action) {
      const wineIdToRemove = action.payload;
      state.itemsList = state.itemsList.filter((item) => item[1].wine_id !== wineIdToRemove);
      state.itemsLength = state.itemsList.length;
      updateSubtotalAndTotal(state);
    },
    decreaseQauntity(state, action) {
      const wineIdToDecrease = action.payload;
      const existingItemIndex = state.itemsList.findIndex((item) => item[1].wine_id === wineIdToDecrease);

      if (existingItemIndex !== -1) {
        if (state.itemsList[existingItemIndex][0] < 2) {
          // If quantity is less than 2, remove the item
          state.itemsList = state.itemsList.filter((item) => item[1].wine_id !== wineIdToDecrease);
        } else {
          // Decrease the quantity by 1
          state.itemsList[existingItemIndex][0] -= 1;
        }
        state.itemsLength = state.itemsList.length;
        updateSubtotalAndTotal(state);
      }
    },
  },
});

const updateSubtotalAndTotal = (state) => {
  state.subtotal = state.itemsList.reduce((acc, item) => acc + item[0] * item[1].priceInCent, 0);
  state.total = state.subtotal + state.VAT * state.subtotal;
};

export const { addItemToList, removeItemFromList, decreaseQauntity } = cartSlice.actions;
export default cartSlice.reducer;
