const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
const compression = require('compression');

dotenv.config();

const app = express();
app.use(cors());

//! init middlewares
app.use(morgan('dev')); //* app.use(morgan('combined'));
app.use(helmet()); //* hide headers, avoid exposing sententive data
app.use(compression()); //* reduce payload sizei in response
app.use(express.json()); //* parse json
app.use(express.urlencoded({
  extended: true
})); //* parse urlencoded
//! end init middleware

//! init database
const database = require('./databases/init.mongodb');
const {
  checkOverload
} = require('./helpers/check.connect');
const httpStatusCode = require('./utils/httpStatusCode.js');
// checkOverload();
//! end init database

//! init routes
app.use('/', require('./routes/index.js'))
//! end init routes

//! handle error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = httpStatusCode.StatusCodes.NOT_FOUND;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || httpStatusCode.StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({
    status: 'error',
    code: error.status || httpStatusCode.StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || httpStatusCode.ReasonPhrases.INTERNAL_SERVER_ERROR,
    errors: error.errors || null,
    stack: error.stack
  });
});
//! end handle error

module.exports = app;
