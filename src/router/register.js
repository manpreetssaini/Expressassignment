'use strict';

const db = require('../db');

// Main page rendering

function getRegisterRoute(req, res) {
  res.render('register', {
    pageId: 'register',
    title: 'Register',
    username: req.session.username,
    formValues: { username: null, password: null },
    formErrors: { username: null, password: null },
  });
}

// Form submission - registeration

function postRegisterRoute(req, res, next) {
  // checking if username already exists
  db.usernameExists(req.body.username)
    .then((usernameExists) => {
    // check if form values are valid
      const formErrors = {
        username: (!usernameExists && req.body.username) ? null : 'Invalid username',
        password: (req.body.password && req.body.password.length >= 5) ? null : 'Invalid password',
      };
      // if errors exists do not register a new user
      if (formErrors.username || formErrors.password) {
        res
          .statu(400)
          .render('register', {
            pageId: 'register',
            title: 'Register',
            username: req.session.username,
            formErrors: formErrors,
            formValues: {
              username: req.body.username,
              password: req.body.password,
            },
          });
      } else {
        db.addUser(newUser);
        res.redirect('/login');
      }
    });
}
