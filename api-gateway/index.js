const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//*Redirecting the routes
app.use('/video-server', proxy('http://localhost:5000'));
app.use('/user-server', proxy('http://localhost:8000'));



app.listen(process.env.PORT, () => {
    console.log(`Api Gateway is listening to port${process.env.PORT}`);
});