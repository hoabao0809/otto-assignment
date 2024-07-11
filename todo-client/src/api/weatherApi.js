// api/weatherApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../utils/axiosBaseQuery';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../configs/app';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: axiosBaseQuery({ baseUrl: WEATHER_API_URL }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => ({
        url: '/weather',
        method: 'GET',
        params: {
          q: city,
          appid: WEATHER_API_KEY,
        },
      }),
    }),
    getWeatherForecast: builder.query({
      query: ({ lat, lon }) => ({
        url: '/forecast',
        method: 'GET',
        params: {
          lat,
          lon,
          appid: WEATHER_API_KEY,
          units: 'metric',
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery, useGetWeatherForecastQuery } = weatherApi;
