const express = require('express');
const uploader = require('../../Middleware/FileUpload/uploader');
const { generateVCard, registerUser, loginUser } = require('./user.controller');
const router = express.Router();


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route('/generateVCard').post(uploader.single('image'),generateVCard)

module.exports = router