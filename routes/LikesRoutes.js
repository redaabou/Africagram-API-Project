const express = require("express")
const router = express.Router()
const {likePost} = require("../controllers/LikesController")
const {protect} = require("../controllers/AuthController")
const {LikeValidator} = require("../middlewares/validators/LikeValidator")
const {PostMiddel} = require("../middlewares/postMiddeleawre")

router.route("/:post_id").post(protect,LikeValidator,PostMiddel,likePost)
module.exports = router
 