import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com",
  }),
  endpoints: (builder) => ({
    // MENU ENDPOINTS
    getMenu: builder.query({
      query: () => ({
        url: "/menu",
        method: "GET",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
        },
      }),
    }),
    getMenuItem: builder.query({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "GET",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
        },
      }),
    }),

    // ORDER ENDPOINTS
  }),
});

export const { useGetMenuQuery, useGetMenuItemQuery } = apiSlice;
