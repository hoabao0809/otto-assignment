# HelloWorld Web App in React.js

This project is a HelloWorld web application built in React.js. It includes a to-do list feature, a weather forecast page that retrieves real-time weather data using an open-source weather API and a contact page to search for data from Appendix I.

## Screenshots

### Todo List

![Todo List screenshot](./todo-client/public/todolist.png)

<br/>
<br/>

With **To-do List** users can add, edit, remove, and complete any items.

<br/>
<br/>

### Weather Forecast
![Weather Forecast screenshot](./todo-client/public/weather-forecast.png)

With **Weather Forecast**, users can input a city/location and observe real-time weather forecast for the coming 7 days.

<br/>
<br />

### Contact List

![Contact List screenshot](./todo-client/public/contact.png)

With **Contact List**, users can search for contact information, which are extracted from .csv files (Appendix I).

<br/>
<br/>

## Server Built with Node.js

The server component of this application is built with Node.js. It provides the following APIs:

### APIs

1. **Todo CRUD Operations**
   - Endpoint: `/api/todos`
   - Functionality: Create, Read, Update, and Delete todo items.

2. **Search for Contacts**
   - Endpoint: `/api/contacts`
   - Functionality: Search for contact information stored in MongoDB.

### Scripts
1. **A Script to parse CSV file and Save data to MongoDB**
   - Functionality: Parse CSV files containing contact information and save the data to MongoDB.
   - Navigate to the todo-backend directory and run the command `node import-contacts.script.js`.

## ✨ Getting Started

- Make sure you already have `Node.js` and `npm` installed in your system.
- You need an API key from [OpenWeatherMap](https://openweathermap.org/). After creating an account, [grab your key](https://home.openweathermap.org/api_keys).
- Then, in the `.env` file, replace `REACT_APP_WEATHER_API_KEY` with your OpenWeatherMap API Key.

<br/>

## ⚡ Install

- Clone the repository:

```bash
git clone https://github.com/hoabao0809/otto-assignment.git

```

- Install the packages using the command `npm install`

<br/>

## 📙 Used libraries

- `react-js`
- `material-ui`

Check `packages.json` for details

<br/>

<br/>
Thank You ☺
