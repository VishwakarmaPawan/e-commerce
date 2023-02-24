const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const mainRouter = require('./router/mainRouter');

app.use(bodyparser.urlencoded({ extended : false }));
app.use(bodyparser.json());

app.use('/', mainRouter)

const port = process.env.PORT;
app.listen(port, function(){
    console.log(`server started at port ${port}`);
});