'use strict';

// Applies default session values

module.exports = function loginMiddleware(req, res, next) {
  // If username is undefined assume session has not be set at all
  if (req.session.username === undefined) {
    req.session.username = null;
  }
  next();
};
