const express = require('express');
const auth = require('../controllers/auth');
const authRouter= express.Router();

authRouter.
route('/').
get(auth);

module.exports = authRouter;