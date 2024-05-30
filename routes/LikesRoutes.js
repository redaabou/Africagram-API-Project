const express = require("express")
const router = express.Router()
const {likePost} = require("../controllers/LikesController")
const {protect} = require("../controllers/AuthController")

router.route("/:postId").post(protect,likePost)
module.exports = router
 