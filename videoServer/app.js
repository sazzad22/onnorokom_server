const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const routerVideo = require('./routes/video.route');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//api route middleware
app.use('/api/v1/video', routerVideo);

//home response
app.get('/',async (req, res) => {
    res.send("Video server is running");
})



module.exports = app;
