const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const routerUser = require('./routes/user.route');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//api route middleware
app.use('/api/v1/video', routerUser);



module.exports = app;