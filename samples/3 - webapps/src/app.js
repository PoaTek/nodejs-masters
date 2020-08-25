const express = require('express');

const app = express();

const users = require('./controllers/user.controller.js');

// UserController routes
app.use(users);

app.listen(8000,  () => { console.log("The server is up and running") });