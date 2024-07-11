// src/features/weather/WeatherContainer.js
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import WeatherDetail from './WeatherDetail';
import WeatherList from './WeatherList';
import { ContainerBox } from '../../components/styledComponents';
import { useGetWeatherQuery, useGetWeatherForecastQuery } from '../../api/weatherApi';

const WeatherContainer = () => {
  const [city, setCity] = useState('Ho Chi Minh City');
  const { data: currentDayWeather, isLoading, error, refetch } = useGetWeatherQuery(city);
  const { data: weatherForecast, isLoading: isForecastLoading, error: forecastError, refetch: refetchForecast } = useGetWeatherForecastQuery({
    lat: currentDayWeather?.coord?.lat,
    lon: currentDayWeather?.coord?.lon,
  });

  useEffect(() => {
    refetch();
  }, [city, refetch]);

  useEffect(() => {
    if (currentDayWeather?.coord?.lat && currentDayWeather?.coord?.lon) {
      refetchForecast();
    }
  }, [currentDayWeather?.coord?.lat, currentDayWeather?.coord?.lon, refetchForecast]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <ContainerBox>
      <SearchBar onSearch={handleSearch} defaultCity={city} />
      {error && !currentDayWeather && (
        <Box mt={2}>
          <Typography variant="h6" color="error">
            Failed to fetch current day weather data: {error.message}
          </Typography>
        </Box>
      )}
      {!error && !isLoading && currentDayWeather && (
        <Box>
          <WeatherDetail weather={currentDayWeather} />
          {forecastError && !weatherForecast && (
            <Box mt={2}>
              <Typography variant="h6" color="error">
                Failed to fetch weather forecast data: {forecastError.message}
              </Typography>
            </Box>
          )}
          {!forecastError && !isForecastLoading && weatherForecast && (
            <WeatherList forecasts={weatherForecast.list.slice(1, 7)} /> // Slice to get the next 6 days' data excluding the current day
          )}
          {isForecastLoading && (
            <Box mt={2}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      )}
      {isLoading && (
        <Box mt={2}>
          <CircularProgress />
        </Box>
      )}
    </ContainerBox>
  );
};

export default WeatherContainer;
