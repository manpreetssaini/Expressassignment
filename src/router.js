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
  next();
});

// Gets all items
router.get('/item/clothing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});


// Gets one item by ID
router.get('/item/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Creates an item
router.post('/item/clothing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Deletes one item by Id

router.delete('/item/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

// Updates one item by ID

router.put('/item/clothing/:id', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
  next();
});

module.exports = router;
