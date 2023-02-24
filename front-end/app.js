const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mainRouter = require('./Router/mainRouter');
const expressSession = require('express-session');
const cookies = require('cookie-parser');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended : false}));

const sessionConfig = {
    secret: 'askfnkasfnkasn',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        path: '/',
        maxAge: 1000 * 60 * 60 * 24
    }
};
app.use(expressSession(sessionConfig));
app.use(cookies());

app.use('/', mainRouter)

const port = 3002;
app.listen(port, function(){
    console.log(`server started at port ${port}`);
});