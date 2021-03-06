'use strict';

const db = require('../db');

function allProducts(req, res, next) {
  db.getAllProducts()
    .then((products) => {
      res.render('products', {
        name: 'All Products',
        products: products,
      });
      next();
    });
}

module.exports = { allProducts: allProducts };
