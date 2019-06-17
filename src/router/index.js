'use strict';

const express = require('express');
const db = require('./../db');
const products = require('./products');

const router = express.Router();

// router.get('/', productsRoutes.allProducts);

// creating a route - route gets all productss
router.get('/', (req, res) => res.json(products));

router.post('/register', (req, res, next) => {
  console.log('New registeration in process');
  db.register(req.body);
  res.sendStatus(200);
  next();
});

router.post('/login', (req, res, next) => {
  res.sendStatus(200);
  next();
});


// get single product
router.get('/:id', (req, res) => {
  const found = products.some(product => product.id === parseInt(req.params.id));

  if (found) {
    res.json(products.filter(product => product.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
});


// create product

router.post('/', (req, res) => {
  const newproducts = {
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newproducts.name || !newproducts.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  product.push(newproducts);
  // res.json(productss);
  res.redirect('/');
});

// update products

router.put('/:id', (req, res) => {
  const found = productss.some(products => products.id === parseInt(req.params.id));

  if (found) {
    const updproducts = req.body;
    productss.forEach((products) => {
      if (products.id === parseInt(req.params.id)) {
        products.name = updproducts.name ? updproducts.name : products.name;
        products.email = updproducts.email ? updproducts.email : products.email;

        res.json({ msg: 'products has been updated', products });
      }
    });
  } else {
    res.status(400).json({ msg: `No products with the id of ${req.params.id}` });
  }
});


// Delete products

router.delete('/:id', (req, res) => {
  const found = productss.some(products => products.id === parseInt(req.params.id));

  if (found) {
    res.json({ msg: 'products deleted', productss: productss.filter(products => products.id !== parseInt(req.params.id)) });
  } else {
    res.status(400).json({ msg: `No products with the id of ${req.params.id}` });
  }
});


module.exports = router;
