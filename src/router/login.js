'use strict';

const argon = require('argon2');
const usersdb = require('../db/index.js');


// POST request for login submission

function postLoginRoute(req, res, next) {
  usersdb.usernameExists(req.body.username)

    .then((usernameExists) => {
      if (!usernameExists) {
        return false;
      }
      return usersdb.getUserPasswordHash(req.body.username)
        .then(dbHash => argon.verify(dbHash, req.body.password));
    })

    .then((isValid) => {
      if (!isValid) {
        res
          .status(401)
          .json({ message: 'Authentication failed. Incorrect username or password provided' });
      } else {
        req.session.username = req.body.username;
        res.json({ message: 'Login Successful' });
      }
    });
  next();
}


module.exports = { postLoginRoute: postLoginRoute };
