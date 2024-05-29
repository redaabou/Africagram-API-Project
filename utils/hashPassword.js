const bcrypt = require("bcryptjs")

exports.hashPassword = hashPass=> bcrypt.hashSync(hashPass , 10)