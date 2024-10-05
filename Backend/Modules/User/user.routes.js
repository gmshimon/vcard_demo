const express = require('express');
const uploader = require('../../Middleware/FileUpload/uploader');
const { generateVCard } = require('./user.controller');
const router = express.Router();

router.route('/generateVCard').post(uploader.single('image'),generateVCard)

module.exports = router