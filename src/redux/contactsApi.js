import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['contacts'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://6278da586ac99a91065e1eae.mockapi.io' 
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: (result) => result
              ? [
                  ...result.map(({ id }) => ({ type: 'contacts', id })),
                  { type: 'contacts', id: 'LIST' },
                ]
              : [{ type: 'contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: ({name, phone}) => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name: `${name}`,
          phone: `${phone}`,
        },
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
  }), 
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
