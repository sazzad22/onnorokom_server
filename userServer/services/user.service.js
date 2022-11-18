const User = require('../models/User');


// Query service to get all users
exports.getAllUserService = async () => {
    //collection - users(newly create if not exits)
    const users = await User.find({});
    return users;
  };