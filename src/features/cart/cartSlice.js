import { createSlice } from "@reduxjs/toolkit";

import {
  loadCartFromStorage,
  saveCartToStorage,
} from "../../utils/localStorage.js";

const initialCart = loadCartFromStorage();

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: initialCart,
  },

  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);

      saveCartToStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }

      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
