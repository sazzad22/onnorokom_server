
const { ObjectId } = require('mongodb');
const fetch = require('node-fetch');
const User = require('../models/User');
const jwt = require('jsonwebtoken');



// Query service to get all users
exports.getAllUserService = async () => {
    //collection - users(newly create if not exits)
    const users = await User.find({});
    //fetch video data
    // const response = await fetch('https://onnorokom-server.vercel.app/api/v1/video');
    // const data = await response.json();
  
    

    return [users];
};
//post a user data to users collection
exports.addOneUserService = async (addedUser) => {
  //* generate token
  const token = jwt.sign({ email: addedUser.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '99999h' })
  const result = await User.create(addedUser);
  return [result,token];
};

//update user field
exports.updateOneUserService = async (email, link) => {
  const updatedData = {
    uploadedVideo: link
  }
  const result = await User.updateOne({ email: email }, { $push: updatedData });
  
 
  return result;
};


//query one user that matches the id
exports.getOneUserService = async (email) => {
  const query = { email:email };
  const user = await User.findOne(query);
  console.log(query,user);
  return user;
};