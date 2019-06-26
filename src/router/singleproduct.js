'use strict';

const products = require('../db/products.json');

function getProductById(req, res, next) {
  const found = products.some(product => product.id === (parseInt(req.params.id){

  if (found) {
    res.json(products.filter(product => product.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id} was found` });
  };
  next();
}
};

module.exports = getProductById;
