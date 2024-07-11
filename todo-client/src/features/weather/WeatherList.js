// src/features/weather/WeatherList.js
import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  day: {
    marginBottom: theme.spacing(1),
  },
  temperature: {
    fontWeight: 'bold',
  },
}));

const WeatherList = ({ forecasts }) => {
  const classes = useStyles();

  if (!forecasts || forecasts.length === 0) return null;

  return (
    <Box className={classes.root}>
      <Typography variant="h5">6-Day Weather Forecast</Typography>
      {forecasts.map((forecast, index) => (
        <Box key={index} className={classes.day}>
          <Typography variant="subtitle1">{new Date(forecast.dt * 1000).toLocaleDateString()}</Typography>
          <Typography variant="body1" className={classes.temperature}>
            {Math.round(forecast.main.temp_min)}°C - {Math.round(forecast.main.temp_max)}°C
          </Typography>
          <Typography variant="body2">{forecast.weather[0].description}</Typography>
          <Divider style={{ margin: '10px 0' }} />
        </Box>
      ))}
    </Box>
  );
};

export default WeatherList;
