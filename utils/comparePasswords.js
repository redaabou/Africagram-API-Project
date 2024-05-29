const bcrypt = require("bcryptjs")

exports.comparePass = (reqBody,oneUser) => bcrypt.compare(reqBody ,oneUser)