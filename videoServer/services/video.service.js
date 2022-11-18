const fetch = require('node-fetch');
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
  //post the video link to the user by fetch(patch)
  const body = {
    email: addedVideo?.uploaderEmail,
    link:addedVideo.link
  };
  const response = await fetch("http://localhost:8000/api/v1/user", {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  console.log(body,data);

  return result;
};

//update video data - whichever field is update
exports.updateOneVideoService = async (id, updatedData) => {
  const result = await Video.updateOne({ _id: id }, { $set: updatedData });
  const query = { _id: ObjectId(id) };
  result.video = await Video.findOne(query);
  return result;
};
