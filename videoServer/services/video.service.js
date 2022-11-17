//Require video data model
const { ObjectId } = require("mongodb");
const Video = require("../models/Video");

//Query service to get all videos from videos collection
exports.getAllVideoService = async () => {
  //collection - videos(newly create if not exits)
  const videos = await Video.find({});
  return videos;
};

//query one video that matches the id
exports.getOneVideoService = async (id) => {
  
  const query = { _id: ObjectId(id) };
  const videos = await Video.findOne(query);
  return videos;
};

//post a video data to video collection
exports.addAVideoService = async (addedVideo) => {
  const result = await Video.create(addedVideo);
  return result;
};
