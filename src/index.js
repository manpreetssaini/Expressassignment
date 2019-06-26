'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const defaultErrorHandler = require('./middleware/default-error-handle');

const router = require('./router');


const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(path.resolve('./static/css')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use(defaultErrorHandler);

const port = 3000;
app.listen(port, () => console.log(`Express server started on port ${port}`));
