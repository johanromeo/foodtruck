import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, useGetMenuQuery } from "@foodtruck/api";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
