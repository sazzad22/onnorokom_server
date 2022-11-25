const mongoose = require("mongoose");
const validator = require('validator');

// Schema design //
const userSchema = mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Please provide a name."],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true,'password is required'],
      validate: {
        validator: (value) => validator.isStrongPassword(value, {
          minLength: 4,
          minLowercase: 1,
          minNumbers: 1,
          minUpperCase: 1,
          minSymbols: 1
        }),
        message:"Password is not strong enough"
      }
    },
    uploadedVideo: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

//from Schema we get data/table Model
//User Model
const User = new mongoose.model("User", userSchema);
// model function will creates a model for 'users' collection in the db

module.exports = User;
