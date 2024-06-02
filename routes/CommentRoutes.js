const express = require('express')
const router = express.Router()
const {addComment, getAllComments, updateComment, deleteComment} = require('../controllers/CommentController')
const {protect} = require('../controllers/AuthController')
const {commentValidator} = require('../middlewares/validators/CommentValidator')

router.route("/:post_id").post(protect,commentValidator, addComment)
router.route('/:id').put(protect, updateComment).delete(protect, deleteComment)
router.route('/').get(getAllComments)

module.exports = router