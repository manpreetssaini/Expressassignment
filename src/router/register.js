'use strict';

const argon = require('argon2');
const usersdb = require('../db');


// Form submission - registeration

function postRegisterRoute(req, res, next) {
  // checking if username already exists
  usersdb.usernameExists(req.body.username)
    .then((usernameExists) => {
      console.log(req.body, usernameExists);
      // check if form values are valid
      const formErrors = {
        username: (!usernameExists && req.body.username) ? null : 'Invalid username',
        password: (req.body.password && req.body.password.length >= 6) ? null : 'Invalid password',
      };

      // if errors exists do not register a new user
      if (formErrors.username || formErrors.password) {
        res
          .status(400)
          .json({
            message: ' User registeration has failed',
            formErrors: formErrors,
          });
      } else {
        return argon.hash(req.body.password)
          .then((dbHash) => {
            const newUser = {
              username: req.body.username,
              password: dbHash,
            };

            return usersdb.addUser(newUser);
          })
          .then(() => {
            res.json({ message: `User, ${req.body.username}, Registeration Successful` });
          });
      }
    }) (next);
}

module.exports = { postRegisterRoute: postRegisterRoute };
