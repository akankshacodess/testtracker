import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      // get api/cat
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // get labels
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["Transaction"],
    }),

    // add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: /api/transaction
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["Transaction"],
    }),

    // delete record
    deleteTransction: builder.mutation({
      query: (recordId) => ({
        // delete: /api/transaction
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export default apiSlice;
