'use strict';

const express = require('express');
const products = require('./products');
const router = require('./router');

const app = express();


// Add middleware to parse JSON
app.use(express.json());

// Add router as middleware
app.use(router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
