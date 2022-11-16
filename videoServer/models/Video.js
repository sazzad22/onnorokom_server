const mongoose = require("mongoose");

// Schema design //
const videoSchema = mongoose.Schema({
  link: {
    type: String,
    required: [true, "Please provide a link for this video."],
  },
  likeCount: {
    type: Number,
    required: true,
    min: [0, "LikeCount cannot be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) return true;
        else return false;
      },
    },
    message: "LikeCount must be an integer",
  },
  dislikeCount: {
    type: Number,
    required: true,
    min: [0, "DislikeCount cannot be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) return true;
        else return false;
      },
    },
    message: "DislikeCount must be an integer",
  },

  viewCount: {
    type: Number,
    required: true,
    min: [0, "ViewCount cannot be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) return true;
        else return false;
      },
    },
    message: "viewCount must be an integer",
  },
  userLiked: {
    type: Array,
  },
  userDisliked: {
    type: Array,
  },
  uploaderEmail: {
      type: String,
      required: [true, "Please provide an uploader email for this video."],
      minLength: [5, "Uploader email must be atleast 3 characters"],
  },
});

//from Schema we get data/table Model
//Video Model
const Video = new mongoose.model("Video", videoSchema);
// model function will creates a model for 'video' collection in the db

module.exports = Video;

