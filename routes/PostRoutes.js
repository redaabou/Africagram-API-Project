const express = require("express")
const router = express.Router()
const {addPostController,uploadImage,resizeImagePost,getAllPosts} = require("../controllers/PostController")
const {protect} = require("../controllers/AuthController")

router.route("/").post(uploadImage,resizeImagePost,protect,addPostController).get(getAllPosts)

module.exports = router