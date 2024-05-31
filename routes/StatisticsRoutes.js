const express = require('express')
const router = express.Router()
const {allStatistics} = require('../controllers/StatisticsController')

router.route("/").get(allStatistics)


module.exports = router