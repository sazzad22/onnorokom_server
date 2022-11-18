const {
  getAllVideoService,
  addAVideoService,
  getOneVideoService,
  updateOneVideoService
  
} = require("../services/video.service");


const getAllVideos = async (req, res, next) => {
  try {
    
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

//gets one video filtered by id
const getOneVideo = async (req, res, next) => {
  try {
    
    const id = req.params.id;
    //sending one video data as response
    console.log("hithere");
    const video = await getOneVideoService(id);

    res.status(200).json({
      status: "Success",
      message: "Data acquired",
      data: video,
    });
  } catch (error) {
    next(error);
  }
};

//adds a video to the videodatabase
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

//updates one video's specific value
const updateOneVideo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await updateOneVideoService(id, req.body);

    res.status(200).json({
      success: true,
      message: `Video () Updated`,
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not updated",
      error: error.message,
    });
  }
};

module.exports = {
  getAllVideos,
  getOneVideo,
  addAVideo,
  updateOneVideo,
};
