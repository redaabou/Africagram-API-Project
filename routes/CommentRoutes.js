const express = require('express')
const router = express.Router()
const {addComment, getAllComments, updateComment, deleteComment} = require('../controllers/CommentController')
const {protect} = require('../controllers/AuthController')

router.route("/:id").post(protect, addComment).put(protect, updateComment).delete(protect, deleteComment)
router.route('/').get(getAllComments)

module.exports = router