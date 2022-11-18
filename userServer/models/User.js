const mongoose = require("mongoose");

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
      required: true,
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
