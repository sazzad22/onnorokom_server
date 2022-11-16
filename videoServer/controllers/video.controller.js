const { getAllVideoService } = require("../services/video.service");
const { getDb } = require("../utilities/dbConnect");

const getAllVideos = async (req, res, next) => {
    try {
        // const db = getDb();
        // const videoCollection = db.collection('videoCollection');
        // //gets all videos in the result
        // const result = await videoCollection.find({}).toArray();
        //sending the video data as response

        const videos = await getAllVideoService();
        
        res.status(200).json({
            status: "Success",
            message: "Data acquired",
            data: products,
        });
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllVideos
}