'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./router');
const defaultSessionValues = require('./middleware/default-session-values');
const authentication = require('./middleware/authentication');
const defaultErrorHandler = require('./middleware/default-error-handle');

// creating an instance for the express application
const app = express();

// setting view to ejs

app.set('view engine', 'ejs');

// applying middleware

// using static/css to open static assets
app.use('/static/css  ', express.static(path.resolve('./static/css')));

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET, // used to cryptographically sign the session id
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true, // making cookie inaccessible to the client side js
    maxAge: 7200000, // cookie will expire in 2 hrs
  },
}));

// Middleware to prepare default values for sessions
app.use(defaultSessionValues);

// Parse all incoming <form> data into an object we can access in our routes with req.body
app.use(express.urlencoded({ extended: true }));

// Apply router
app.use(router);

// ensure user is logged in
app.use(authentication);

// Calls the next function serves a page for 500 errors
app.use(defaultErrorHandler);

const port = 3000;
app.listen(port, () => console.log(`Express server started on port ${port}`));
