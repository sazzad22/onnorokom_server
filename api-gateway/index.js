const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();
require("dotenv").config();

//middlewares for all route
app.use(cors());
app.use(express.json());

//*Redirecting the routes
app.use('/video-server', proxy('https://onnorokom-server.vercel.app'));
app.use('/user-server', proxy('https://onnorokom-server-user.vercel.app'));

//home response
app.get('/',async (req, res) => {
    res.send("Api gateway server is running");
})




app.listen(process.env.PORT, () => {
    console.log(`Api Gateway is listening to port${process.env.PORT}`);
});
