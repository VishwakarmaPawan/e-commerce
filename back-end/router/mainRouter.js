const express = require('express');
const app = express();
const userRouter = require('./userRouter');
const adminRouter = require('./adminRouter');

app.use('/user', userRouter)

app.use('/admin', adminRouter);

module.exports = app;