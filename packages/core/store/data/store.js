import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@foodtruck/api";
import { cartSlice } from "@foodtruck/reducers";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
