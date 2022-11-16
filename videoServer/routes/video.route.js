const express = require('express');
const videoController = require('../controllers/video.controller');


const router = express.Router();

router
    .route('/')
/**
 * @api {get} /api/v1/video  All videos
 * @apiDescription Gets or loads all the video data
 * @apiPermission all
 
 * @apiSuccess {Object[]}  all the videos
 * 
 * @apiError { Request Timeout 408}server would like to shut down this unused connection
 * @apiError {500 Internal Server Error.} 
*/
    .get(videoController.getAllVideos)
    .post(videoController.addAVideo)



module.exports = router;
