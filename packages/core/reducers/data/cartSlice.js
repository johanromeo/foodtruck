import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        // If the item quantity is greater than 1, decrement it
        if (state[index].quantity > 1) {
          state[index].quantity--;
        } else {
          state.splice(index, 1);
        }
      }
    },
    emptyCart(state, action) {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export { cartSlice };
