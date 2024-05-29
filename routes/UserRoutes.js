const express = require('express')
const router = express.Router()
const {AddUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../controllers/UserController')

router.route('/').post(AddUser).get(getAllUsers)
router.route('/:id').put(updateUser).get(getUserById).delete(deleteUser)

module.exports = router;