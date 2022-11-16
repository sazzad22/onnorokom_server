const {
  getAllVideoService,
  addAVideoService,
} = require("../services/video.service");
const { getDb } = require("../utilities/dbConnect");

const getAllVideos = async (req, res, next) => {
  try {
    // const db = getDb();
    // const videoCollection = db.collection('videoCollection');
    // //gets all videos in the result
    // const result = await videoCollection.find({}).toArray();
    //sending the video data as response
    console.log("hithere");
    const videos = await getAllVideoService();

    res.status(200).json({
      status: "Success",
      message: "Data acquired",
      data: videos,
    });
  } catch (error) {
    next(error);
  }
};

const addAVideo = async (req, res) => {
  try {
    const result = await addAVideoService(req.body);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add data",
      error: error.message,
    });
  }
};

module.exports = {
    getAllVideos,
    addAVideo,
};
