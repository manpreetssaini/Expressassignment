'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const productsPath = path.resolve('db/products.json');
const userDbPath = path.resolve('db/users.json');


// reads the db file 'users.json' file and parses its JSON
function readUsers() {
  return readFile(userDbPath)
    .then(json => JSON.parse(json));
}

// writing to 'user.json' file

function writeUsers(users) {
  return writeFile(userDbPath, JSON.stringify(users, null, 2));
}

/** Checking if the user already exists or not
 * @param {string} username
 * @returns {promise<boolean>} whether a user exists or not
*/

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

/**
 * Adds user to the database
 * @param {object} user
 * @returns {promise<undefined>}
 */

function addUser(user) {
  return readUsers()
    .then(users => writeUsers(users.concat(user)));
}

/**
 * get user password hash
 * @param {string} username
 * @returns{Promise<string>}
*/

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


function getAllProducts() {
  return readFile(productsPath)
    .then(json => JSON.parse(json));
}

module.exports = {
  getAllProducts: getAllProducts,
  usernameExists: usernameExists,
  addUser: addUser,
  getUserPasswordHash: getUserPasswordHash,
};
