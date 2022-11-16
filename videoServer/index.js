const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { connectToServer } = require('./utilities/dbConnect');
const routerVideo = require('./routes/video.route');

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//* Connect to database
connectToServer((err) => {
    //if no error , then run the app
    if (!err) {
        app.listen(port, () => {
            console.log(`Onnorokom Server is listening on port - ${process.env.PORT}`);
        })
    } else {
        console.log(err);
    }
})


//api route middleware
app.use('/api/v1/video',routerVideo)
