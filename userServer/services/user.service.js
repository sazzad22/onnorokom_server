
const fetch = require('node-fetch');
const User = require('../models/User');


// Query service to get all users
exports.getAllUserService = async () => {
    //collection - users(newly create if not exits)
    const users = await User.find({});
    //fetch video data 
    const response = await fetch('https://onnorokom-server.vercel.app/api/v1/video');
    const data = await response.json();
    

    return [users,data];
  };