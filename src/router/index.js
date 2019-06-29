/* eslint-disable radix */

'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const products = require('./../db/products.json');
const registerRoute = require('.././router/register');
const loginRoute = require('.././router/login');
// eslint-disable-next-line camelcase
const products_path = path.join(__dirname, '/../db/products.json');


const router = express.Router();


// creating a route - route gets all product
router.get('/products', (req, res) => res.render('products', { products }));


// new user registeration
router.post('/register', registerRoute.post);

// logging in
router.post('/login', loginRoute.post);

//  get single product

router.get('/db/products/:id', (req, res, next) => {
  const found = products.some(product => product.id === (parseInt(req.params.id)));

  if (found) {
    res.json(products.filter(product => product.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id} was found` });
  }
  next();
});

// create product
router.post('/db/products', (req, res, next) => {
  const newProduct = {
    description: req.body.description,
    name: req.body.name,
    id: req.body.id,
  };

  products.push(newProduct);
  fs.writeFile(products_path, JSON.stringify(products), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.json(products);
    next();
  });
});

// update product by id
router.put('/db/products/:id', (req, res) => {
  const found = products.some(product => product.id === parseInt(req.params.id));

  if (found) {
    const updproduct = req.body;
    products.forEach((product) => {
      if (product.id === parseInt(req.params.id)) {
        product.description = updproduct.description ? updproduct.description : product.description;
        product.name = updproduct.name ? updproduct.name : product.name;
        fs.writeFile(products_path, JSON.stringify(products), (err) => {
          if (err) throw err;
          res.json({ msg: 'product has been updated', product });
        });
      }
    });
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
});

// delete product by id
router.delete('/db/products/:id', (req, res, next) => {
  const found = products.some(product => product.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'Product deleted',
      product: products.filter(product => product.id !== parseInt(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
  next();
});


module.exports = router;
