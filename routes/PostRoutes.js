const express = require("express")
const router = express.Router()
const {addPostController,uploadImage,resizeImagePost,getAllPosts} = require("../controllers/PostController")
const {PostValidator} = require("../middlewares/validators/PostValidator")
const {protect} = require("../controllers/AuthController")

router.route("/").post(protect,uploadImage,resizeImagePost,PostValidator,addPostController).get(protect,getAllPosts)
module.exports = router