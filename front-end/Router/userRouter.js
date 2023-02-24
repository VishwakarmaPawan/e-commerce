const express = require('express');
const app = express();
const userController = require('../controller/UserController');
const middleware = require('../middleware/middilewere');

app.get('/', middleware.checkbackdoorentry, userController.userHomePage);

app.get('/succesedsignup', middleware.checkbackdoorentry, middleware.checkuserIsFalse, userController.successedSignUp);

app.get('/sign-up', middleware.checkbackdoorentry, userController.signupPage);

app.get('/sign-in', middleware.checkbackdoorentry, userController.loginPage);

app.get('/profile', middleware.checkbackdoorentry, userController.userProfile);

app.get('/games', middleware.checkbackdoorentry, userController.gamespage);

app.get('/picnic', middleware.checkbackdoorentry, userController.picnicpage);

app.get('/activities', middleware.checkbackdoorentry, userController.activities)

app.post('/register', userController.resisterStudent);

app.post('/authentication', userController.signInuser);

module.exports = app;