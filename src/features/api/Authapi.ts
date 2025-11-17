import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface UserInfo {
  _id: number
  firstName: string
  lastName: string
  user_type: string
  email: string
}

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: (builder) => ({

    // User Registration
    register: builder.mutation<{ message: string }, { 
      firstName: string; 
      lastName: string; 
      email: string; 
      phone: string; 
      password: string;
      confirmPassword: string;
    }>({
      query: (userInfo) => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),

    // User Login
    login: builder.mutation<{ 
      message: string; 
      token: string; 
      userInfo: UserInfo 
    }, { 
      email: string; 
      password: string 
    }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
} = AuthApi