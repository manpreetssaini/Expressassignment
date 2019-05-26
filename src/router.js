'use strict';

const express = require('express');
const db = require('./db');

const router = express.Router();


// register
router.post('/register', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// login

router.post('/login', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Gets all items
router.get('/allproducts', (req, res, next) => {
  res.sendStatus(200);
  next();
});


// Gets one item by ID
router.get('/item/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Creates an item
router.post('/create', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Deletes one item by Id

router.delete('/delete/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Updates one item by ID

router.put('/update/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

module.exports = router;
