const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
const AppError = require("./util/error/appError");
app.use(express.json());
const auth = require('./routes/auth');
app.use('/v1/auth',auth);

app.all("*",(request,response,next)=>{
    const error = new AppError(`Invalid route path "${request.originalUrl}"`,404);
    next(error);
})
//error middleware
app.use(errorMiddleware);

module.exports = app;
