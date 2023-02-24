const express = require('express');
const app = express();
const userController = require('../controller/UserController');

app.post('/', userController.insertUser);

app.post('/login', userController.loginuser);

app.get('/', userController.getUserdeteals);

app.get('/all-user', userController.getalluser);

app.get('/single-user/:userID', userController.getSingleUser)

module.exports = app;