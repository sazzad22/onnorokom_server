//Require video data model
const Video = require('../models/Video');

exports.getAllVideoService = async () => {
    const videos = await Video.find({});
    return videos;
}