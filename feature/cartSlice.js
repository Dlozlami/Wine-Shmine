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
  checkoutData:null,
  callBackURL:'http://10.255.66.152:19000/home'
};


export const checkout = createAsyncThunk('carts/checkout', async (args, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/checkout', { 'name':'dlozi.mthethwa'});
      thunkAPI.dispatch(setCheckoutData(response.data.data));
      console.log()
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

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
    setCheckoutData(state,action) {
        state.checkoutData = action.payload;
    },
    getAuthorization_url(state,action) {
        return state.checkoutData.authorization_url;
    },
    clearCheckoutData(state) {
        state.checkoutData = null;
    },
    clearitemsList(state) {
        state.itemsList = [];
        state.itemsLength = state.itemsList.length;
        updateSubtotalAndTotal(state);
    },
  },
});

const updateSubtotalAndTotal = (state) => {
  if (state.itemsList.length === 0) {
    state.subtotal = 0;
    state.total = 0;
  } else {
    //state.itemsList.map((item)=>console.log(item[0]+'*'+item[1].priceInCents))
    state.subtotal = state.itemsList.reduce((acc, item) => acc + (item[0] * item[1].priceInCents), 0);
    state.total = state.subtotal + state.VAT * state.subtotal;
  }
};


export const { addItemToList, removeItemFromList, decreaseQauntity,clearCheckoutData,clearitemsList,getAuthorization_url} = cartSlice.actions;
export default cartSlice.reducer;
