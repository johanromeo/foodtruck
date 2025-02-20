import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Updates the global state of the cart with a new menu item.
    addToCart(state, action) {
      state.push(action.payload);
    },

    // Method for removing a cart item by its id
  },
});

export const { addToCart } = cartSlice.actions;
export { cartSlice };
