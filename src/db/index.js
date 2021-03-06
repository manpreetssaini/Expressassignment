'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

const productsPath = path.resolve('db/products.json');

const register = (newUser) => {
  fs.readFile('./src/db/users.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const users = JSON.parse(data);
      if (users[Object.keys(newUser)[0]]) {
        console.log('user already exists');
        return;
      }
      const updatedUsers = { ...users, ...newUser };
      fs.writeFile('./src/db/users.json', JSON.stringify(updatedUsers, null, 2), 'utf8', () => {
        if (err) throw err;
      });
    }
  });
};

const createProduct = (newProduct) => {
  fs.readFile('./src/db/product.json', 'utf8', (err, data) => {
    if (err) throw err;
    else {
      const products = JSON.parse(data);
      if (products[Object.keys(newProduct)[0]]) {
        console.log('product already exists');
        return;
      }
      const updatedProducts = { ...products, ...newProduct };
      fs.writeFile('./src/db/product.json', JSON.stringify(updatedProducts, null, 2), 'utf8', () => {
        if (err) throw err;
      });
    }
  });
};

function getAllProducts() {
  return readFile(productsPath)
    .then(json => JSON.parse(json));
}

module.exports.register = register;
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
