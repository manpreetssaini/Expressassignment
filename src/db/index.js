'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const productsPath = path.resolve('db/products.json');
const userDbPath = path.resolve('db/users.json');


// reads the db file 'users.json' file
function readUsers() {
  return readFile(userDbPath)
    .then(json => JSON.parse(json));
}

// writing to 'user.json' file

function writeUsers() {
  return writeFile(userDbPath, JSON.stringify(users, null, 2));
}

// Checking if the user already exists or not

function usernameExists(username) {
  return readUsers()
    .then((users) => {
      let exists = false;

      users.forEach((user) => {
        if (user.username === username) {
          exists = true;
        }
      });

      return exists;
    });
}

// Adding a user to the database

function addUser(user) {
  return readUsers()
    .then(users => writeUsers(users.concat(user)));
}

// get user password hash

function getUserPasswordHash(username) {
  return readUsers()
    .then((users) => {
      let match;

      users.forEach((user) => {
        if (user.username === username) {
          match = user;
        }
      });

      if (!match) {
        throw new Error('User does not exist');
      }
      return match.password;
    });
}

// const register = (newUser) => {
//   fs.readFile('./src/db/users.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     else {
//       const users = JSON.parse(data);
//       if (users[Object.keys(newUser)[0]]) {
//         console.log('user already exists');
//         return;
//       }
//       const updatedUsers = { ...users, ...newUser };
//       fs.writeFile('./src/db/users.json', JSON.stringify(updatedUsers, null, 2), 'utf8', () => {
//         if (err) throw err;
//       });
//     }
//   });
// };

// const createProduct = (newProduct) => {
//   fs.readFile('./src/db/product.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     else {
//       const products = JSON.parse(data);
//       if (products[Object.keys(newProduct)[0]]) {
//         console.log('product already exists');
//         return;
//       }
//       const updatedProducts = { ...products, ...newProduct };
//       fs.writeFile('./src/db/product.json', JSON.stringify(updatedProducts, null, 2), 'utf8', () => {
//         if (err) throw err;
//       });
//     }
//   });
// };

function getAllProducts() {
  return readFile(productsPath)
    .then(json => JSON.parse(json));
}

// module.exports.register = register;
// module.exports.createProduct = createProduct;

module.exports = {
  getAllProducts: getAllProducts,
  addUser: addUser,
  getUserPasswordHash: getUserPasswordHash,
};
