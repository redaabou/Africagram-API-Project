const express = require('express')
const router = express.Router()
const {allStatistics} = require('../controllers/StatisticsController')
const {allowedTo, protect} = require('../controllers/AuthController')

router.route("/").get(protect, allowedTo(true), allStatistics)


module.exports = router