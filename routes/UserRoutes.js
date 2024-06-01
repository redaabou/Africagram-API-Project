const express = require('express')
const router = express.Router()
const {AddUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/UserController')
const {userValidator} = require('../middlewares/validators/UserValidator')
const {allowedTo, protect} = require('../controllers/AuthController')

router.route('/').post(protect, allowedTo(true), userValidator, AddUser).get(protect, allowedTo(true), getAllUsers)
router.route('/:id').put(protect, allowedTo(true), updateUser).get(protect, allowedTo(true), getUserById).delete(protect, allowedTo(true), deleteUser)

module.exports = router;