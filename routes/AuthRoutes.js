const {Login,SingUp} = require("../controllers/AuthController")
const express = require("express")
const router = express.Router()

router.route("/login").post(Login)
router.route("/signup").post(SingUp)

module.exports = router