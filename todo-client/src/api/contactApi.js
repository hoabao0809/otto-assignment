import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_API } from '../configs/app';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: HOST_API }),
  endpoints: (builder) => ({
    searchContacts: builder.query({
      query: ({ keySearch, page, limit }) => ({
        url: '/contacts',
        params: { keySearch, page, limit },
      }),
      transformResponse: (response) => response.data, // Transform the response to return data only
      providesTags: (result, error) => [{ type: 'Contact', id: 'LIST' }],
    }),
  }),
});

export const { useSearchContactsQuery } = contactsApi;
