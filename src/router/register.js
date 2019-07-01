'use strict';


const argon2 = require('argon2');
const usersdb = require('../db/users');

/**
 * Form submission
 */
async function postRegisterRoute(req, res, next) {
  try {
    // First we check if the username provided already exists
    const usernameExists = await usersdb.usernameExists(req.body.username);

    const formErrors = {};
    if (!usernameExists && req.body.username) {
      formErrors.username = null;
    } else {
      formErrors.username = 'Invalid username';
    }

    // If there are any errors do not register the user
    if (formErrors.username) {
      res
        .status(400)
        .json({
          message: 'Registeration Failed',
          content: formErrors,
        });
    // Else, the form values are valid
    } else {
      // TODO: Hash the password and call `db.addUser(newUser)`
      // If successful should redirect to `/login`
      const hash = await argon2.hash(req.body.password);
      await usersdb.addUser({
        username: req.body.username,
        password: hash,
      });
      res.json({ message: 'Registeration Successful' });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { post: postRegisterRoute };
