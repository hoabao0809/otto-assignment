import React, { useState, useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import { ContainerBox } from '../../components/styledComponents';
import { useGetWeatherQuery, useGetWeatherForecastQuery } from '../../api/weatherApi';
import { getWeekForecastWeather } from '../../utils/data-utils';

const WeatherContainer = () => {
  const [city, setCity] = useState('Ho Chi Minh City'); // Default city
  const { data: currentDayWeather, isFetching: isFetchingWeather, error } = useGetWeatherQuery(city);

  // Fetch 6-day weather forecast based on current day's coordinates, only if currentDayWeather is available
  const isSkipFetching = !currentDayWeather?.coord?.lat || !currentDayWeather?.coord?.lon
  const { data: weatherForecast, isFetching: isForecastLoading, error: forecastError } = useGetWeatherForecastQuery({
    lat: currentDayWeather?.coord?.lat,
    lon: currentDayWeather?.coord?.lon,
    
  }, {
    skip: isSkipFetching // Skip the query if currentDayWeather is not available
  });

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const transformWeatherForecast = useMemo(() => {
    return getWeekForecastWeather(weatherForecast?.list)
  }, [weatherForecast])

  const isFetching = isFetchingWeather || isForecastLoading

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
        {isFetching && (
        <Box mt={2}>
          <CircularProgress />
        </Box>
      )}
      {!error && !isFetching && currentDayWeather && (
        <Box>
          {forecastError && !weatherForecast && (
            <Box mt={2}>
              <Typography variant="h6" color="error">
                Failed to fetch weather forecast data: {forecastError.message}
              </Typography>
            </Box>
          )}
          { weatherForecast && (
            <WeatherList forecasts={transformWeatherForecast} /> // Slice to get the next 6 days' data excluding the current day
          )}
        </Box>
      )}
    
    </ContainerBox>
  );
};

export default WeatherContainer;
