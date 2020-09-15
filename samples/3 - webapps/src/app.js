const express = require('express');

const app = express();
const helmet = require("helmet");


const users = require('./controllers/user.controller.js');
const logger = require('./middlewares/logger.middleware');

app.use(helmet());
app.use(logger());

app.use(users);

app.listen(8000,  () => { console.log("The server is up and running") });