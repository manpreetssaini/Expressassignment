'use strict';

const express = require('express');
const products = require('./clothing');

const router = express.Router();


// register
router.post('/clothing', (req, res, next) => {
  console.log(req.body);
  next();
});

// login

router.get('/clothing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Gets all items
router.get('/clothing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});


// Gets one item by ID
router.get('/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Creates an item
router.post('/clothing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Deletes one item by Id

router.delete('/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Updates one item by ID

router.put('/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

module.exports = router;
