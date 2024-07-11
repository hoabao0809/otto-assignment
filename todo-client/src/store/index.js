import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../api/weatherApi';
import { taskApi } from '../api/taskApi';
import { contactsApi } from '../api/contactApi';

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        weatherApi.middleware, 
        taskApi.middleware,
        contactsApi.middleware
    ),
});

export default store;
