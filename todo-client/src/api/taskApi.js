import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../utils/axiosBaseQuery';
import { HOST_API } from '../configs/app';

const TODO_TAG = 'Todo';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: axiosBaseQuery({ baseUrl: HOST_API }),
  tagTypes: [TODO_TAG], // Define your tag types here
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '/todos',
        method: 'GET'
      }),
      transformResponse: (response) => response.data, // Transform the response to return data only
      providesTags: (result) => 
        result 
          ? [...result.map(({ id }) => ({ type: TODO_TAG, id })), { type: TODO_TAG, id: 'LIST' }]
          : [{ type: TODO_TAG, id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: '/todos',
        method: 'POST',
        data: newTodo,
      }),
      transformResponse: (response) => response.data, // Transform the response to return data only
      invalidatesTags: [{ type: TODO_TAG, id: 'LIST' }],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...updatedTodo }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        data: updatedTodo,
      }),
      transformResponse: (response) => response.data, // Transform the response to return data only
      invalidatesTags: (result, error, { id }) => [{ type: TODO_TAG, id }, { type: TODO_TAG, id: 'LIST' }],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response) => response.data, // Transform the response to return data only
      invalidatesTags: (result, error, id) => [{ type: TODO_TAG, id }, { type: TODO_TAG, id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = taskApi;
