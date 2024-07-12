import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API}`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        const query = { ...params };
        if (!params.category) {
          delete query.category;
        }
        if (!params.maxPrice) {
          delete query.maxPrice;
        }
        if (!params.minPrice) {
          delete query.minPrice;
        }

        return { url: `/products`, method: "GET", params: { ...query } };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload.id}`,
        method: "PUT",
        body: payload.data
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } = baseApi;
