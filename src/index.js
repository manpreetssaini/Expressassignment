'use strict';

const express = require('express');
const db = require('./db');
const router = require('./router');
const defaultErrorHandler = require('./middleware/default-error-handle');
const app = express();

//app.set('view engine', 'ejs');
//app.use('/static', express.static('static'));
// Add middleware to parse JSON

app.use(express.urlencoded());
app.use(express.json());
app.use(defaultErrorHandler);
// Add router as middleware
app.use(router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
