import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Posts', 'SinglePost'],
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getPosts: builder.query<PostList, number>({
      query: (page) => `posts?_page=${page}`,
      // Only have one cache entry because the arg always maps to one string
      providesTags: (result) =>
      result
        ? [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: 'LIST' },
          ]
        : [{ type: 'Posts', id: 'LIST' }],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
            // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getSinglePost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'SinglePost', id }],
    }),
  }),
});

export const {useGetPostsQuery, useGetSinglePostQuery} = jsonPlaceholderApi


