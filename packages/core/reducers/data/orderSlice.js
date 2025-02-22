import { createSlice } from "@reduxjs/toolkit";

const initialState = { order: "" };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    saveOrderId(state, action) {
      state.order = action.payload;
    },
  },
});

export const { saveOrderId } = orderSlice.actions;
export { orderSlice };
