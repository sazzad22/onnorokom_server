//Require video data model
const Video = require('../models/Video');

//Query service to get all videos from videos collection
exports.getAllVideoService = async () => {
    //collection - videos(newly create if not exits)
    const videos = await Video.find({});
    return videos;
}

//post a video data to video collection
exports.addAVideoService = async (addedVideo) => {
    const result = await Video.create(addedVideo);
    return result;
};



