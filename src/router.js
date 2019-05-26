'use strict';

const express = require('express');
const products = require('./products');

const router = express.Router();


// register
router.post('/products', (req, res, next) => {
  console.log(req.body);
  next();
});

// login

router.get('/products', (req, res, next) => {
  console.log(req.body);
  next();
});

// Gets all items
router.get('/item/products', (req, res, next) => {
  res.sendStatus(200);
  next();
});


// Gets one item by ID
router.get('/item/products/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Creates an item
router.post('/item/products', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Deletes one item by Id

router.delete('/item/products/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Updates one item by ID

router.put('/item/products/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

module.exports = router;
