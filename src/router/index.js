'use strict';

const express = require('express');
const db = require('./../db');
const products = require('../db/products.json');

const router = express.Router();

// router.get('/', productsRoutes.allProducts);

// creating a route - route gets all product
router.get('/', (req, res) => res.json(products));


// registerting a new user
router.post('/register', (req, res, next) => {
  console.log('New registeration in process');
  db.register(req.body);
  res.sendStatus(200);
  next();
});

// logging in
router.post('/login', (req, res, next) => {
  res.sendStatus(200);
  next();
});


// get single product
router.get('/products/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  db.getAllProducts()
    .then((allProducts) => {
      res.json({ [id]: allProducts[id] });
    });
  next();
});

// create product
router.post('/product', (req, res, next) => {
  db.createProduct(req.body);
  res.sendStatus(200);
  next();
});

// update product
router.put('/product/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});

// delete product
router.delete('/product/:id', (req, res, next) => {
  res.sendStatus(200);
  next();
});


module.exports = router;
