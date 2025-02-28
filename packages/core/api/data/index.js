import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, tenantId, baseUrl } from "@foodtruck/api/data/secrets";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  endpoints: (builder) => ({
    // MENU ENDPOINTS
    getMenu: builder.query({
      query: () => ({
        url: "/menu",
        method: "GET",
        headers: {
          "x-zocom": `${apiKey}`,
        },
      }),
    }),

    getMenuItem: builder.query({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "GET",
        headers: {
          "x-zocom": `${apiKey}`,
        },
      }),
    }),

    // ORDER ENDPOINTS
    placeOrder: builder.mutation({
      query: (items) => ({
        url: "/${tenantId}/orders",
        method: "POST",
        headers: {
          "x-zocom": `${apiKey}`,
          "Content-Type": "application/json",
        },
        body: { items },
      }),
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/${tenantId}/orders/${id}`,
        method: "GET",
        headers: {
          "x-zocom": `${apiKey}`,
        },
      }),
    }),

    // RECEIPT ENDPOINTS
    getReceiptById: builder.query({
      query: (id) => ({
        url: `/receipts/${id}`,
        method: "GET",
        headers: {
          "x-zocom": `${apiKey}`,
        },
      }),
    }),
  }),
});

export const {
  useGetMenuQuery,
  useGetMenuItemQuery,
  usePlaceOrderMutation,
  useGetOrderByIdQuery,
  useGetReceiptByIdQuery,
} = apiSlice;
