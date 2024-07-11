// src/features/weather/WeatherList.js
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import StyledCard  from '../../components/StyledCard';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  day: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
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
      <Typography variant="h5" gutterBottom fontWeight='bold'>
        7-Day Weather Forecast
      </Typography>
      {forecasts.map((forecast, index) => (
         <StyledCard key={index} sx={{marginBottom: 2, padding: 2}}> 
          <Typography variant="subtitle1">{new Date(forecast.date).toLocaleDateString()}</Typography>
          <Stack direction='row' spacing={1}>
            <DeviceThermostatIcon />
            <Typography variant="body1" className={classes.temperature}>
              {Math.round(forecast.temp)}°C
            </Typography>
          </Stack>
          <Typography variant="body2">{forecast.description}</Typography>
        </StyledCard>
      ))}
    </Box>
  );
};

export default WeatherList;
