const express = require('express')
const router = express.Router()
const {addProfile, getAllProfile, getProfileById, updateProfile, deleteProfile} = require('../controllers/ProfileController')

router.route("/").post(addProfile).get(getAllProfile)
router.route('/:id').get(getProfileById).put(updateProfile).delete(deleteProfile)

module.exports = router