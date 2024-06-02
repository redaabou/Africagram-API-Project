const express = require('express')
const router = express.Router()
const {addComment, getAllComments, updateComment, deleteComment} = require('../controllers/CommentController')
const {protect} = require('../controllers/AuthController')
const {commentValidator} = require('../middlewares/validators/CommentValidator')
const {PostMiddel} = require('../middlewares/postMiddeleawre')

router.route("/:post_id").post(protect,PostMiddel, commentValidator, addComment)
router.route('/:id').put(protect, updateComment).delete(protect, deleteComment)
router.route('/').get(getAllComments)

module.exports = router