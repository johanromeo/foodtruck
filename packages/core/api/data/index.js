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
    placeOrder: builder.mutation({
      query: (items) => ({
        url: "/cv5e/orders",
        method: "POST",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
          "Content-Type": "application/json",
        },
        body: { items },
      }),
    }),

    getOrders: builder.query({
      query: () => ({
        url: "/cv5e/orders",
        method: "GET",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
        },
      }),
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/cv5e/orders/${id}`,
        method: "GET",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
        },
      }),
    }),

    // RECEIPT ENDPOINTS
    getReceiptById: builder.query({
      query: (id) => ({
        url: `/receipts/${id}`,
        method: "GET",
        headers: {
          "x-zocom": "yum-qqO7Lv5Hg29t5hqI",
        },
      }),
    }),
  }),
});

export const {
  useGetMenuQuery,
  useGetMenuItemQuery,
  usePlaceOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useGetReceiptByIdQuery,
} = apiSlice;
