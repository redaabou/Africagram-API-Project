const express = require('express')
const router = express.Router()
const { addFollower, getAllFollwer, deleteFollower } = require('../controllers/FollowerController');

router.route("/").post(addFollower).get(getAllFollwer)
router.route("/:id").delete(deleteFollower)

module.exports = router