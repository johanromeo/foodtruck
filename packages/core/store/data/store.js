import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@foodtruck/api";

// Seems to be some kind of import issue when naming from "index.js" to "store.js", even though I've uninstalled the npm package?
// Leaving as is for now...

// Solved: specified the path in main index => "./data/store".
const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
