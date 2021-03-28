const express = require('express');
const app = express();
app.use(express.json());
const auth = require('./routes/auth');
app.use('/v1/auth',auth);
module.exports = app;