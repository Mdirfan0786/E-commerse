import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: savedWishlist,
  },

  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);

      // Prevent duplicates
      if (!exists) {
        state.items.push(action.payload);

        localStorage.setItem("wishlistItems", JSON.stringify(state.items));
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("wishlistItems", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
