'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const defaultErrorHandler = require('./middleware/default-error-handle');
const router = require('./router');


const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('./static'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use(defaultErrorHandler);

const port = 3000;
app.listen(port, () => {
  console.log('Express server started on port ${port}');
});
