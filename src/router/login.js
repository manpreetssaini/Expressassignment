'use strict';

const argon = require('argon2');
const usersdb = require('.././db/users.json');


// POST request for login form submission

function postLoginRoute(req, res, next) {
  usersdb.usernameExists(req.body.username)

    // Validate
    .then((usernameExists) => {
      // login is not valid if username does not exist
      if (!usernameExists) {
        return false;
      }
      // if the username exists verify if the password is correct
      return usersdb.getUserPasswordHash(req.body.username)
        .then(dbHash => argon.verify(dbHash, req.body.password));
    })

    // render upon failure
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


module.exports = { post: postLoginRoute };
