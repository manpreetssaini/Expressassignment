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
router.get('/clothing', (req, res, next) => {
  res.sendStatus(200);
  next();
});


// Gets one item by ID
router.get('/clothing/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Creates an item
router.post('/clothing/create', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Deletes one item by Id

router.delete('/clothing/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// Updates one item by ID

router.put('/clothing/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

module.exports = router;
