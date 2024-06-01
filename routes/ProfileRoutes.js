const express = require('express')
const router = express.Router()
const {addProfile, getAllProfile, getProfileById, updateProfile, deleteProfile} = require('../controllers/ProfileController')
const {protect} = require("../controllers/AuthController")

router.route("/").post(protect, addProfile).get(getAllProfile)
router.route('/:id').get(getProfileById).put(protect, updateProfile).delete(protect, deleteProfile)

module.exports = router