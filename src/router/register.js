'use strict';


const argon = require('argon2');
const usersdb = require('../db/users.json');

function postRegisterRoute(req, res, next) {
  // First we check if the name provided already exists
  usersdb.usernameExists(req.body.username)
    .then(async (usernameExists) => {
    // check if form values are valid
      const formErrors = {
        username: (!usernameExists && req.body.username) ? null : 'Invalid username',
        password: (req.body.password && req.body.password.lenght >= 6) ? null : 'Invalid passwod',
      };

      // if there are any errors do not register the user
      if (formErrors.username || formErrors.password) {
        res
          .status(400)
          .render('register', {
            username: req.session.username,
            formErrors: formErrors,
            formValues: {
              username: req.body.username,
              password: req.body.password,
            },
          });
        // else form values are valid
      } else {
        const dbHash = await argon.hash(req.body.password);
        const newUser = {
          username: req.body.username,
          password: dbHash,
        };
        usersdb.addUser(newUser);
        res.json({ message: 'Registeration Succesful!' });
      }
    })
    .catch(next);
}
module.exports = { post: postRegisterRoute };
