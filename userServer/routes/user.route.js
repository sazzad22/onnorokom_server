const express = require('express');
const userController = require('../controllers/user.controllers');

const router = express.Router();

router
    .route('/')
/**
 * @api {get} /api/v1/user  All users
 * @apiDescription Gets or loads all the user data
 * @apiPermission all
 */
    .get(userController.getAllUsers)


module.exports = router;

