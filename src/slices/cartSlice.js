// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      // Initial items can be empty or have default items
    ],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.totalAmount -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    // Add other reducers as needed
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
